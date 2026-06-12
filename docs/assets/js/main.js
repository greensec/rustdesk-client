document.addEventListener('DOMContentLoaded', function () {
  const encoded = window.RUSTDESK_CONFIG?.encoded_string || '';
  const qrContainer = document.getElementById('qrcode');

  if (encoded && qrContainer && typeof QRCode !== 'undefined') {
    QRCode.toCanvas(qrContainer, encoded, {
      width: 200,
      margin: 2,
      color: {
        dark: '#1e293b',
        light: '#ffffff'
      }
    }, function (err) {
      if (err) {
        qrContainer.innerHTML = '<p style="color:#dc2626">Unable to generate QR code.</p>';
        console.error(err);
      }
    });
  } else if (qrContainer) {
    qrContainer.innerHTML = '<p style="color:#64748b">No config available.</p>';
  }

  // Copy buttons
  document.querySelectorAll('[data-copy]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      const targetSel = btn.getAttribute('data-copy');
      const target = document.querySelector(targetSel);
      if (!target) return;
      const text = target.value || target.textContent || '';
      navigator.clipboard.writeText(text).then(function () {
        showToast('Copied to clipboard!');
      }).catch(function () {
        showToast('Copy failed');
      });
    });
  });

  // Detect user platform and highlight matching card
  const platform = detectPlatform();
  if (platform) {
    const card = document.querySelector('[data-platform="' + platform + '"]');
    if (card) {
      card.style.borderColor = 'var(--primary)';
      card.style.boxShadow = '0 0 0 2px var(--primary)';
      card.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }
});

function detectPlatform() {
  const ua = navigator.userAgent;
  if (ua.indexOf('Win') !== -1) return 'windows';
  if (ua.indexOf('Mac') !== -1) return 'macos';
  if (ua.indexOf('Linux') !== -1) return 'linux';
  if (ua.indexOf('Android') !== -1) return 'android';
  return '';
}

function showToast(message) {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(function () {
    toast.classList.remove('show');
  }, 2000);
}
