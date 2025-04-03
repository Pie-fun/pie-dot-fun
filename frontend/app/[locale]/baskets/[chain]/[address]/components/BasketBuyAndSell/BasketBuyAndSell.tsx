'use client'

import * as ToggleGroup from '@/components/ToggleGroup/ToggleGroup'
import { useTranslations } from 'next-intl'
import * as styles from '@/app/[locale]/baskets/[chain]/[address]/components/BasketBuyAndSell/BasketBuyAndSell.css'
import { useState } from 'react'
import { ChainType } from '@/app/api/protobuf/typescript_only_types/pie-dot-fun/v1/common'
import { Buy } from '@/app/[locale]/baskets/[chain]/[address]/components/BasketBuyAndSell/Buy'
import { Sell } from '@/app/[locale]/baskets/[chain]/[address]/components/BasketBuyAndSell/Sell'

type State = 'buy' | 'sell'

type BasketBuyAndSellProps = {
  chain: ChainType
  address: string
  defaultState?: State
}

export function BasketBuyAndSell({
  chain,
  address,
  defaultState = 'buy',
}: Readonly<BasketBuyAndSellProps>) {
  const t = useTranslations()
  const [status, setStatus] = useState<State>(defaultState)

  return (
    <div className={styles.root()}>
      <ToggleGroup.Root
        type='single'
        size='l'
        layout='fillWidth'
        toggleGroupType='solid'
        defaultValue={defaultState}
        value={status}
        onValueChange={(value: State) => value && setStatus(value)}
      >
        <ToggleGroup.Item value='buy' color='info'>
          {t('common.buy')}
        </ToggleGroup.Item>
        <ToggleGroup.Item value='sell' color='alert'>
          {t('common.sell')}
        </ToggleGroup.Item>
      </ToggleGroup.Root>
      {status === 'buy' && <Buy chain={chain} address={address} />}
      {status === 'sell' && <Sell chain={chain} address={address} />}
    </div>
  )
}
