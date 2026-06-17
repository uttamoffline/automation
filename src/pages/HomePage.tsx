import { ManifestoHero } from '../components/hero/ManifestoHero'
import { WorkSection } from '../components/work/WorkSection'
import { AboutSection } from '../components/about/AboutSection'
import { Timeline } from '../components/experience/Timeline'
import { ContactSection } from '../components/contact/ContactSection'
import { AutomationTeaser } from '../components/automation/AutomationTeaser'
import { workGroups } from '../data/projects'

export function HomePage() {
  return (
    <>
      <ManifestoHero />
      <WorkSection groups={workGroups} />
      <AutomationTeaser />
      <AboutSection />
      <Timeline />
      <ContactSection />
    </>
  )
}
