'use client'

import { Icon } from '@/components/Icon/Icon'
import {
  IcChevOutline,
  IcDocumentWithSignOutline,
  IcDownwardArrawInCutcircleOutline,
  IcInfoCircleOutline,
  IcMobileOutline,
  IcQuestMarkInSpeechBubbleOutline,
} from '@/components/Icon/Icons'
import * as DropdownMenu from '@/components/DropdownMenu/DropdownMenu'
import * as Card from '@/components/Card/Card'
import { Separator } from '@/components/Separator/Separator'
import { PrivyLogout } from '@/app/components/Header/PrivyLogout'
import { Typography } from '@/components/Typography/Typography'
import { ExternalLinks } from '@/app/components/Header/ExternalLinks'
import { Button } from '@/components/Button/Button'
import { Tutorial } from '@/app/components/Tutorial/Tutorial'
import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { Box } from '@/components/Box/Box'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { queries } from '@/libs/vanilla-extract/queries'
import { PrivyUserAvatar } from '@/app/components/Header/PrivyUserAvatar'
import { Link } from '@/components/Link/Link'
import { UseOnMobile } from '@/app/components/Header/UseOnMobile/UseOnMobile'
import { ColorThemeToggleGroup } from '@/app/components/Header/ColorThemeToggleGroup/ColorThemeToggleGroup'
import { useUser } from '@/libs/api/useUser'
import { EXTERNAL_LINKS } from '@/constants/externalLinks'
import { ProfileMenu } from '@/app/components/Header/ProfileMenu'
import { PrivyExportWallet } from '@/app/components/Header/PrivyExportWallet'
import { SvmWalletInfoCard } from '@/app/components/Header/HeaderDropdownMenu/SvmWalletInfoCard'
import { EvmWalletInfoCard } from '@/app/components/Header/HeaderDropdownMenu/EvmWalletInfoCard'
import { Deposit } from '@/app/components/Deposit/Deposit'

