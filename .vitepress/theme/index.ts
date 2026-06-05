import DefaultTheme from 'vitepress/theme';
import type { Theme } from 'vitepress';
import HeroSystem from './components/HeroSystem.vue';
import './styles.css';

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('HeroSystem', HeroSystem);
  }
} satisfies Theme;
