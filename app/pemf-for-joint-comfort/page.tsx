import type { Metadata } from 'next'
import TopicPage from '@/components/TopicPage'
import { getSeoTopic } from '@/lib/seo-topics'

const slug = 'pemf-for-joint-comfort'

export function generateMetadata(): Metadata {
  const topic = getSeoTopic(slug)!
  return {
    title: topic.title,
    description: topic.metaDescription,
    alternates: {
      canonical: '/pemf-for-joint-comfort',
    },
  }
}

export default function PemfForJointComfortPage() {
  return <TopicPage topic={getSeoTopic(slug)!} />
}
