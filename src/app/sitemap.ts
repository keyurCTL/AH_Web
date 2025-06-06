import type { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/gujarat-tourism`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/india-tours`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/international-tours`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/honeymoon-tours`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/religious-tours`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/about`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/our-team`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/contact`,
    },
  ]
}