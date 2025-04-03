import { LAMPORTS_PER_SOL } from '@solana/web3.js'

type GetLamportsToSolProps = {
  lamports: number
}

export function getLamportsToSol({ lamports }: GetLamportsToSolProps) {
  return lamports / LAMPORTS_PER_SOL
}
