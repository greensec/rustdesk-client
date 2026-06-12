document.addEventListener('DOMContentLoaded', function () {
  const encoded = window.RUSTDESK_CONFIG?.encoded_string || '';
  const qrContainer = document.getElementById('qrcode');

  if (encoded && qrContainer && typeof QRCode !== 'undefined') {
    qrContainer.innerHTML = '';
    qrContainer.setAttribute('aria-label', 'QR code for the RustDesk server configuration');
    new QRCode(qrContainer, {
      text: encoded,
      width: 200,
      height: 200,
      colorDark: '#1e293b',
      colorLight: '#ffffff',
      correctLevel: QRCode.CorrectLevel.M
    });
  } else if (qrContainer) {
    qrContainer.innerHTML = '<p style="color:#64748b">No config available.</p>';
  }

  enhanceDownloadLinks();

  // Copy buttons
  document.querySelectorAll('[data-copy]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      const targetSel = btn.getAttribute('data-copy');
      const target = document.querySelector(targetSel);
      if (!target) return;
      const text = target.value || target.textContent || '';
      if (!text.trim()) {
        showToast('No config available to copy.');
        return;
      }

      copyText(text).then(function () {
        showToast('Copied to clipboard!');
      }).catch(function () {
        showToast('Copy failed. Select the text and copy it manually.');
      });
    });
  });

  // Detect user platform and highlight matching card without moving the viewport.
  const platform = detectPlatform();
  if (platform) {
    const card = document.querySelector('[data-platform="' + platform + '"]');
    if (card) {
      card.classList.add('is-detected');
      const label = card.querySelector('.detected-label');
      if (label) label.hidden = false;
    }
  }
  updateRecommendedDownload(platform);
});

function detectPlatform() {
  const ua = navigator.userAgent;

  // Android user agents usually also contain "Linux", so check Android first.
  if (/Android/i.test(ua)) return 'android';
  if (/iPhone|iPad|iPod/i.test(ua)) return 'ios';
  if (/Mac/i.test(ua) && navigator.maxTouchPoints > 1) return 'ios';
  if (/Win/i.test(ua)) return 'windows';
  if (/Mac/i.test(ua)) return 'macos';
  if (/Linux/i.test(ua)) return 'linux';

  return '';
}

function enhanceDownloadLinks() {
  document.querySelectorAll('.download-link').forEach(function (link) {
    const assetName = link.getAttribute('data-asset-name') || link.textContent.trim();
    const label = getAssetLabel(assetName);

    link.textContent = '';

    const title = document.createElement('span');
    title.className = 'download-title';
    title.textContent = label.title;

    const meta = document.createElement('span');
    meta.className = 'download-meta';
    meta.textContent = assetName;

    link.appendChild(title);
    link.appendChild(meta);
  });
}

function getAssetLabel(assetName) {
  const name = assetName.toLowerCase();

  if (name.includes('windows')) {
    return {
      title: 'Windows portable app',
      description: 'Portable 64-bit build for Windows. No installer step required.'
    };
  }

  if (name.endsWith('.appimage')) {
    return {
      title: 'Linux AppImage',
      description: 'Recommended for many x86_64 Linux desktops. Download, make executable, and run.'
    };
  }

  if (name.endsWith('.deb')) {
    return {
      title: 'Ubuntu / Debian package',
      description: 'Use this on Debian, Ubuntu, Linux Mint, and compatible distributions.'
    };
  }

  if (name.includes('suse') && name.endsWith('.rpm')) {
    return {
      title: 'openSUSE RPM package',
      description: 'Use this RPM package on openSUSE-based systems.'
    };
  }

  if (name.endsWith('.rpm')) {
    return {
      title: 'Fedora / RHEL RPM package',
      description: 'Use this on Fedora, Red Hat Enterprise Linux, Rocky, AlmaLinux, and compatible distributions.'
    };
  }

  if (name.endsWith('.flatpak')) {
    return {
      title: 'Linux Flatpak bundle',
      description: 'Use this if your desktop workflow prefers Flatpak packages.'
    };
  }

  if (name.includes('arm64-v8a') && name.endsWith('.apk')) {
    return {
      title: 'Android APK for most phones',
      description: 'Recommended for most modern Android phones and tablets.'
    };
  }

  if (name.includes('armeabi-v7a') && name.endsWith('.apk')) {
    return {
      title: 'Android APK for older 32-bit devices',
      description: 'Use this only for older Android devices that do not support 64-bit apps.'
    };
  }

  if (name.includes('x86_64') && name.endsWith('.apk')) {
    return {
      title: 'Android APK for emulator / x86_64',
      description: 'Use this for Android emulators or x86_64 Android devices.'
    };
  }

  if ((name.includes('aarch64') || name.includes('arm64')) && name.endsWith('.dmg')) {
    return {
      title: 'macOS DMG for Apple Silicon',
      description: 'Use this for Macs with M1, M2, M3, M4, or newer Apple Silicon chips.'
    };
  }

  if (name.includes('x86_64') && name.endsWith('.dmg')) {
    return {
      title: 'macOS DMG for Intel Macs',
      description: 'Use this for older Intel-based Macs.'
    };
  }

  return {
    title: assetName,
    description: ''
  };
}

