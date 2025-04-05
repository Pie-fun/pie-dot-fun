import { Typography } from '@/components/Typography/Typography'
import { getFormattedNumber } from '@/utils/getFormattedNumber'
import { useQuery } from '@tanstack/react-query'
import { getTokenBalanceQuery } from '@/app/api/backend/v1/pieProgram/queries'
import { useSolana } from '@/hooks/useSolana'
import { FirstParameter } from '@/types/utility'
import { PieProgram } from '@pie-fun/pie-dot-fun-solana'
import { DECIMALS } from '@/constants/blockChains'
import BigNumber from 'bignumber.js'

type BasketTokenBalanceProps = {
  mint: FirstParameter<typeof PieProgram.prototype.getTokenBalance>['mint']
  owner: FirstParameter<typeof PieProgram.prototype.getTokenBalance>['owner']
}

export function BasketTokenBalance({
  mint,
  owner,
}: Readonly<BasketTokenBalanceProps>) {
  const { connection, cluster } = useSolana()

  const { data } = useQuery({
    ...getTokenBalanceQuery({
      cluster: cluster.network,
      connection,
      mint,
      owner,
    }),
  })

  return (
    <Typography typography='body1' fontWeight='regular' color='primary'>
      {data &&
        getFormattedNumber({
          value: new BigNumber(data)
            .dividedBy(10 ** DECIMALS.BASKET_TOKEN)
            .toString(),
          emptyValue: '0',
        })}
    </Typography>
  )
}