export function HeaderDropdownMenu() {
  const t = useTranslations()
  const [isOpen, setIsOpen] = useState(false)
  const { data, isAuthenticated } = useUser()
  const isDesktop = useMediaQuery({ query: queries.breakpoints.desktop })

  return (
    <DropdownMenu.Root open={isOpen} onOpenChange={setIsOpen}>
      {isAuthenticated && (
        <Card.Root layout='hug' background='default' border='default' size='s'>
          <Card.Header>
            <Box orientation='horizontal' gap='s' align='center'>
              <PrivyUserAvatar />
              <DropdownMenu.Trigger asChild>
                <Button
                  buttonType='text'
                  shape='square'
                  color='secondary'
                  size='squareS'
                >
                  <Icon size='s' rotate={isOpen ? 0 : 180} color='primary'>
                    <IcChevOutline />
                  </Icon>
                </Button>
              </DropdownMenu.Trigger>
            </Box>
          </Card.Header>
          <Card.Footer />
        </Card.Root>
      )}
      {!isAuthenticated && (
        <DropdownMenu.Trigger asChild>
          <Button
            buttonType='outline'
            shape='square'
            color='secondary'
            size='squareS'
          >
            <Icon size='s' rotate={isOpen ? 0 : 180} color='primary'>
              <IcChevOutline />
            </Icon>
          </Button>
        </DropdownMenu.Trigger>
      )}
      <DropdownMenu.Content>
        {isAuthenticated && data?.wallets && (
          <DropdownMenu.Header>
            <SvmWalletInfoCard />
            <EvmWalletInfoCard />
            {!isDesktop && (
              <Deposit
                trigger={
                  <Typography
                    layout='fillWidth'
                    typography='body2'
                    fontWeight='bold'
                  >
                    <Button
                      layout='fillWidth'
                      buttonType='solid'
                      shape='square'
                      color='primary'
                      size='s'
                    >
                      {t('common.deposit')}
                      <Icon>
                        <IcDownwardArrawInCutcircleOutline />
                      </Icon>
                    </Button>
                  </Typography>
                }
              />
            )}
          </DropdownMenu.Header>
        )}
        <DropdownMenu.Group>
          {isAuthenticated && (
            <DropdownMenu.Item>
              <ProfileMenu />
            </DropdownMenu.Item>
          )}
          <Tutorial
            trigger={
              <DropdownMenu.Item onSelect={(event) => event.preventDefault()}>
                <Button layout='fillWidth' buttonType='content'>
                  <Box orientation='horizontal' gap='s'>
                    <Icon size='m' color='primary'>
                      <IcInfoCircleOutline />
                    </Icon>
                    <Typography
                      typography='body1'
                      fontWeight='regular'
                      color='primary'
                    >
                      {t('layoutHeader.tutorial')}
                    </Typography>
                  </Box>
                </Button>
              </DropdownMenu.Item>
            }
          />
          <DropdownMenu.Item>
            <Link
              layout='fillWidth'
              href={EXTERNAL_LINKS.PIE_DOT_FUN_FAQ}
              isExternal
            >
              <Box layout='fillWidth' orientation='horizontal' gap='s'>
                <Icon size='m' color='primary'>
                  <IcQuestMarkInSpeechBubbleOutline />
                </Icon>
                <Typography
                  typography='body1'
                  fontWeight='regular'
                  color='primary'
                >
                  {t('common.faq')}
                </Typography>
              </Box>
            </Link>
          </DropdownMenu.Item>
          <DropdownMenu.Item>
            <Link
              layout='fillWidth'
              href={EXTERNAL_LINKS.PIE_DOT_FUN_DOCS}
              isExternal
            >
              <Box layout='fillWidth' orientation='horizontal' gap='s'>
                <Icon size='m' color='primary'>
                  <IcDocumentWithSignOutline />
                </Icon>
                <Typography
                  typography='body1'
                  fontWeight='regular'
                  color='primary'
                >
                  {t('layoutHeader.docs')}
                </Typography>
              </Box>
            </Link>
          </DropdownMenu.Item>
          <UseOnMobile
            trigger={
              <DropdownMenu.Item onSelect={(event) => event.preventDefault()}>
                <Button layout='fillWidth' buttonType='content'>
                  <Box orientation='horizontal' gap='s'>
                    <Icon size='m' color='primary'>
                      <IcMobileOutline />
                    </Icon>
                    <Typography
                      typography='body1'
                      fontWeight='regular'
                      color='primary'
                    >
                      {t('layoutHeader.useOnMobile')}
                    </Typography>
                  </Box>
                </Button>
              </DropdownMenu.Item>
            }
          />
          {isAuthenticated && (
            <>
              {(process.env.NEXT_PUBLIC_ENV === 'local' ||
                process.env.NEXT_PUBLIC_ENV === 'dev' ||
                process.env.NEXT_PUBLIC_ENV === 'qa') && (
                <DropdownMenu.Item>
                  <PrivyExportWallet />
                </DropdownMenu.Item>
              )}
              <DropdownMenu.Item>
                <PrivyLogout />
              </DropdownMenu.Item>
            </>
          )}
        </DropdownMenu.Group>
        <DropdownMenu.Footer>
          <Separator orientation='horizontal' />
          <Box orientation='vertical' gap='m'>
            <Typography
              typography='caption1'
              fontWeight='regular'
              color='primary'
            >
              {t('layoutHeader.colorTheme')}
            </Typography>
            <ColorThemeToggleGroup />
          </Box>
          <Separator orientation='horizontal' />
          <Box orientation='horizontal' gap='m'>
            <Link href={EXTERNAL_LINKS.PIE_DOT_FUN_TERMS_OF_USE} isExternal>
              <Typography
                typography='body2'
                fontWeight='regular'
                color='secondary'
              >
                {t('layoutHeader.termsOfUse')}
              </Typography>
            </Link>
            <Link href={EXTERNAL_LINKS.PIE_DOT_FUN_PRIVACY_POLICY} isExternal>
              <Typography
                typography='body2'
                fontWeight='regular'
                color='secondary'
              >
                {t('layoutHeader.privacyPolicy')}
              </Typography>
            </Link>
          </Box>
          <Box orientation='horizontal' gap='m'>
            <ExternalLinks />
          </Box>
        </DropdownMenu.Footer>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  )
}
