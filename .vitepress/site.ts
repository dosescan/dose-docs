import type { DefaultTheme } from 'vitepress';

export const SITE_TITLE = 'DOSE Scanner';
export const SITE_DESCRIPTION =
  'Dangerous Operations Security Enforcer: a lightweight, bash-based scanner for dangerous code patterns, secrets, and risky operations.';

export const REPO_URL = 'https://github.com/dosescan/dose-docs';
export const DOCS_SITE_URL = 'https://dosescan.github.io/dose-docs';
export const INSTALL_SCRIPT_URL = 'https://scan.softvenceomegaforce.cloud/install.sh';
export const WINDOWS_INSTALL_URL = 'https://scan.softvenceomegaforce.cloud';
export const WEB_SCANNER_URL = 'https://dose-scan.vercel.app';

export const nav: DefaultTheme.NavItem[] = [
  { text: 'Blog', link: '/blog/' },
  { text: 'Docs', link: '/docs/' },
  { text: 'Web Scanner', link: WEB_SCANNER_URL },
  { text: 'GitHub', link: REPO_URL }
];

export const sidebar: DefaultTheme.Sidebar = {
  '/docs/': [
    {
      text: 'Start Here',
      items: [
        { text: 'Overview', link: '/docs/' },
        { text: 'Installation', link: '/docs/installation' },
        { text: 'Quick Start', link: '/docs/quick-start' },
        { text: 'Web Scanner', link: '/docs/web-scanner' }
      ]
    },
    {
      text: 'Using DOSE',
      items: [
        { text: 'CLI Reference', link: '/docs/cli' },
        { text: 'Configuration', link: '/docs/configuration' },
        { text: 'Security Patterns', link: '/docs/patterns' }
      ]
    },
    {
      text: 'Project Guide',
      items: [
        { text: 'Integrations', link: '/docs/integrations' },
        { text: 'Architecture', link: '/docs/architecture' },
        { text: 'Contributing', link: '/docs/contributing' },
        { text: 'Roadmap', link: '/docs/roadmap' }
      ]
    }
  ],
  '/blog/': [
    {
      text: 'Release Notes',
      items: [
        { text: 'All Posts', link: '/blog/' },
        { text: 'Announcing DOSE 1.0', link: '/blog/v1.0' }
      ]
    }
  ]
};

export const socialLinks: DefaultTheme.SocialLink[] = [
  { icon: 'github', link: REPO_URL }
];
