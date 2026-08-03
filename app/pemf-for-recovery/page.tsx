import type { Metadata } from 'next'
import TopicPage from '@/components/TopicPage'
import { getSeoTopic } from '@/lib/seo-topics'

const slug = 'pemf-for-recovery'

export function generateMetadata(): Metadata {
  const topic = getSeoTopic(slug)!
  return { title: topic.title, description: topic.metaDescription }
}

export default function PemfForRecoveryPage() {
  return <TopicPage topic={getSeoTopic(slug)!} />
}
