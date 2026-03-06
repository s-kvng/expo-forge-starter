import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useUniwind } from 'uniwind'

import { AnimatedSplashOverlay } from '@/components/animated-icon';
import AppTabs from '@/components/app-tabs';

export default function TabLayout() {
  const { theme } = useUniwind()
  return (
    <ThemeProvider value={theme === 'dark' ? DarkTheme : DefaultTheme}>
      <AnimatedSplashOverlay />
      <AppTabs />
    </ThemeProvider>
  );
}
