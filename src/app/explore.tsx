import { Image } from 'expo-image';
import { SymbolView } from 'expo-symbols';
import React from 'react';
import { Platform, Pressable, ScrollView, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { ExternalLink } from '@/components/external-link';
import { AppText } from '@/components/shared/app-text';
import { Collapsible } from '@/components/ui/collapsible';
import { WebBadge } from '@/components/web-badge';
import { BottomTabInset, MaxContentWidth } from '@/constants/theme';

export default function TabTwoScreen() {
  const safeAreaInsets = useSafeAreaInsets();
  const insets = {
    ...safeAreaInsets,
    bottom: safeAreaInsets.bottom + BottomTabInset + 16,
  };

  const contentPlatformStyle = Platform.select({
    android: {
      paddingTop: insets.top,
      paddingLeft: insets.left,
      paddingRight: insets.right,
      paddingBottom: insets.bottom,
    },
    web: {
      paddingTop: 64,
      paddingBottom: 24,
    },
    default: {},
  });

  return (
    <ScrollView
      className="flex-1 bg-background"
      contentInset={insets}
      contentContainerStyle={[{ flexDirection: 'row', justifyContent: 'center' }, contentPlatformStyle]}>
      <View className="grow bg-background" style={{ maxWidth: MaxContentWidth }}>
        <View className="gap-4 items-center px-6 py-16">
          <AppText className="text-3xl font-semibold leading-[44px] text-foreground">Explore</AppText>
          <AppText className="text-center text-primary text-foreground">
            This starter app includes example{'\n'}code to help you get started.
          </AppText>

          <ExternalLink href="https://docs.expo.dev" asChild>
            <Pressable className="active:opacity-70">
              <View className="flex-row px-6 py-2 rounded-[32px] justify-center gap-1 items-center bg-background-element">
                <AppText className="text-sm text-blue-500">Expo documentation</AppText>
                <SymbolView
                  tintColor="var(--text)"
                  name={{ ios: 'arrow.up.right.square', android: 'link', web: 'link' }}
                  size={12}
                />
              </View>
            </Pressable>
          </ExternalLink>
        </View>

        <View className="gap-8 px-6 pt-4">
          <Collapsible title="File-based routing">
            <AppText className="text-sm font-medium text-foreground">
              This app has two screens: <AppText className="font-mono text-xs font-medium">src/app/index.tsx</AppText> and{' '}
              <AppText className="font-mono text-xs font-medium">src/app/explore.tsx</AppText>
            </AppText>
            <AppText className="text-sm font-medium text-foreground">
              The layout file in <AppText className="font-mono text-xs font-medium">src/app/_layout.tsx</AppText> sets up
              the tab navigator.
            </AppText>
            <ExternalLink href="https://docs.expo.dev/router/introduction">
              <AppText className="text-sm text-[#3c87f7] leading-[30px]">Learn more</AppText>
            </ExternalLink>
          </Collapsible>

          <Collapsible title="Android, iOS, and web support">
            <View className="items-center bg-background-element rounded-xl p-4">
              <AppText className="text-sm font-medium text-foreground">
                You can open this project on Android, iOS, and the web. To open the web version,
                press <AppText className="text-sm font-bold">w</AppText> in the terminal running this
                project.
              </AppText>
              <Image
                source={require('@/assets/images/tutorial-web.png')}
                className="w-full aspect-296/171 rounded-2xl mt-2"
              />
            </View>
          </Collapsible>

          <Collapsible title="Images">
            <AppText className="text-sm font-medium text-foreground">
              For static images, you can use the <AppText className="font-mono text-xs font-medium">@2x</AppText> and{' '}
              <AppText className="font-mono text-xs font-medium">@3x</AppText> suffixes to provide files for different
              screen densities.
            </AppText>
            <Image 
              source={require('@/assets/images/react-logo.png')} 
              className="w-[100px] h-[100px] self-center" 
            />
            <ExternalLink href="https://reactnative.dev/docs/images">
              <AppText className="text-sm text-[#3c87f7] leading-[30px]">Learn more</AppText>
            </ExternalLink>
          </Collapsible>

          <Collapsible title="Light and dark mode components">
            <AppText className="text-sm font-medium text-foreground">
              This template has light and dark mode support. The{' '}
              <AppText className="font-mono text-xs font-medium">useColorScheme()</AppText> hook lets you inspect what the
              user&apos;s current color scheme is, and so you can adjust UI colors accordingly.
            </AppText>
            <ExternalLink href="https://docs.expo.dev/develop/user-interface/color-themes/">
              <AppText className="text-sm text-[#3c87f7] leading-[30px]">Learn more</AppText>
            </ExternalLink>
          </Collapsible>

          <Collapsible title="Animations">
            <AppText className="text-sm font-medium text-foreground">
              This template includes an example of an animated component. The{' '}
              <AppText className="font-mono text-xs font-medium">src/components/ui/collapsible.tsx</AppText> component uses
              the powerful <AppText className="font-mono text-xs font-medium">react-native-reanimated</AppText> library to
              animate opening this hint.
            </AppText>
          </Collapsible>
        </View>
        {Platform.OS === 'web' && <WebBadge />}
      </View>
    </ScrollView>
  );
}

