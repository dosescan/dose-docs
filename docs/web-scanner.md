# Web Scanner

The hosted Dose Scan web app gives developers a browser-based way to scan GitHub repositories without installing the local CLI first.

Open it here:

[Launch Dose Scan Web Scanner](https://dose-scan.vercel.app)

## What It Does

Dose Scan connects to GitHub through OAuth, loads repositories from your account, and scans repository contents for suspicious signatures. It is designed for developers who want to review a whole GitHub profile or quickly inspect several repositories from one dashboard.

The web scanner is useful when you want to:

- Sign in with GitHub instead of installing a local command.
- View public and private repositories in one place.
- Scan one repository or review many repositories from your account.
- See suspicious files, line references, and signature labels.
- Open findings directly in GitHub for review.

## Web App Highlights

| Feature | Purpose |
| --- | --- |
| GitHub OAuth | Sign in securely with your GitHub account. |
| Repository dashboard | Browse repositories connected to the authenticated profile. |
| Parallel scanning | Review larger GitHub accounts faster. |
| Focused notices | See suspicious signatures as reviewable findings. |
| GitHub file links | Jump from a finding to the matching source file. |
| No result database | Scan results are not designed to be stored as persistent public records. |

## How To Use It

1. Open [dose-scan.vercel.app](https://dose-scan.vercel.app).
2. Choose **Continue with GitHub**.
3. Review the GitHub authorization screen and only continue if the requested permissions match your workflow.
4. Select a repository, or scan across your account.
5. Review notices with file paths, line numbers, and signature labels.
6. Open findings in GitHub and decide what should be fixed.

## Web Scanner vs CLI

| Use case | Best option |
| --- | --- |
| Scan a GitHub profile from the browser | Web scanner |
| Review public and private repos through GitHub OAuth | Web scanner |
| Block risky staged commits locally | CLI |
| Add pre-commit or pre-push Git hooks | CLI |
| Run scans inside local development workflows | CLI |

Many teams can use both: the web scanner for profile-level review and the CLI for fast local enforcement before commits and pushes.

## Security Notes

The web scanner uses GitHub OAuth, so you should review the GitHub permission screen before approving access. Keep permissions limited to the repositories and workflows you actually need.

The current hosted experience presents findings as review notices. It is intended to help developers inspect suspicious code paths and decide what should be changed.

For security-sensitive repositories, follow your organization's access policy before authorizing any third-party GitHub application.
