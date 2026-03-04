import React, { type ReactNode } from 'react';
import { View } from 'react-native';

import { AppText } from './shared/app-text';

type HintRowProps = {
  title?: string;
  hint?: ReactNode;
};

export function HintRow({ title = 'Try editing', hint = 'app/index.tsx' }: HintRowProps) {
  return (
    <View className="flex-row justify-between">
      <AppText className="text-sm font-medium">{title}</AppText>
      <View className="bg-background-selected rounded-lg py-0.5 px-2">
        <AppText className="text-secondary">
          {hint}
        </AppText>
      </View>
    </View>
  );
}

