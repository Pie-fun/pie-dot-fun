import { HttpResponse, delay } from 'msw'
import { DEFAULT_DELAY } from '@/libs/msw/handlers'
import {
  ChainType,
  Currency,
  PnLPeriod,
} from '@/app/api/protobuf/typescript_only_types/pie-dot-fun/v1/common'
import {
  GetHoldingsStatisticsResponse,
  Holding,
  ListHoldingsResponse,
} from '@/app/api/protobuf/typescript_only_types/pie-dot-fun/v1/holding'

export async function getHolding() {
  await delay(DEFAULT_DELAY)

  return HttpResponse.json<Holding>({
    averageBuyPrices: {
      [Currency.CURRENCY_USDC]: {
        rawAmount: '1000000',
        decimals: 6,
        formattedAmount: '1',
        currency: Currency.CURRENCY_USDC,
      },
    },
    basketToken: 'basketTokens/solana/basketToken1',
    chain: ChainType.SOLANA,
    holdingWallet: `holdingWallets/${ChainType.SOLANA}/ABCDEFGHIJKLMN`,
    createTime: '2021-09-01T00:00:00Z',
    marketValues: {
      [Currency.CURRENCY_USDC]: {
        rawAmount: '148000000',
        decimals: 6,
        formattedAmount: '148',
        currency: Currency.CURRENCY_USDC,
      },
    },
    name: 'holding',
    ownershipPercentage: {
      value: 1,
    },
    pnls: {
      [Currency.CURRENCY_USDC]: {
        pnls: {
          [PnLPeriod.PNL_PERIOD_1_HOUR]: {
            nominalValue: {
              rawAmount: '496450000',
              decimals: 6,
              formattedAmount: '496.45',
              currency: Currency.CURRENCY_USDC,
            },
            percentageChange: {
              value: 10.5,
            },
            period: PnLPeriod.PNL_PERIOD_1_HOUR,
          },
          [PnLPeriod.PNL_PERIOD_24_HOUR]: {
            nominalValue: {
              rawAmount: '496450000',
              decimals: 6,
              formattedAmount: '496.45',
              currency: Currency.CURRENCY_USDC,
            },
            percentageChange: {
              value: 10.5,
            },
            period: PnLPeriod.PNL_PERIOD_24_HOUR,
          },
          [PnLPeriod.PNL_PERIOD_ALL_TIME]: {
            nominalValue: {
              rawAmount: '496450000',
              decimals: 6,
              formattedAmount: '496.45',
              currency: Currency.CURRENCY_USDC,
            },
            percentageChange: {
              value: 10.5,
            },
            period: PnLPeriod.PNL_PERIOD_ALL_TIME,
          },
        },
      },
    },
    quantity: {
      decimals: 6,
      formattedAmount: '0.293078',
      rawAmount: '293078',
    },
    updateTime: '2021-09-01T00:00:00Z',
    averageBuyPrice: {
      rawAmount: '1000000',
      decimals: 6,
      formattedAmount: '1',
      currency: Currency.CURRENCY_USDC,
    },
    marketValue: {
      rawAmount: '148000000',
      decimals: 6,
      formattedAmount: '148',
      currency: Currency.CURRENCY_USDC,
    },
    pnl: {
      pnls: {
        [PnLPeriod.PNL_PERIOD_1_HOUR]: {
          nominalValue: {
            rawAmount: '49645123',
            decimals: 6,
            formattedAmount: '496.45123',
            currency: Currency.CURRENCY_USDC,
          },
          percentageChange: {
            value: 10.5,
          },
          period: PnLPeriod.PNL_PERIOD_1_HOUR,
        },
        [PnLPeriod.PNL_PERIOD_24_HOUR]: {
          nominalValue: {
            rawAmount: '49645123',
            decimals: 6,
            formattedAmount: '496.45123',
            currency: Currency.CURRENCY_USDC,
          },
          percentageChange: {
            value: 10.5,
          },
          period: PnLPeriod.PNL_PERIOD_24_HOUR,
        },
        [PnLPeriod.PNL_PERIOD_ALL_TIME]: {
          nominalValue: {
            rawAmount: '49645123',
            decimals: 6,
            formattedAmount: '496.45123',
            currency: Currency.CURRENCY_USDC,
          },
          percentageChange: {
            value: 10.5,
          },
          period: PnLPeriod.PNL_PERIOD_ALL_TIME,
        },
      },
    },
  })
}

