export type OperatorCondition = {
  condition?: boolean
  field: string | number | boolean
  operator: '=' | '!=' | '<' | '>' | '<=' | '>='
  value: string | number | boolean
  join?: 'AND' | 'OR'
}

export type NegationCondition = {
  condition?: boolean
  negation?: boolean
  value: string | number | boolean
  join?: 'AND' | 'OR'
}

type GetFilterParam = (OperatorCondition | NegationCondition)[]

export function getFilter(params: GetFilterParam) {
  let isJoinable = false

  const filter = params
    .map((param, index) => {
      const { condition = true } = param
      let filterString = ''

      if (index && 'join' in param && isJoinable && condition) {
        const { join } = param

        filterString += ` ${join} `
      }

      if ('operator' in param && condition) {
        const { field, value, operator } = param

        isJoinable = true
        filterString += `${field} ${operator} ${value}`
      }

      if ('negation' in param && condition) {
        const { value, negation } = param

        isJoinable = true
        filterString += negation ? `NOT ${value}` : value.toString()
      }

      return filterString
    })
    .join('')

  return filter
}
