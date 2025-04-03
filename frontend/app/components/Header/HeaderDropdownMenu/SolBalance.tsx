import * as KeyValue from '@/components/KeyValue/KeyValue'
import { CurrencyWithQuantity } from '@/components/CurrencyWithQuantity/CurrencyWithQuantity'
import { Typography } from '@/components/Typography/Typography'
import { useSolana } from '@/hooks/useSolana'
import { useQuery } from '@tanstack/react-query'
import { getBalanceQuery } from '@/app/api/external/node/v1/solana/queries'
import { useUser } from '@/libs/api/useUser'
import { POLLING_INTERVAL } from '@/constants/common'
import { getLamportsToSol } from '@/libs/solana-web3/getLamportsToSol'
import { useTranslations } from 'next-intl'
import { SYMBOL_FROM_CHAIN_TYPE } from '@/constants/blockChains'

export function SolBalance() {
  const t = useTranslations()
  const { wallet } = useUser({ vmType: 'SVM' })
  const { connection } = useSolana()

  const { data: lamports } = useQuery({
    ...getBalanceQuery({
      connection,
      address: wallet?.address!,
    }),
    enabled: !!wallet?.address,
    refetchInterval: POLLING_INTERVAL.SECONDARY,
  })

  return (
    <KeyValue.Root orientation='horizontal' gap='m'>
      <KeyValue.Key>
        <Typography typography='caption2' fontWeight='regular'>
          {t('currency.ticker', {
            ticker: SYMBOL_FROM_CHAIN_TYPE.SOLANA,
          })}
        </Typography>
      </KeyValue.Key>
      <KeyValue.Value>
        <Typography typography='caption2' fontWeight='regular' color='primary'>
          <CurrencyWithQuantity
            currencyType='crypto'
            fontWeight='regular'
            size='s'
            value={getLamportsToSol({ lamports: lamports ?? 0 })}
          />
        </Typography>
      </KeyValue.Value>
    </KeyValue.Root>
  )
}
