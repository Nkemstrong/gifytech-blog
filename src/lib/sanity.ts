import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: 'isowdapm',
  dataset: 'production',
  apiVersion: '2026-10-21',
  useCdn: true,
})

const builder = imageUrlBuilder(client)

export function urlFor(source: Parameters<typeof builder.image>[0]) {
  return builder.image(source).width(1200).auto('format').url()
}