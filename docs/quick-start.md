# Quick Start

This page walks through the fastest way to protect a repository with DOSE.

## 1. Install DOSE

```bash
curl -sSL https://scan.softvenceomegaforce.cloud/install.sh | bash
```

On Windows PowerShell:

```powershell
irm https://scan.softvenceomegaforce.cloud | iex
```

## 2. Check the Version

```bash
dose-scan --version
```

This confirms the global command is available.

## 3. Scan Staged Files

Stage a change and run:

```bash
git add .
dose-scan --staged
```

This is the default workflow for pre-commit protection. DOSE reads staged file content from the Git index when possible, so the scan reflects what is actually about to be committed.

## 4. Run a Full Audit

Use a full scan when onboarding a repository or checking a project before release:

```bash
dose-scan --all
```

Full scans walk the current directory recursively, skip common dependency and build folders, and apply `.doseignore` rules when present.

## 5. Initialize Git Hooks

DOSE can create a project-level hook setup:

```bash
dose-scan --init
```

This creates `.githooks/pre-commit` and `.githooks/pre-push`, makes them executable, and configures Git to use `.githooks` as the repository hook path.

| Hook | Scan mode | Purpose |
| --- | --- | --- |
| `pre-commit` | `dose-scan --staged` | Protect individual commits |
| `pre-push` | `dose-scan --all` | Review the full project before pushing |

## 6. Fix or Review Findings

DOSE reports findings with one of three outcomes:

| Outcome | Meaning |
| --- | --- |
| `BLOCK` | Critical issue found; command exits with `1` |
| `WARN` | Suspicious pattern found; command exits with `0` |
| `SAFE` | No findings detected |

Fix blocking findings first. Review warnings before deciding whether the pattern is acceptable for your project.
