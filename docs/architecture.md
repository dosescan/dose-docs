# Architecture

DOSE is organized as small shell modules. Each module owns one responsibility so the scanner can grow without turning into one large script.

## Repository Layout

```text
bin/
  dose-scan              # CLI entry point
cli/
  help.sh                # Help output
  init.sh                # Git hook initialization
  update.sh              # Self-update workflow
  version.sh             # Version output
lib/
  core.sh                # Module loader and public run wrapper
  files.sh               # File discovery and ignore filtering
  git.sh                 # Staged-file integration
  logger.sh              # Shared terminal styling
  scanner.sh             # File worker and result formatting
modules/
  patterns/
    blocking.sh          # Blocking regex rules
    warning.sh           # Warning regex rules
  security/
    dependencies.sh      # Dependency-specific checks
    scan.sh              # Scan orchestration
scripts/
  install.sh             # macOS and Linux installer
  install.ps1            # Windows installer
  uninstall.sh           # macOS and Linux uninstaller
  uninstall.ps1          # Windows uninstaller
```

## Scan Flow

1. `bin/dose-scan` resolves the installation root.
2. `lib/core.sh` loads shared modules, CLI handlers, scanner logic, and pattern definitions.
3. `run_dose_scan` selects a mode: staged, all, init, update, version, or help.
4. Scan modes collect candidate files from Git or the file system.
5. `.doseignore` rules filter the candidate list.
6. Binary and unreadable files are skipped.
7. Text files are scanned in parallel workers.
8. Findings are aggregated into a readable terminal report.
9. The command exits with `1` when blocking findings exist, otherwise `0`.

## Parallel Scanning

For real scans, DOSE calculates worker count from the available CPU count and the number of files. Small scans use only the number of workers needed. Larger scans use at least ten workers when possible, capped by the candidate file count.

This keeps pre-commit scans quick without overcomplicating the implementation.

## Rule Format

Rules are stored as label and regex pairs:

```bash
"Generic secret|||(?i)\b(secret|password|api_key)\b\s*[:=]\s*['\"][^'\"]{8,}['\"]"
```

The label is used in terminal output. The regex is evaluated against each scanned file.

## Extensibility

Add new behavior in the smallest module that owns the responsibility:

| Change | Place to edit |
| --- | --- |
| New blocking rule | `modules/patterns/blocking.sh` |
| New warning rule | `modules/patterns/warning.sh` |
| New dependency check | `modules/security/dependencies.sh` |
| New CLI flag | `modules/security/scan.sh` and `cli/help.sh` |
| New hook behavior | `cli/init.sh` |

Keep pattern labels short, human-readable, and action-oriented. A finding should make the next step obvious to the developer reading the terminal output.
