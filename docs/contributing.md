# Contributing

DOSE is open source and benefits from practical security rules, focused bug reports, platform testing, and documentation improvements.

## Contribution Principles

| Principle | Expectation |
| --- | --- |
| Keep rules high-signal | Prefer fewer meaningful findings over broad noisy matching. |
| Preserve the shell-first design | Avoid adding runtime dependencies unless the benefit is clear. |
| Keep modules focused | Put code in the module that already owns the responsibility. |
| Document behavior | Update docs when CLI flags, install behavior, or rule categories change. |
| Test with real repositories | Rules should catch risky patterns without punishing normal code. |

## Before Opening a Pull Request

1. Run a staged scan on your changes.
2. Run a full scan on the repository.
3. Check installer or update changes on the relevant platform.
4. Update documentation for user-facing behavior.

```bash
dose-scan --staged
dose-scan --all
```

## Adding a Pattern

Choose the correct severity:

| Severity | Use when |
| --- | --- |
| Blocking | The pattern usually represents credential exposure, dangerous execution, destructive behavior, persistence, or exfiltration. |
| Warning | The pattern is suspicious but often appears in legitimate development code. |

Add a clear label and a focused regex. Avoid broad expressions that match common safe code.

## Reporting Issues

When reporting a false positive or missed detection, include:

- The language or framework.
- The smallest code sample that reproduces the behavior.
- Whether it should block, warn, or be ignored.
- Your operating system and shell if the issue affects scanning or installation.

## Security Reports

If you discover a vulnerability in the scanner, installer, update flow, or release distribution process, avoid posting exploit details publicly before the maintainer has a chance to review the report.
