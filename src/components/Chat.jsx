import React from 'react';
import { FaPhone } from 'react-icons/fa6';
import { FaWhatsapp } from 'react-icons/fa6';

const Chat = () => {
  const phoneNumber = '+917891015303';
  const message = 'I am interested in your service';
  return (
    <>
      <div className='hidden md:block fixed bottom-0 md:bottom-20 md:right-2 z-50'>
        <div className='flex md:flex-col  md:gap-y-10 md:items-end justify-between md:justify-end'>
          <a href='tel:+917891015303' className='bg-[#f5b23c] p-4 flex items-center justify-center rounded-xl'>
            <span>
              <FaPhone className='text-white text-2xl' />
            </span>
          </a>
          <a className='bg-[#f5b23c] p-3 rounded-xl flex items-center justify-center'
            href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
              message
            )}`}
          >
            <span>
              <FaWhatsapp className='text-white text-3xl mt-[5px]' />
            </span>
          </a>
        </div>
      </div>

      {/* Mobile WhatsApp & Call Now */}
      <div className='md:hidden flex justify-around fixed bottom-0 z-50 bg-[#39285a] w-full py-3'>
        <a
          href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
            message
          )}`}
          className='bg-[#f5b23c] p-2 rounded-full text-center items-center justify-center gap-2 text-sm font-medium'
        >
          <FaWhatsapp className='text-white text-2xl' />
        </a>
        <a
          href='tel:+917891015303'
          className='p-2 bg-[#f5b23c] rounded-full text-center flex items-center justify-center gap-2 text-sm font-medium'
        >
          <FaPhone className='text-white text-2xl' />
        </a>
      </div>
    </>
  );
};

export default Chat;