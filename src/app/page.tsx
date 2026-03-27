import LandingHero from '@/components/Landing/LandingHero'
import LandingCarousel from '@/components/Landing/LandingCarousel'
import LandingCard from '@/components/Landing/LandingCard'
import type { Metadata } from 'next'

// 웹사이트 중복 문제 해결을 위한 canonical 설정
export const metadata: Metadata = {
  alternates: {
    canonical: 'https://fe-mu-seven.vercel.app',
  },
}

export default function Home() {
  return (
    <>
      <LandingHero />
      <LandingCarousel />
      <LandingCard />
    </>
  )
}
