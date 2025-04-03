export type GetUserResourceProps = {
  id: string
}

export function getUserResource({ id }: GetUserResourceProps) {
  return `users/${id}` as const
}
