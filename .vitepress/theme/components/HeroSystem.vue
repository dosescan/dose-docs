<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue';

type Mode = 'install' | 'scan' | 'hooks';

const modes: Array<{
  id: Mode;
  label: string;
  eyebrow: string;
  title: string;
  summary: string;
  command: string;
  lines: string[];
  stats: Array<{ label: string; value: string }>;
}> = [
  {
    id: 'install',
    label: 'Install',
    eyebrow: 'Bootstrap',
    title: 'Install the guardrail in one terminal move.',
    summary:
      'Developers can pull the stable installer, verify the command, and keep the scanner ready before the next commit.',
    command: 'curl -sSL https://scan.softvenceomegaforce.cloud/install.sh | bash',
    lines: [
      'Resolving latest stable release...',
      'Installing binary into ~/.dose-scan',
      'Linking global dose-scan command',
      'Verifying executable and release metadata',
      'Ready: dose-scan is available in this shell'
    ],
    stats: [
      { label: 'Shell', value: 'Bash' },
      { label: 'Install path', value: '~/.dose-scan' },
      { label: 'Command', value: 'dose-scan' }
    ]
  },
  {
    id: 'scan',
    label: 'Scan',
    eyebrow: 'Pre-commit',
    title: 'Scan staged changes before risky code escapes.',
    summary:
      'DOSE checks exactly what is about to be committed, highlights blocking patterns, and keeps warnings visible.',
    command: 'dose-scan --staged',
    lines: [
      'Discovered 8 staged files',
      'Scanning text files with 8 parallel workers',
      'BLOCK Generic secret at src/config.ts:14',
      'WARN Console logging at src/debug.ts:9',
      'Commit blocked until BLOCK findings are fixed'
    ],
    stats: [
      { label: 'Files', value: '8' },
      { label: 'Workers', value: '8' },
      { label: 'Exit', value: '1' }
    ]
  },
  {
    id: 'hooks',
    label: 'Hooks',
    eyebrow: 'Git workflow',
    title: 'Wire security checks directly into Git.',
    summary:
      'Initialize hooks once, then let staged scans protect commits and full scans review the project before push.',
    command: 'dose-scan --init',
    lines: [
      'Creating .git/hooks/pre-commit',
      'Writing staged scan command',
      'Creating .git/hooks/pre-push',
      'Writing full audit command',
      'Hooks installed: commits and pushes are protected'
    ],
    stats: [
      { label: 'Pre-commit', value: 'staged' },
      { label: 'Pre-push', value: 'all' },
      { label: 'Setup', value: 'once' }
    ]
  }
];

const activeMode = ref<Mode>('scan');
const progress = ref(78);
let timer: ReturnType<typeof setInterval> | undefined;

const active = computed(() => modes.find((mode) => mode.id === activeMode.value) ?? modes[1]);

onMounted(() => {
  timer = setInterval(() => {
    progress.value = progress.value >= 96 ? 42 : progress.value + 7;
  }, 900);
});

onUnmounted(() => {
  if (timer) {
    clearInterval(timer);
  }
});
</script>

<template>
  <section class="home-system" aria-label="Interactive DOSE system preview">
    <div class="home-system__intro">
      <p class="home-kicker">Security that fits the commit loop</p>
      <h2>Make the first scan feel fast, obvious, and hard to ignore.</h2>
      <p>
        DOSE is built for the moment before code leaves a developer machine. Explore how installation,
        staged scanning, and Git hooks work together without leaving the homepage.
      </p>
    </div>

    <div class="system-shell">
      <div class="system-shell__sidebar">
        <button
          v-for="mode in modes"
          :key="mode.id"
          class="system-mode"
          :class="{ 'system-mode--active': activeMode === mode.id }"
          type="button"
          @click="activeMode = mode.id"
        >
          <span>{{ mode.label }}</span>
          <small>{{ mode.eyebrow }}</small>
        </button>
      </div>

      <div class="system-shell__body">
        <div class="system-shell__header">
          <div>
            <span class="system-pill">{{ active.eyebrow }}</span>
            <h3>{{ active.title }}</h3>
          </div>
          <div class="scanner-orbit" aria-hidden="true">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <p class="system-summary">{{ active.summary }}</p>

        <div class="scan-panel">
          <div class="scan-panel__top">
            <span class="terminal-dot terminal-dot--red"></span>
            <span class="terminal-dot terminal-dot--yellow"></span>
            <span class="terminal-dot terminal-dot--green"></span>
            <code>{{ active.command }}</code>
          </div>
          <div class="scan-meter" aria-label="Scan progress">
            <span :style="{ width: `${progress}%` }"></span>
          </div>
          <ol class="scan-lines">
            <li v-for="line in active.lines" :key="line">
              <span class="scan-pulse"></span>
              <code>{{ line }}</code>
            </li>
          </ol>
        </div>

        <div class="system-stats" aria-label="Mode statistics">
          <div v-for="stat in active.stats" :key="stat.label">
            <strong>{{ stat.value }}</strong>
            <span>{{ stat.label }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
