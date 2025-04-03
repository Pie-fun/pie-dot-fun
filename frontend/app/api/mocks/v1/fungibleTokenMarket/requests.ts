import { HttpResponse, delay } from 'msw'
import { DEFAULT_DELAY } from '@/libs/msw/handlers'
import {
  Currency,
  PriceChangePeriod,
} from '@/app/api/protobuf/typescript_only_types/pie-dot-fun/v1/common'
import {
  FungibleTokenMarket,
  ListFungibleTokensMarketsResponse,
} from '@/app/api/protobuf/typescript_only_types/pie-dot-fun/v1/fungible-token-market'

export async function getFungibleTokenMarket() {
  await delay(DEFAULT_DELAY)

  return HttpResponse.json<FungibleTokenMarket>({
    name: 'fungibleTokens/:chain/:address',
    fungibleToken: 'fungibleTokens/:chain/:address',
    nativeCurrency: Currency.CURRENCY_SOL,
    displayName: 'MOONSHOT Trending 20',
    marketCaps: {
      [Currency.CURRENCY_SOL]: {
        rawAmount: '271234000',
        decimals: 6,
        formattedAmount: '0.271234',
        currency: Currency.CURRENCY_SOL,
      },
      [Currency.CURRENCY_USDC]: {
        rawAmount: '9417400000',
        decimals: 6,
        formattedAmount: '9417400',
        currency: Currency.CURRENCY_USDC,
      },
    },
    priceChanges: {
      [Currency.CURRENCY_SOL]: {
        priceChanges: {
          [PriceChangePeriod.PRICE_CHANGE_PERIOD_1_HOUR]: {
            nominalValue: {
              rawAmount: '50271234',
              decimals: 6,
              formattedAmount: '50.271234',
              currency: Currency.CURRENCY_USDC,
            },
            percentageChange: {
              value: 24.56789,
            },
            period: PriceChangePeriod.PRICE_CHANGE_PERIOD_1_HOUR,
          },
          [PriceChangePeriod.PRICE_CHANGE_PERIOD_24_HOUR]: {
            nominalValue: {
              rawAmount: '50271234',
              decimals: 6,
              formattedAmount: '50.271234',
              currency: Currency.CURRENCY_USDC,
            },
            percentageChange: {
              value: 24.56789,
            },
            period: PriceChangePeriod.PRICE_CHANGE_PERIOD_24_HOUR,
          },
          [PriceChangePeriod.PRICE_CHANGE_PERIOD_30_DAY]: {
            nominalValue: {
              rawAmount: '50271234',
              decimals: 6,
              formattedAmount: '50.271234',
              currency: Currency.CURRENCY_USDC,
            },
            percentageChange: {
              value: 24.56789,
            },
            period: PriceChangePeriod.PRICE_CHANGE_PERIOD_30_DAY,
          },
          [PriceChangePeriod.PRICE_CHANGE_PERIOD_7_DAY]: {
            nominalValue: {
              rawAmount: '50271234',
              decimals: 6,
              formattedAmount: '50.271234',
              currency: Currency.CURRENCY_USDC,
            },
            percentageChange: {
              value: 24.56789,
            },
            period: PriceChangePeriod.PRICE_CHANGE_PERIOD_7_DAY,
          },
          [PriceChangePeriod.PRICE_CHANGE_PERIOD_ALL_TIME]: {
            nominalValue: {
              rawAmount: '50271234',
              decimals: 6,
              formattedAmount: '50.271234',
              currency: Currency.CURRENCY_USDC,
            },
            percentageChange: {
              value: 24.56789,
            },
            period: PriceChangePeriod.PRICE_CHANGE_PERIOD_ALL_TIME,
          },
        },
      },
      [Currency.CURRENCY_USDC]: {
        priceChanges: {
          [PriceChangePeriod.PRICE_CHANGE_PERIOD_1_HOUR]: {
            nominalValue: {
              rawAmount: '50271234',
              decimals: 6,
              formattedAmount: '50.271234',
              currency: Currency.CURRENCY_USDC,
            },
            percentageChange: {
              value: 24.56789,
            },
            period: PriceChangePeriod.PRICE_CHANGE_PERIOD_1_HOUR,
          },
          [PriceChangePeriod.PRICE_CHANGE_PERIOD_24_HOUR]: {
            nominalValue: {
              rawAmount: '50271234',
              decimals: 6,
              formattedAmount: '50.271234',
              currency: Currency.CURRENCY_USDC,
            },
            percentageChange: {
              value: 24.56789,
            },
            period: PriceChangePeriod.PRICE_CHANGE_PERIOD_24_HOUR,
          },
          [PriceChangePeriod.PRICE_CHANGE_PERIOD_30_DAY]: {
            nominalValue: {
              rawAmount: '50271234',
              decimals: 6,
              formattedAmount: '50.271234',
              currency: Currency.CURRENCY_USDC,
            },
            percentageChange: {
              value: 24.56789,
            },
            period: PriceChangePeriod.PRICE_CHANGE_PERIOD_30_DAY,
          },
          [PriceChangePeriod.PRICE_CHANGE_PERIOD_7_DAY]: {
            nominalValue: {
              rawAmount: '50271234',
              decimals: 6,
              formattedAmount: '50.271234',
              currency: Currency.CURRENCY_USDC,
            },
            percentageChange: {
              value: 24.56789,
            },
            period: PriceChangePeriod.PRICE_CHANGE_PERIOD_7_DAY,
          },
          [PriceChangePeriod.PRICE_CHANGE_PERIOD_ALL_TIME]: {
            nominalValue: {
              rawAmount: '50271234',
              decimals: 6,
              formattedAmount: '50.271234',
              currency: Currency.CURRENCY_USDC,
            },
            percentageChange: {
              value: 24.56789,
            },
            period: PriceChangePeriod.PRICE_CHANGE_PERIOD_ALL_TIME,
          },
        },
      },
    },
    prices: {
      [Currency.CURRENCY_SOL]: {
        rawAmount: '5135',
        decimals: 6,
        formattedAmount: '0.0005135',
        currency: Currency.CURRENCY_SOL,
      },
      [Currency.CURRENCY_USDC]: {
        rawAmount: '50271234',
        decimals: 6,
        formattedAmount: '50.271234',
        currency: Currency.CURRENCY_USDC,
      },
    },
    symbol: 'MOONSHOT',
    price: {
      rawAmount: '50271234',
      decimals: 6,
      formattedAmount: '50.271234',
      currency: Currency.CURRENCY_USDC,
    },
    marketCap: {
      rawAmount: '9417400000',
      decimals: 6,
      formattedAmount: '9417400',
      currency: Currency.CURRENCY_USDC,
    },
    priceChange: {
      priceChanges: {
        [PriceChangePeriod.PRICE_CHANGE_PERIOD_1_HOUR]: {
          nominalValue: {
            rawAmount: '50271234',
            decimals: 6,
            formattedAmount: '50.271234',
            currency: Currency.CURRENCY_USDC,
          },
          percentageChange: {
            value: 24.56789,
          },
          period: PriceChangePeriod.PRICE_CHANGE_PERIOD_1_HOUR,
        },
        [PriceChangePeriod.PRICE_CHANGE_PERIOD_24_HOUR]: {
          nominalValue: {
            rawAmount: '50271234',
            decimals: 6,
            formattedAmount: '50.271234',
            currency: Currency.CURRENCY_USDC,
          },
          percentageChange: {
            value: 24.56789,
          },
          period: PriceChangePeriod.PRICE_CHANGE_PERIOD_24_HOUR,
        },
        [PriceChangePeriod.PRICE_CHANGE_PERIOD_30_DAY]: {
          nominalValue: {
            rawAmount: '50271234',
            decimals: 6,
            formattedAmount: '50.271234',
            currency: Currency.CURRENCY_USDC,
          },
          percentageChange: {
            value: 24.56789,
          },
          period: PriceChangePeriod.PRICE_CHANGE_PERIOD_30_DAY,
        },
        [PriceChangePeriod.PRICE_CHANGE_PERIOD_7_DAY]: {
          nominalValue: {
            rawAmount: '50271234',
            decimals: 6,
            formattedAmount: '50.271234',
            currency: Currency.CURRENCY_USDC,
          },
          percentageChange: {
            value: 24.56789,
          },
          period: PriceChangePeriod.PRICE_CHANGE_PERIOD_7_DAY,
        },
        [PriceChangePeriod.PRICE_CHANGE_PERIOD_ALL_TIME]: {
          nominalValue: {
            rawAmount: '50271234',
            decimals: 6,
            formattedAmount: '50.271234',
            currency: Currency.CURRENCY_USDC,
          },
          percentageChange: {
            value: 24.56789,
          },
          period: PriceChangePeriod.PRICE_CHANGE_PERIOD_ALL_TIME,
        },
      },
    },
    fdvs: {
      [Currency.CURRENCY_SOL]: {
        rawAmount: '271234000',
        decimals: 6,
        formattedAmount: '0.271234',
        currency: Currency.CURRENCY_SOL,
      },
      [Currency.CURRENCY_USDC]: {
        rawAmount: '9417400000',
        decimals: 6,
        formattedAmount: '9417400',
        currency: Currency.CURRENCY_USDC,
      },
    },
  })
}

