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
      link: https://github.com/devlopersabbir/dose-scan

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

<section class="home-band">
  <div class="home-band__inner">
    <div>
      <p class="home-kicker">Security that fits the commit loop</p>
      <h2>Find dangerous changes while they are still small enough to fix.</h2>
      <p>
        DOSE is built for the moment before code leaves a developer machine. It scans staged files for high-risk
        patterns, warns on risky practices, and keeps the output focused on findings that deserve attention.
      </p>
    </div>
    <ul class="workflow-list">
      <li>
        <span class="status-chip status-chip--block">BLOCK</span>
        <span><strong>Critical patterns</strong> stop commits until the issue is fixed or intentionally reviewed.</span>
      </li>
      <li>
        <span class="status-chip status-chip--warn">WARN</span>
        <span><strong>Suspicious patterns</strong> stay visible without breaking the developer workflow.</span>
      </li>
      <li>
        <span class="status-chip status-chip--safe">SAFE</span>
        <span><strong>Clean scans</strong> confirm the checked files passed the configured rule set.</span>
      </li>
    </ul>
  </div>

  <pre class="terminal-preview"><code><span class="line-safe">$ dose-scan --staged</span>
DOSE Scanner (--staged)
Discovered 8 candidate files.
Scanning 8 text files with 8 parallel workers.

src/config.ts
  <span class="line-danger">BLOCK</span> Generic secret
    Location: src/config.ts:14

src/debug.ts
  <span class="line-warning">WARN</span> Console logging

Commit blocked. Fix BLOCK items, then run DOSE again.</code></pre>
</section>
