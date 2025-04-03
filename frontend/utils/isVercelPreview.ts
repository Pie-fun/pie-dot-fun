export const isVercelPreview = () => {
  const vercelUrl = process.env.NEXT_PUBLIC_VERCEL_URL

  if (typeof window !== 'undefined') {
    return vercelUrl ? window.location.hostname.includes(vercelUrl) : false
  }

  if (typeof process !== 'undefined') {
    return vercelUrl ? process.env.VERCEL_URL === vercelUrl : false
  }

  return false
}
