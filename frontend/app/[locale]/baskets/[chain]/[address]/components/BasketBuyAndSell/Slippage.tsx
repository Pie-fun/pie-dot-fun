'use client'

import * as Form from '@/components/Form/Form'
import * as Card from '@/components/Card/Card'
import { useTranslations } from 'next-intl'
import { useFormContext, useWatch } from 'react-hook-form'
import { Input } from '@/components/Input/Input'
import { Button } from '@/components/Button/Button'
import { Icon } from '@/components/Icon/Icon'
import { IcSettingSliderOutline } from '@/components/Icon/Icons'
import { Typography } from '@/components/Typography/Typography'
import { SLIPPAGE_PERCENTAGE } from '@/constants/blockChains'
import { BuyAndSellSchema } from '@/app/[locale]/baskets/[chain]/[address]/useBuyAndSellSchema'
import { Box } from '@/components/Box/Box'
import { getUnFormattedNumber } from '@/utils/getUnFormattedNumber'
import BigNumber from 'bignumber.js'

export function Slippage() {
  const t = useTranslations()
  const form = useFormContext<BuyAndSellSchema>()
  const { isShowSlippage } = useWatch({ control: form.control })

  return (
    <Box layout='fillWidth' orientation='vertical' gap='xxs'>
      <Box layout='fillWidth' align='end'>
        <Button
          buttonType='text'
          color='secondary'
          size='squareS'
          onClick={() => form.setValue('isShowSlippage', !isShowSlippage)}
        >
          <Icon size='s'>
            <IcSettingSliderOutline />
          </Icon>
        </Button>
      </Box>
      {isShowSlippage && (
        <Card.Root background='primary' border='default' size='m'>
          <Card.Header>
            <Box layout='fillWidth' orientation='vertical' gap='s'>
              <Typography typography='body2' fontWeight='bold' color='primary'>
                {t('basketSlippageSetting.title')}
              </Typography>
              <Form.Field
                control={form.control}
                name='slippage'
                render={({ field, fieldState }) => {
                  return (
                    <Form.Item>
                      <Form.Control>
                        <Input
                          {...field}
                          inputMode='decimal'
                          size='s'
                          placeholder={`${SLIPPAGE_PERCENTAGE.default}%`}
                          isError={!!fieldState.error}
                          format={{ mode: 'number', isAbs: true }}
                          suffixContent={
                            <Typography
                              typography='caption1'
                              fontWeight='regular'
                              color='tertiary'
                            >
                              %
                            </Typography>
                          }
                          onChange={(event) => {
                            const unFormattedNumber = getUnFormattedNumber({
                              value: event.target.value,
                            })

                            const isValidMinSlippage = new BigNumber(
                              unFormattedNumber,
                            ).isGreaterThanOrEqualTo(SLIPPAGE_PERCENTAGE.min)

                            const isValidMaxSlippage = new BigNumber(
                              unFormattedNumber,
                            ).isLessThanOrEqualTo(SLIPPAGE_PERCENTAGE.max)

                            if (unFormattedNumber && !isValidMinSlippage) {
                              event.target.value = SLIPPAGE_PERCENTAGE.min
                            }

                            if (unFormattedNumber && !isValidMaxSlippage) {
                              event.target.value = SLIPPAGE_PERCENTAGE.max
                            }

                            field.onChange(event)
                          }}
                        />
                      </Form.Control>
                    </Form.Item>
                  )
                }}
              />
              <Typography
                typography='body2'
                fontWeight='regular'
                color='secondary'
              >
                {t('basketSlippageSetting.description')}
              </Typography>
            </Box>
          </Card.Header>
          <Card.Footer />
        </Card.Root>
      )}
    </Box>
  )
}
