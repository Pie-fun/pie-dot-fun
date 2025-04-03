import { HttpResponse, delay } from 'msw'
import { DEFAULT_DELAY } from '@/libs/msw/handlers'
import {
  BasketTokenMarket,
  ListBasketTokenTicksRequest,
  ListBasketTokenTicksResponse,
} from '@/app/api/protobuf/typescript_only_types/pie-dot-fun/v1/basket-token-market'
import {
  Currency,
  PriceChangePeriod,
} from '@/app/api/protobuf/typescript_only_types/pie-dot-fun/v1/common'
import { DateTime } from 'luxon'
import { getRandom } from '@/utils/getRandom'

let count = 0

export async function listBasketTokenTicks({
  size,
}: Partial<ListBasketTokenTicksRequest>) {
  await delay(DEFAULT_DELAY)

  const ticks = [
    {
      openTime: new Date(1501545600 * 1000).toISOString(),
      open: 4261.48,
      high: 4745.42,
      low: 3400,
      close: 4724.89,
    },
    {
      openTime: new Date(1504224000 * 1000).toISOString(),
      open: 4689.89,
      high: 4939.19,
      low: 2817,
      close: 4378.51,
    },
    {
      openTime: new Date(1506816000 * 1000).toISOString(),
      open: 4378.49,
      high: 6498.01,
      low: 4110,
      close: 6463,
    },
    {
      openTime: new Date(1509494400 * 1000).toISOString(),
      open: 6463,
      high: 11300.03,
      low: 5325.01,
      close: 9838.96,
    },
    {
      openTime: new Date(1512086400 * 1000).toISOString(),
      open: 9837,
      high: 19798.68,
      low: 9380,
      close: 13716.36,
    },
    {
      openTime: new Date(1514764800 * 1000).toISOString(),
      open: 13715.65,
      high: 17176.24,
      low: 9035,
      close: 10285.1,
    },
    {
      openTime: new Date(1517443200 * 1000).toISOString(),
      open: 10285.1,
      high: 11786.01,
      low: 6000.01,
      close: 10326.76,
    },
    {
      openTime: new Date(1519862400 * 1000).toISOString(),
      open: 10325.64,
      high: 11710,
      low: 6600.1,
      close: 6923.91,
    },
    {
      openTime: new Date(1522540800 * 1000).toISOString(),
      open: 6922,
      high: 9759.82,
      low: 6430,
      close: 9246.01,
    },
    {
      openTime: new Date(1525132800 * 1000).toISOString(),
      open: 9246.01,
      high: 10020,
      low: 7032.95,
      close: 7485.01,
    },
    {
      openTime: new Date(1527811200 * 1000).toISOString(),
      open: 7485.01,
      high: 7786.69,
      low: 5750,
      close: 6390.07,
    },
    {
      openTime: new Date(1530403200 * 1000).toISOString(),
      open: 6391.08,
      high: 8491.77,
      low: 6070,
      close: 7730.93,
    },
    {
      openTime: new Date(1533081600 * 1000).toISOString(),
      open: 7735.67,
      high: 7750,
      low: 5880,
      close: 7011.21,
    },
    {
      openTime: new Date(1535760000 * 1000).toISOString(),
      open: 7011.21,
      high: 7410,
      low: 6111,
      close: 6626.57,
    },
    {
      openTime: new Date(1538352000 * 1000).toISOString(),
      open: 6626.57,
      high: 7680,
      low: 6205,
      close: 6371.93,
    },
    {
      openTime: new Date(1541030400 * 1000).toISOString(),
      open: 6369.52,
      high: 6615.15,
      low: 3652.66,
      close: 4041.32,
    },
    {
      openTime: new Date(1543622400 * 1000).toISOString(),
      open: 4041.27,
      high: 4312.99,
      low: 3156.26,
      close: 3702.9,
    },
    {
      openTime: new Date(1546300800 * 1000).toISOString(),
      open: 3701.23,
      high: 4069.8,
      low: 3349.92,
      close: 3434.1,
    },
    {
      openTime: new Date(1548979200 * 1000).toISOString(),
      open: 3434.1,
      high: 4198,
      low: 3373.1,
      close: 3813.69,
    },
    {
      openTime: new Date(1551398400 * 1000).toISOString(),
      open: 3814.26,
      high: 4140,
      low: 3670.69,
      close: 4103.95,
    },
    {
      openTime: new Date(1554076800 * 1000).toISOString(),
      open: 4102.44,
      high: 5600,
      low: 4067,
      close: 5320.81,
    },
    {
      openTime: new Date(1556668800 * 1000).toISOString(),
      open: 5321.94,
      high: 9074.26,
      low: 5316.2,
      close: 8555,
    },
    {
      openTime: new Date(1559347200 * 1000).toISOString(),
      open: 8555,
      high: 13970,
      low: 7444.58,
      close: 10854.1,
    },
    {
      openTime: new Date(1561939200 * 1000).toISOString(),
      open: 10854.1,
      high: 13147.08,
      low: 9060,
      close: 10080.53,
    },
    {
      openTime: new Date(1564617600 * 1000).toISOString(),
      open: 10080.53,
      high: 12330.7,
      low: 9320,
      close: 9587.47,
    },
    {
      openTime: new Date(1567296000 * 1000).toISOString(),
      open: 9588.74,
      high: 10905.87,
      low: 7710,
      close: 8289.34,
    },
    {
      openTime: new Date(1569888000 * 1000).toISOString(),
      open: 8289.97,
      high: 10370,
      low: 7300,
      close: 9140.85,
    },
    {
      openTime: new Date(1572566400 * 1000).toISOString(),
      open: 9140.86,
      high: 9513.68,
      low: 6515,
      close: 7541.89,
    },
    {
      openTime: new Date(1575158400 * 1000).toISOString(),
      open: 7540.63,
      high: 7750,
      low: 6435,
      close: 7195.23,
    },
    {
      openTime: new Date(1577836800 * 1000).toISOString(),
      open: 7195.24,
      high: 9578,
      low: 6871.04,
      close: 9352.89,
    },
    {
      openTime: new Date(1580515200 * 1000).toISOString(),
      open: 9351.71,
      high: 10500,
      low: 8445,
      close: 8523.61,
    },
    {
      openTime: new Date(1583020800 * 1000).toISOString(),
      open: 8523.61,
      high: 9188,
      low: 3782.13,
      close: 6410.44,
    },
    {
      openTime: new Date(1585699200 * 1000).toISOString(),
      open: 6412.14,
      high: 9460,
      low: 6150.11,
      close: 8620,
    },
    {
      openTime: new Date(1588291200 * 1000).toISOString(),
      open: 8620,
      high: 10067,
      low: 8117,
      close: 9448.27,
    },
    {
      openTime: new Date(1590969600 * 1000).toISOString(),
      open: 9448.27,
      high: 10380,
      low: 8833,
      close: 9138.55,
    },
    {
      openTime: new Date(1593561600 * 1000).toISOString(),
      open: 9138.08,
      high: 11444,
      low: 8893.03,
      close: 11335.46,
    },
    {
      openTime: new Date(1596240000 * 1000).toISOString(),
      open: 11335.46,
      high: 12468,
      low: 10518.5,
      close: 11649.51,
    },
    {
      openTime: new Date(1598918400 * 1000).toISOString(),
      open: 11649.51,
      high: 12050.85,
      low: 9825,
      close: 10776.59,
    },
    {
      openTime: new Date(1601510400 * 1000).toISOString(),
      open: 10776.59,
      high: 14100,
      low: 10374,
      close: 13791,
    },
    {
      openTime: new Date(1604188800 * 1000).toISOString(),
      open: 13791,
      high: 19863.16,
      low: 13195.05,
      close: 19695.87,
    },
    {
      openTime: new Date(1606780800 * 1000).toISOString(),
      open: 19695.87,
      high: 29300,
      low: 17572.33,
      close: 28923.63,
    },
    {
      openTime: new Date(1609459200 * 1000).toISOString(),
      open: 28923.63,
      high: 41950,
      low: 28130,
      close: 33092.98,
    },
    {
      openTime: new Date(1612137600 * 1000).toISOString(),
      open: 33092.97,
      high: 58352.8,
      low: 32296.16,
      close: 45135.66,
    },
    {
      openTime: new Date(1614556800 * 1000).toISOString(),
      open: 45134.11,
      high: 61844,
      low: 44950.53,
      close: 58740.55,
    },
    {
      openTime: new Date(1617235200 * 1000).toISOString(),
      open: 58739.46,
      high: 64854,
      low: 46930,
      close: 57694.27,
    },
    {
      openTime: new Date(1619827200 * 1000).toISOString(),
      open: 57697.25,
      high: 59500,
      low: 30000,
      close: 37253.81,
    },
    {
      openTime: new Date(1622505600 * 1000).toISOString(),
      open: 37253.82,
      high: 41330,
      low: 28805,
      close: 35045,
    },
    {
      openTime: new Date(1625097600 * 1000).toISOString(),
      open: 35045,
      high: 42448,
      low: 29278,
      close: 41461.83,
    },
    {
      openTime: new Date(1627776000 * 1000).toISOString(),
      open: 41461.84,
      high: 50500,
      low: 37332.7,
      close: 47100.89,
    },
    {
      openTime: new Date(1630454400 * 1000).toISOString(),
      open: 47100.89,
      high: 52920,
      low: 39600,
      close: 43824.1,
    },
    {
      openTime: new Date(1633046400 * 1000).toISOString(),
      open: 43820.01,
      high: 67000,
      low: 43283.03,
      close: 61299.8,
    },
    {
      openTime: new Date(1635724800 * 1000).toISOString(),
      open: 61299.81,
      high: 69000,
      low: 53256.64,
      close: 56950.56,
    },
    {
      openTime: new Date(1638316800 * 1000).toISOString(),
      open: 56950.56,
      high: 59053.55,
      low: 42000.3,
      close: 46216.93,
    },
    {
      openTime: new Date(1640995200 * 1000).toISOString(),
      open: 46216.93,
      high: 47990,
      low: 32917.17,
      close: 38466.9,
    },
    {
      openTime: new Date(1643673600 * 1000).toISOString(),
      open: 38466.9,
      high: 45821,
      low: 34322.28,
      close: 43160,
    },
    {
      openTime: new Date(1646092800 * 1000).toISOString(),
      open: 43160,
      high: 48189.84,
      low: 37155,
      close: 45510.34,
    },
    {
      openTime: new Date(1648771200 * 1000).toISOString(),
      open: 45510.35,
      high: 47444.11,
      low: 37578.2,
      close: 37630.8,
    },
    {
      openTime: new Date(1651363200 * 1000).toISOString(),
      open: 37630.8,
      high: 40023.77,
      low: 26700,
      close: 31801.04,
    },
    {
      openTime: new Date(1654041600 * 1000).toISOString(),
      open: 31801.05,
      high: 31982.97,
      low: 17622,
      close: 19942.21,
    },
    {
      openTime: new Date(1656633600 * 1000).toISOString(),
      open: 19942.21,
      high: 24668,
      low: 18781,
      close: 23293.32,
    },
    {
      openTime: new Date(1659312000 * 1000).toISOString(),
      open: 23296.36,
      high: 25211.32,
      low: 19520,
      close: 20050.02,
    },
    {
      openTime: new Date(1661990400 * 1000).toISOString(),
      open: 20048.44,
      high: 22799,
      low: 18125.98,
      close: 19422.61,
    },
    {
      openTime: new Date(1664582400 * 1000).toISOString(),
      open: 19422.61,
      high: 21085,
      low: 18190,
      close: 20490.74,
    },
    {
      openTime: new Date(1667260800 * 1000).toISOString(),
      open: 20490.74,
      high: 21480.65,
      low: 15476,
      close: 17163.64,
    },
    {
      openTime: new Date(1669852800 * 1000).toISOString(),
      open: 17165.53,
      high: 18387.95,
      low: 16256.3,
      close: 16542.4,
    },
    {
      openTime: new Date(1672531200 * 1000).toISOString(),
      open: 16541.77,
      high: 23960.54,
      low: 16499.01,
      close: 23125.13,
    },
    {
      openTime: new Date(1675209600 * 1000).toISOString(),
      open: 23125.13,
      high: 25250,
      low: 21351.07,
      close: 23141.57,
    },
    {
      openTime: new Date(1677628800 * 1000).toISOString(),
      open: 23141.57,
      high: 29184.68,
      low: 19549.09,
      close: 28465.36,
    },
    {
      openTime: new Date(1680307200 * 1000).toISOString(),
      open: 28465.36,
      high: 31000,
      low: 26942.82,
      close: 29233.21,
    },
    {
      openTime: new Date(1682899200 * 1000).toISOString(),
      open: 29233.2,
      high: 29820,
      low: 25811.46,
      close: 27210.35,
    },
    {
      openTime: new Date(1685577600 * 1000).toISOString(),
      open: 27210.36,
      high: 31431.94,
      low: 24800,
      close: 30472,
    },
    {
      openTime: new Date(1688169600 * 1000).toISOString(),
      open: 30471.99,
      high: 31804.2,
      low: 28861.9,
      close: 29232.25,
    },
    {
      openTime: new Date(1690848000 * 1000).toISOString(),
      open: 29232.26,
      high: 30244,
      low: 25166,
      close: 25940.78,
    },
    {
      openTime: new Date(1693526400 * 1000).toISOString(),
      open: 25940.77,
      high: 27483.57,
      low: 24901,
      close: 26962.56,
    },
    {
      openTime: new Date(1696118400 * 1000).toISOString(),
      open: 26962.57,
      high: 35280,
      low: 26538.66,
      close: 34639.77,
    },
    {
      openTime: new Date(1698796800 * 1000).toISOString(),
      open: 34639.78,
      high: 38450,
      low: 34097.39,
      close: 37723.96,
    },
    {
      openTime: new Date(1701388800 * 1000).toISOString(),
      open: 37723.97,
      high: 44700,
      low: 37615.86,
      close: 42283.58,
    },
    {
      openTime: new Date(1704067200 * 1000).toISOString(),
      open: 42283.58,
      high: 48969.48,
      low: 38555,
      close: 42580,
    },
    {
      openTime: new Date(1706745600 * 1000).toISOString(),
      open: 42580,
      high: 64000,
      low: 41884.28,
      close: 61130.98,
    },
    {
      openTime: new Date(1709251200 * 1000).toISOString(),
      open: 61130.99,
      high: 73777,
      low: 59005,
      close: 71280.01,
    },
    {
      openTime: new Date(1711929600 * 1000).toISOString(),
      open: 71280,
      high: 72797.99,
      low: 59191.6,
      close: 60672,
    },
    {
      openTime: new Date(1714521600 * 1000).toISOString(),
      open: 60672.01,
      high: 71979,
      low: 56552.82,
      close: 67540.01,
    },
    {
      openTime: new Date(1717200000 * 1000).toISOString(),
      open: 67540.01,
      high: 71997.02,
      low: 58402,
      close: 62772.01,
    },
    {
      openTime: new Date(1719792000 * 1000).toISOString(),
      open: 62772.01,
      high: 70079.99,
      low: 53485.93,
      close: 64628,
    },
    {
      openTime: new Date(1722470400 * 1000).toISOString(),
      open: 64628.01,
      high: 65659.78,
      low: 49000,
      close: 58973.99,
    },
    {
      openTime: new Date(1725148800 * 1000).toISOString(),
      open: 58974,
      high: 66498,
      low: 52550,
      close: 63327.59,
    },
    {
      openTime: new Date(1727740800 * 1000).toISOString(),
      open: 63327.6,
      high: 73620.12,
      low: 58946,
      close: 70292.01,
    },
    {
      openTime: new Date(1730419200 * 1000).toISOString(),
      open: 70292.01,
      high: 89530.54,
      low: 66835,
      close: 88917.49,
    },
  ]

  const lastTick = ticks.at(-1)

  if (size === 1 && lastTick) {
    const { close, high, low, open, openTime } = lastTick

    count++

    return HttpResponse.json<ListBasketTokenTicksResponse>({
      currency: Currency.CURRENCY_USDC,
      ticks: [
        {
          openTime:
            DateTime.fromISO(openTime)
              .plus({ minutes: 15 * count })
              .toISO() ?? '',
          close: close + getRandom({ min: 0, max: 5000 }),
          high: high + getRandom({ min: 0, max: 5000 }),
          low: low + getRandom({ min: 0, max: 5000 }),
          open: open + getRandom({ min: 0, max: 5000 }),
        },
      ],
    })
  }

  return HttpResponse.json<ListBasketTokenTicksResponse>({
    currency: Currency.CURRENCY_USDC,
    ticks,
  })
}

