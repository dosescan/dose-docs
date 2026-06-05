# Contributing

The public `dosescan/dose-docs` repository is open for documentation and website contributions. If you want to improve the docs, examples, release notes, installation guidance, or site experience, pull requests are welcome.

The `dose-scan` scanner codebase is private. Developers who feel comfortable contributing to the scanner itself are welcome too, but scanner contributions are handled privately. Please contact the maintainer first so access, scope, and security-sensitive details can be reviewed before any code is shared.

## What You Can Contribute Publicly

- Documentation fixes and clearer explanations.
- Installation, quick start, and CLI examples.
- Integration guides for Git hooks, CI, and team workflows.
- Blog posts, release notes, and roadmap updates.
- Website layout, accessibility, and developer experience improvements.

## Contribution Principles

| Principle | Expectation |
| --- | --- |
| Keep rules high-signal | Prefer fewer meaningful findings over broad noisy matching. |
| Preserve the shell-first design | Avoid adding runtime dependencies unless the benefit is clear. |
| Keep docs focused | Put content in the page that already owns the topic. |
| Document behavior | Update docs when CLI flags, install behavior, or rule categories change. |
| Test with real repositories | Rules should catch risky patterns without punishing normal code. |

## Before Opening a Docs Pull Request

1. Keep the change focused on public documentation or site behavior.
2. Avoid adding private source code, internal release files, credentials, or unpublished implementation details.
3. Run the docs checks when possible.
4. Update related pages when a change affects navigation, installation, or examples.

```bash
npm run typecheck
npm run build
```

## Contributing To dose-scan Privately

If you want to contribute scanner rules, platform fixes, installer behavior, or core scanner code, please contact the maintainer first. The maintainer can discuss the idea privately and decide whether to provide access or request a patch through a private channel.

Please do not open public issues or pull requests that include private scanner source, exploit details, internal release URLs beyond the documented public installer, secrets, credentials, or sensitive security implementation details.

## Reporting Issues

When reporting a false positive or missed detection, include:

- The language or framework.
- The smallest code sample that reproduces the behavior.
- Whether it should block, warn, or be ignored.
- Your operating system and shell if the issue affects scanning or installation.

General documentation issues can be reported publicly in `dosescan/dose-docs`. Sensitive scanner issues should be sent privately to the maintainer.

## Security Reports

If you discover a vulnerability in the scanner, installer, update flow, or release distribution process, avoid posting exploit details publicly before the maintainer has a chance to review the report.
