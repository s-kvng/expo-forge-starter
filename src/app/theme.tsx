import { View } from 'react-native'
import React from 'react'
import { AppText } from '@/components/shared/app-text'
import { ThemeSwitcher } from '@/components/shared/theme-switcher'

const ThemeScreen = () => {
  return (
    <View className="flex-1 items-center justify-center">
      <AppText className="text-3xl font-semibold leading-[44px]">Themes</AppText>
      <ThemeSwitcher />
    </View>
  )
}

export default ThemeScreen