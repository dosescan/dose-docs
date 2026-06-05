# Integrations

DOSE is most useful when it runs automatically in the places where code moves: commits, pushes, and pull requests.

## Native Git Hooks

Run:

```bash
dose-scan --init
```

This creates `.githooks/pre-commit` and `.githooks/pre-push`, then configures:

```bash
git config core.hooksPath .githooks
```

The generated pre-commit hook runs staged scanning. The generated pre-push hook runs a full project audit.

## Husky

For JavaScript and TypeScript projects that already use Husky, call DOSE inside `.husky/pre-commit`:

```bash
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

dose-scan --staged
```

Use a pre-push hook for full scans:

```bash
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

dose-scan --all
```

## GitHub Actions

Use DOSE as a pull request security gate:

```yaml
name: Security Scan

on:
  push:
  pull_request:

jobs:
  dose:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Install DOSE
        run: curl -sSL https://scan.softvenceomegaforce.cloud/install.sh | bash
      - name: Run full security audit
        run: dose-scan --all
```

## Framework Notes

DOSE is language-agnostic because it scans text patterns rather than parsing one specific language.

| Ecosystem | Recommended ignore entries |
| --- | --- |
| Node, React, Next.js, Vite | `node_modules/`, `dist/`, `.next/`, `coverage/` |
| Laravel, PHP | `vendor/`, `storage/logs/`, `bootstrap/cache/` |
| Python | `.venv/`, `venv/`, `__pycache__/`, `.pytest_cache/` |
| Flutter | `build/`, `.dart_tool/` |

Keep `.doseignore` focused on generated files and dependencies. Avoid ignoring source directories unless the project has a strong reason.
