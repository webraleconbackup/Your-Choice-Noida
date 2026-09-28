import React from 'react'
import ServiceBanner from '../components/ServiceBanner'
import { adultbirthday } from '../data'
import BalloonServices from '../components/BalloonServices'
import { Helmet } from "react-helmet";

const AdultBirthday = () => {
     const contactData = [
    {
      id: 1,
      title: 'Adult Birthday Decoration',
      breadcrumb: 'Adult Birthday Decoration',
      image: '/portfolio/portfolio3.jpg',
    },
  ]

  return (
    <div>
       <Helmet>
        <title>Birthday Decoration in Noida | Kids & Adult Party Decor 7891015303</title>
        <meta
          name="description"
          content="Professional kids & adult birthday decoration services in Noida & Delhi NCR with balloon themes and home party setup. Call 7891015303."
        />
         <meta
          name="keywords"
          content="birthday decoration noida, kids birthday decoration, adult birthday decoration, balloon birthday decoration, birthday party decorator"
        />
      </Helmet>
      <ServiceBanner bannerData={contactData} />
      <BalloonServices services={adultbirthday} title='Adult Birthday Decoration'/>
    </div>
  )
}

export default AdultBirthday
