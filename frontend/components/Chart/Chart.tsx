'use client'

import {
  ComponentProps,
  ComponentType,
  createContext,
  forwardRef,
  ReactNode,
  useContext,
  useId,
  useMemo,
} from 'react'
import * as RechartsPrimitive from 'recharts'
import * as styles from '@/components/Chart/Chart.css'

const THEMES = { light: '', dark: '.dark' } as const

export type ChartConfig = {
  [k in string]: {
    label?: ReactNode
    icon?: ComponentType
  } & (
    | { color?: string; theme?: never }
    | { color?: never; theme: Record<keyof typeof THEMES, string> }
  )
}

type ChartContextProps = {
  config: ChartConfig
}

const ChartContext = createContext<ChartContextProps | null>(null)

function useChart() {
  const context = useContext(ChartContext)

  if (!context) {
    throw new Error('useChart must be used within a <Chart.Root />')
  }

  return context
}

type RootProps = {
  config: ChartConfig
  children: ComponentProps<
    typeof RechartsPrimitive.ResponsiveContainer
  >['children']
}

export const Root = forwardRef<
  HTMLDivElement,
  ComponentProps<'div'> & RootProps
>(({ id, children, config, ...props }, ref) => {
  const uniqueId = useId()
  const chartId = `chart-${id || uniqueId.replace(/:/g, '')}`
  const value = useMemo(() => ({ config }), [config])

  return (
    <ChartContext.Provider value={value}>
      <div data-chart={chartId} ref={ref} className={styles.root()} {...props}>
        <Style id={chartId} config={config} />
        <RechartsPrimitive.ResponsiveContainer>
          {children}
        </RechartsPrimitive.ResponsiveContainer>
      </div>
    </ChartContext.Provider>
  )
})

Root.displayName = 'Root'

type StyleProps = {
  id: string
  config: ChartConfig
}

export const Style = ({ id, config }: StyleProps) => {
  const colorConfig = Object.entries(config).filter(
    ([_, config]) => config.theme || config.color,
  )

  if (!colorConfig.length) {
    return null
  }

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: Object.entries(THEMES)
          .map(
            ([theme, prefix]) => `
${prefix} [data-chart=${id}] {
${colorConfig
  .map(([key, itemConfig]) => {
    const color =
      itemConfig.theme?.[theme as keyof typeof itemConfig.theme] ??
      itemConfig.color

    return color ? `  --color-${key}: ${color};` : null
  })
  .join('\n')}
}
`,
          )
          .join('\n'),
      }}
    />
  )
}

export const Tooltip = RechartsPrimitive.Tooltip

type TooltipContentProps = {
  hideLabel?: boolean
  hideIndicator?: boolean
  indicator?: 'line' | 'dot' | 'dashed'
  nameKey?: string
  labelKey?: string
}

export const TooltipContent = forwardRef<
  HTMLDivElement,
  ComponentProps<typeof RechartsPrimitive.Tooltip> &
    ComponentProps<'div'> &
    TooltipContentProps
