import type { Metadata } from 'next'
import TopicPage from '@/components/TopicPage'
import { getSeoTopic } from '@/lib/seo-topics'

const slug = 'pemf-for-inflammation'

export function generateMetadata(): Metadata {
  const topic = getSeoTopic(slug)!
  return {
    title: topic.title,
    description: topic.metaDescription,
    alternates: {
      canonical: '/pemf-for-inflammation',
    },
  }
}

export default function PemfForInflammationPage() {
  return <TopicPage topic={getSeoTopic(slug)!} />
}
