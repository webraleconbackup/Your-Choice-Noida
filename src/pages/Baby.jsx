import React from 'react';
import ServiceBanner from '../components/ServiceBanner';
import BalloonServices from '../components/BalloonServices';
import { baby } from '../data';
import { Helmet } from "react-helmet";

const Baby = () => {
  const contactData = [
    {
      id: 1,
      title: 'Baby Shower Decoration',
      breadcrumb: 'Baby Shower Decoration',
      image: '/portfolio/portfolio3.jpg',
    },
  ];
  return (
    <div>
      <Helmet>
        <title>
          Baby Shower Decoration in Noida | Call 7891015303
        </title>
        <meta
          name='description'
          content='Beautiful baby shower decoration with balloon themes, welcome baby setup & creative party décor in Noida & Delhi NCR. Call 7891015303.'
        />
        <meta
          name='keywords'
          content='baby shower decoration noida, baby shower party decoration, baby welcome decoration, baby naming ceremony decoration'
        />
      </Helmet>
      <ServiceBanner bannerData={contactData} />
      <BalloonServices services={baby} title='Baby Shower Decoration' />
    </div>
  );
};

export default Baby;
