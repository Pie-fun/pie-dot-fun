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
import { base, baseSepolia } from 'viem/chains'
import { formatEther } from 'viem'
import { ChainType } from '@/app/api/protobuf/typescript_only_types/pie-dot-fun/v1/common'

export function BaseEthBalance() {
  const t = useTranslations()
  const { wallet } = useUser({ vmType: 'EVM' })

  const { data: balance } = useBalance({
    address: wallet?.address! as EthereumAddress,
    chainId:
      process.env.NEXT_PUBLIC_IS_USE_TESTNET === 'true'
        ? baseSepolia.id
        : base.id,
    query: {
      enabled: !!wallet?.address,
      refetchInterval: POLLING_INTERVAL.SECONDARY,
    },
  })

  return (
    <KeyValue.Root gap='m'>
      <KeyValue.Key>
        <Typography typography='caption2' fontWeight='regular'>
          {t('currency.chainTicker', {
            chain: 'Base',
            ticker: 'ETH',
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
            chain={ChainType.BASE}
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
