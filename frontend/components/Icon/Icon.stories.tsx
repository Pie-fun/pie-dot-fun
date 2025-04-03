import type { Meta, StoryObj } from '@storybook/react'
import { Icon } from '@/components/Icon/Icon'
import { HTMLAttributes, ReactNode } from 'react'
// icon import start
import IcArbitrumFixedColorFill from '@/components/Icon/Icons/IcArbitrumFixedColorFill'
import IcArrowOutline from '@/components/Icon/Icons/IcArrowOutline'
import IcBarGraphOutline from '@/components/Icon/Icons/IcBarGraphOutline'
import IcBaseEthereumFill from '@/components/Icon/Icons/IcBaseEthereumFill'
import IcBaseFixedColorFill from '@/components/Icon/Icons/IcBaseFixedColorFill'
import IcBlastFixedColorFill from '@/components/Icon/Icons/IcBlastFixedColorFill'
import IcChangeOutline from '@/components/Icon/Icons/IcChangeOutline'
import IcCheckOutline from '@/components/Icon/Icons/IcCheckOutline'
import IcChevDownOutline from '@/components/Icon/Icons/IcChevDownOutline'
import IcChevOutline from '@/components/Icon/Icons/IcChevOutline'
import IcChevRightOutline from '@/components/Icon/Icons/IcChevRightOutline'
import IcChevSmallBoldOutline from '@/components/Icon/Icons/IcChevSmallBoldOutline'
import IcClipRotateOutline from '@/components/Icon/Icons/IcClipRotateOutline'
import IcClockFill from '@/components/Icon/Icons/IcClockFill'
import IcCopyOutline from '@/components/Icon/Icons/IcCopyOutline'
import IcDesktopOutline from '@/components/Icon/Icons/IcDesktopOutline'
import IcDiscordFixedColorFill from '@/components/Icon/Icons/IcDiscordFixedColorFill'
import IcDocumentWithSignOutline from '@/components/Icon/Icons/IcDocumentWithSignOutline'
import IcDownwardArrawInCutcircleOutline from '@/components/Icon/Icons/IcDownwardArrawInCutcircleOutline'
import IcEmptyImageFill from '@/components/Icon/Icons/IcEmptyImageFill'
import IcErrorCircleFill from '@/components/Icon/Icons/IcErrorCircleFill'
import IcEthereumFill from '@/components/Icon/Icons/IcEthereumFill'
import IcEthereumFixedColorFill from '@/components/Icon/Icons/IcEthereumFixedColorFill'
import IcGasFill from '@/components/Icon/Icons/IcGasFill'
import IcGitbookFixedColorFill from '@/components/Icon/Icons/IcGitbookFixedColorFill'
import IcGoogleFixedColorFill from '@/components/Icon/Icons/IcGoogleFixedColorFill'
import IcInfoCircleOutline from '@/components/Icon/Icons/IcInfoCircleOutline'
import IcKeyOutline from '@/components/Icon/Icons/IcKeyOutline'
import IcLoadingCircleDashFill from '@/components/Icon/Icons/IcLoadingCircleDashFill'
import IcLockFilled from '@/components/Icon/Icons/IcLockFilled'
import IcLogoRelaySymbol from '@/components/Icon/Icons/IcLogoRelaySymbol'
import IcLogoRelayText from '@/components/Icon/Icons/IcLogoRelayText'
import IcMinusOutline from '@/components/Icon/Icons/IcMinusOutline'
import IcMobileOutline from '@/components/Icon/Icons/IcMobileOutline'
import IcMoonOutline from '@/components/Icon/Icons/IcMoonOutline'
import IcOptimismFixedColorFill from '@/components/Icon/Icons/IcOptimismFixedColorFill'
import IcOutOutline from '@/components/Icon/Icons/IcOutOutline'
import IcPersonFill from '@/components/Icon/Icons/IcPersonFill'
import IcPersonOutline from '@/components/Icon/Icons/IcPersonOutline'
import IcPieChartQuarterFill from '@/components/Icon/Icons/IcPieChartQuarterFill'
import IcPlusInCircleOutline from '@/components/Icon/Icons/IcPlusInCircleOutline'
import IcPlusOutline from '@/components/Icon/Icons/IcPlusOutline'
import IcPolygonFixedColorFill from '@/components/Icon/Icons/IcPolygonFixedColorFill'
import IcQuestMarkInSpeechBubbleOutline from '@/components/Icon/Icons/IcQuestMarkInSpeechBubbleOutline'
import IcRightUpperArrowOutline from '@/components/Icon/Icons/IcRightUpperArrowOutline'
import IcSettingSliderOutline from '@/components/Icon/Icons/IcSettingSliderOutline'
import IcShieldFilled from '@/components/Icon/Icons/IcShieldFilled'
import IcSocialXOutline from '@/components/Icon/Icons/IcSocialXOutline'
import IcSolanaFill from '@/components/Icon/Icons/IcSolanaFill'
import IcSolanaFixedColorFill from '@/components/Icon/Icons/IcSolanaFixedColorFill'
import IcSunOutline from '@/components/Icon/Icons/IcSunOutline'
import IcTetherFill from '@/components/Icon/Icons/IcTetherFill'
import IcTetherFixedColorFill from '@/components/Icon/Icons/IcTetherFixedColorFill'
import IcTriangleFill from '@/components/Icon/Icons/IcTriangleFill'
import IcUpperArrawInCutcircleOutline from '@/components/Icon/Icons/IcUpperArrawInCutcircleOutline'
import IcUsdcFixedColorFill from '@/components/Icon/Icons/IcUsdcFixedColorFill'
import IcWalletOutline from '@/components/Icon/Icons/IcWalletOutline'
import IcWarningSignOutline from '@/components/Icon/Icons/IcWarningSignOutline'
import IcXOutline from '@/components/Icon/Icons/IcXOutline'
// icon import end

