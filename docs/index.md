# DOSE Documentation

DOSE, short for Dangerous Operations Security Enforcer, is a lightweight security scanner for development workflows. It is written in Bash, scans code with regex-based security rules, and is designed to run before commits as well as during full-project audits.

The project has one practical goal: catch dangerous, insecure, or suspicious code patterns early, while the change is still easy to understand and fix.

## What DOSE Checks

DOSE looks for high-signal patterns across text files:

| Area | Examples |
| --- | --- |
| Dangerous execution | `eval`, shell execution, process spawning, dynamic imports |
| Secrets exposure | API keys, bearer tokens, private keys, database URLs |
| Data exfiltration | suspicious `curl`, `wget`, DNS tools, reverse shell indicators |
| Unsafe practices | debug logs, weak crypto, disabled SSL verification, path traversal |
| Dependency risk | unpinned npm dependency ranges in `package.json` |

## How It Fits Development

Use DOSE in two primary ways:

1. Run `dose-scan --staged` before a commit or inside a pre-commit hook.
2. Run `dose-scan --all` when you want a full working-tree security audit.

Blocking findings return exit code `1`. Warning-only scans return exit code `0`, so they can inform developers without stopping the workflow.

## Design Principles

| Principle | Meaning |
| --- | --- |
| DRY | Shared scanner logic is reused across staged and full scans. |
| Fail fast | Critical patterns block unsafe commits immediately. |
| Zero noise | Default rules should represent meaningful review signals. |
| Performance first | Parallel workers are used by default for real scans. |
| Extensible modules | Patterns, Git integration, file handling, and scanner output stay separate. |

## Next Steps

- Install DOSE from the stable update server: [Installation](/docs/installation)
- Run the scanner for the first time: [Quick Start](/docs/quick-start)
- Review supported options: [CLI Reference](/docs/cli)
- Understand rule behavior: [Security Patterns](/docs/patterns)