export async function listFungibleTokensMarkets() {
  await delay(DEFAULT_DELAY)

  return HttpResponse.json<ListFungibleTokensMarketsResponse>({
    fungibleTokenMarkets: [
      {
        name: 'fungibleTokens/:chain/:address',
        fungibleToken: 'fungibleTokens/:chain/:address',
        nativeCurrency: Currency.CURRENCY_SOL,
        displayName: 'MOONSHOT Trending 20',
        marketCaps: {
          [Currency.CURRENCY_SOL]: {
            rawAmount: '271234000',
            decimals: 6,
            formattedAmount: '0.271234',
            currency: Currency.CURRENCY_SOL,
          },
          [Currency.CURRENCY_USDC]: {
            rawAmount: '9417400000',
            decimals: 6,
            formattedAmount: '9417400',
            currency: Currency.CURRENCY_USDC,
          },
        },
        priceChanges: {
          [Currency.CURRENCY_SOL]: {
            priceChanges: {
              [PriceChangePeriod.PRICE_CHANGE_PERIOD_1_HOUR]: {
                nominalValue: {
                  rawAmount: '50271234',
                  decimals: 6,
                  formattedAmount: '50.271234',
                  currency: Currency.CURRENCY_USDC,
                },
                percentageChange: {
                  value: 24.56789,
                },
                period: PriceChangePeriod.PRICE_CHANGE_PERIOD_1_HOUR,
              },
              [PriceChangePeriod.PRICE_CHANGE_PERIOD_24_HOUR]: {
                nominalValue: {
                  rawAmount: '50271234',
                  decimals: 6,
                  formattedAmount: '50.271234',
                  currency: Currency.CURRENCY_USDC,
                },
                percentageChange: {
                  value: 24.56789,
                },
                period: PriceChangePeriod.PRICE_CHANGE_PERIOD_24_HOUR,
              },
              [PriceChangePeriod.PRICE_CHANGE_PERIOD_30_DAY]: {
                nominalValue: {
                  rawAmount: '50271234',
                  decimals: 6,
                  formattedAmount: '50.271234',
                  currency: Currency.CURRENCY_USDC,
                },
                percentageChange: {
                  value: 24.56789,
                },
                period: PriceChangePeriod.PRICE_CHANGE_PERIOD_30_DAY,
              },
              [PriceChangePeriod.PRICE_CHANGE_PERIOD_7_DAY]: {
                nominalValue: {
                  rawAmount: '50271234',
                  decimals: 6,
                  formattedAmount: '50.271234',
                  currency: Currency.CURRENCY_USDC,
                },
                percentageChange: {
                  value: 24.56789,
                },
                period: PriceChangePeriod.PRICE_CHANGE_PERIOD_7_DAY,
              },
              [PriceChangePeriod.PRICE_CHANGE_PERIOD_ALL_TIME]: {
                nominalValue: {
                  rawAmount: '50271234',
                  decimals: 6,
                  formattedAmount: '50.271234',
                  currency: Currency.CURRENCY_USDC,
                },
                percentageChange: {
                  value: 24.56789,
                },
                period: PriceChangePeriod.PRICE_CHANGE_PERIOD_ALL_TIME,
              },
            },
          },
          [Currency.CURRENCY_USDC]: {
            priceChanges: {
              [PriceChangePeriod.PRICE_CHANGE_PERIOD_1_HOUR]: {
                nominalValue: {
                  rawAmount: '50271234',
                  decimals: 6,
                  formattedAmount: '50.271234',
                  currency: Currency.CURRENCY_USDC,
                },
                percentageChange: {
                  value: 24.56789,
                },
                period: PriceChangePeriod.PRICE_CHANGE_PERIOD_1_HOUR,
              },
              [PriceChangePeriod.PRICE_CHANGE_PERIOD_24_HOUR]: {
                nominalValue: {
                  rawAmount: '50271234',
                  decimals: 6,
                  formattedAmount: '50.271234',
                  currency: Currency.CURRENCY_USDC,
                },
                percentageChange: {
                  value: 24.56789,
                },
                period: PriceChangePeriod.PRICE_CHANGE_PERIOD_24_HOUR,
              },
              [PriceChangePeriod.PRICE_CHANGE_PERIOD_30_DAY]: {
                nominalValue: {
                  rawAmount: '50271234',
                  decimals: 6,
                  formattedAmount: '50.271234',
                  currency: Currency.CURRENCY_USDC,
                },
                percentageChange: {
                  value: 24.56789,
                },
                period: PriceChangePeriod.PRICE_CHANGE_PERIOD_30_DAY,
              },
              [PriceChangePeriod.PRICE_CHANGE_PERIOD_7_DAY]: {
                nominalValue: {
                  rawAmount: '50271234',
                  decimals: 6,
                  formattedAmount: '50.271234',
                  currency: Currency.CURRENCY_USDC,
                },
                percentageChange: {
                  value: 24.56789,
                },
                period: PriceChangePeriod.PRICE_CHANGE_PERIOD_7_DAY,
              },
              [PriceChangePeriod.PRICE_CHANGE_PERIOD_ALL_TIME]: {
                nominalValue: {
                  rawAmount: '50271234',
                  decimals: 6,
                  formattedAmount: '50.271234',
                  currency: Currency.CURRENCY_USDC,
                },
                percentageChange: {
                  value: 24.56789,
                },
                period: PriceChangePeriod.PRICE_CHANGE_PERIOD_ALL_TIME,
              },
            },
          },
        },
        prices: {
          [Currency.CURRENCY_SOL]: {
            rawAmount: '5135',
            decimals: 6,
            formattedAmount: '0.0005135',
            currency: Currency.CURRENCY_SOL,
          },
          [Currency.CURRENCY_USDC]: {
            rawAmount: '50271234',
            decimals: 6,
            formattedAmount: '50.271234',
            currency: Currency.CURRENCY_USDC,
          },
        },
        symbol: 'MOONSHOT',
        price: {
          rawAmount: '50271234',
          decimals: 6,
          formattedAmount: '50.271234',
          currency: Currency.CURRENCY_USDC,
        },
        marketCap: {
          rawAmount: '9417400000',
          decimals: 6,
          formattedAmount: '9417400',
          currency: Currency.CURRENCY_USDC,
        },
        priceChange: {
          priceChanges: {
            [PriceChangePeriod.PRICE_CHANGE_PERIOD_1_HOUR]: {
              nominalValue: {
                rawAmount: '50271234',
                decimals: 6,
                formattedAmount: '50.271234',
                currency: Currency.CURRENCY_USDC,
              },
              percentageChange: {
                value: 24.56789,
              },
              period: PriceChangePeriod.PRICE_CHANGE_PERIOD_1_HOUR,
            },
            [PriceChangePeriod.PRICE_CHANGE_PERIOD_24_HOUR]: {
              nominalValue: {
                rawAmount: '50271234',
                decimals: 6,
                formattedAmount: '50.271234',
                currency: Currency.CURRENCY_USDC,
              },
              percentageChange: {
                value: 24.56789,
              },
              period: PriceChangePeriod.PRICE_CHANGE_PERIOD_24_HOUR,
            },
            [PriceChangePeriod.PRICE_CHANGE_PERIOD_30_DAY]: {
              nominalValue: {
                rawAmount: '50271234',
                decimals: 6,
                formattedAmount: '50.271234',
                currency: Currency.CURRENCY_USDC,
              },
              percentageChange: {
                value: 24.56789,
              },
              period: PriceChangePeriod.PRICE_CHANGE_PERIOD_30_DAY,
            },
            [PriceChangePeriod.PRICE_CHANGE_PERIOD_7_DAY]: {
              nominalValue: {
                rawAmount: '50271234',
                decimals: 6,
                formattedAmount: '50.271234',
                currency: Currency.CURRENCY_USDC,
              },
              percentageChange: {
                value: 24.56789,
              },
              period: PriceChangePeriod.PRICE_CHANGE_PERIOD_7_DAY,
            },
            [PriceChangePeriod.PRICE_CHANGE_PERIOD_ALL_TIME]: {
              nominalValue: {
                rawAmount: '50271234',
                decimals: 6,
                formattedAmount: '50.271234',
                currency: Currency.CURRENCY_USDC,
              },
              percentageChange: {
                value: 24.56789,
              },
              period: PriceChangePeriod.PRICE_CHANGE_PERIOD_ALL_TIME,
            },
          },
        },
        fdvs: {
          [Currency.CURRENCY_SOL]: {
            rawAmount: '271234000',
            decimals: 6,
            formattedAmount: '0.271234',
            currency: Currency.CURRENCY_SOL,
          },
          [Currency.CURRENCY_USDC]: {
            rawAmount: '9417400000',
            decimals: 6,
            formattedAmount: '9417400',
            currency: Currency.CURRENCY_USDC,
          },
        },
      },
    ],
    nextPageToken: '',
  })
}
