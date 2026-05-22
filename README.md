# rustdesk-client

Custom RustDesk client builder with self-hosted server defaults and branding injection.

## Overview

This repository automates the build and packaging of a customized [RustDesk](https://github.com/rustdesk/rustdesk) client. It fetches the upstream RustDesk source, injects your self-hosted server configuration and branding, then builds signed packages for Linux, Windows, and macOS via GitHub Actions.

## What It Does

- **Source**: Clones the official RustDesk repository at a configurable tag/branch/commit.
- **Server Injection**: Hardcodes your rendezvous, relay, and API server addresses plus your public key into the client.
- **Branding**: Replaces the application name, bundle ID, description, company, and assets.
- **Builds**: Produces platform-native packages:
  - **Linux**: DEB, RPM, AppImage, Flatpak
  - **Windows**: Portable executable
  - **macOS**: DMG
  - **Android**: APK (arm64, armv7, x86_64)
- **Release**: Automatically publishes a GitHub Release with all artifacts.

## Repository Layout

```
├── .github/
│   ├── actions/           # Reusable composite actions (prepare, build, collect)
│   └── workflows/
│       └── build.yml      # Main build & release workflow
├── scripts/
│   └── configure_rustdesk.py   # Injection logic for config & branding
├── branding/              # Custom icons, logos, and assets (optional)
└── BUILD.md               # macOS self-hosted runner setup instructions
```

## Quick Start

1. **Fork this repository**.
2. **Configure repository secrets & variables**:
   - Secrets: `RENDEZVOUS_SERVER`, `RELAY_SERVER`, `API_SERVER`, `RS_PUB_KEY`
   - Variables: `CLIENT_NAME`, `CLIENT_IDENTIFIER`, `CLIENT_DESCRIPTION`, `CLIENT_COMPANY`
3. **Add branding assets** to a `branding/` directory (optional).
4. **Run the workflow** manually via GitHub Actions (`Build RustDesk`).

## Workflow Inputs

| Input | Description | Default |
|-------|-------------|---------|
| `rustdesk_ref` | RustDesk tag, branch, or commit to build | `1.4.6` |
| `publish_release` | Create/update a GitHub Release | `true` |
| `release_tag` | Custom release tag (auto-generated if empty) | `""` |
| `prerelease` | Mark release as prerelease | `false` |
| `build_linux` | Build Linux packages | `true` |
| `build_windows` | Build Windows packages | `true` |
| `build_macos` | Build macOS packages | `true` |
| `build_android` | Build Android packages | `true` |
| `use_github_runners` | Use GitHub-hosted runners instead of self-hosted runners | `true` |

## Build Environments

- **Linux**: Ubuntu 22.04-based runner (GitHub-hosted or self-hosted)
- **Windows**: Windows runner with LLVM, Rust, Flutter (GitHub-hosted or self-hosted)
- **macOS**: macOS Sonoma (14+) self-hosted runner with Xcode, Homebrew, Rust, Flutter, CocoaPods
- **Android**: Ubuntu 22.04 GitHub-hosted runner (no self-hosted setup required)

See `BUILD.md` for detailed macOS runner setup instructions.

## License

This builder tooling follows the same license terms as the upstream [RustDesk](https://github.com/rustdesk/rustdesk) project.
