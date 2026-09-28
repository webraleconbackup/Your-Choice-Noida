import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const EventHero = ({ eventHero }) => {
  return (
    <section className='bg-[#c72f57] text-white py-12 md:py-16 overflow-x-hidden'>
      <div className='max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 px-4'>
        {/* LEFT TEXT CONTENT */}
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className='font-[Calibri,Arial,sans-serif] flex flex-col justify-center'
        >
          {/* IMPROVED PROFESSIONAL TITLE (DESIGN ONLY) */}
          <h1
            className='
              relative
              text-[22px] sm:text-[28px] md:text-[36px] lg:text-[52px]
              leading-[1.15]
              font-extrabold
              tracking-tight
              text-[#f4c430]
              mb-4 md:mb-6
            '
          >
            <span
              className='font-serifLogo'
              style={{ fontFamily: 'Playfair Display' }}
            >
              {eventHero.title}
            </span>{' '}
            <span className='text-[#f4c430 text-xl]'>{eventHero.subtitle}</span>
          </h1>

          <p className='text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] md:font-bold leading-relaxed md:leading-[2]'>
            <span className='block mt-4'>
              <div className='text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] md:font-bold leading-relaxed md:leading-[2]'>
                {/* Bullet Points */}
                <ul className='list-disc list-outside pl-5 space-y-1'>
                  {eventHero.description.points.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>

                {/* Normal Content (NO change in style) */}
                {/* <p className='mt-4'>{eventHero.description.closing.line1}</p> */}

                <button
                  onClick={() =>
                    window.open(
                      'https://wa.me/917891015303?text=Hello%20Your%20Choice%20Event,%20I%20am%20interested%20in%20your%20services',
                      '_blank'
                    )
                  }
                  className='mt-12 text-white px-8 py-3 text-2xl rounded-full bg-[#f4c430] font-semibold transition-all duration-700  hover:bg-[#f4c430] hover:text-[#c72f57] transition duration-300 cursor-pointer'
                >
                  {eventHero.description.closing.line2}
                </button>
              </div>
            </span>
          </p>
        </motion.div>

        {/* RIGHT IMAGE LAYOUT */}
        <motion.div
          initial={{ x: 80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          viewport={{ once: true }}
          className='grid grid-cols-2 gap-3 md:gap-4'
        >
          {/* Tall Main Image */}
          <div className='row-span-2'>
            <img
              src={eventHero.images[0]}
              alt='Event Decoration'
              className='w-full h-full min-h-[280px] md:min-h-full object-cover rounded-lg'
            />
          </div>

          {/* Top Right Image */}
          <div>
            <img
              src={eventHero.images[1]}
              alt='Baby Shower'
              className='w-full h-[140px] sm:h-[160px] md:h-60 object-cover rounded-lg'
            />
          </div>

          {/* Middle Right Tall Image */}
          <div className='row-span-2'>
            <img
              src={eventHero.images[2]}
              alt='Haldi Decor'
              className='w-full h-full min-h-[280px] md:min-h-full object-cover rounded-lg'
            />
          </div>

          {/* Bottom Wide Image */}
          <div>
            <img
              src={eventHero.images[3]}
              alt='Birthday Decor'
              className='w-full h-[140px] sm:h-[160px] md:h-[190px] object-cover rounded-lg'
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EventHero;
