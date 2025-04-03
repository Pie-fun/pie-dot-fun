'use client'

import * as ToggleGroup from '@/components/ToggleGroup/ToggleGroup'
import { Icon } from '@/components/Icon/Icon'
import {
  IcDesktopOutline,
  IcMoonOutline,
  IcSunOutline,
} from '@/components/Icon/Icons'
import { useTranslations } from 'next-intl'
import { Theme, useTheme } from '@/providers/ThemeProvider/ThemeProvider'

export function ColorThemeToggleGroup() {
  const t = useTranslations()
  const { theme, setTheme } = useTheme()

  return (
    <ToggleGroup.Root
      type='single'
      size='s'
      toggleGroupType='text'
      color='primary'
      value={theme}
      onValueChange={(value: Theme) => {
        if (!value) {
          return
        }

        setTheme(value)
      }}
    >
      <ToggleGroup.Item value='light'>
        <Icon size='s'>
          <IcSunOutline />
        </Icon>
        {t('layoutHeader.colorLight')}
      </ToggleGroup.Item>
      <ToggleGroup.Item value='dark'>
        <Icon size='s'>
          <IcMoonOutline />
        </Icon>
        {t('layoutHeader.colorDark')}
      </ToggleGroup.Item>
      <ToggleGroup.Item value='system'>
        <Icon size='s'>
          <IcDesktopOutline />
        </Icon>
        {t('layoutHeader.colorSystem')}
      </ToggleGroup.Item>
    </ToggleGroup.Root>
  )
}
