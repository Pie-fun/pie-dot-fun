'use client'

import { Box } from '@/components/Box/Box'
import { CopyToClipboard } from '@/components/CopyToClipboard/CopyToClipboard'
import { Icon } from '@/components/Icon/Icon'
import {
  IcEthereumFixedColorFill,
  IcSolanaFixedColorFill,
  IcWalletOutline,
} from '@/components/Icon/Icons'
import { Typography } from '@/components/Typography/Typography'
import { useUser } from '@/libs/api/useUser'
import { getShortAddress } from '@/utils/getShortAddress'
import { useTranslations } from 'next-intl'

export function CopyWalletAddressButtons() {
  const t = useTranslations()
  const { wallet: svmWallet } = useUser({ vmType: 'SVM' })
  const { wallet: evmWallet } = useUser({ vmType: 'EVM' })

  return (
    <Box gap='s' orientation='vertical'>
      {svmWallet && (
        <Typography layout='fillWidth' typography='body2' fontWeight='regular'>
          <CopyToClipboard
            layout='fillWidth'
            value={svmWallet.address}
            buttonType='solid'
            shape='round'
            color='secondary'
            size='s'
          >
            <Box layout='fillWidth' gap='xxs' align='startCenter'>
              <Icon size='s' shape='circle' background='default'>
                <IcSolanaFixedColorFill />
              </Icon>
              <Icon size='s'>
                <IcWalletOutline />
              </Icon>
              {`${t('common.walletAddress')}: ${getShortAddress({ address: svmWallet.address, type: 'svm' })}`}
            </Box>
          </CopyToClipboard>
        </Typography>
      )}
      {evmWallet && (
        <Typography typography='body2' fontWeight='regular'>
          <CopyToClipboard
            value={evmWallet.address}
            buttonType='solid'
            shape='round'
            color='secondary'
            size='s'
          >
            <Icon size='s' shape='circle'>
              <IcEthereumFixedColorFill />
            </Icon>
            <Icon size='s'>
              <IcWalletOutline />
            </Icon>
            {`${t('common.walletAddress')}: ${getShortAddress({ address: evmWallet.address, type: 'evm' })}`}
          </CopyToClipboard>
        </Typography>
      )}
    </Box>
  )
}
