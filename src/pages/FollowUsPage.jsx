import React from 'react'
import ServiceBanner from '../components/ServiceBanner'
import FollowUs from '../components/FollowUp'
import { followusimages, followusData } from '../data'
import BottomPatty from '../components/BottomPatty'
import Follow from '../components/Follow'

const FollowUsPage = () => {
  return (
    <div>
      <ServiceBanner bannerData={followusData}/>
      {/* <FollowUs images={followusimages} title="Follow Us"/> */}
      <Follow images={followusimages} title="Follow Us"/>
      <BottomPatty />
    </div>
  )
}

export default FollowUsPage