function updateRecommendedDownload(platform) {
  const panel = document.getElementById('recommended-download');
  if (!panel || !platform) return;

  const title = document.getElementById('recommended-title');
  const description = document.getElementById('recommended-description');
  const link = document.getElementById('recommended-link');
  const card = document.querySelector('[data-platform="' + platform + '"]');

  if (!title || !description || !link) return;
  link.removeAttribute('download');

  if (platform === 'ios') {
    panel.hidden = false;
    title.textContent = 'No iOS build is provided here';
    description.textContent = 'Use the server configuration below with a compatible RustDesk client.';
    link.href = '#config';
    link.textContent = 'View server config';
    return;
  }

  if (!card) return;

  if (platform === 'macos') {
    panel.hidden = false;
    title.textContent = 'Choose the right macOS DMG';
    description.textContent = 'Apple Silicon and Intel builds are available. These official upstream builds must be configured manually after installation.';
    link.href = '#downloads';
    link.textContent = 'View macOS options';
    return;
  }

  const preferredSelectors = {
    linux: [
      '[data-asset-name$=".AppImage"]',
      '[data-asset-name$=".deb"]',
      '.download-link'
    ],
    windows: [
      '[data-asset-name*="windows"]',
      '.download-link'
    ],
    android: [
      '[data-asset-name*="arm64-v8a"]',
      '.download-link'
    ]
  };

  const selectors = preferredSelectors[platform] || ['.download-link'];
  let recommended = null;

  for (const selector of selectors) {
    recommended = card.querySelector(selector);
    if (recommended) break;
  }

  if (!recommended) return;

  const assetName = recommended.getAttribute('data-asset-name') || recommended.textContent.trim();
  const label = getAssetLabel(assetName);

  panel.hidden = false;
  title.textContent = label.title;
  description.textContent = label.description || 'Recommended for your detected platform.';
  link.href = recommended.href;
  link.textContent = 'Download';
  link.setAttribute('download', '');
}

function copyText(text) {
  if (navigator.clipboard && window.isSecureContext) {
    return navigator.clipboard.writeText(text);
  }

  return new Promise(function (resolve, reject) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.setAttribute('readonly', '');
    textarea.style.position = 'fixed';
    textarea.style.top = '0';
    textarea.style.left = '-9999px';
    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();

    try {
      const successful = document.execCommand('copy');
      document.body.removeChild(textarea);
      successful ? resolve() : reject(new Error('Copy command failed'));
    } catch (err) {
      document.body.removeChild(textarea);
      reject(err);
    }
  });
}

function showToast(message) {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.className = 'toast';
    toast.setAttribute('role', 'status');
    toast.setAttribute('aria-live', 'polite');
    document.body.appendChild(toast);
  }

  toast.textContent = message;
  toast.classList.add('show');

  window.clearTimeout(showToast.timeout);
  showToast.timeout = window.setTimeout(function () {
    toast.classList.remove('show');
  }, 2000);
}
