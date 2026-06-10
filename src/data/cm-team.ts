import type { Member, Topic, Training, TeamIntro, Responsibility, Showcase, HeroData } from './types'

export const hero: HeroData = {
  badge: 'CM Team',
  title: '临床监查团队',
  subtitle: '内容建设中，敬请期待。',
  primaryCta: { text: '了解更多', href: '#team' },
  image: `${import.meta.env.BASE_URL}hero/card.svg`,
}

export const teamIntro: TeamIntro = {
  summary: '内容建设中，敬请期待。',
  highlights: [],
}

export const responsibilities: Responsibility[] = []
export const members: Member[] = []
export const showcases: Showcase[] = []
export const topics: Topic[] = []
export const trainings: Training[] = []
