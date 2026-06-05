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
      text: Try Web Scanner
      link: https://dose-scan.vercel.app

features:
  - title: Hosted GitHub Scanner
    details: Sign in with GitHub and scan repositories across your profile from the web dashboard.
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

<section class="web-scanner-promo">
  <div>
    <p class="home-kicker">Web scanner for GitHub profiles</p>
    <h2>Scan your repositories from a secure GitHub dashboard.</h2>
    <p>
      Prefer a browser workflow? Dose Scan connects with GitHub OAuth, lists your repositories,
      scans public and private projects, and turns suspicious signatures into focused review notices
      with direct links back to GitHub files.
    </p>
  </div>
  <a href="https://dose-scan.vercel.app" target="_blank" rel="noreferrer">Open Web Scanner</a>
</section>
