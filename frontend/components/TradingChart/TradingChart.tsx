'use client'

import { DEBOUNCE_DELAY, POLLING_INTERVAL } from '@/constants/common'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { queries } from '@/libs/vanilla-extract/queries'
import { vars } from '@/libs/vanilla-extract/vars'
import { useTheme } from '@/providers/ThemeProvider/ThemeProvider'
import { getCssVarToValue } from '@/utils/getCssVarToValue'
import {
  AreaData,
  AreaSeriesPartialOptions,
  CandlestickData,
  CandlestickSeriesPartialOptions,
  ChartOptions,
  ColorType,
  createChart,
  DeepPartial,
  IChartApi,
  LineData,
  LineSeriesPartialOptions,
  LogicalRange,
  Time,
  UTCTimestamp,
  WhitespaceData,
} from 'lightweight-charts'
import { DateTime } from 'luxon'
import {
  createContext,
  MutableRefObject,
  PropsWithChildren,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import { useDebouncedCallback } from 'use-debounce'
import * as styles from '@/components/TradingChart/TradingChart.css'

export type PeriodParams = {
  size: number
}

type TrendingStatus = 'trendingUp' | 'trendingDown' | 'trendingSteady'

type ContextProps = {
  chart?: IChartApi
  interval?: number
  isInitRef?: MutableRefObject<boolean>
}

const Context = createContext<ContextProps>({
  chart: undefined,
  interval: undefined,
})

type RootProps = {
  options?: DeepPartial<ChartOptions>
}

export function Root({
  children,
  options,
  interval = POLLING_INTERVAL.PRIMARY,
}: PropsWithChildren<RootProps> & Omit<ContextProps, 'chart'>) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [chart, setChart] = useState<IChartApi | undefined>(undefined)
  const isInitRef = useRef(false)
  const value = useMemo(
    () => ({ chart, interval, isInitRef }),
    [chart, interval],
  )
  const { theme } = useTheme()
  const isPrefersColorSchemeDark = useMediaQuery({ query: queries.theme.dark })

  useEffect(() => {
    if (containerRef.current) {
      const chart = createChart(containerRef.current, {
        layout: {
          background: {
            type: ColorType.Solid,
            color: getCssVarToValue({
              cssVar: vars.colors.backgrounds.default,
            }),
          },
          textColor: getCssVarToValue({ cssVar: vars.colors.texts.primary }),
        },
        width: containerRef.current.clientWidth,
        autoSize: true,
        grid: { horzLines: { visible: false }, vertLines: { visible: false } },
      })

      setChart(chart)
      isInitRef.current = true

      return () => {
        chart.remove()
        isInitRef.current = false
      }
    }
  }, [])

  useEffect(() => {
    chart?.applyOptions({
      layout: {
        background: {
          color: getCssVarToValue({
            cssVar: vars.colors.backgrounds.default,
          }),
        },
        textColor: getCssVarToValue({
          cssVar: vars.colors.texts.primary,
        }),
      },
    })
  }, [chart, theme, isPrefersColorSchemeDark])

  useEffect(() => {
    chart?.applyOptions({
      ...options,
    })
  }, [chart, options])

  return (
    <Context.Provider value={value}>
      <div className={styles.root()} ref={containerRef} />
      {children}
    </Context.Provider>
  )
}

type CandlestickSeriesProps = {
  options?: CandlestickSeriesPartialOptions
  getBars?: (
    periodParams?: PeriodParams,
  ) => Promise<(CandlestickData<Time> | WhitespaceData<Time>)[]>
  subscribeBars?: () => Promise<CandlestickData<Time> | WhitespaceData<Time>>
}

