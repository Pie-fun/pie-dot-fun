import { Button } from '@/components/Button/Button'
import { Icon } from '@/components/Icon/Icon'
import {
  IcDiscordFixedColorFill,
  IcSocialXOutline,
} from '@/components/Icon/Icons'
import { Link } from '@/components/Link/Link'
import { EXTERNAL_LINKS } from '@/constants/externalLinks'

export function ExternalLinks() {
  return (
    <>
      <Link isExternal href={EXTERNAL_LINKS.PIE_DOT_FUN_X}>
        <Button
          buttonType='outline'
          shape='square'
          color='secondary'
          size='squareS'
        >
          <Icon size='s' color='primary'>
            <IcSocialXOutline />
          </Icon>
        </Button>
      </Link>
      <Link isExternal href={EXTERNAL_LINKS.PIE_DOT_FUN_DISCORD}>
        <Button
          buttonType='outline'
          shape='square'
          color='secondary'
          size='squareS'
        >
          <Icon size='s'>
            <IcDiscordFixedColorFill />
          </Icon>
        </Button>
      </Link>
    </>
  )
}
