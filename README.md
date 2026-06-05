# DOSE Docs

Public documentation site for **DOSE Scanner**, the Dangerous Operations Security Enforcer.

DOSE is a lightweight security scanner for development workflows. It helps developers catch dangerous code patterns, exposed secrets, suspicious operations, and risky changes before they reach production.

This repository contains the documentation website only. It is public so the community can read, improve, and update the docs without exposing the private scanner codebase.

## Website

- Documentation site: <https://dosescan.github.io>
- Public docs repository: <https://github.com/dosescan/dose-docs>

## Deployment

The site deploys continuously to GitHub Pages from the `main` branch using GitHub Actions.

To enable it in GitHub:

1. Open the repository settings.
2. Go to **Pages**.
3. Set **Source** to **GitHub Actions**.

After that, every push to `main` will build and publish the site at:

<https://dosescan.github.io/>

GitHub only serves a site at the root `https://dosescan.github.io/` when the Pages repository is named `dosescan.github.io`. If this code stays in a project repository named `dose-docs`, GitHub Pages will publish it under `/dose-docs/` instead. For the root domain, move or mirror this site into the `dosescan.github.io` repository and keep **Settings -> Pages -> Source -> GitHub Actions** enabled there.

## What Is Inside

- `index.md` - homepage content
- `docs/` - documentation pages
- `.vitepress/` - VitePress configuration and custom theme code
- `public/` - static assets used by the site

## Local Development

Install dependencies:

```bash
npm install
```

Start the local docs server:

```bash
npm run dev
```

Build the static site:

```bash
npm run build
```

Run TypeScript checks:

```bash
npm run typecheck
```

## Contributing

This public repository is open to updates. Contributions to `dose-docs` are welcome for:

- Fixing typos or unclear explanations
- Improving installation, quick start, or CLI examples
- Adding integration guides
- Updating screenshots, diagrams, or homepage content
- Improving accessibility, layout, and developer experience

Please keep changes focused on documentation and website behavior. Do not include private scanner source code, internal release files, secrets, credentials, or unpublished implementation details.

If you are interested in contributing to the private `dose-scan` scanner project itself, you are welcome to reach out to the maintainer first. Scanner source contributions are handled privately so the codebase, release process, and security-sensitive implementation details stay protected.

## Project Notes

The DOSE scanner itself is distributed through the official install and update flow documented on the site. This docs repository should link to `dosescan/dose-docs` for public GitHub references.

## License

Documentation licensing details will be added here when finalized.
