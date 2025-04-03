import type { Meta, StoryObj } from '@storybook/react'
import { QRCode, QRCodeRef } from '@/components/QRCode/QRCode'
import { ComponentProps, useRef } from 'react'

const meta: Meta<typeof QRCode> = {
  component: QRCode,
  argTypes: {
    ecLevel: {
      description: 'The error correction level of the QR Code',
      control: 'radio',
      options: ['L', 'M', 'Q', 'H'],
      table: {
        defaultValue: { summary: 'M' },
      },
    },
    quietZone: {
      description: 'margin of QR Code',
    },
    logoWidth: {
      control: 'number',
      table: {
        defaultValue: { summary: 'size * 0.2' },
      },
    },
    logoHeight: {
      control: 'number',
      table: {
        defaultValue: { summary: 'logoWidth' },
      },
    },
    logoPaddingStyle: {
      control: 'radio',
      options: ['square', 'circle'],
    },
    qrStyle: {
      control: 'radio',
      options: ['squares', 'dots', 'fluid'],
    },
  },
  args: {
    value: 'https://www.google.com',
    ecLevel: 'M',
    enableCORS: true,
    size: 150,
    bgColor: '#ffffff',
    fgColor: '#000000',
    quietZone: 10,
    logoImage: 'https://picsum.photos/seed/picsum/200/300',
    logoWidth: 30,
    logoHeight: 30,
    logoOpacity: 1,
    removeQrCodeBehindLogo: false,
    logoPadding: 4,
    logoPaddingStyle: 'circle',
    qrStyle: 'dots',
    eyeRadius: 0,
    eyeColor: '#000000',
  },
}

export default meta

export const Default: StoryObj<typeof QRCode> = {
  render: (args) => <QRCode {...args} />,
}

export const Download: StoryObj<typeof QRCode> = {
  render: (args) => <DownloadExample {...args} />,
}

const DownloadExample = (args: ComponentProps<typeof QRCode>) => {
  const ref = useRef<QRCodeRef>(null)

  const download = () => {
    ref.current?.download('png', 'qr-code')
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <QRCode {...args} ref={ref} />
      <button onClick={download}>Download</button>
    </div>
  )
}