export async function listHoldings() {
  await delay(DEFAULT_DELAY)

  return HttpResponse.json<ListHoldingsResponse>({
    holdings: [
      {
        averageBuyPrice: {
          rawAmount: '12356789',
          decimals: 6,
          formattedAmount: '123.56789',
          currency: Currency.CURRENCY_USDC,
        },
        basketToken: 'basketTokens/solana/basketToken1',
        chain: ChainType.SOLANA,
        createTime: '2021-09-01T00:00:00Z',
        holdingWallet: `holdingWallets/${ChainType.SOLANA}/ABCDEFGHIJKLMN`,
        marketValue: {
          rawAmount: '5678901234',
          decimals: 6,
          formattedAmount: '5678.901234',
          currency: Currency.CURRENCY_USDC,
        },
        name: 'holding',
        ownershipPercentage: {
          value: 0.5,
        },
        pnl: {
          pnls: {
            [PnLPeriod.PNL_PERIOD_1_HOUR]: {
              nominalValue: {
                rawAmount: '49645123',
                decimals: 6,
                formattedAmount: '496.45123',
                currency: Currency.CURRENCY_USDC,
              },
              percentageChange: {
                value: 10.5,
              },
              period: PnLPeriod.PNL_PERIOD_1_HOUR,
            },
            [PnLPeriod.PNL_PERIOD_24_HOUR]: {
              nominalValue: {
                rawAmount: '49645123',
                decimals: 6,
                formattedAmount: '496.45123',
                currency: Currency.CURRENCY_USDC,
              },
              percentageChange: {
                value: 10.5,
              },
              period: PnLPeriod.PNL_PERIOD_24_HOUR,
            },
            [PnLPeriod.PNL_PERIOD_ALL_TIME]: {
              nominalValue: {
                rawAmount: '49645123',
                decimals: 6,
                formattedAmount: '496.45123',
                currency: Currency.CURRENCY_USDC,
              },
              percentageChange: {
                value: 10.5,
              },
              period: PnLPeriod.PNL_PERIOD_ALL_TIME,
            },
          },
        },
        quantity: {
          decimals: 6,
          formattedAmount: '0.293078',
          rawAmount: '293078',
        },
        updateTime: '2021-09-01T00:00:00Z',
        averageBuyPrices: {
          [Currency.CURRENCY_USDC]: {
            rawAmount: '12356789',
            decimals: 6,
            formattedAmount: '123.56789',
            currency: Currency.CURRENCY_USDC,
          },
        },
        marketValues: {
          [Currency.CURRENCY_USDC]: {
            rawAmount: '5678901234',
            decimals: 6,
            formattedAmount: '5678.901234',
            currency: Currency.CURRENCY_USDC,
          },
        },
        pnls: {
          [Currency.CURRENCY_USDC]: {
            pnls: {
              [PnLPeriod.PNL_PERIOD_1_HOUR]: {
                nominalValue: {
                  rawAmount: '49645123',
                  decimals: 6,
                  formattedAmount: '496.45123',
                  currency: Currency.CURRENCY_USDC,
                },
                percentageChange: {
                  value: 10.5,
                },
                period: PnLPeriod.PNL_PERIOD_1_HOUR,
              },
              [PnLPeriod.PNL_PERIOD_24_HOUR]: {
                nominalValue: {
                  rawAmount: '49645123',
                  decimals: 6,
                  formattedAmount: '496.45123',
                  currency: Currency.CURRENCY_USDC,
                },
                percentageChange: {
                  value: 10.5,
                },
                period: PnLPeriod.PNL_PERIOD_24_HOUR,
              },
              [PnLPeriod.PNL_PERIOD_ALL_TIME]: {
                nominalValue: {
                  rawAmount: '49645123',
                  decimals: 6,
                  formattedAmount: '496.45123',
                  currency: Currency.CURRENCY_USDC,
                },
                percentageChange: {
                  value: 10.5,
                },
                period: PnLPeriod.PNL_PERIOD_ALL_TIME,
              },
            },
          },
        },
      },
      {
        averageBuyPrice: {
          rawAmount: '12356789',
          decimals: 6,
          formattedAmount: '123.56789',
          currency: Currency.CURRENCY_USDC,
        },
        basketToken: 'basketTokens/solana/basketToken2',
        chain: ChainType.SOLANA,
        createTime: '2021-09-01T00:00:00Z',
        holdingWallet: `holdingWallets/${ChainType.SOLANA}/ABCDEFGHIJKLMN`,
        marketValue: {
          rawAmount: '5678901234',
          decimals: 6,
          formattedAmount: '5678.901234',
          currency: Currency.CURRENCY_USDC,
        },
        name: 'holding',
        ownershipPercentage: {
          value: 0.5,
        },
        pnl: {
          pnls: {
            [PnLPeriod.PNL_PERIOD_1_HOUR]: {
              nominalValue: {
                rawAmount: '49645123',
                decimals: 6,
                formattedAmount: '496.45123',
                currency: Currency.CURRENCY_USDC,
              },
              percentageChange: {
                value: 10.5,
              },
              period: PnLPeriod.PNL_PERIOD_1_HOUR,
            },
            [PnLPeriod.PNL_PERIOD_24_HOUR]: {
              nominalValue: {
                rawAmount: '49645123',
                decimals: 6,
                formattedAmount: '496.45123',
                currency: Currency.CURRENCY_USDC,
              },
              percentageChange: {
                value: 10.5,
              },
              period: PnLPeriod.PNL_PERIOD_24_HOUR,
            },
            [PnLPeriod.PNL_PERIOD_ALL_TIME]: {
              nominalValue: {
                rawAmount: '49645123',
                decimals: 6,
                formattedAmount: '496.45123',
                currency: Currency.CURRENCY_USDC,
              },
              percentageChange: {
                value: 10.5,
              },
              period: PnLPeriod.PNL_PERIOD_ALL_TIME,
            },
          },
        },
        quantity: {
          decimals: 6,
          formattedAmount: '0.293078',
          rawAmount: '293078',
        },
        updateTime: '2021-09-01T00:00:00Z',
        averageBuyPrices: {
          [Currency.CURRENCY_USDC]: {
            rawAmount: '12356789',
            decimals: 6,
            formattedAmount: '123.56789',
            currency: Currency.CURRENCY_USDC,
          },
        },
        marketValues: {
          [Currency.CURRENCY_USDC]: {
            rawAmount: '5678901234',
            decimals: 6,
            formattedAmount: '5678.901234',
            currency: Currency.CURRENCY_USDC,
          },
        },
        pnls: {
          [Currency.CURRENCY_USDC]: {
            pnls: {
              [PnLPeriod.PNL_PERIOD_1_HOUR]: {
                nominalValue: {
                  rawAmount: '49645123',
                  decimals: 6,
                  formattedAmount: '496.45123',
                  currency: Currency.CURRENCY_USDC,
                },
                percentageChange: {
                  value: 10.5,
                },
                period: PnLPeriod.PNL_PERIOD_1_HOUR,
              },
              [PnLPeriod.PNL_PERIOD_24_HOUR]: {
                nominalValue: {
                  rawAmount: '49645123',
                  decimals: 6,
                  formattedAmount: '496.45123',
                  currency: Currency.CURRENCY_USDC,
                },
                percentageChange: {
                  value: 10.5,
                },
                period: PnLPeriod.PNL_PERIOD_24_HOUR,
              },
              [PnLPeriod.PNL_PERIOD_ALL_TIME]: {
                nominalValue: {
                  rawAmount: '49645123',
                  decimals: 6,
                  formattedAmount: '496.45123',
                  currency: Currency.CURRENCY_USDC,
                },
                percentageChange: {
                  value: 10.5,
                },
                period: PnLPeriod.PNL_PERIOD_ALL_TIME,
              },
            },
          },
        },
      },
    ],
    nextPageToken: '',
  })
}

export async function getHoldingsStatistics() {
  await delay(DEFAULT_DELAY)

  return HttpResponse.json<GetHoldingsStatisticsResponse>({
    count: 3,
    totalMarketValues: [
      {
        rawAmount: '10649521235',
        decimals: 6,
        formattedAmount: '10649.521235',
        currency: Currency.CURRENCY_USDC,
      },
    ],
    totalPnls: [
      {
        nominalValue: {
          rawAmount: '49645123',
          decimals: 6,
          formattedAmount: '496.45123',
          currency: Currency.CURRENCY_USDC,
        },
        percentageChange: {
          value: 10.5,
        },
        period: PnLPeriod.PNL_PERIOD_ALL_TIME,
      },
    ],
  })
}
