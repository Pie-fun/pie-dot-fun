import type { Meta, StoryObj } from '@storybook/react'
import * as Chart from '@/components/Chart/Chart'
import { ComponentProps, useMemo } from 'react'
import {
  Bar,
  BarChart,
  CartesianGrid,
  Label,
  LabelList,
  Line,
  LineChart,
  Pie,
  PieChart,
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  RadialBar,
  RadialBarChart,
  XAxis,
} from 'recharts'
import { vars } from '@/libs/vanilla-extract/vars'
import { Typography } from '@/components/Typography/Typography'

const meta: Meta<typeof Chart.Root> = {
  component: Chart.Root,
  argTypes: {},
  args: {},
  decorators: (Story) => (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '500px',
        height: '500px',
      }}
    >
      <Story />
    </div>
  ),
}

export default meta

export const DonutCase: StoryObj<typeof Chart.Root> = {
  render: (args) => <DonutExample {...args} />,
}

export const BarCase: StoryObj<typeof Chart.Root> = {
  render: (args) => <BarExample {...args} />,
}

export const LineCase: StoryObj<typeof Chart.Root> = {
  render: (args) => <LineExample {...args} />,
}

export const PieCase: StoryObj<typeof Chart.Root> = {
  render: (args) => <PieExample {...args} />,
}

export const RadarCase: StoryObj<typeof Chart.Root> = {
  render: (args) => <RadarExample {...args} />,
}

export const RadiarCase: StoryObj<typeof Chart.Root> = {
  render: (args) => <RadiarExample {...args} />,
}

const multipleChartData = [
  {
    month: 'January',
    desktop: 186,
    mobile: 80,
  },
  { month: 'February', desktop: 305, mobile: 200 },
  { month: 'March', desktop: 237, mobile: 120 },
  { month: 'April', desktop: 73, mobile: 190 },
  { month: 'May', desktop: 209, mobile: 130 },
  { month: 'June', desktop: 214, mobile: 140 },
]

const multipleChartConfig = {
  desktop: {
    label: 'Desktop',
    color: vars.colors.texts.brand.primary,
  },
  mobile: {
    label: 'Mobile',
    color: vars.colors.texts.info.primary,
  },
} satisfies Chart.ChartConfig

const singleChartData = [
  { browser: 'chrome', visitors: 275, fill: vars.colors.texts.primary },
  { browser: 'safari', visitors: 200, fill: vars.colors.texts.brand.primary },
  {
    browser: 'firefox',
    visitors: 187,
    fill: vars.colors.texts.info.primary,
  },
  { browser: 'edge', visitors: 173, fill: vars.colors.texts.alert.primary },
  {
    browser: 'other',
    visitors: 90,
    fill: vars.colors.texts.tertiary,
  },
]

const singleChartConfig = {
  visitors: {
    label: 'Visitors',
  },
  chrome: {
    label: 'Chrome',
  },
  safari: {
    label: 'Safari',
  },
  firefox: {
    label: 'Firefox',
  },
  edge: {
    label: 'Edge',
  },
  other: {
    label: 'Other',
  },
} satisfies Chart.ChartConfig

const DonutExample = (args: ComponentProps<typeof Chart.Root>) => {
  const totalVisitors = useMemo(() => {
    return singleChartData.reduce((acc, curr) => acc + curr.visitors, 0)
  }, [])

  return (
    <Chart.Root {...args} config={singleChartConfig}>
      <PieChart>
        <Chart.Tooltip
          cursor={false}
          defaultIndex={1}
          content={<Chart.TooltipContent hideLabel />}
        />
        <Pie
          data={singleChartData}
          dataKey='visitors'
          nameKey='browser'
          innerRadius={60}
          strokeWidth={5}
        >
          <Label
            content={({ viewBox }) => {
              if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
                return (
                  <text
                    x={viewBox.cx}
                    y={viewBox.cy}
                    textAnchor='middle'
                    dominantBaseline='middle'
                  >
                    <Typography
                      as='tspan'
                      x={viewBox.cx}
                      y={viewBox.cy}
                      typography='title1'
                    >
                      {totalVisitors.toLocaleString()}
                    </Typography>
                    <Typography
                      as='tspan'
                      x={viewBox.cx}
                      y={(viewBox.cy || 0) + 24}
                      typography='caption1'
                      color='secondary'
                    >
                      Visitors
                    </Typography>
                  </text>
                )
              }
            }}
          />
        </Pie>
      </PieChart>
    </Chart.Root>
  )
}

