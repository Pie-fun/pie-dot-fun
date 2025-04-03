import * as Card from '@/components/Card/Card'
import { Box } from '@/components/Box/Box'
import { UserAvatar } from '@/components/UserAvatar/UserAvatar'
import { useSuspenseQuery } from '@tanstack/react-query'
import { getUserQuery } from '@/app/api/backend/v1/user/queries'
import { getUserResource } from '@/app/api/backend/v1/user/resource'
import { Separator } from '@/components/Separator/Separator'
import { Typography } from '@/components/Typography/Typography'
import { CopyToClipboard } from '@/components/CopyToClipboard/CopyToClipboard'
import { Icon } from '@/components/Icon/Icon'
import {
  IcEthereumFixedColorFill,
  IcSolanaFixedColorFill,
  IcWalletOutline,
} from '@/components/Icon/Icons'
import { getShortAddress } from '@/utils/getShortAddress'
import { Skeleton } from '@/components/Skeleton/Skeleton'
import * as styles from '@/app/[locale]/profile/[displayName]/components/UserProfileCard/UserProfileCard.css'
import { useUser } from '@/libs/api/useUser'
import { VMType } from '@/app/api/protobuf/typescript_only_types/pie-dot-fun/v1/common'

type UserProfileCardProps = {
  id: string
}

export function UserProfileCard({ id }: Readonly<UserProfileCardProps>) {
  const { data: loginUser } = useUser({ vmType: 'SVM' })

  const { data: user } = useSuspenseQuery({
    ...getUserQuery({
      user: getUserResource({ id }),
    }),
  })

  const isMine = id === loginUser?.id
  const svmWallet = user.wallets.find(({ vmType }) => vmType === VMType.SVM)
  const evmWallet = user.wallets.find(({ vmType }) => vmType === VMType.EVM)

  return (
    <Card.Root background='default' border='default' size='m'>
      <Card.Header>
        <div className={styles.root()}>
          <UserAvatar size='m' isLined alt='' src={user.profileImageUrl} />
          <Box layout='fillWidth' orientation='vertical' gap='m'>
            <Typography
              typography='title3'
              fontWeight='regular'
              color='primary'
            >
              {user.displayName}
            </Typography>
            {(process.env.NEXT_PUBLIC_IS_USE_MOCK_DATA === 'true' &&
              (svmWallet || evmWallet)) ||
              (isMine && (svmWallet || evmWallet) && (
                <>
                  <Separator orientation='horizontal' color='default' />
                  <Box gap='s' align='center'>
                    {svmWallet && (
                      <Typography typography='body2' fontWeight='regular'>
                        <CopyToClipboard
                          value={svmWallet.address}
                          buttonType='solid'
                          shape='round'
                          color='secondary'
                          size='s'
                        >
                          <Icon size='s' shape='square' background='default'>
                            <IcSolanaFixedColorFill />
                          </Icon>
                          <Icon size='s'>
                            <IcWalletOutline />
                          </Icon>
                          {getShortAddress({
                            address: svmWallet.address,
                            type: 'svm',
                          })}
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
                          <Icon size='s' shape='square' background='default'>
                            <IcEthereumFixedColorFill />
                          </Icon>
                          <Icon size='s'>
                            <IcWalletOutline />
                          </Icon>
                          {getShortAddress({
                            address: evmWallet.address,
                            type: 'evm',
                          })}
                        </CopyToClipboard>
                      </Typography>
                    )}
                  </Box>
                </>
              ))}
          </Box>
        </div>
      </Card.Header>
      <Card.Footer />
    </Card.Root>
  )
}

export function UserProfileCardSkeleton() {
  return (
    <Card.Root background='default' border='default' size='s'>
      <Card.Header>
        <div className={styles.root()}>
          <Skeleton width='2rem' height='2rem' shape='circle' />
          <Box layout='fillWidth' orientation='vertical' gap='m'>
            <Skeleton width='10rem' height='2rem' />
            <Separator orientation='horizontal' color='default' />
            <Skeleton width='10rem' height='1.875rem' shape='circle' />
          </Box>
        </div>
      </Card.Header>
      <Card.Footer />
    </Card.Root>
  )
}
