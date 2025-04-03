'use client'

import { Button } from '@/components/Button/Button'
import { useTranslations } from 'next-intl'
import { Typography } from '@/components/Typography/Typography'
import { ComponentProps } from 'react'
import * as List from '@/components/List/List'

export function Trigger({ ...props }: ComponentProps<typeof Button>) {
  const t = useTranslations()

  return (
    <Button
      layout='fillWidth'
      buttonType='outline'
      shape='square'
      color='secondary'
      size='s'
      {...props}
    >
      {t('basketDiscontinuation.viewFullDisclaimer')}
    </Button>
  )
}

export function Title({ ...props }: ComponentProps<typeof Typography>) {
  const t = useTranslations()

  return (
    <Typography typography='title4' fontWeight='bold' {...props}>
      {t('basketDiscontinuation.riskFactors.title')}
    </Typography>
  )
}

export function Factors({ ...props }: ComponentProps<typeof List.Root>) {
  const t = useTranslations()

  return (
    <Typography typography='body2' fontWeight='regular' color='secondary'>
      <List.Root listStyleType='disc' {...props}>
        <List.Item>
          {t('basketDiscontinuation.riskFactors.descriptionValue')}
        </List.Item>
        <List.Item>
          {t('basketDiscontinuation.riskFactors.descriptionLimit')}
        </List.Item>
        <List.Item>
          {t('basketDiscontinuation.riskFactors.descriptionOperation')}
        </List.Item>
        <List.Item>
          {t('basketDiscontinuation.riskFactors.descriptionOwnRisk')}
        </List.Item>
        <List.Item>
          {t('basketDiscontinuation.riskFactors.descriptionSubject')}
        </List.Item>
        <List.Item>
          {t('basketDiscontinuation.riskFactors.descriptionTrade')}
        </List.Item>
      </List.Root>
      {t('basketDiscontinuation.riskFactors.descriptionAccept')}
    </Typography>
  )
}

export function Close({ ...props }: ComponentProps<typeof Button>) {
  const t = useTranslations()

  return (
    <Button
      layout='fillWidth'
      buttonType='solid'
      shape='square'
      color='primary'
      size='m'
      {...props}
    >
      <Typography typography='body1' fontWeight='bold'>
        {t('common.close')}
      </Typography>
    </Button>
  )
}
