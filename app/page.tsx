import Hero from '@/components/Hero'
import FeatureGrid from '@/components/FeatureGrid'
import StatBar from '@/components/StatBar'
import Logos from '@/components/Logos'
import CTA from '@/components/CTA'
import FAQ from '@/components/FAQ'

export default function Page() {
  return (
    <>
      <Hero />
      <Logos />
      <FeatureGrid />
      <StatBar />
      <CTA />
      <FAQ />
    </>
  )
}
