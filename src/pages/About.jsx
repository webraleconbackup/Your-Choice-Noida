import React from 'react'
import EventHero from '../components/EventHero'
import { aboutData, eventContent } from '../data'
import ServiceBanner from '../components/ServiceBanner'
import BottomPatty from '../components/BottomPatty'

const About = () => {
  return (
    <div>
      <ServiceBanner bannerData={aboutData}/>
      <EventHero eventHero={eventContent}/>
      <BottomPatty />
    </div>
  )
}

export default About
