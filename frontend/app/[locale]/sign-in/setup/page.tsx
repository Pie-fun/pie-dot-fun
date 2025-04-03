import { Box } from '@/components/Box/Box'
import { Layout } from '@/components/Layout/Layout'
import * as Title from '@/components/Title/Title'
import { Typography } from '@/components/Typography/Typography'
import { useTranslations } from 'next-intl'
import * as AccountSetupForm from '@/app/[locale]/sign-in/setup/AccountSetupForm/AccountSetupForm'
import { CopyWalletAddressButtons } from '@/app/[locale]/sign-in/setup/CopyWalletAddressButton/CopyWalletAddressButtons'

export default function Page() {
  const t = useTranslations()

  return (
    <Layout gap='l' topPadding='l' horizontalPadding='m'>
      <Title.Root layout='fillWidth' align='center'>
        <Typography as='h1'>
          <Title.Heading size='m' color='brand'>
            {t('accountSetup.title')}
          </Title.Heading>
        </Typography>
      </Title.Root>
      <AccountSetupForm.Root>
        <Box layout='fillWidth' align='center'>
          <Box orientation='vertical' gap='l' align='center'>
            <AccountSetupForm.UserAvatarField />
            <AccountSetupForm.UserNameField />
            <CopyWalletAddressButtons />
            <AccountSetupForm.SubmitButton />
          </Box>
        </Box>
      </AccountSetupForm.Root>
    </Layout>
  )
}
