import React from 'react'
import BalloonServices from '../components/BalloonServices';
import { haldi } from '../data';
import ServiceBanner from '../components/ServiceBanner';
import { Helmet } from "react-helmet";

const Haldi = () => {
     const contactData = [
    {
      id: 1,
      title: 'Haldi Decoration',
      breadcrumb: 'Haldi Decoration',
      image: '/portfolio/portfolio3.jpg',
    },
  ];
  return (
    <div>
       <Helmet>
        <title>
          Haldi Ceremony Decoration in Noida | Call 7891015303
        </title>
        <meta
          name='description'
          content='Traditional haldi ceremony decoration with floral & theme décor in Noida & Delhi NCR. Book professional decorators – 7891015303.'
        />
        <meta
          name='keywords'
          content='haldi decoration noida, haldi ceremony decoration, wedding haldi decor, haldi theme decoration'
        />
      </Helmet>
      <ServiceBanner bannerData={contactData} />
      <BalloonServices services={haldi} title='Haldi Decoration' />
    </div>
  )
}

export default Haldi
