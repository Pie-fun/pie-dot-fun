type GetOrderByParam = {
  condition?: boolean
  field: string | number | boolean
  sort: 'desc' | 'asc'
}[]

export function getOrderBy(params: GetOrderByParam) {
  const orderBy =
    params
      .filter(({ condition = true }) => Boolean(condition))
      .map(({ field, sort }) => `${field} ${sort}`)
      .join(', ') || undefined

  return orderBy
}
