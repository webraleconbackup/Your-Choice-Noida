import React from 'react';
import {
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from 'react-icons/fa';
import ServiceBanner from '../components/ServiceBanner';
import BottomPatty from '../components/BottomPatty';
import { contactData } from '../data';
import { Helmet } from "react-helmet";

const ContactCard = ({ icon, title, info, link }) => {
  return (
    <a
      href={link}
      target='_blank'
      rel='noopener noreferrer'
      className='flex flex-col items-center justify-center bg-white shadow-lg hover:shadow-xl transition-all duration-700 hover:scale-110 duration-300 rounded-xl p-6 w-full sm:w-64 text-center'
    >
      <div className='text-[#f4b740] font-bold text-4xl mb-4'>{icon}</div>
      <h3 className='text-lg font-bold text-black mb-2'>{title}</h3>
      <p className='text-gray-700 font-semibold'>{info}</p>
    </a>
  );
};

const Contact = () => {
  return (
    <>
     <Helmet>
        <title>Contact Your Choice Event | Decoration Services Noida</title>
        <meta
          name='description'
          content='Contact Your Choice Event for birthday, baby shower, anniversary & party decoration in Noida & Delhi NCR. Call 7891015303.'
        />
        <meta
          name='keywords'
          content='nt decorators noida contact, birthday decorator contact, balloon decoration services noida'
        />
      </Helmet>
    <ServiceBanner bannerData={contactData}/>
      <section className=' bg-[#c72f57] flex flex-col items-center justify-center px-4 py-24'>
        <h1 className='text-3xl sm:text-4xl font-bold text-[#f4c430] mb-10 text-center'>
          Contact Us
        </h1>

        <div className='flex flex-wrap justify-center gap-6'>
          <ContactCard
            icon={<FaWhatsapp />}
            title='WhatsApp'
            info='+91 78910 15303'
            link='https://wa.me/917891015303'
          />
          <ContactCard
            icon={<FaPhoneAlt />}
            title='Call Us'
            info='+91 78910 15303'
            link='tel:+917891015303'
          />
          <ContactCard
            icon={<FaEnvelope />}
            title='Email'
            info='enquiry@yourchoiceevent.com'
            link='mailto:enquiry@yourchoiceevent.com'
          />
          <ContactCard
            icon={<FaMapMarkerAlt />}
            title='Address'
            info='Shiv mandir, barola, sector 49 noida, Pin-201301'
          />
        </div>
      </section>
      <BottomPatty />
    </>
  );
};

export default Contact;
