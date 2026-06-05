# Roadmap

DOSE is already useful as a local scanner and Git hook guardrail. The long-term vision is to make it a broader security enforcement layer for open-source and team workflows.

## Planned Work

| Area | Goal |
| --- | --- |
| GitHub Actions | Provide a first-class CI security gate for pull requests. |
| SARIF output | Publish findings into GitHub Security and other code scanning tools. |
| Auto-fix guidance | Suggest safe replacements for common risky patterns. |
| Plugin system | Let teams ship custom rules without editing core scanner files. |
| Enterprise policy | Support stricter organization-level security policies. |

## Near-Term Improvements

- Expand documentation examples for each supported ecosystem.
- Improve false-positive guidance for `dose-ignore`.
- Add more dependency-file checks beyond npm.
- Provide stable release notes for each scanner version.
- Add sample repositories that demonstrate passing and failing scans.

## Project Direction

The scanner should stay lightweight, readable, and easy to install. New features should preserve the fast local developer workflow that makes DOSE useful in the first place.
