import type { Metadata } from 'next'
import TopicPage from '@/components/TopicPage'
import { getSeoTopic } from '@/lib/seo-topics'

const slug = 'pemf-for-back-discomfort'

export function generateMetadata(): Metadata {
  const topic = getSeoTopic(slug)!
  return { title: topic.title, description: topic.metaDescription }
}

export default function PemfForBackDiscomfortPage() {
  return <TopicPage topic={getSeoTopic(slug)!} />
}
