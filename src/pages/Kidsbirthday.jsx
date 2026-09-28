import React from 'react';
import BalloonServices from '../components/BalloonServices';
import { kidsbirthday } from '../data';
import ServiceBanner from '../components/ServiceBanner';
import { Helmet } from "react-helmet";

const Kidsbirthday = () => {
  const contactData = [
    {
      id: 1,
      title: 'Kids Birthday Decoration',
      breadcrumb: 'Kids Birthday Decoration',
      image: '/portfolio/portfolio3.jpg',
    },
  ];
  return (
    <div>
      <Helmet>
        <title>
          Birthday & Balloon Decoration in Noida | Call 7891015303
        </title>
        <meta
          name='description'
          content='Book birthday, baby shower, anniversary & balloon decoration in Noida, Greater Noida & Delhi NCR. Creative home party décor. Call 7891015303.'
        />
        <meta
          name='keywords'
          content='birthday decoration noida, balloon decoration noida, event decorators noida, party decoration delhi ncr, home birthday decoration'
        />
      </Helmet>
      <ServiceBanner bannerData={contactData} />
      <BalloonServices services={kidsbirthday} title='Kids Birthday Decoration'/>
    </div>
  );
};

export default Kidsbirthday;