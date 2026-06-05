# Installation

DOSE can be installed globally from the stable release server. Once installed, the `dose-scan` command is available from your terminal.

## macOS and Linux

Run the installer:

```bash
curl -sSL https://scan.softvenceomegaforce.cloud/install.sh | bash
```

The installer downloads the latest stable release, installs the scanner into `~/.dose-scan`, makes the binary executable, and creates a global command at `/usr/local/bin/dose-scan`.

## Windows PowerShell

Run the PowerShell installer:

```powershell
irm https://scan.softvenceomegaforce.cloud | iex
```

The Windows installer requires Git for Windows because DOSE runs through Git Bash. It creates a command shim so `dose-scan` can be called from PowerShell or a regular terminal.

## Requirements

| Platform | Required tools |
| --- | --- |
| macOS | Bash, Perl, `tar`, and `curl` or `wget` |
| Linux | Bash, Perl, `tar`, and `curl` or `wget` |
| Windows | PowerShell, `tar.exe`, Git for Windows, and Git Bash |

## Verify the Install

After installation, open a new terminal and run:

```bash
dose-scan --version
```

You should see the scanner name, version, maintainer, and project link.

## Manual Installation

Use manual installation when you need tighter control over the install directory or want to inspect the archive first.

```bash
mkdir -p ~/.dose-scan
curl -fsSL https://scan.softvenceomegaforce.cloud/dose-scan-stable.tar.gz | tar -xz -C ~/.dose-scan
chmod +x ~/.dose-scan/bin/dose-scan
sudo ln -s ~/.dose-scan/bin/dose-scan /usr/local/bin/dose-scan
```

On Windows PowerShell:

```powershell
mkdir $HOME\.dose-scan -Force
irm https://scan.softvenceomegaforce.cloud/dose-scan-stable.tar.gz -OutFile $env:TEMP\dose-scan-stable.tar.gz
tar -xzf $env:TEMP\dose-scan-stable.tar.gz -C $HOME\.dose-scan
```

## Updating

Update an existing installation with:

```bash
dose-scan --update
```

The updater checks the stable release metadata, downloads the latest archive, replaces the installed scanner files, and preserves the release base URL for future updates.

## Uninstallation

macOS and Linux:

```bash
curl -sSL https://scan.softvenceomegaforce.cloud/uninstall.sh | bash
```

Windows PowerShell:

```powershell
irm https://scan.softvenceomegaforce.cloud/uninstall.ps1 | iex
```

The uninstaller removes the global command and deletes the installation directory at `~/.dose-scan`.
