import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useUniwind } from 'uniwind'

import { AnimatedSplashOverlay } from '@/components/animated-icon';
import AppTabs from '@/components/app-tabs';
import { RootProvider } from '@/providers/root-provider';

export default function TabLayout() {
  const { theme } = useUniwind()
  console.log("theme ", DarkTheme)
  return (
    <RootProvider>
      <ThemeProvider value={theme === 'dark' ? DarkTheme : DefaultTheme}>
        <AnimatedSplashOverlay />
        <AppTabs />
      </ThemeProvider>
    </RootProvider>
  );
}
