import type { MetadataRoute } from 'next'

const BASE_URL = 'https://fe-mu-seven.vercel.app'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin', '/login', '/profile'],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
  }
}
