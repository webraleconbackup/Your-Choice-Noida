import React from 'react'
import HeroBanner from '../components/HeroBanner'
import EventHero from '../components/EventHero'
import { adultbirthday, anniversary, baby, balloon, eventContent, followusimages, haldi, kidsbirthday, mehndi, room } from '../data'
import StatsSection from '../components/StatsSection'
import Portfolio from '../components/Portfolio'
import PartyPlanning from '../components/PartyPlanning'
// import Midbanner from '../components/Midbanner'
import FollowUs from '../components/FollowUp'
import ExperienceSection from '../components/ExperienceSection'
import ServiceCategory from '../components/ServieCategory'
import HomeServices from '../components/HomeService'

const Home = () => {
  return (
    <div>
      <HeroBanner />
      <EventHero eventHero={eventContent} />
      <ServiceCategory services={balloon} title='OUR SERVICES'/>
      <HomeServices services={adultbirthday} title='Adult Birthday Decoration' />
      <HomeServices services={kidsbirthday} title='Kids Birthday Decoration' />
      <HomeServices services={anniversary} title='Anniversary Decoration' />
      <HomeServices services={baby} title='New Born Baby Decoration' />
      <HomeServices services={baby} title='Baby Shower Decoration' />
      <HomeServices services={room} title='Just Married Decoration' />
      <HomeServices services={haldi} title='Haldi Decoration' />
      <HomeServices services={mehndi} title='Mehndi Decoration' />
      {/* <Midbanner banners={secondBanner} /> */}
      <StatsSection />
      <Portfolio />
      <PartyPlanning />
      {/* <PartyPlanningStep /> */}
      {/* <Midbanner banners={midBanner} /> */}
      {/* <OurWorkService /> */}
      <FollowUs images={followusimages} title="Follow Us"/>
      <ExperienceSection />
    </div>
  )
}

export default Home
