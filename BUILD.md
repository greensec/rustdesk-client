# Build Instructions

This document describes how to set up a macOS environment to build the RustDesk client, including configuration for a self-hosted GitHub Actions runner.

## macOS Build Environment

### Prerequisites

- macOS Sonoma (14) or later
- Administrator access (for initial Xcode installation)
- ~30 GB free disk space
- Internet connection

### 1. Install Xcode

The **full Xcode application** is required (Command Line Tools alone are not sufficient because `flutter build macos` invokes `xcodebuild`).

**Option A: App Store**
- Install "Xcode" from the Mac App Store.

**Option B: Apple Developer Portal**
- Download Xcode from https://developer.apple.com/download/all/
- Extract and move `Xcode.app` to `/Applications/`.

After installation, accept the license and select the developer directory:

```bash
sudo xcode-select -s /Applications/Xcode.app/Contents/Developer
sudo xcodebuild -runFirstLaunch
xcodebuild -version
```

### 2. Install Homebrew (user-local)

Because this environment runs without a sudo password, Homebrew is installed to a user-local prefix (`~/homebrew`) instead of `/usr/local`.

```bash
mkdir -p ~/homebrew
curl -L https://github.com/Homebrew/brew/tarball/master | tar xz --strip 1 -C ~/homebrew
```

Add Homebrew to your shell profile:

```bash
export PATH="$HOME/homebrew/bin:$HOME/homebrew/sbin:$PATH"
```

### 3. Install System Dependencies

```bash
brew install llvm create-dmg opus yasm pkg-config rbenv ruby-build
```

Also install NASM (the assembler used by some Rust dependencies):

```bash
curl -L -o /tmp/nasm.zip https://www.nasm.us/pub/nasm/releasebuilds/2.16.03/macosx/nasm-2.16.03-macosx.zip
unzip -q /tmp/nasm.zip -d /tmp
cp /tmp/nasm-2.16.03/nasm ~/homebrew/bin/nasm
```

### 4. Install Rust

```bash
curl -sSf https://sh.rustup.rs | sh -s -- -y --default-toolchain 1.81.0
```

Add Cargo to your shell profile:

```bash
export PATH="$HOME/.cargo/bin:$PATH"
```

### 5. Install Flutter

```bash
cd ~
git clone https://github.com/flutter/flutter.git -b 3.24.5 --depth 1
```

Add Flutter to your shell profile:

```bash
export PATH="$HOME/flutter/bin:$PATH"
```

Run Flutter doctor to verify:

```bash
flutter --version
```

### 6. Install CocoaPods

CocoaPods is required by Flutter for macOS plugin resolution. The Homebrew bottle has gem-dependency conflicts on user-local installs, so install it via `rbenv` instead:

```bash
# rbenv should already be installed from step 3
rbenv install 3.3.0
rbenv global 3.3.0
gem install cocoapods
```

Add rbenv to your shell profile:

```bash
export PATH="$HOME/.rbenv/shims:$HOME/.rbenv/bin:$PATH"
eval "$(rbenv init -)"
```

Verify:

```bash
pod --version
```

### 7. Complete Shell Profile

Your `~/.zshrc` (or `~/.bash_profile`) should contain:

```bash
# rbenv (must be first so CocoaPods is found)
export PATH="$HOME/.rbenv/shims:$HOME/.rbenv/bin:$PATH"
eval "$(rbenv init -)"

# Homebrew
export PATH="$HOME/homebrew/bin:$HOME/homebrew/sbin:$PATH"

# Flutter
export PATH="$HOME/flutter/bin:$PATH"

# Rust/Cargo
export PATH="$HOME/.cargo/bin:$PATH"

# System
export PATH="/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:$PATH"
```

Reload the profile:

```bash
source ~/.zshrc
```

### 8. Self-Hosted GitHub Actions Runner

Download and configure the runner (get a fresh registration token from the GitHub repository settings):

```bash
mkdir -p ~/actions-runner && cd ~/actions-runner
curl -o actions-runner-osx-x64-2.334.0.tar.gz \
  -L https://github.com/actions/runner/releases/download/v2.334.0/actions-runner-osx-x64-2.334.0.tar.gz
tar xzf actions-runner-osx-x64-2.334.0.tar.gz

./config.sh \
  --url https://github.com/greensec/rustdesk-client \
  --token <YOUR_REGISTRATION_TOKEN> \
  --name <RUNNER_NAME> \
  --labels self-hosted,macOS,X64 \
  --work _work \
  --unattended
```

Create the runner environment file so it inherits the same `PATH`:

```bash
cat > ~/actions-runner/.env << 'EOF'
PATH=/Users/user/.rbenv/shims:/Users/user/.rbenv/bin:/Users/user/homebrew/bin:/Users/user/homebrew/sbin:/Users/user/flutter/bin:/Users/user/.cargo/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin
SSL_CERT_FILE=/etc/ssl/cert.pem
EOF
```

Install and start the runner as a LaunchAgent (runs on user login):

```bash
./svc.sh install
./svc.sh start
./svc.sh status
```

To start manually (useful for debugging):

```bash
./run.sh
```

### 9. Verify the Environment

Run this checklist before starting a build:

```bash
xcodebuild -version          # Should print Xcode version
brew --version               # Should print Homebrew version
rustc --version              # Should print rustc 1.81.0
flutter --version            # Should print Flutter 3.24.5
pod --version                # Should print pod 1.16.2
nasm --version               # Should print NASM 2.16.03
```

### 10. GitHub Actions Workflow Labels

The workflow job expects a runner with these labels (defined in `.github/workflows/build.yml`):

```yaml
runs-on: [self-hosted, macOS, X64]
```

Ensure your runner is registered with exactly those labels.

---

## Troubleshooting

| Symptom | Cause | Fix |
|---------|-------|-----|
| `brew: command not found` | PATH not set in runner | Add `PATH=...` to `~/actions-runner/.env` |
| `xcodebuild: not found` | Only Command Line Tools installed | Install full Xcode from App Store |
| `CocoaPods not installed` | pod not in PATH or not installed | Install via rbenv + gem, add to PATH |
| `sudo: a password is required` | Runner tries to use sudo | Configure passwordless sudo or remove sudo calls from workflow |
| `SSL certificate verify failed` | CA certs not found | Set `SSL_CERT_FILE=/etc/ssl/cert.pem` in `~/actions-runner/.env` |
