let currentLanguage = 'en';

const I18N = {
  en: {
    'page.title': 'RustDesk Clients',
    'page.description': 'Download custom RustDesk clients for a self-hosted RustDesk server.',
    'hero.actionsLabel': 'Primary actions',
    'downloads.title': 'Downloads',
    'recommended.eyebrow': 'Recommended for this device',
    'recommended.defaultTitle': 'Choose a download',
    'recommended.defaultCta': 'View options',
    'recommended.defaultDescription': 'Recommended for your detected platform.',
    'recommended.downloadCta': 'Download',
    'recommended.macosTitle': 'Choose the right macOS DMG',
    'recommended.macosDescription': 'Apple Silicon and Intel builds are available. These official upstream builds must be configured manually after installation.',
    'recommended.macosCta': 'View macOS options',
    'recommended.iosTitle': 'No iOS build is provided here',
    'recommended.iosDescription': 'Use the server configuration below with a compatible RustDesk client.',
    'recommended.iosCta': 'View server config',
    'platform.detected': 'Detected on this device',
    'noBuild.linux': 'No Linux builds available yet.',
    'noBuild.windows': 'No Windows builds available yet.',
    'noBuild.macos': 'No macOS builds available yet.',
    'noBuild.android': 'No Android builds available yet.',
    'macos.noteText': 'These are official upstream builds. They do not include the server configuration.',
    'macos.noteLink': 'See the manual setup steps.',
    'manual.quickImportTitle': 'Quick Import (recommended)',
    'manual.quickStep1': 'Open RustDesk and click the <strong>menu button</strong> (⋯) next to your ID.',
    'manual.quickStep2': 'Select <strong>Network</strong> and unlock the settings with elevated privileges.',
    'manual.quickStep3': 'Click on <strong>ID/Relay-Server</strong> and then <i class="ti ti-clipboard"></i> (<strong>Import Server Config</strong>) and paste the config string from the <a href="#config">Server Configuration</a> section.',
    'manual.manualEntryTitle': 'Manual Entry',
    'manual.manualStep1': 'Open RustDesk → <strong>Network</strong> settings (unlocked).',
    'manual.manualStepApply': 'Click <strong>Apply</strong> or <strong>OK</strong> to save.',
    'config.title': 'Server Configuration',
    'config.qrAria': 'QR code for the RustDesk server configuration',
    'config.qrLabel': 'Scan this QR code in the RustDesk mobile app',
    'config.note': 'The downloads on this page are <strong>pre-configured</strong>.<br>You only need this section if you are using the <strong>macOS</strong> upstream client or a regular RustDesk client.',
    'config.copyHelp': 'Copy this config string and paste it into RustDesk via <strong>Settings → Network → ID/Relay-Server → <i class="ti ti-clipboard"></i> (Import Server Config)</strong>:',
    'config.textareaAria': 'Encoded RustDesk server configuration',
    'config.copyButton': 'Copy Config',
    'config.idServer': 'ID Server',
    'config.relayServer': 'Relay Server',
    'config.apiServer': 'API Server',
    'config.key': 'Key',
    'config.noConfig': 'No config available.',
    'toast.noConfig': 'No config available to copy.',
    'toast.copied': 'Copied to clipboard!',
    'toast.copyFailed': 'Copy failed. Select the text and copy it manually.',
    'footer.latestBuild': 'Latest build',
    'footer.impress': 'Impress',
    'footer.prerelease': '(prerelease)',
    'asset.windows.title': 'Windows app',
    'asset.windows.description': '64-bit build for Windows. Portable executable — no installer required.',
    'asset.appimage.title': 'Linux AppImage',
    'asset.appimage.description': 'Recommended for many x86_64 Linux desktops.',
    'asset.deb.title': 'Ubuntu / Debian package',
    'asset.deb.description': 'Use this on Debian, Ubuntu, Linux Mint, and compatible distributions.',
    'asset.suse.title': 'openSUSE RPM package',
    'asset.suse.description': 'Use this RPM package on openSUSE-based systems.',
    'asset.rpm.title': 'Fedora / RHEL RPM package',
    'asset.rpm.description': 'Use this on Fedora, Red Hat Enterprise Linux, Rocky, AlmaLinux, and compatible distributions.',
    'asset.flatpak.title': 'Linux Flatpak bundle',
    'asset.flatpak.description': 'Use this if your desktop workflow prefers Flatpak packages.',
    'asset.androidArm64.title': 'Android APK for most phones',
    'asset.androidArm64.description': 'Recommended for most modern Android phones and tablets.',
    'asset.androidArm32.title': 'Android APK for older 32-bit devices',
    'asset.androidArm32.description': 'Use this only for older Android devices that do not support 64-bit apps.',
    'asset.androidX64.title': 'Android APK for emulator / x86_64',
    'asset.androidX64.description': 'Use this for Android emulators or x86_64 Android devices.',
    'asset.macosArm.title': 'macOS DMG for Apple Silicon',
    'asset.macosArm.description': 'Use this for Macs with M1, M2, M3, M4, or newer Apple Silicon chips.',
    'asset.macosIntel.title': 'macOS DMG for Intel Macs',
    'asset.macosIntel.description': 'Use this for older Intel-based Macs.'
  },
  de: {
    'page.title': 'RustDesk Clients',
    'page.description': 'Lade angepasste RustDesk-Clients für einen selbst gehosteten RustDesk-Server herunter.',
    'hero.actionsLabel': 'Hauptaktionen',
    'downloads.title': 'Downloads',
    'recommended.eyebrow': 'Empfohlen für dieses Gerät',
    'recommended.defaultTitle': 'Download auswählen',
    'recommended.defaultCta': 'Optionen anzeigen',
    'recommended.defaultDescription': 'Empfohlen für die erkannte Plattform.',
    'recommended.downloadCta': 'Herunterladen',
    'recommended.macosTitle': 'Passende macOS-DMG auswählen',
    'recommended.macosDescription': 'Es gibt Builds für Apple Silicon und Intel. Diese offiziellen Upstream-Builds müssen nach der Installation manuell konfiguriert werden.',
    'recommended.macosCta': 'macOS-Optionen anzeigen',
    'recommended.iosTitle': 'Hier wird kein iOS-Build angeboten',
    'recommended.iosDescription': 'Nutzen Sie die Serverkonfiguration unten mit einem kompatiblen RustDesk-Client.',
    'recommended.iosCta': 'Serverkonfiguration anzeigen',
    'platform.detected': 'Auf diesem Gerät erkannt',
    'noBuild.linux': 'Noch keine Linux-Builds verfügbar.',
    'noBuild.windows': 'Noch keine Windows-Builds verfügbar.',
    'noBuild.macos': 'Noch keine macOS-Builds verfügbar.',
    'noBuild.android': 'Noch keine Android-Builds verfügbar.',
    'macos.noteText': 'Dies sind offizielle Upstream-Builds. Die automatische Konfiguration ist dort nicht enthalten. Siehe ',
    'macos.noteLink': 'manuelle Einrichtung',
    'manual.quickImportTitle': 'Schnellimport (empfohlen)',
    'manual.quickStep1': 'Öffnen Sie RustDesk und klicken Sie auf die <strong>Menüschaltfläche</strong> (⋯) neben Ihrer ID.',
    'manual.quickStep2': 'Wählen Sie <strong>Netzwerk</strong> und entsperren Sie die Einstellungen mit erhöhten Rechten.',
    'manual.quickStep3': 'Klicken Sie auf <strong>ID/Relay-Server</strong> und dann auf <i class="ti ti-clipboard"></i> (<strong>Serverkonfiguration importieren</strong>) und fügen Sie die Konfigurationszeichenfolge aus dem Abschnitt <a href="#config">Serverkonfiguration</a> ein.',
    'manual.manualEntryTitle': 'Manuelle Eingabe',
    'manual.manualStep1': 'Öffnen Sie in RustDesk die <strong>Network</strong>-Einstellungen (entsperrt).',
    'manual.manualStepApply': 'Klicken Sie zum Speichern auf <strong>Apply</strong> oder <strong>OK</strong>.',
    'config.title': 'Serverkonfiguration',
    'config.qrAria': 'QR-Code für die RustDesk-Serverkonfiguration',
    'config.qrLabel': 'Scanne diesen QR-Code in der mobilen RustDesk-App',
    'config.note': 'Die Downloads auf dieser Seite sind bereits <strong>vorkonfiguriert</strong>.<br>Sie benötigen diesen Abschnitt nur, wenn Sie den <strong>macOS</strong>-Upstream-Client oder einen regulären RustDesk-Client verwenden.',
    'config.copyHelp': 'Kopieren Sie diese Konfigurationszeichenfolge und fügen Sie sie in RustDesk unter <strong>Einstellungen → Netzwerk → ID/Relay-Server → <i class="ti ti-clipboard"></i> (Serverkonfiguration importieren)</strong> ein:',
    'config.textareaAria': 'Kodierte RustDesk-Serverkonfiguration',
    'config.copyButton': 'Konfiguration kopieren',
    'config.idServer': 'ID-Server',
    'config.relayServer': 'Relay-Server',
    'config.apiServer': 'API-Server',
    'config.key': 'Key',
    'config.noConfig': 'Keine Konfiguration verfügbar.',
    'toast.noConfig': 'Keine Konfiguration zum Kopieren verfügbar.',
    'toast.copied': 'In die Zwischenablage kopiert.',
    'toast.copyFailed': 'Kopieren fehlgeschlagen. Markiere den Text und kopiere ihn manuell.',
    'footer.latestBuild': 'Aktueller Build',
    'footer.impress': 'Impressum',
    'footer.prerelease': '(Vorabversion)',
    'asset.windows.title': 'Windows-App',
    'asset.windows.description': '64-Bit-Version für Windows. Portables Programm — keine Installation erforderlich.',
    'asset.appimage.title': 'Linux AppImage',
    'asset.appimage.description': 'Empfohlen für viele x86_64-Linux-Desktops.',
    'asset.deb.title': 'Ubuntu- / Debian-Paket',
    'asset.deb.description': 'Für Debian, Ubuntu, Linux Mint und kompatible Distributionen.',
    'asset.suse.title': 'openSUSE-RPM-Paket',
    'asset.suse.description': 'RPM-Paket für openSUSE-basierte Systeme.',
    'asset.rpm.title': 'Fedora- / RHEL-RPM-Paket',
    'asset.rpm.description': 'Für Fedora, Red Hat Enterprise Linux, Rocky, AlmaLinux und kompatible Distributionen.',
    'asset.flatpak.title': 'Linux-Flatpak-Bundle',
    'asset.flatpak.description': 'Für Desktop-Workflows, die Flatpak bevorzugen.',
    'asset.androidArm64.title': 'Android-APK für die meisten Smartphones',
    'asset.androidArm64.description': 'Empfohlen für die meisten modernen Android-Smartphones und Tablets.',
    'asset.androidArm32.title': 'Android-APK für ältere 32-Bit-Geräte',
    'asset.androidArm32.description': 'Nur für ältere Android-Geräte, die keine 64-Bit-Apps unterstützen.',
    'asset.androidX64.title': 'Android-APK für Emulator / x86_64',
    'asset.androidX64.description': 'Für Android-Emulatoren oder x86_64-Android-Geräte.',
    'asset.macosArm.title': 'macOS-DMG für Apple Silicon',
    'asset.macosArm.description': 'Für Macs mit M1, M2, M3, M4 oder neueren Apple-Silicon-Chips.',
    'asset.macosIntel.title': 'macOS-DMG für Intel-Macs',
    'asset.macosIntel.description': 'Für ältere Intel-basierte Macs.'
  }
};