const meta: Meta<typeof Icon> = {
  component: Icon,
  argTypes: {
    size: {
      control: 'radio',
      options: ['inherit', 'xxl', 'xl', 'l', 'm', 's', 'xs', 'xxs'],
    },
    color: {
      control: 'radio',
      options: [
        'inherit',
        'primary',
        'secondary',
        'tertiary',
        'white',
        'brandPrimary',
        'infoPrimary',
        'alertPrimary',
      ],
    },
    background: {
      control: 'radio',
      options: [
        'inherit',
        'accentPrimary',
        'accentSecondary',
        'alertPrimary',
        'alertSecondary',
        'brandPrimary',
        'brandSecondary',
        'default',
        'infoPrimary',
        'infoSecondary',
        'inverse',
        'primary',
        'secondary',
      ],
    },
    shape: {
      control: 'radio',
      options: ['square', 'circle'],
    },
  },
  args: {
    size: 'xl',
    isSpin: false,
    rotate: 0,
  },
}

export default meta

function Grid(props: Readonly<HTMLAttributes<HTMLDivElement>>) {
  return (
    <div
      {...props}
      style={{
        display: 'grid',
        gap: '16px',
        gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
      }}
    />
  )
}

type Item = {
  icon: ReactNode
  name: string
}

function GridItem({ icon, name }: Readonly<Item>) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '16px',
      }}
    >
      <Icon size='xl'>{icon}</Icon>
      <span>{name}</span>
    </div>
  )
}

export const Default: StoryObj<typeof Icon> = {
  render: (args) => (
    <Icon {...args}>
      <IcLoadingCircleDashFill />
    </Icon>
  ),
}

