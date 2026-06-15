---
layout: default
title: Download
---

<script>
window.RUSTDESK_CONFIG = {
  encoded_string: "{{ site.data.config.encoded_string | escape }}",
  id_server: "{{ site.data.config.id_server | escape }}",
  relay_server: "{{ site.data.config.relay_server | escape }}",
  api_server: "{{ site.data.config.api_server | escape }}",
  key: "{{ site.data.config.key | escape }}"
};
</script>

<header class="site-header">
  <div class="container">
    <div class="header-top">
      <h1>{{ site.data.config.client_name | default: site.title }}</h1>
      <div class="lang-selector" aria-label="Language selector">
        <button class="lang-btn" data-lang="en" aria-pressed="false">EN</button>
        <button class="lang-btn" data-lang="de" aria-pressed="false">DE</button>
      </div>
    </div>
    <div class="hero-actions" aria-label="Primary actions" data-i18n-aria-label="hero.actionsLabel">
      <a class="btn btn-hero" href="#downloads" data-i18n="downloads.title">Downloads</a>
      <a class="btn btn-hero btn-secondary" href="#config" data-i18n="config.title">Server Configuration</a>
    </div>
  </div>
</header>

<main class="container">

  <!-- Downloads -->
  <section class="section" id="downloads">
    <div class="recommended-download" id="recommended-download" hidden>
      <p class="eyebrow" data-i18n="recommended.eyebrow">Recommended for this device</p>
      <h3 id="recommended-title">Choose a download</h3>
      <p id="recommended-description"></p>
      <a class="btn" id="recommended-link" href="#downloads">View options</a>
    </div>

    <hr class="section-divider">
    <h2 class="section-title" data-i18n="downloads.title">Downloads</h2>

    <div class="download-grid">

      <!-- Linux -->
      <div class="card" data-platform="linux">
        <h3>
          <i class="ti ti-brand-ubuntu icon"></i>
          Linux
        </h3>
        <p class="detected-label" hidden data-i18n="platform.detected">Detected on this device</p>
        {% if site.data.release.assets.linux.size > 0 %}
        <ul>
          {% for asset in site.data.release.assets.linux %}
          <li><a class="download-link" href="{{ asset.url }}" download data-asset-name="{{ asset.name | escape }}">{{ asset.name }}</a></li>
          {% endfor %}
        </ul>
        {% else %}
        <p class="no-build" data-i18n="noBuild.linux">No Linux builds available yet.</p>
        {% endif %}
      </div>

      <!-- Windows + macOS column -->
      <div class="card-column">
        <!-- Windows -->
        <div class="card" data-platform="windows">
          <h3>
            <i class="ti ti-brand-windows icon"></i>
            Windows
          </h3>
          <p class="detected-label" hidden data-i18n="platform.detected">Detected on this device</p>
          {% if site.data.release.assets.windows.size > 0 %}
          <ul>
            {% for asset in site.data.release.assets.windows %}
            <li><a class="download-link" href="{{ asset.url }}" download data-asset-name="{{ asset.name | escape }}">{{ asset.name }}</a></li>
            {% endfor %}
          </ul>
          {% else %}
          <p class="no-build" data-i18n="noBuild.windows">No Windows builds available yet.</p>
          {% endif %}
        </div>

        <!-- macOS -->
        <div class="card" data-platform="macos">
          <h3>
            <i class="ti ti-brand-apple icon"></i>
            macOS
          </h3>
          <p class="detected-label" hidden data-i18n="platform.detected">Detected on this device</p>
          {% assign macos_x64 = site.data.release.upstream_macos.x64 %}
          {% assign macos_arm64 = site.data.release.upstream_macos.arm64 %}
          {% if macos_x64.url != "" or macos_arm64.url != "" %}
          <ul>
            {% if macos_x64.url != "" %}
            <li><a class="download-link" href="{{ macos_x64.url }}" download data-asset-name="{{ macos_x64.name | escape }}">{{ macos_x64.name }}</a></li>
            {% endif %}
            {% if macos_arm64.url != "" %}
            <li><a class="download-link" href="{{ macos_arm64.url }}" download data-asset-name="{{ macos_arm64.name | escape }}">{{ macos_arm64.name }}</a></li>
            {% endif %}
          </ul>
          <div class="note">
            <span data-i18n="macos.noteText">These are official upstream builds. They do not include your self-hosted server configuration.</span>
            <a href="#config" data-i18n="macos.noteLink">See the manual setup steps.</a>
          </div>
          {% else %}
          <p class="no-build" data-i18n="noBuild.macos">No macOS builds available yet.</p>
          {% endif %}
        </div>
      </div>

      <!-- Android -->
      <div class="card" data-platform="android">
        <h3>
          <i class="ti ti-brand-android icon"></i>
          Android
        </h3>
        <p class="detected-label" hidden data-i18n="platform.detected">Detected on this device</p>
        {% if site.data.release.assets.android.size > 0 %}
        <ul>
          {% for asset in site.data.release.assets.android %}
          <li><a class="download-link" href="{{ asset.url }}" download data-asset-name="{{ asset.name | escape }}">{{ asset.name }}</a></li>
          {% endfor %}
        </ul>
        {% else %}
        <p class="no-build" data-i18n="noBuild.android">No Android builds available yet.</p>
        {% endif %}
      </div>

    </div>
  </section>

  <!-- Server Configuration -->
  <section class="section" id="config">
    <h2 class="section-title" data-i18n="config.title">Server Configuration</h2>
    <div class="config-section">
      <div class="config-warning">
        <i class="ti ti-alert-triangle config-warning-icon"></i>
        <span data-i18n-html="config.note">The downloads on this page are <strong>pre-configured</strong>.<br>You only need this section if you are using the <strong>macOS</strong> upstream client or a regular RustDesk client.</span>
      </div>
      <div class="config-grid">
        <div class="qr-wrapper" role="group" aria-label="QR code for the RustDesk server configuration" data-i18n-aria-label="config.qrAria">
          {% include qr-config.svg %}
          <p class="qr-label" data-i18n="config.qrLabel">Scan this QR code in the RustDesk mobile app</p>
        </div>
        <div>
          <p class="config-help" data-i18n-html="config.copyHelp">Copy this config string and paste it into RustDesk via <strong>Settings → Network → Import Server Config</strong>:</p>
          <textarea class="config-string" id="config-string" aria-label="Encoded RustDesk server configuration" data-i18n-aria-label="config.textareaAria" readonly>{{ site.data.config.encoded_string }}</textarea>
          <div class="btn-group">
            <button class="btn" data-copy="#config-string"><i class="ti ti-copy"></i> <span data-i18n="config.copyButton">Copy Config</span></button>
          </div>
        </div>
      </div>

      <div class="instructions mt-2">
        <h4><i class="ti ti-copy"></i> <span data-i18n="manual.quickImportTitle">Quick Import (recommended)</span></h4>
        <ol>
          <li data-i18n-html="manual.quickStep1">Open RustDesk and click the <strong>menu button</strong> (⋯) next to your ID.</li>
          <li data-i18n-html="manual.quickStep2">Select <strong>Network</strong> and unlock the settings with elevated privileges.</li>
          <li data-i18n-html="manual.quickStep3">Click <strong>Import Server Config</strong> and paste the config string above.</li>
        </ol>
      </div>

      <div class="instructions mt-1">
        <h4><i class="ti ti-keyboard"></i> <span data-i18n="manual.manualEntryTitle">Manual Entry</span></h4>
        <ol>
          <li data-i18n-html="manual.manualStep1">Open RustDesk → <strong>Network</strong> settings (unlocked).</li>
          <li><strong data-i18n="config.idServer">ID Server</strong>: <code>{{ site.data.config.id_server | default: "—" }}</code></li>
          {% if site.data.config.relay_server != "" %}
          <li><strong data-i18n="config.relayServer">Relay Server</strong>: <code>{{ site.data.config.relay_server }}</code></li>
          {% endif %}
          {% if site.data.config.api_server != "" %}
          <li><strong data-i18n="config.apiServer">API Server</strong>: <code>{{ site.data.config.api_server }}</code></li>
          {% endif %}
          <li><strong data-i18n="config.key">Key</strong>: <code>{{ site.data.config.key | default: "—" }}</code></li>
          <li data-i18n-html="manual.manualStepApply">Click <strong>Apply</strong> or <strong>OK</strong> to save.</li>
        </ol>
      </div>

      <div class="client-preview">
        <img src="assets/img/rustdesk_client.png" alt="RustDesk Client">
      </div>
    </div>
  </section>

  <noscript>
    <div class="page-note">
      Download links still work, but the recommended download panel, QR code, and copy buttons require JavaScript.
    </div>
  </noscript>

</main>

<footer class="site-footer">
  <div class="container">
    <p>{% if site.data.release.tag != "" %}
    <span data-i18n="footer.latestBuild">Latest build</span>: <a href="https://github.com/greensec/rustdesk-client/releases/tag/{{ site.data.release.tag }}" target="_blank" rel="noopener"><code>{{ site.data.release.tag }}</code></a>{% if site.data.release.prerelease %} <span data-i18n="footer.prerelease">(prerelease)</span>{% endif %} |
    {% endif %}
    <a href="https://greensec.de" target="_blank" data-i18n-html="footer.impress">Impress</a>
    </p>
  </div>
</footer>
