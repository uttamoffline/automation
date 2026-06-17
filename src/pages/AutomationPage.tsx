import { AutomationHero } from '../components/automation/AutomationHero'
import { ApproachSpectrum } from '../components/automation/ApproachSpectrum'
import { AutomationStats } from '../components/automation/AutomationStats'
import { PipelineFlow } from '../components/automation/PipelineFlow'
import { CapabilitiesGrid } from '../components/automation/CapabilitiesGrid'
import { AutomationClosing } from '../components/automation/AutomationClosing'

export function AutomationPage() {
  return (
    <>
      <AutomationHero />
      <ApproachSpectrum />
      <AutomationStats />
      <PipelineFlow />
      <CapabilitiesGrid />
      <AutomationClosing />
    </>
  )
}
