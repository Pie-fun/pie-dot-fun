type GetUint8ArrayFromBase64Props = {
  string: string
}

export function getUint8ArrayFromBase64({
  string,
}: GetUint8ArrayFromBase64Props) {
  const binaryString = atob(string)
  const bytes = new Uint8Array(
    [...binaryString].map((char) => char.charCodeAt(0)),
  )

  return bytes
}
