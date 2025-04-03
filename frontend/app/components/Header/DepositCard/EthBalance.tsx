import * as KeyValue from '@/components/KeyValue/KeyValue'
import { CurrencyWithQuantity } from '@/components/CurrencyWithQuantity/CurrencyWithQuantity'
import { Typography } from '@/components/Typography/Typography'
import { useUser } from '@/libs/api/useUser'
import { POLLING_INTERVAL } from '@/constants/common'
import { useTranslations } from 'next-intl'
import { Icon } from '@/components/Icon/Icon'
import { IcEthereumFixedColorFill } from '@/components/Icon/Icons'
import { useBalance } from 'wagmi'
import { EthereumAddress } from '@/types/utility'
import { mainnet, sepolia } from 'viem/chains'
import { formatEther } from 'viem'
import { SYMBOL_FROM_CHAIN_TYPE } from '@/constants/blockChains'

export function EthBalance() {
  const t = useTranslations()
  const { wallet } = useUser({ vmType: 'EVM' })

  const { data: balance } = useBalance({
    address: wallet?.address! as EthereumAddress,
    chainId:
      process.env.NEXT_PUBLIC_IS_USE_TESTNET === 'true'
        ? sepolia.id
        : mainnet.id,
    query: {
      enabled: !!wallet?.address,
      refetchInterval: POLLING_INTERVAL.SECONDARY,
    },
  })

  return (
    <KeyValue.Root gap='m'>
      <KeyValue.Key>
        <Typography typography='caption2' fontWeight='regular'>
          {t('currency.ticker', {
            ticker: SYMBOL_FROM_CHAIN_TYPE.ETHEREUM,
          })}
        </Typography>
      </KeyValue.Key>
      <KeyValue.Value>
        <Typography typography='caption2' fontWeight='regular' color='primary'>
          <CurrencyWithQuantity
            currencyType='crypto'
            fontWeight='regular'
            size='s'
            value={balance?.value ? formatEther(balance.value) : 0}
          >
            <Icon size='s' shape='circle'>
              <IcEthereumFixedColorFill />
            </Icon>
          </CurrencyWithQuantity>
        </Typography>
      </KeyValue.Value>
    </KeyValue.Root>
  )
}