export function CandlestickSeries({
  options = {},
  getBars,
  subscribeBars,
}: CandlestickSeriesProps) {
  const { chart, interval, isInitRef } = useContext(Context)
  const lastFromTime = useRef<Time>(0 as UTCTimestamp)

  const series = chart?.addCandlestickSeries({
    upColor: getCssVarToValue({
      cssVar: vars.colors.texts.info.primary,
    }),
    downColor: getCssVarToValue({
      cssVar: vars.colors.texts.alert.primary,
    }),
    wickUpColor: getCssVarToValue({
      cssVar: vars.colors.texts.info.primary,
    }),
    wickDownColor: getCssVarToValue({
      cssVar: vars.colors.texts.alert.primary,
    }),
    borderVisible: false,
    ...options,
  })

  const newDataHandler = useDebouncedCallback(
    async (range: LogicalRange | null) => {
      if (range) {
        const { from } = range

        if (from < 0 && getBars) {
          const size = Math.floor(Math.abs(from))
          const bars = await getBars({ size })

          if (bars.length && chart) {
            lastFromTime.current = bars[0].time
            const prevData = series?.data()

            const localBars = bars.map((bar) => ({
              ...bar,
              time: getLocalTimestamp(bar.time),
            }))

            const validLocalBars = localBars.slice(0, -1)

            if (prevData) {
              series?.setData([...validLocalBars, ...prevData])
            }
          }
        }
      }
    },
    DEBOUNCE_DELAY.PRIMARY,
  )

  useEffect(() => {
    if (chart && series && getBars) {
      const getInitialData = async () => {
        const bars = await getBars()

        lastFromTime.current = bars[0].time

        const localBars = bars.map((bar) => ({
          ...bar,
          time: getLocalTimestamp(bar.time),
        }))

        series.setData(localBars)
        chart.timeScale().fitContent()
        chart.applyOptions({ rightPriceScale: { autoScale: true } })
      }

      getInitialData()
    }
  }, [chart, getBars, series])

  useEffect(() => {
    if (series && subscribeBars) {
      const getUpdateData = async () => {
        const bar = await subscribeBars()

        const localBar = {
          ...bar,
          time: getLocalTimestamp(bar.time),
        }

        if (isInitRef?.current) {
          series.update(localBar)
        }
      }

      const intervalId = setInterval(() => {
        getUpdateData()
      }, interval)

      return () => {
        clearInterval(intervalId)
      }
    }
  }, [interval, isInitRef, series, subscribeBars])

  useEffect(() => {
    if (chart && series && getBars) {
      chart?.timeScale().subscribeVisibleLogicalRangeChange(newDataHandler)

      return () => {
        chart?.timeScale().subscribeVisibleLogicalRangeChange(newDataHandler)
      }
    }
  }, [chart, getBars, newDataHandler, series])

  useEffect(() => {
    return () => {
      if (series && chart) {
        try {
          chart.removeSeries(series)
        } catch {}
      }
    }
  }, [chart, series])

  return null
}

type AreaSeriesProps = {
  options?: AreaSeriesPartialOptions
  color?: TrendingStatus
  getBars?: (
    periodParams?: PeriodParams,
  ) => Promise<(AreaData<Time> | WhitespaceData<Time>)[]>
  subscribeBars?: () => Promise<AreaData<Time> | WhitespaceData<Time>>
}

export function AreaSeries({
  options = {},
  color = 'trendingSteady',
  getBars,
  subscribeBars,
}: AreaSeriesProps) {
  const { chart, interval, isInitRef } = useContext(Context)
  const lastFromTime = useRef<Time>(0 as UTCTimestamp)

  const getTextHexColor = () => {
    if (color === 'trendingUp') {
      return getCssVarToValue({ cssVar: vars.colors.texts.info.primary })
    } else if (color === 'trendingDown') {
      return getCssVarToValue({ cssVar: vars.colors.texts.alert.primary })
    } else {
      return getCssVarToValue({ cssVar: vars.colors.texts.brand.primary })
    }
  }

  const getBackgroundHexColor = () => {
    if (color === 'trendingUp') {
      return getCssVarToValue({
        cssVar: vars.colors.backgrounds.info.secondary,
      })
    } else if (color === 'trendingDown') {
      return getCssVarToValue({
        cssVar: vars.colors.backgrounds.alert.secondary,
      })
    } else {
      return getCssVarToValue({
        cssVar: vars.colors.backgrounds.brand.secondary,
      })
    }
  }

  const series = chart?.addAreaSeries({
    lineColor: getTextHexColor(),
    topColor: getTextHexColor(),
    bottomColor: getBackgroundHexColor(),
    ...options,
  })

  const newDataHandler = useDebouncedCallback(
    async (range: LogicalRange | null) => {
      if (range) {
        const { from } = range

        if (from < 0 && getBars) {
          const size = Math.floor(Math.abs(from))
          const bars = await getBars({ size })

          if (bars.length && chart) {
            lastFromTime.current = bars[0].time
            const prevData = series?.data()

            const localBars = bars.map((bar) => ({
              ...bar,
              time: getLocalTimestamp(bar.time),
            }))

            const validLocalBars = localBars.slice(0, -1)

            if (prevData) {
              series?.setData([...validLocalBars, ...prevData])
            }
          }
        }
      }
    },
    DEBOUNCE_DELAY.PRIMARY,
  )

  useEffect(() => {
    if (chart && series && getBars) {
      const getInitialData = async () => {
        const bars = await getBars()

        lastFromTime.current = bars[0].time

        const localBars = bars.map((bar) => ({
          ...bar,
          time: getLocalTimestamp(bar.time),
        }))

        series.setData(localBars)
        chart.timeScale().fitContent()
        chart.applyOptions({ rightPriceScale: { autoScale: true } })
      }

      getInitialData()
    }
  }, [chart, getBars, series])

  useEffect(() => {
    if (series && subscribeBars) {
      const getUpdateData = async () => {
        const bar = await subscribeBars()

        const localBar = {
          ...bar,
          time: getLocalTimestamp(bar.time),
        }

        if (isInitRef?.current) {
          series.update(localBar)
        }
      }

      const intervalId = setInterval(() => {
        getUpdateData()
      }, interval)

      return () => {
        clearInterval(intervalId)
      }
    }
  }, [interval, isInitRef, series, subscribeBars])

  useEffect(() => {
    if (chart && series && getBars) {
      chart?.timeScale().subscribeVisibleLogicalRangeChange(newDataHandler)

      return () => {
        chart?.timeScale().subscribeVisibleLogicalRangeChange(newDataHandler)
      }
    }
  }, [chart, getBars, newDataHandler, series])

  useEffect(() => {
    return () => {
      if (series && chart) {
        try {
          chart.removeSeries(series)
        } catch {}
      }
    }
  }, [chart, series])

  return null
}