>(
  (
    {
      active,
      payload,
      indicator = 'dot',
      hideLabel = false,
      hideIndicator = false,
      label,
      labelFormatter,
      formatter,
      color,
      nameKey,
      labelKey,
    },
    ref,
  ) => {
    const { config } = useChart()

    const tooltipLabel = useMemo(() => {
      if (hideLabel || !payload?.length) {
        return null
      }

      const [item] = payload
      const key = `${labelKey || item.dataKey || item.name || 'value'}`
      const itemConfig = getPayloadConfigFromPayload(config, item, key)
      const value =
        !labelKey && typeof label === 'string'
          ? config[label as keyof typeof config]?.label || label
          : itemConfig?.label

      if (labelFormatter) {
        return <div>{labelFormatter(value, payload)}</div>
      }

      if (!value) {
        return null
      }

      return <div>{value}</div>
    }, [label, labelFormatter, payload, hideLabel, config, labelKey])

    if (!active || !payload?.length) {
      return null
    }

    const nestLabel = payload.length === 1 && indicator !== 'dot'

    return (
      <div ref={ref} className={styles.tooltipRoot()}>
        {!nestLabel ? tooltipLabel : null}
        <div className={styles.tooltipContent()}>
          {payload.map((item, index) => {
            const key = `${nameKey || item.name || item.dataKey || 'value'}`
            const itemConfig = getPayloadConfigFromPayload(config, item, key)
            const indicatorColor = color || item.payload.fill || item.color

            return (
              <div
                key={item.dataKey}
                className={styles.tooltipItemRoot({ indicator })}
              >
                {formatter && item?.value !== undefined && item.name ? (
                  formatter(item.value, item.name, item, index, item.payload)
                ) : (
                  <>
                    {itemConfig?.icon ? (
                      <itemConfig.icon />
                    ) : (
                      !hideIndicator && (
                        <div
                          className={styles.tooltipItem({ indicator })}
                          style={
                            indicator === 'dashed'
                              ? {
                                  borderColor: indicatorColor,
                                }
                              : {
                                  backgroundColor: indicatorColor,
                                }
                          }
                        />
                      )
                    )}
                    <div className={styles.tooltipLabel({ nestLabel })}>
                      <div className={styles.tooltipContent()}>
                        {nestLabel ? tooltipLabel : null}
                        <span>{itemConfig?.label || item.name}</span>
                      </div>
                      {item.value && <span>{item.value.toLocaleString()}</span>}
                    </div>
                  </>
                )}
              </div>
            )
          })}
        </div>
      </div>
    )
  },
)

TooltipContent.displayName = 'TooltipContent'

export const Legend = RechartsPrimitive.Legend

type LegendContentProps = {
  hideIcon?: boolean
  nameKey?: string
}

export const LegendContent = forwardRef<
  HTMLDivElement,
  ComponentProps<'div'> &
    Pick<RechartsPrimitive.LegendProps, 'payload' | 'verticalAlign'> &
    LegendContentProps
>(({ hideIcon = false, payload, verticalAlign = 'bottom', nameKey }, ref) => {
  const { config } = useChart()

  if (!payload?.length) {
    return null
  }

  return (
    <div ref={ref} className={styles.legendRoot({ verticalAlign })}>
      {payload.map((item) => {
        const key = `${nameKey || item.dataKey || 'value'}`
        const itemConfig = getPayloadConfigFromPayload(config, item, key)

        return (
          <div key={item.value} className={styles.legendItem()}>
            {itemConfig?.icon && !hideIcon ? (
              <itemConfig.icon />
            ) : (
              <div
                className={styles.legendItemIndicator()}
                style={{
                  backgroundColor: item.color,
                }}
              />
            )}
            {itemConfig?.label}
          </div>
        )
      })}
    </div>
  )
})

LegendContent.displayName = 'LegendContent'

// Helper to extract item config from a payload.
function getPayloadConfigFromPayload(
  config: ChartConfig,
  payload: unknown,
  key: string,
) {
  if (typeof payload !== 'object' || payload === null) {
    return undefined
  }

  const payloadPayload =
    'payload' in payload &&
    typeof payload.payload === 'object' &&
    payload.payload !== null
      ? payload.payload
      : undefined

  let configLabelKey: string = key

  if (
    key in payload &&
    typeof payload[key as keyof typeof payload] === 'string'
  ) {
    configLabelKey = payload[key as keyof typeof payload] as string
  } else if (
    payloadPayload &&
    key in payloadPayload &&
    typeof payloadPayload[key as keyof typeof payloadPayload] === 'string'
  ) {
    configLabelKey = payloadPayload[
      key as keyof typeof payloadPayload
    ] as string
  }

  return configLabelKey in config ? config[configLabelKey] : config[key]
}
