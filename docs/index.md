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
    <h1>{{ site.data.config.client_name | default: site.title }}</h1>
    <p>Download pre-configured clients for your self-hosted RustDesk server</p>
    <div class="hero-actions" aria-label="Primary actions">
      <a class="btn btn-hero" href="#downloads">View downloads</a>
      <a class="btn btn-hero btn-secondary" href="#config">Copy server config</a>
    </div>
  </div>
</header>

<main class="container">

  <!-- Downloads -->
  <section class="section" id="downloads">
    <h2 class="section-title">Downloads</h2>

    <div class="recommended-download" id="recommended-download" hidden>
      <p class="eyebrow">Recommended for this device</p>
      <h3 id="recommended-title">Choose a download</h3>
      <p id="recommended-description"></p>
      <a class="btn" id="recommended-link" href="#downloads">View options</a>
    </div>

    <div class="download-grid">

      <!-- Linux -->
      <div class="card" data-platform="linux">
        <h3>
          <i class="ti ti-brand-ubuntu icon"></i>
          Linux
        </h3>
        <p class="detected-label" hidden>Detected on this device</p>
        {% if site.data.release.assets.linux.size > 0 %}
        <ul>
          {% for asset in site.data.release.assets.linux %}
          <li><a class="download-link" href="{{ asset.url }}" download data-asset-name="{{ asset.name | escape }}">{{ asset.name }}</a></li>
          {% endfor %}
        </ul>
        {% else %}
        <p style="color: var(--text-muted); font-size: 0.875rem;">No Linux builds available yet.</p>
        {% endif %}
      </div>

      <!-- Windows -->
      <div class="card" data-platform="windows">
        <h3>
          <i class="ti ti-brand-windows icon"></i>
          Windows
        </h3>
        <p class="detected-label" hidden>Detected on this device</p>
        {% if site.data.release.assets.windows.size > 0 %}
        <ul>
          {% for asset in site.data.release.assets.windows %}
          <li><a class="download-link" href="{{ asset.url }}" download data-asset-name="{{ asset.name | escape }}">{{ asset.name }}</a></li>
          {% endfor %}
        </ul>
        {% else %}
        <p style="color: var(--text-muted); font-size: 0.875rem;">No Windows builds available yet.</p>
        {% endif %}
      </div>

      <!-- macOS -->
      <div class="card" data-platform="macos">
        <h3>
          <i class="ti ti-brand-apple icon"></i>
          macOS
        </h3>
        <p class="detected-label" hidden>Detected on this device</p>
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
          These are official upstream builds. They do not include your self-hosted server configuration.
          <a href="#config">Copy the server config after installing.</a>
        </div>
        {% else %}
        <p style="color: var(--text-muted); font-size: 0.875rem;">No macOS builds available yet.</p>
        {% endif %}
      </div>

      <!-- Android -->
      <div class="card" data-platform="android">
        <h3>
          <i class="ti ti-brand-android icon"></i>
          Android
        </h3>
        <p class="detected-label" hidden>Detected on this device</p>
        {% if site.data.release.assets.android.size > 0 %}
        <ul>
          {% for asset in site.data.release.assets.android %}
          <li><a class="download-link" href="{{ asset.url }}" download data-asset-name="{{ asset.name | escape }}">{{ asset.name }}</a></li>
          {% endfor %}
        </ul>
        {% else %}
        <p style="color: var(--text-muted); font-size: 0.875rem;">No Android builds available yet.</p>
        {% endif %}
      </div>

    </div>
  </section>

  <!-- Manual Setup Instructions -->
  {% if site.data.release.upstream_macos.x64.url != "" or site.data.release.upstream_macos.arm64.url != "" %}
  <section class="section" id="manual-instructions">
    <h2 class="section-title">Manual Setup Instructions</h2>
    <div class="config-section">
      <p>Official clients (e.g. macOS) do not come pre-configured. After downloading and installing, use the <strong>Import Server Config</strong> option and paste the config string from the section below.</p>

      <div class="instructions">
        <h4><i class="ti ti-copy"></i> Quick Import (recommended)</h4>
        <ol>
          <li>Open RustDesk and click the <strong>menu button</strong> (⋯) next to your ID.</li>
          <li>Select <strong>Network</strong> and unlock the settings with elevated privileges.</li>
          <li>Click <strong>Import Server Config</strong> and paste the config string from the <a href="#config">Server Configuration</a> section.</li>
        </ol>
      </div>

      <div class="instructions" style="margin-top: 16px;">
        <h4><i class="ti ti-keyboard"></i> Manual Entry</h4>
        <ol>
          <li>Open RustDesk → <strong>Network</strong> settings (unlocked).</li>
          <li><strong>ID Server</strong>: <code>{{ site.data.config.id_server | default: "—" }}</code></li>
          {% if site.data.config.relay_server != "" %}
          <li><strong>Relay Server</strong>: <code>{{ site.data.config.relay_server }}</code></li>
          {% endif %}
          {% if site.data.config.api_server != "" %}
          <li><strong>API Server</strong>: <code>{{ site.data.config.api_server }}</code></li>
          {% endif %}
          <li><strong>Key</strong>: <code>{{ site.data.config.key | default: "—" }}</code></li>
          <li>Click <strong>Apply</strong> or <strong>OK</strong> to save.</li>
        </ol>
      </div>
    </div>
  </section>
  {% endif %}

  <!-- Connection Config -->
  <section class="section" id="config">
    <h2 class="section-title">Server Configuration</h2>
    <div class="config-section">
      <div class="config-grid">
        <div class="qr-wrapper">
          <div id="qrcode"></div>
          <p class="qr-label">Scan with RustDesk mobile app</p>
        </div>
        <div>
          <p style="margin-top: 0;">Copy this config string and paste it into RustDesk via <strong>Settings → Network → Import Server Config</strong>:</p>
          <textarea class="config-string" id="config-string" readonly>{{ site.data.config.encoded_string }}</textarea>
          <div class="btn-group">
            <button class="btn" data-copy="#config-string"><i class="ti ti-copy"></i> Copy Config</button>
            {% if site.data.config.encoded_string != "" %}
            <button class="btn" data-copy="#config-string"><i class="ti ti-device-mobile"></i> Copy for Mobile</button>
            {% endif %}
          </div>

          <dl class="details-list">
            <dt>ID Server</dt>
            <dd>{{ site.data.config.id_server | default: "—" }}</dd>
            {% if site.data.config.relay_server != "" %}
            <dt>Relay Server</dt>
            <dd>{{ site.data.config.relay_server }}</dd>
            {% endif %}
            {% if site.data.config.api_server != "" %}
            <dt>API Server</dt>
            <dd>{{ site.data.config.api_server }}</dd>
            {% endif %}
            <dt>Public Key</dt>
            <dd>{{ site.data.config.key | default: "—" }}</dd>
          </dl>
        </div>
      </div>
    </div>
  </section>

</main>

<footer class="site-footer">
  <div class="container">
    <p>Built from <a href="https://github.com/rustdesk/rustdesk" target="_blank" rel="noopener">RustDesk</a> · Custom client builder</p>
    {% if site.data.release.tag != "" %}
    <p>Latest build: <code>{{ site.data.release.tag }}</code>{% if site.data.release.prerelease %} (prerelease){% endif %}</p>
    {% endif %}
  </div>
</footer>
