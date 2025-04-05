import { Typography } from '@/components/Typography/Typography'
import { useFormContext } from 'react-hook-form'
import { Button } from '@/components/Button/Button'
import { useTranslations } from 'next-intl'
import BigNumber from 'bignumber.js'
import { BuyAndSellSchema } from '@/app/[locale]/baskets/[chain]/[address]/useBuyAndSellSchema'
import { useQuery } from '@tanstack/react-query'
import { getTokenBalanceQuery } from '@/app/api/backend/v1/pieProgram/queries'
import { useSolana } from '@/hooks/useSolana'
import { PieProgram } from '@pie-fun/pie-dot-fun-solana'
import { FirstParameter } from '@/types/utility'
import { DECIMALS } from '@/constants/blockChains'

type SetBasketTokenAmountToSellButtonsProps = {
  mint: FirstParameter<typeof PieProgram.prototype.getTokenBalance>['mint']
  owner: FirstParameter<typeof PieProgram.prototype.getTokenBalance>['owner']
}

export function SetBasketTokenAmountToSellButtons({
  mint,
  owner,
}: Readonly<SetBasketTokenAmountToSellButtonsProps>) {
  const t = useTranslations()
  const form = useFormContext<BuyAndSellSchema>()
  const { connection, cluster } = useSolana()
  const suggestAmounts = [0.1, 0.25, 0.5, 1]

  const { data } = useQuery({
    ...getTokenBalanceQuery({
      cluster: cluster.network,
      connection,
      mint,
      owner,
    }),
  })

  const quantity = data
    ? new BigNumber(data).dividedBy(10 ** DECIMALS.BASKET_TOKEN).toString()
    : undefined

  return (
    <>
      {quantity &&
        suggestAmounts.map((suggestAmount) => {
          const amount = new BigNumber(quantity).times(suggestAmount)

          return (
            <Button
              key={suggestAmount}
              layout='fillWidth'
              buttonType='outline'
              size='s'
              color='secondary'
              onClick={() => {
                form.setValue('sellAmount', amount.toString(), {
                  shouldValidate: true,
                  shouldDirty: true,
                })

                form.setFocus('sellAmount')
              }}
            >
              <Typography typography='body2' fontWeight='regular'>
                {suggestAmount === 1
                  ? t('basketTradingButton.max')
                  : `${suggestAmount * 100}%`}
              </Typography>
            </Button>
          )
        })}
    </>
  )
}