export async function getBasketTokenMarket() {
  await delay(DEFAULT_DELAY)

  return HttpResponse.json<BasketTokenMarket>({
    nativeCurrency: Currency.CURRENCY_USDC,
    basketToken: 'basketTokens/solana/basketToken1',
    marketCaps: {
      [Currency.CURRENCY_USDC]: {
        rawAmount: '256300000',
        decimals: 2,
        formattedAmount: '256300',
        currency: Currency.CURRENCY_USDC,
      },
      [Currency.CURRENCY_SOL]: {
        rawAmount: '1240000',
        decimals: 6,
        formattedAmount: '1240',
        currency: Currency.CURRENCY_SOL,
      },
    },
    maximumDrawDown: {
      value: 20.15,
    },
    name: 'basketTokens/solana/basketToken1/market',
    values: {
      [Currency.CURRENCY_USDC]: {
        rawAmount: '50270000',
        decimals: 6,
        formattedAmount: '50.27',
        currency: Currency.CURRENCY_USDC,
      },
      [Currency.CURRENCY_SOL]: {
        rawAmount: '173200000',
        decimals: 6,
        formattedAmount: '0.1732',
        currency: Currency.CURRENCY_SOL,
      },
    },
    valueChanges: {
      [Currency.CURRENCY_USDC]: {
        priceChanges: {
          [PriceChangePeriod.PRICE_CHANGE_PERIOD_1_HOUR]: {
            nominalValue: {
              rawAmount: '100',
              decimals: 4,
              formattedAmount: '0.0001',
              currency: Currency.CURRENCY_USDC,
            },
            percentageChange: {
              value: 5.28,
            },
            period: PriceChangePeriod.PRICE_CHANGE_PERIOD_1_HOUR,
          },
          [PriceChangePeriod.PRICE_CHANGE_PERIOD_24_HOUR]: {
            nominalValue: {
              rawAmount: '100',
              decimals: 4,
              formattedAmount: '0.0001',
              currency: Currency.CURRENCY_USDC,
            },
            percentageChange: {
              value: -38.4,
            },
            period: PriceChangePeriod.PRICE_CHANGE_PERIOD_24_HOUR,
          },
          [PriceChangePeriod.PRICE_CHANGE_PERIOD_30_DAY]: {
            nominalValue: {
              rawAmount: '100',
              decimals: 4,
              formattedAmount: '0.0001',
              currency: Currency.CURRENCY_USDC,
            },
            percentageChange: {
              value: 2,
            },
            period: PriceChangePeriod.PRICE_CHANGE_PERIOD_30_DAY,
          },
          [PriceChangePeriod.PRICE_CHANGE_PERIOD_7_DAY]: {
            nominalValue: {
              rawAmount: '100',
              decimals: 4,
              formattedAmount: '0.0001',
              currency: Currency.CURRENCY_USDC,
            },
            percentageChange: {
              value: 23.43,
            },
            period: PriceChangePeriod.PRICE_CHANGE_PERIOD_7_DAY,
          },
          [PriceChangePeriod.PRICE_CHANGE_PERIOD_ALL_TIME]: {
            nominalValue: {
              rawAmount: '100',
              decimals: 4,
              formattedAmount: '0.0001',
              currency: Currency.CURRENCY_USDC,
            },
            percentageChange: {
              value: 74983.23,
            },
            period: PriceChangePeriod.PRICE_CHANGE_PERIOD_ALL_TIME,
          },
        },
      },
      [Currency.CURRENCY_SOL]: {
        priceChanges: {
          [PriceChangePeriod.PRICE_CHANGE_PERIOD_1_HOUR]: {
            nominalValue: {
              rawAmount: '100',
              decimals: 4,
              formattedAmount: '0.0001',
              currency: Currency.CURRENCY_SOL,
            },
            percentageChange: {
              value: 1.22,
            },
            period: PriceChangePeriod.PRICE_CHANGE_PERIOD_1_HOUR,
          },
          [PriceChangePeriod.PRICE_CHANGE_PERIOD_24_HOUR]: {
            nominalValue: {
              rawAmount: '100',
              decimals: 4,
              formattedAmount: '0.0001',
              currency: Currency.CURRENCY_SOL,
            },
            percentageChange: {
              value: 34.23,
            },
            period: PriceChangePeriod.PRICE_CHANGE_PERIOD_24_HOUR,
          },
          [PriceChangePeriod.PRICE_CHANGE_PERIOD_30_DAY]: {
            nominalValue: {
              rawAmount: '100',
              decimals: 4,
              formattedAmount: '0.0001',
              currency: Currency.CURRENCY_SOL,
            },
            percentageChange: {
              value: 61.12,
            },
            period: PriceChangePeriod.PRICE_CHANGE_PERIOD_30_DAY,
          },
          [PriceChangePeriod.PRICE_CHANGE_PERIOD_7_DAY]: {
            nominalValue: {
              rawAmount: '100',
              decimals: 4,
              formattedAmount: '0.0001',
              currency: Currency.CURRENCY_SOL,
            },
            percentageChange: {
              value: -12.23,
            },
            period: PriceChangePeriod.PRICE_CHANGE_PERIOD_7_DAY,
          },
          [PriceChangePeriod.PRICE_CHANGE_PERIOD_ALL_TIME]: {
            nominalValue: {
              rawAmount: '100',
              decimals: 4,
              formattedAmount: '0.0001',
              currency: Currency.CURRENCY_SOL,
            },
            percentageChange: {
              value: 9.8,
            },
            period: PriceChangePeriod.PRICE_CHANGE_PERIOD_ALL_TIME,
          },
        },
      },
    },
    marketCap: {
      rawAmount: '256300000',
      decimals: 6,
      formattedAmount: '256300',
      currency: Currency.CURRENCY_USDC,
    },
    valueChange: {
      priceChanges: {
        [PriceChangePeriod.PRICE_CHANGE_PERIOD_1_HOUR]: {
          nominalValue: {
            rawAmount: '100',
            decimals: 6,
            formattedAmount: '0.0001',
            currency: Currency.CURRENCY_USDC,
          },
          percentageChange: {
            value: 5.28,
          },
          period: PriceChangePeriod.PRICE_CHANGE_PERIOD_1_HOUR,
        },
        [PriceChangePeriod.PRICE_CHANGE_PERIOD_24_HOUR]: {
          nominalValue: {
            rawAmount: '100',
            decimals: 6,
            formattedAmount: '0.0001',
            currency: Currency.CURRENCY_USDC,
          },
          percentageChange: {
            value: -38.4,
          },
          period: PriceChangePeriod.PRICE_CHANGE_PERIOD_24_HOUR,
        },
        [PriceChangePeriod.PRICE_CHANGE_PERIOD_30_DAY]: {
          nominalValue: {
            rawAmount: '100',
            decimals: 6,
            formattedAmount: '0.0001',
            currency: Currency.CURRENCY_USDC,
          },
          percentageChange: {
            value: 2,
          },
          period: PriceChangePeriod.PRICE_CHANGE_PERIOD_30_DAY,
        },
        [PriceChangePeriod.PRICE_CHANGE_PERIOD_7_DAY]: {
          nominalValue: {
            rawAmount: '100',
            decimals: 6,
            formattedAmount: '0.0001',
            currency: Currency.CURRENCY_USDC,
          },
          percentageChange: {
            value: 23.43,
          },
          period: PriceChangePeriod.PRICE_CHANGE_PERIOD_7_DAY,
        },
        [PriceChangePeriod.PRICE_CHANGE_PERIOD_ALL_TIME]: {
          nominalValue: {
            rawAmount: '100',
            decimals: 6,
            formattedAmount: '0.0001',
            currency: Currency.CURRENCY_USDC,
          },
          percentageChange: {
            value: 74983.23,
          },
          period: PriceChangePeriod.PRICE_CHANGE_PERIOD_ALL_TIME,
        },
      },
    },
    value: {
      rawAmount: '7987100',
      decimals: 4,
      formattedAmount: '7.9871',
      currency: Currency.CURRENCY_USDC,
    },
  })
}
