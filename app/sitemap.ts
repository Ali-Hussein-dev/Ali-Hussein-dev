export default async function sitemap() {
  const routes = ['', '/Blog', '/Projects', '/About'].map((route) => ({
    url: `https://ali-hussein.com${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes]
}
