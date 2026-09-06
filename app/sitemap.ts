import type { MetadataRoute } from 'next'

const siteUrl = 'https://www.pemfnashville.com'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${siteUrl}/` },
    { url: `${siteUrl}/pemf-for-recovery` },
    { url: `${siteUrl}/pemf-for-joint-comfort` },
    { url: `${siteUrl}/pemf-for-inflammation` },
    { url: `${siteUrl}/pemf-for-back-discomfort` },
  ]
}
