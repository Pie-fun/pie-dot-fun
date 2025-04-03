import {
  clusterApiUrl,
  Connection,
  Cluster as ClusterNetwork,
} from '@solana/web3.js'

type Cluster = {
  name: ClusterNetwork
  endpoint: string
  network: ClusterNetwork
  active?: boolean
}

type UseSolana = {
  connection: Connection
  cluster: Cluster
}

type UseSolanaProps = {
  commitment?: Connection['commitment']
}

export function useSolana(props?: Readonly<UseSolanaProps>) {
  const { commitment = 'confirmed' } = props ?? {}

  return {
    connection: new Connection(
      process.env.NEXT_PUBLIC_IS_USE_TESTNET === 'true'
        ? clusterApiUrl('devnet')
        : process.env.NEXT_PUBLIC_NODE_SOLANA_ENDPOINT,
      commitment,
    ),
    cluster: {
      name:
        process.env.NEXT_PUBLIC_IS_USE_TESTNET === 'true'
          ? 'devnet'
          : 'mainnet-beta',
      endpoint:
        process.env.NEXT_PUBLIC_IS_USE_TESTNET === 'true'
          ? clusterApiUrl('devnet')
          : process.env.NEXT_PUBLIC_NODE_SOLANA_ENDPOINT,
      network:
        process.env.NEXT_PUBLIC_IS_USE_TESTNET === 'true'
          ? 'devnet'
          : 'mainnet-beta',
    },
  } satisfies UseSolana
}
