# Configuration

DOSE is intentionally small. The main project-level configuration surface is `.doseignore`, which lets a repository exclude files or directories from scans.

## `.doseignore`

Create a `.doseignore` file in the project root:

```text
# Dependency folders
node_modules/
vendor/

# Build output
dist/
build/
coverage/

# Generated assets
*.png
*.jpg
*.lock
```

Blank lines and comments are ignored.

## Default Exclusions

Full scans already skip common noisy directories:

| Path | Reason |
| --- | --- |
| `.git/` | Repository internals |
| `node_modules/` | Third-party dependencies |
| `vendor/` | Third-party dependencies |
| `dist/` | Generated build output |
| `build/` | Generated build output |

Use `.doseignore` for project-specific generated files, fixture data, lock files, snapshots, and assets that should not be scanned.

## Ignoring a Reviewed Finding

DOSE supports a `dose-ignore` marker for intentional false positives. Use it sparingly and keep the reason close to the code in your review or commit message.

```js
// dose-ignore
const safeFixture = "Bearer token-looking test fixture";
```

The scanner treats the marker as a signal to skip the matching line or the next line, depending on how the marker is placed.

## Environment Overrides

The update and install scripts support release-server overrides for mirrors and controlled environments.

| Variable | Purpose |
| --- | --- |
| `DOSE_RELEASE_BASE_URL` | Override the base release server URL. |
| `DOSE_RELEASE_VERSION_URL` | Override the version metadata URL used by updates. |
| `DOSE_RELEASE_ARCHIVE_URL` | Override the release archive URL. |
| `DOSE_INSTALL_DIR` | Override the Windows install directory. |

Use these only when you operate a trusted internal mirror or need custom installation paths.
