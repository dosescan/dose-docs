# DOSE Docs

Public documentation site for **DOSE Scanner**, the Dangerous Operations Security Enforcer.

DOSE is a lightweight security scanner for development workflows. It helps developers catch dangerous code patterns, exposed secrets, suspicious operations, and risky changes before they reach production.

This repository contains the documentation website only. It is public so the community can read, improve, and update the docs without exposing the private scanner codebase.

## Website

- Documentation site: <https://dosescan.github.io/dose-docs>
- Public docs repository: <https://github.com/dosescan/dose-docs>

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

## Updating The Docs

This repository is open to updates. Contributions are welcome for:

- Fixing typos or unclear explanations
- Improving installation, quick start, or CLI examples
- Adding integration guides
- Updating screenshots, diagrams, or homepage content
- Improving accessibility, layout, and developer experience

Please keep changes focused on documentation and website behavior. Do not include private scanner source code, internal release files, secrets, credentials, or unpublished implementation details.

## Project Notes

The DOSE scanner itself is distributed through the official install and update flow documented on the site. This docs repository should link to `dosescan/dose-docs` for public GitHub references.

## License

Documentation licensing details will be added here when finalized.
