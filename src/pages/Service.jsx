import React from 'react'
import BalloonServices from '../components/BalloonServices'
import { balloon, ServiceData } from '../data'
import ServiceBanner from '../components/ServiceBanner'
import BottomPatty from '../components/BottomPatty'

const Service = () => {
  return (
    <div className='mt-40'>
      <ServiceBanner bannerData={ServiceData} />
      <BalloonServices services={balloon}/>
      <BottomPatty />
    </div>
  )
}

export default Service
