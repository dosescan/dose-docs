# CLI Reference

The installed command is:

```bash
dose-scan [OPTIONS]
```

When no option is passed, DOSE defaults to staged-file scanning.

## Options

| Option | Description |
| --- | --- |
| `--staged` | Scan only files currently staged in Git. This is the default mode. |
| `--all` | Scan all readable text files in the current directory recursively. |
| `--init` | Create `.githooks` hooks and configure Git to use them. |
| `--update` | Update DOSE to the latest stable release from the release server. |
| `--version`, `-v` | Show version and maintainer information. |
| `--help`, `-h` | Show command help. |

## Examples

Scan staged files:

```bash
dose-scan
```

or:

```bash
dose-scan --staged
```

Run a full project audit:

```bash
dose-scan --all
```

Initialize Git hooks:

```bash
dose-scan --init
```

Update the scanner:

```bash
dose-scan --update
```

## Exit Codes

| Exit code | Meaning | Workflow result |
| --- | --- | --- |
| `0` | Clean scan or warnings only | Continue |
| `1` | Blocking issues found | Stop and fix |
| `127` | Internal script failure | Inspect the local installation |

## Staged Scan Behavior

In staged mode, DOSE asks Git for the staged file list with:

```bash
git diff --cached --name-only --diff-filter=ACMR
```

For each staged file, it tries to read content from the Git index. This keeps the scan aligned with what will be committed, even if the working tree has additional unstaged edits.

## Full Scan Behavior

In full scan mode, DOSE recursively walks the current directory, skips common generated or dependency paths, filters files through `.doseignore`, and scans readable text files only.

Skipped paths include `.git`, `node_modules`, `vendor`, `dist`, and `build`.
