'use client'

import { Icon } from '@/components/Icon/Icon'
import { IcChevOutline } from '@/components/Icon/Icons'
import { Link } from '@/components/Link/Link'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import * as styles from '@/components/Pagination/Pagination.css'
import { Button } from '@/components/Button/Button'

export interface PaginationProps {
  totalCount: number
  pageSize?: number
  paginationCount?: number
  paramKey?: string
}

export function Pagination({
  totalCount,
  pageSize = 20,
  paginationCount = 5,
  paramKey = 'page',
}: Readonly<PaginationProps>) {
  const lastPage = Math.ceil(totalCount / pageSize)
  const searchParams = useSearchParams()
  const router = useRouter()
  const pageParam = Number(searchParams.get(paramKey))
  const currentPage = pageParam < 1 || pageParam > lastPage ? 1 : pageParam
  const half = Math.floor(paginationCount / 2)

  const firstPage =
    currentPage - half + paginationCount - 1 > lastPage
      ? Math.max(1, lastPage - paginationCount + 1)
      : Math.max(1, currentPage - half)

  const pages = Array.from(
    { length: Math.min(paginationCount, lastPage) },
    (_, i) => firstPage + i,
  )

  const LeftArrow = () => {
    const param = new URLSearchParams(searchParams)
    const page = pages[0] - 1

    param.set(paramKey, String(page))

    if (page < 1) {
      return (
        <Button buttonType='outline' color='secondary' size='squareS' disabled>
          <Icon color='brandPrimary' rotate={-90}>
            <IcChevOutline />
          </Icon>
        </Button>
      )
    }

    return (
      <Link href={`?${param.toString()}`}>
        <Button buttonType='outline' color='secondary' size='squareS'>
          <Icon color='brandPrimary' rotate={-90}>
            <IcChevOutline />
          </Icon>
        </Button>
      </Link>
    )
  }

  const RightArrow = () => {
    const param = new URLSearchParams(searchParams)
    const page = (pages.at(-1) ?? 0) + 1

    param.set(paramKey, String(page))

    if (page > lastPage) {
      return (
        <Button buttonType='outline' color='secondary' size='squareS' disabled>
          <Icon color='brandPrimary' rotate={90}>
            <IcChevOutline />
          </Icon>
        </Button>
      )
    }

    return (
      <Link href={`?${param.toString()}`}>
        <Button buttonType='outline' color='secondary' size='squareS'>
          <Icon color='brandPrimary' rotate={90}>
            <IcChevOutline />
          </Icon>
        </Button>
      </Link>
    )
  }

  useEffect(() => {
    const pageParam = Number(searchParams.get(paramKey))

    if (pageParam < 1 || pageParam > lastPage) {
      const newParams = new URLSearchParams(searchParams.toString())

      newParams.delete(paramKey)
      router.replace(`?${newParams.toString()}`)
    }
  }, [lastPage, paramKey, router, searchParams])

  return (
    <>
      {totalCount > pageSize && (
        <div className={styles.root()}>
          <LeftArrow />
          {pages.map((page) => {
            const param = new URLSearchParams(searchParams)

            param.set(paramKey, String(page))

            return (
              <Link
                key={page}
                layout='fillHeight'
                href={`?${param.toString()}`}
              >
                <Button
                  layout='fillHeight'
                  buttonType={currentPage === page ? 'solid' : 'text'}
                  color='primary'
                  size='s'
                >
                  <div className={styles.button()}>{page}</div>
                </Button>
              </Link>
            )
          })}
          <RightArrow />
        </div>
      )}
    </>
  )
}