const BarExample = (args: ComponentProps<typeof Chart.Root>) => {
  return (
    <Chart.Root {...args} config={multipleChartConfig}>
      <BarChart accessibilityLayer data={multipleChartData}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey='month'
          tickLine={false}
          axisLine={false}
          tickMargin={10}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <Chart.Tooltip content={<Chart.TooltipContent />} />
        <Chart.Legend content={<Chart.LegendContent />} />
        <Bar
          dataKey='desktop'
          fill={vars.colors.texts.brand.primary}
          radius={4}
        />
        <Bar
          dataKey='mobile'
          fill={vars.colors.texts.info.primary}
          radius={4}
        />
      </BarChart>
    </Chart.Root>
  )
}

const LineExample = (args: ComponentProps<typeof Chart.Root>) => {
  return (
    <Chart.Root {...args} config={multipleChartConfig}>
      <LineChart
        accessibilityLayer
        data={multipleChartData}
        margin={{ left: 12, right: 12 }}
      >
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey='month'
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <Chart.Tooltip content={<Chart.TooltipContent hideLabel />} />
        <Line
          dataKey='desktop'
          type='natural'
          stroke={vars.colors.texts.brand.primary}
          strokeWidth={2}
          dot={false}
        />
        <Line
          dataKey='mobile'
          type='natural'
          stroke={vars.colors.texts.info.primary}
          strokeWidth={2}
          dot={false}
        />
      </LineChart>
    </Chart.Root>
  )
}

const PieExample = (args: ComponentProps<typeof Chart.Root>) => {
  return (
    <Chart.Root {...args} config={singleChartConfig}>
      <PieChart>
        <Chart.Tooltip
          content={
            <Chart.TooltipContent active={true} nameKey='visitors' hideLabel />
          }
        />
        <Pie data={singleChartData} dataKey='visitors'>
          <LabelList
            dataKey='browser'
            stroke='none'
            formatter={(value: keyof typeof singleChartConfig) =>
              singleChartConfig[value]?.label
            }
          />
        </Pie>
      </PieChart>
    </Chart.Root>
  )
}

const RadarExample = (args: ComponentProps<typeof Chart.Root>) => {
  return (
    <Chart.Root {...args} config={multipleChartConfig}>
      <RadarChart data={multipleChartData}>
        <Chart.Tooltip cursor={false} content={<Chart.TooltipContent />} />
        <PolarAngleAxis dataKey='month' />
        <PolarGrid />
        <Radar
          dataKey='desktop'
          fill={vars.colors.backgrounds.brand.primary}
          fillOpacity={0.6}
        />
        <Radar
          dataKey='mobile'
          fill={vars.colors.backgrounds.primary}
          fillOpacity={0.6}
        />
      </RadarChart>
    </Chart.Root>
  )
}

const RadiarExample = (args: ComponentProps<typeof Chart.Root>) => {
  return (
    <Chart.Root {...args} config={singleChartConfig}>
      <RadialBarChart
        data={singleChartData}
        startAngle={-90}
        endAngle={380}
        innerRadius={30}
        outerRadius={110}
      >
        <Chart.Tooltip
          cursor={false}
          content={<Chart.TooltipContent hideLabel nameKey='browser' />}
        />
        <RadialBar dataKey='visitors' background>
          <LabelList position='insideStart' dataKey='browser' />
        </RadialBar>
      </RadialBarChart>
    </Chart.Root>
  )
}
