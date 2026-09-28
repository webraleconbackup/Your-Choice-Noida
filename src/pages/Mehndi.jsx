import React from 'react';
import BalloonServices from '../components/BalloonServices';
import ServiceBanner from '../components/ServiceBanner';
import { mehndi } from '../data';
import { Helmet } from "react-helmet";

const Mehndi = () => {
  const contactData = [
    {
      id: 1,
      title: 'Mehndi Decoration',
      breadcrumb: 'Mehndi Decoration',
      image: '/portfolio/portfolio3.jpg',
    },
  ];
  return (
    <div>
       <Helmet>
        <title>
          Mehndi Ceremony Decoration in Noida | Call 7891015303
        </title>
        <meta
          name='description'
          content='Beautiful mehndi ceremony decoration with colorful floral, marigold & traditional theme décor in Noida & Delhi NCR. Book professional mehndi decorators – 7891015303.'
        />
        <meta
          name='keywords'
          content='mehndi decoration noida, mehndi ceremony decoration, wedding mehndi decor, mehndi theme decoration'
        />
      </Helmet>
      <ServiceBanner bannerData={contactData} />
      <BalloonServices services={mehndi} title='Mehndi Decoration' />
    </div>
  );
};

export default Mehndi;
