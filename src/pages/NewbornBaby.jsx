import React from 'react';
import ServiceBanner from '../components/ServiceBanner';
import BalloonServices from '../components/BalloonServices';
import { baby } from '../data';
import { Helmet } from 'react-helmet';

const NewbornBaby = () => {
  const contactData = [
    {
      id: 1,
      title: 'New Born Baby Decoration',
      breadcrumb: 'New Born Baby Decoration',
      image: '/portfolio/portfolio3.jpg',
    },
  ];

  return (
    <div>
      <Helmet>
        <title>Welcome Baby Decoration in Noida | Call 7891015303</title>
        <meta
          name='description'
          content='Celebrate your newborn with beautiful welcome baby balloon decoration at home in Noida & Delhi NCR. Book today – 7891015303.'
        />
        <meta
          name='keywords'
          content='welcome baby decoration, baby welcome balloon decoration, newborn welcome decoration, baby arrival decoration'
        />
      </Helmet>
      <ServiceBanner bannerData={contactData} />
      <BalloonServices services={baby} title='New Born Baby Decoration' />
    </div>
  );
};

export default NewbornBaby;
