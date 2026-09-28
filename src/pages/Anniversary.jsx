import React from 'react';
import ServiceBanner from '../components/ServiceBanner';
import BalloonServices from '../components/BalloonServices';
import { anniversary } from '../data';
import { Helmet } from "react-helmet";

const Anniversary = () => {
  const contactData = [
    {
      id: 1,
      title: 'Anniversary Decoration',
      breadcrumb: 'Anniversary Decoration',
      image: '/portfolio/portfolio3.jpg',
    },
  ];

  return (
    <div>
      <Helmet>
        <title>
          Anniversary Decoration in Noida | Romantic Setup 7891015303
        </title>
        <meta
          name='description'
          content='Romantic anniversary decoration with balloons, candles and room setup at home in Noida & Delhi NCR. Call 7891015303.'
        />
        <meta
          name='keywords'
          content='anniversary decoration noida, anniversary room decoration, romantic decoration, anniversary balloon decoration'
        />
      </Helmet>
      <ServiceBanner bannerData={contactData} />
      <BalloonServices services={anniversary} title='Anniversary Decoration' />
    </div>
  );
};

export default Anniversary;
