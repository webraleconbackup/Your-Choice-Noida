import React from 'react'
import ServiceBanner from '../components/ServiceBanner';
import BalloonServices from '../components/BalloonServices';
import { room } from '../data';
import { Helmet } from "react-helmet";

const Roomdecor = () => {
    const contactData = [
    {
      id: 1,
      title: 'Just Married Decoration',
      breadcrumb: 'Just Married Decoration',
      image: '/portfolio/portfolio3.jpg',
    },
  ];
  return (
    <div>
       <Helmet>
        <title>
          Just Married Decoration in Noida | Call 7891015303
        </title>
        <meta
          name='description'
          content='Romantic Just Married decoration with flowers, balloons and candles in Noida & Delhi NCR. Book now – 7891015303.'
        />
        <meta
          name='keywords'
          content='first Just Married Decoration, wedding night room decoration, romantic room decoration, honeymoon room decoration'
        />
      </Helmet>
      <ServiceBanner bannerData={contactData} />
      <BalloonServices services={room} title='Just Married Decoration' />
    </div>
  )
}

export default Roomdecor
