import { Icon } from '@/components/Icon/Icon'
import { IcWalletOutline } from '@/components/Icon/Icons'
import { Typography } from '@/components/Typography/Typography'
import { getLamportsToSol } from '@/libs/solana-web3/getLamportsToSol'
import { getFormattedNumber } from '@/utils/getFormattedNumber'
import { useQuery } from '@tanstack/react-query'
import { getBalanceQuery } from '@/app/api/external/node/v1/solana/queries'
import { useSolana } from '@/hooks/useSolana'
import { Box } from '@/components/Box/Box'

type SolanaBalanceProps = {
  address: string
}

export function SolanaBalance({ address }: Readonly<SolanaBalanceProps>) {
  const { connection } = useSolana()

  const { data: lamports } = useQuery({
    ...getBalanceQuery({
      connection,
      address,
    }),
  })

  return (
    <Box orientation='horizontal' gap='xxs' align='center'>
      <Typography typography='body1' fontWeight='regular' color='secondary'>
        <Icon size='s'>
          <IcWalletOutline />
        </Icon>
      </Typography>
      <Typography typography='body1' fontWeight='regular' color='primary'>
        {getFormattedNumber({
          value: lamports ? getLamportsToSol({ lamports }) : '',
          emptyValue: '-',
        })}{' '}
      </Typography>
    </Box>
  )
}
