const isDev = process.env.NEXT_PUBLIC_VERCEL_ENV !== 'production'

//======================================
export const AnalyticsProv = () => {
  if (isDev) return null
  return (
    <script
      defer
      src="https://aliytics.netlify.app/script.js"
      data-website-id="d9d61406-8e20-483f-ae8d-fea42f86f2fa"
    ></script>
  )
}
