export interface Member {
  name: string
  title: string
  bio: string
  tags: string[]
  photo: string
}

export interface Topic {
  date: string
  author: string
  title: string
  tags: string[]
}

export interface Training {
  date: string
  instructor: string
  title: string
  series?: string
  children?: Training[]
}

export interface PosterEvent {
  date: string
  title: string
  poster: string
  speaker?: string
}

export interface TeamIntro {
  summary: string
  highlights: { label: string; value: string }[]
}

export interface Responsibility {
  icon: string
  title: string
  description: string
  color: string
}

export interface Showcase {
  title: string
  description: string
  image: string
  borderRadius: string
  badge: string
  link?: string
  padding?: string
}

export interface HeroData {
  badge?: string
  title?: string
  subtitle?: string
  primaryCta?: { text: string; href: string }
  secondaryCta?: { text: string; href: string }
  image?: string
}

export interface OrgNode {
  name: string
  title: string
  children?: OrgNode[]
}

export interface ResearchTopic {
  category: string
  title: string
  description: string
  owner: string
}

export interface WorkingGroup {
  icon: string
  name: string
  description: string
  color: string
}

export interface CoreSkill {
  name: string
  percentage: number
  sub: string
  tags: string
  color: string
}

export interface TimelineItem {
  date: string
  title: string
  description: string
}
