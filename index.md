---
layout: home

hero:
  name: DOSE
  text: Dangerous Operations Security Enforcer
  tagline: A lightweight, bash-based security scanner that catches dangerous code patterns, secrets, and risky operations before they reach production.
  image:
    src: /assets/dose-hero.png
    alt: DOSE security scanner visual
  actions:
    - theme: brand
      text: Read the Docs
      link: /docs/
    - theme: alt
      text: Install DOSE
      link: /docs/installation
    - theme: alt
      text: GitHub
      link: https://github.com/dosescan/dose-docs

features:
  - title: Pre-Commit Enforcement
    details: Scan only staged Git files and block commits when critical findings are detected.
  - title: Full Codebase Audits
    details: Recursively scan the working tree while excluding generated, dependency, and ignored directories.
  - title: Pattern-Based Detection
    details: Catch dangerous execution, secrets, exfiltration, weak security practices, and suspicious code paths.
  - title: Parallel by Default
    details: Use CPU-aware workers so large repositories stay fast enough for daily development.
  - title: Developer-Friendly Output
    details: Get color-coded BLOCK, WARN, and SAFE results with file and line-level context.
  - title: Open Architecture
    details: Extend rules and modules without mixing scanner logic, Git integration, and pattern definitions.
---

<HeroSystem />
