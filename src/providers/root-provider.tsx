import { HeroUINativeConfig, HeroUINativeProvider } from 'heroui-native';
import { useCallback } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { KeyboardAvoidingView, KeyboardProvider } from 'react-native-keyboard-controller';
import { AppThemeProvider } from '@/context/app-theme-context';

export function RootProvider({ children }: { children: React.ReactNode }) {

     const contentWrapper = useCallback(
    (children: React.ReactNode) => (
      <KeyboardAvoidingView
        pointerEvents="box-none"
        behavior="padding"
        keyboardVerticalOffset={12}
        style={{ flex: 1 }}
      >
        {children}
      </KeyboardAvoidingView>
    ),
    []
  );

  const config: HeroUINativeConfig = {
    toast: {
      contentWrapper,
    },
    devInfo: {
      stylingPrinciples: false,
    },
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <KeyboardProvider>
        <AppThemeProvider>
          <HeroUINativeProvider
          config={config}
          >
            {children}
          </HeroUINativeProvider>
          </AppThemeProvider>
      </KeyboardProvider>
    </GestureHandlerRootView>
  );
}