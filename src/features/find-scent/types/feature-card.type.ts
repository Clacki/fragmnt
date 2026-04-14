export type FeatureCardProps = {
  imageSrc: string
  imageAlt?: string
  title: string
  description: string
  buttonLabel?: string
  onClick?: () => void
  className?: string
}

export type FeatureCardItem = FeatureCardProps & {
  id: number
}