document.addEventListener('DOMContentLoaded', function () {
  currentLanguage = getPreferredLanguage();
  applyLanguage(currentLanguage);

  // Set initial active state on language selector
  document.querySelectorAll('.lang-btn').forEach(function (btn) {
    const isActive = btn.getAttribute('data-lang') === currentLanguage;
    btn.classList.toggle('is-active', isActive);
    btn.setAttribute('aria-pressed', String(isActive));
  });

  // Language selector click handlers
  document.querySelectorAll('.lang-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      const lang = btn.getAttribute('data-lang');
      if (lang) switchLanguage(lang);
    });
  });

  enhanceDownloadLinks();

  // Copy buttons
  document.querySelectorAll('[data-copy]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      const targetSel = btn.getAttribute('data-copy');
      const target = document.querySelector(targetSel);
      if (!target) return;
      const text = target.value || target.textContent || '';
      if (!text.trim()) {
        showToast(t('toast.noConfig', 'No config available to copy.'));
        return;
      }

      copyText(text).then(function () {
        showToast(t('toast.copied', 'Copied to clipboard!'));
      }).catch(function () {
        showToast(t('toast.copyFailed', 'Copy failed. Select the text and copy it manually.'));
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

function getPreferredLanguage() {
  const queryLanguage = new URLSearchParams(window.location.search).get('lang');
  if (queryLanguage && I18N[queryLanguage.toLowerCase()]) {
    return queryLanguage.toLowerCase();
  }

  const languages = navigator.languages && navigator.languages.length
    ? navigator.languages
    : [navigator.language || navigator.userLanguage || 'en'];

  return languages.some(function (language) {
    return /^de\b/i.test(language);
  }) ? 'de' : 'en';
}

function switchLanguage(language) {
  if (!I18N[language] || language === currentLanguage) return;

  currentLanguage = language;
  applyLanguage(language);
  updateRecommendedDownload(detectPlatform());

  // Update URL without reload
  const url = new URL(window.location);
  url.searchParams.set('lang', language);
  window.history.replaceState({}, '', url);

  // Update active button state
  document.querySelectorAll('.lang-btn').forEach(function (btn) {
    const isActive = btn.getAttribute('data-lang') === language;
    btn.classList.toggle('is-active', isActive);
    btn.setAttribute('aria-pressed', String(isActive));
  });
}

function applyLanguage(language) {
  document.documentElement.lang = language;
  document.title = t('page.title', document.title);

  const description = document.querySelector('meta[name="description"]');
  if (description) description.setAttribute('content', t('page.description', description.getAttribute('content') || ''));

  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.setAttribute('content', t('page.title', ogTitle.getAttribute('content') || ''));

  const ogDescription = document.querySelector('meta[property="og:description"]');
  if (ogDescription) ogDescription.setAttribute('content', t('page.description', ogDescription.getAttribute('content') || ''));

  document.querySelectorAll('[data-i18n]').forEach(function (element) {
    element.textContent = t(element.getAttribute('data-i18n'), element.textContent);
  });

  document.querySelectorAll('[data-i18n-html]').forEach(function (element) {
    element.innerHTML = t(element.getAttribute('data-i18n-html'), element.innerHTML);
  });

  document.querySelectorAll('[data-i18n-aria-label]').forEach(function (element) {
    element.setAttribute('aria-label', t(element.getAttribute('data-i18n-aria-label'), element.getAttribute('aria-label') || ''));
  });
}

function t(key, fallback) {
  return (I18N[currentLanguage] && I18N[currentLanguage][key]) || I18N.en[key] || fallback || '';
}

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
    return translateAssetLabel('asset.windows');
  }

  if (name.endsWith('.appimage')) {
    return translateAssetLabel('asset.appimage');
  }

  if (name.endsWith('.deb')) {
    return translateAssetLabel('asset.deb');
  }

  if (name.includes('suse') && name.endsWith('.rpm')) {
    return translateAssetLabel('asset.suse');
  }

  if (name.endsWith('.rpm')) {
    return translateAssetLabel('asset.rpm');
  }

  if (name.endsWith('.flatpak')) {
    return translateAssetLabel('asset.flatpak');
  }

  if (name.includes('arm64-v8a') && name.endsWith('.apk')) {
    return translateAssetLabel('asset.androidArm64');
  }

  if (name.includes('armeabi-v7a') && name.endsWith('.apk')) {
    return translateAssetLabel('asset.androidArm32');
  }

  if (name.includes('x86_64') && name.endsWith('.apk')) {
    return translateAssetLabel('asset.androidX64');
  }

  if ((name.includes('aarch64') || name.includes('arm64')) && name.endsWith('.dmg')) {
    return translateAssetLabel('asset.macosArm');
  }

  if (name.includes('x86_64') && name.endsWith('.dmg')) {
    return translateAssetLabel('asset.macosIntel');
  }

  return {
    title: assetName,
    description: ''
  };
}

function translateAssetLabel(prefix) {
  return {
    title: t(prefix + '.title', ''),
    description: t(prefix + '.description', '')
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
    title.textContent = t('recommended.iosTitle', 'No iOS build is provided here');
    description.textContent = t('recommended.iosDescription', 'Use the server configuration below with a compatible RustDesk client.');
    link.href = '#config';
    link.textContent = t('recommended.iosCta', 'View server config');
    return;
  }

  if (!card) return;

  if (platform === 'macos') {
    panel.hidden = false;
    title.textContent = t('recommended.macosTitle', 'Choose the right macOS DMG');
    description.textContent = t('recommended.macosDescription', 'Apple Silicon and Intel builds are available. These official upstream builds must be configured manually after installation.');
    link.href = '#downloads';
    link.textContent = t('recommended.macosCta', 'View macOS options');
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
  description.textContent = label.description || t('recommended.defaultDescription', 'Recommended for your detected platform.');
  link.href = recommended.href;
  link.textContent = t('recommended.downloadCta', 'Download');
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
