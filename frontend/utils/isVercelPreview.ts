export const isVercelPreview = () => {
  const isProduction = process.env.NEXT_PUBLIC_VERCEL_ENV === 'production'
  const vercelUrl = process.env.NEXT_PUBLIC_VERCEL_URL

  if (isProduction) {
    return false
  }

  if (typeof window !== 'undefined') {
    return vercelUrl ? window.location.hostname.includes(vercelUrl) : false
  }

  if (typeof process !== 'undefined') {
    return vercelUrl ? process.env.VERCEL_URL === vercelUrl : false
  }

  return false
}
