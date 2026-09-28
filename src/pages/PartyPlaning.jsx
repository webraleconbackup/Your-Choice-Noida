import React from 'react'
import ServiceBanner from '../components/ServiceBanner'
import PartyPlanning from '../components/PartyPlanning'
import { partyData } from '../data'
import BottomPatty from '../components/BottomPatty'
import PartyPlanningStep from '../components/PartyPlanningStep'

const PartyPlaning = () => {
  return (
    <div>
      <ServiceBanner bannerData={partyData} />
      <PartyPlanning />
      <PartyPlanningStep />
      <BottomPatty />
    </div>
  )
}

export default PartyPlaning