type LineSeriesProps = {
  options?: LineSeriesPartialOptions
  color?: TrendingStatus
  getBars?: (
    periodParams?: PeriodParams,
  ) => Promise<(LineData<Time> | WhitespaceData<Time>)[]>
  subscribeBars?: () => Promise<LineData<Time> | WhitespaceData<Time>>
}

export function LineSeries({
  options = {},
  color = 'trendingSteady',
  getBars,
  subscribeBars,
}: LineSeriesProps) {
  const { chart, interval, isInitRef } = useContext(Context)
  const lastFromTime = useRef<Time>(0 as UTCTimestamp)

  const getHexColor = () => {
    if (color === 'trendingUp') {
      return getCssVarToValue({ cssVar: vars.colors.texts.info.primary })
    } else if (color === 'trendingDown') {
      return getCssVarToValue({ cssVar: vars.colors.texts.alert.primary })
    } else {
      return getCssVarToValue({ cssVar: vars.colors.texts.brand.primary })
    }
  }

  const series = chart?.addLineSeries({
    color: getHexColor(),
    ...options,
  })

  const newDataHandler = useDebouncedCallback(
    async (range: LogicalRange | null) => {
      if (range) {
        const { from } = range

        if (from < 0 && getBars) {
          const size = Math.floor(Math.abs(from))
          const bars = await getBars({ size })

          if (bars.length && chart) {
            lastFromTime.current = bars[0].time
            const prevData = series?.data()

            const localBars = bars.map((bar) => ({
              ...bar,
              time: getLocalTimestamp(bar.time),
            }))

            const validLocalBars = localBars.slice(0, -1)

            if (prevData) {
              series?.setData([...validLocalBars, ...prevData])
            }
          }
        }
      }
    },
    DEBOUNCE_DELAY.PRIMARY,
  )

  useEffect(() => {
    if (chart && series && getBars) {
      const getInitialData = async () => {
        const bars = await getBars()

        lastFromTime.current = bars[0].time

        const localBars = bars.map((bar) => ({
          ...bar,
          time: getLocalTimestamp(bar.time),
        }))

        series.setData(localBars)
        chart.timeScale().fitContent()
        chart.applyOptions({ rightPriceScale: { autoScale: true } })
      }

      getInitialData()
    }
  }, [chart, getBars, series])

  useEffect(() => {
    if (series && subscribeBars) {
      const getUpdateData = async () => {
        const bar = await subscribeBars()

        const localBar = {
          ...bar,
          time: getLocalTimestamp(bar.time),
        }

        if (isInitRef?.current) {
          series.update(localBar)
        }
      }

      const intervalId = setInterval(() => {
        getUpdateData()
      }, interval)

      return () => {
        clearInterval(intervalId)
      }
    }
  }, [interval, isInitRef, series, subscribeBars])

  useEffect(() => {
    if (chart && series && getBars) {
      chart?.timeScale().subscribeVisibleLogicalRangeChange(newDataHandler)

      return () => {
        chart?.timeScale().subscribeVisibleLogicalRangeChange(newDataHandler)
      }
    }
  }, [chart, getBars, newDataHandler, series])

  useEffect(() => {
    return () => {
      if (series && chart) {
        try {
          chart.removeSeries(series)
        } catch {}
      }
    }
  }, [chart, series])

  return null
}

function getLocalTimestamp(time: Time) {
  const utcTime = DateTime.fromSeconds(time as UTCTimestamp, { zone: 'utc' })
  const localTime = DateTime.fromSeconds(time as UTCTimestamp).toLocal()
  const localOffset = localTime.offset * 60
  const localTimestamp = utcTime.toSeconds() + localOffset

  return localTimestamp as UTCTimestamp
}