export const Icons: StoryObj = {
  render: () => {
    const items: Item[] = [
      // icons start
      {
        name: 'IcArbitrumFixedColorFill',
        icon: <IcArbitrumFixedColorFill />,
      },
      {
        name: 'IcArrowOutline',
        icon: <IcArrowOutline />,
      },
      {
        name: 'IcBarGraphOutline',
        icon: <IcBarGraphOutline />,
      },
      {
        name: 'IcBaseEthereumFill',
        icon: <IcBaseEthereumFill />,
      },
      {
        name: 'IcBaseFixedColorFill',
        icon: <IcBaseFixedColorFill />,
      },
      {
        name: 'IcBlastFixedColorFill',
        icon: <IcBlastFixedColorFill />,
      },
      {
        name: 'IcChangeOutline',
        icon: <IcChangeOutline />,
      },
      {
        name: 'IcCheckOutline',
        icon: <IcCheckOutline />,
      },
      {
        name: 'IcChevDownOutline',
        icon: <IcChevDownOutline />,
      },
      {
        name: 'IcChevOutline',
        icon: <IcChevOutline />,
      },
      {
        name: 'IcChevRightOutline',
        icon: <IcChevRightOutline />,
      },
      {
        name: 'IcChevSmallBoldOutline',
        icon: <IcChevSmallBoldOutline />,
      },
      {
        name: 'IcClipRotateOutline',
        icon: <IcClipRotateOutline />,
      },
      {
        name: 'IcClockFill',
        icon: <IcClockFill />,
      },
      {
        name: 'IcCopyOutline',
        icon: <IcCopyOutline />,
      },
      {
        name: 'IcDesktopOutline',
        icon: <IcDesktopOutline />,
      },
      {
        name: 'IcDiscordFixedColorFill',
        icon: <IcDiscordFixedColorFill />,
      },
      {
        name: 'IcDocumentWithSignOutline',
        icon: <IcDocumentWithSignOutline />,
      },
      {
        name: 'IcDownwardArrawInCutcircleOutline',
        icon: <IcDownwardArrawInCutcircleOutline />,
      },
      {
        name: 'IcEmptyImageFill',
        icon: <IcEmptyImageFill />,
      },
      {
        name: 'IcErrorCircleFill',
        icon: <IcErrorCircleFill />,
      },
      {
        name: 'IcEthereumFill',
        icon: <IcEthereumFill />,
      },
      {
        name: 'IcEthereumFixedColorFill',
        icon: <IcEthereumFixedColorFill />,
      },
      {
        name: 'IcGasFill',
        icon: <IcGasFill />,
      },
      {
        name: 'IcGitbookFixedColorFill',
        icon: <IcGitbookFixedColorFill />,
      },
      {
        name: 'IcGoogleFixedColorFill',
        icon: <IcGoogleFixedColorFill />,
      },
      {
        name: 'IcInfoCircleOutline',
        icon: <IcInfoCircleOutline />,
      },
      {
        name: 'IcKeyOutline',
        icon: <IcKeyOutline />,
      },
      {
        name: 'IcLoadingCircleDashFill',
        icon: <IcLoadingCircleDashFill />,
      },
      {
        name: 'IcLockFilled',
        icon: <IcLockFilled />,
      },
      {
        name: 'IcLogoRelaySymbol',
        icon: <IcLogoRelaySymbol />,
      },
      {
        name: 'IcLogoRelayText',
        icon: <IcLogoRelayText />,
      },
      {
        name: 'IcMinusOutline',
        icon: <IcMinusOutline />,
      },
      {
        name: 'IcMobileOutline',
        icon: <IcMobileOutline />,
      },
      {
        name: 'IcMoonOutline',
        icon: <IcMoonOutline />,
      },
      {
        name: 'IcOptimismFixedColorFill',
        icon: <IcOptimismFixedColorFill />,
      },
      {
        name: 'IcOutOutline',
        icon: <IcOutOutline />,
      },
      {
        name: 'IcPersonFill',
        icon: <IcPersonFill />,
      },
      {
        name: 'IcPersonOutline',
        icon: <IcPersonOutline />,
      },
      {
        name: 'IcPieChartQuarterFill',
        icon: <IcPieChartQuarterFill />,
      },
      {
        name: 'IcPlusInCircleOutline',
        icon: <IcPlusInCircleOutline />,
      },
      {
        name: 'IcPlusOutline',
        icon: <IcPlusOutline />,
      },
      {
        name: 'IcPolygonFixedColorFill',
        icon: <IcPolygonFixedColorFill />,
      },
      {
        name: 'IcQuestMarkInSpeechBubbleOutline',
        icon: <IcQuestMarkInSpeechBubbleOutline />,
      },
      {
        name: 'IcRightUpperArrowOutline',
        icon: <IcRightUpperArrowOutline />,
      },
      {
        name: 'IcSettingSliderOutline',
        icon: <IcSettingSliderOutline />,
      },
      {
        name: 'IcShieldFilled',
        icon: <IcShieldFilled />,
      },
      {
        name: 'IcSocialXOutline',
        icon: <IcSocialXOutline />,
      },
      {
        name: 'IcSolanaFill',
        icon: <IcSolanaFill />,
      },
      {
        name: 'IcSolanaFixedColorFill',
        icon: <IcSolanaFixedColorFill />,
      },
      {
        name: 'IcSunOutline',
        icon: <IcSunOutline />,
      },
      {
        name: 'IcTetherFill',
        icon: <IcTetherFill />,
      },
      {
        name: 'IcTetherFixedColorFill',
        icon: <IcTetherFixedColorFill />,
      },
      {
        name: 'IcTriangleFill',
        icon: <IcTriangleFill />,
      },
      {
        name: 'IcUpperArrawInCutcircleOutline',
        icon: <IcUpperArrawInCutcircleOutline />,
      },
      {
        name: 'IcUsdcFixedColorFill',
        icon: <IcUsdcFixedColorFill />,
      },
      {
        name: 'IcWalletOutline',
        icon: <IcWalletOutline />,
      },
      {
        name: 'IcWarningSignOutline',
        icon: <IcWarningSignOutline />,
      },
      {
        name: 'IcXOutline',
        icon: <IcXOutline />,
      },
      // icons end
    ]

    return (
      <Grid>
        {items.map(({ icon, name }) => (
          <GridItem key={name} icon={icon} name={name} />
        ))}
      </Grid>
    )
  },
}
