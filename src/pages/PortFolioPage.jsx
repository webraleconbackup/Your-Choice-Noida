import React from 'react'
import ServiceBanner from '../components/ServiceBanner'
import { portfolioData } from '../data'
import BottomPatty from '../components/BottomPatty'
import Gallery from '../components/Gallery'

const PortFolioPage = () => {
  return (
    <div>
     <ServiceBanner bannerData={portfolioData}/>
     <Gallery /> 
     <BottomPatty />
    </div>
  )
}

export default PortFolioPage
