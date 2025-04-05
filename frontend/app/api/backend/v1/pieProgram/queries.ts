import { BaseQueryOptions } from '@/libs/react-query/types'
import { queryKeys } from '@/libs/react-query/queryKeys'
import { PieProgram } from '@pie-fun/pie-dot-fun-solana'
import { FirstParameter } from '@/types/utility'

type PieProgramConstructorProps = {
  cluster: PieProgram['cluster']
  connection: PieProgram['connection']
}

type GetUserFundQueryProps = {
  basketId: FirstParameter<typeof PieProgram.prototype.getUserFund>['basketId']
  user: FirstParameter<typeof PieProgram.prototype.getUserFund>['user']
}

export function getUserFundQuery({
  basketId,
  cluster,
  connection,
  user,
}: GetUserFundQueryProps & PieProgramConstructorProps) {
  const pieProgram = new PieProgram(
    connection,
    cluster,
    process.env.NEXT_PUBLIC_NODE_SOLANA_ENDPOINT,
    process.env.NEXT_PUBLIC_PIE_PROGRAM_CONTRACT_ADDRESS,
  )

  return {
    queryKey: queryKeys.pieProgram.getUserFundQuery({ basketId, user })
      .queryKey,
    queryFn: () => pieProgram.getUserFund({ basketId, user }),
  } satisfies BaseQueryOptions<typeof PieProgram.prototype.getUserFund>
}

type GetTokenBalanceQueryProps = {
  mint: FirstParameter<typeof PieProgram.prototype.getTokenBalance>['mint']
  owner: FirstParameter<typeof PieProgram.prototype.getTokenBalance>['owner']
}

export function getTokenBalanceQuery({
  cluster,
  connection,
  mint,
  owner,
}: GetTokenBalanceQueryProps & PieProgramConstructorProps) {
  const pieProgram = new PieProgram(
    connection,
    cluster,
    process.env.NEXT_PUBLIC_NODE_SOLANA_ENDPOINT,
    process.env.NEXT_PUBLIC_PIE_PROGRAM_CONTRACT_ADDRESS,
  )

  return {
    queryKey: queryKeys.pieProgram.getTokenBalanceQuery({ mint, owner })
      .queryKey,
    queryFn: () => pieProgram.getTokenBalance({ mint, owner }),
  } satisfies BaseQueryOptions<typeof PieProgram.prototype.getTokenBalance>
}
