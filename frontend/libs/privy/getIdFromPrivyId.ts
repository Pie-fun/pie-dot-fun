type GetIdFromPrivyIdProps = {
  id?: string
}

export function getIdFromPrivyId({ id }: Readonly<GetIdFromPrivyIdProps>) {
  return id?.split(':').at(-1) ?? ''
}
