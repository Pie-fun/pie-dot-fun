import * as Accordion from '@/components/Accordion/Accordion'
import { Typography } from '@/components/Typography/Typography'
import { useTranslations } from 'next-intl'
import * as List from '@/components/List/List'
import { Box } from '@/components/Box/Box'
import { AdditionalRiskFactors } from '@/app/[locale]/baskets/[chain]/[address]/components/DiscontinuationNoticeAccordion/AdditionalRiskFactors'

type DiscontinuationNoticeAccordionProps = {
  status: 'active' | 'discontinued'
}

export function DiscontinuationNoticeAccordion({
  status,
}: Readonly<DiscontinuationNoticeAccordionProps>) {
  const t = useTranslations()

  return (
    <Accordion.Root type='multiple'>
      <Accordion.Item value='disclaimer'>
        <Accordion.Trigger>
          {status === 'active'
            ? t('basketDiscontinuation.titleDisclaimer')
            : t('basketDiscontinuation.titleDiscontinuation')}
        </Accordion.Trigger>
        <Accordion.Content>
          <Box orientation='vertical' gap='m'>
            <Typography
              typography='body2'
              fontWeight='regular'
              color='secondary'
            >
              {t.rich('basketDiscontinuation.descriptionBrief', {
                br: () => <br />,
              })}
              <List.Root listStyleType='disc'>
                <List.Item>
                  {t('basketDiscontinuation.descriptionMint')}
                </List.Item>
                <List.Item>
                  {t('basketDiscontinuation.descriptionSol')}
                </List.Item>
                <List.Item>
                  {t('basketDiscontinuation.descriptionSell')}
                </List.Item>
              </List.Root>
            </Typography>
            <AdditionalRiskFactors />
          </Box>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  )
}
