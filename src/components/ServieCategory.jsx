import React from 'react';
import { motion } from 'framer-motion';

const ServiceCategory = ({ services, title }) => {
  return (
    <section className='bg-[#c72f57] py-16 px-4 font-[serif]'>
      {/* ====== DECORATED HEADING ====== */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className='text-center mb-14'
      >
        {/* <div className='flex items-center justify-center mb-4'>
          <span className='h-[2px] w-20 bg-white/60'></span>
          <span className='mx-4 text-3xl text-[#f5b23c]'>❀</span>
          <span className='h-[2px] w-20 bg-white/60'></span>
        </div> */}

        <h2 className='relative inline-block text-white text-2xl md:text-5xl font-semibold tracking-widest'>
          {title}
        </h2>

        <div className='flex items-center justify-center mt-6'>
          <span className='h-[2px] w-20 bg-white/60'></span>
          <span className='mx-4 text-3xl text-[#f5b23c]'>❀</span>
          <span className='h-[2px] w-20 bg-white/60'></span>
        </div>
      </motion.div>

      {/* ====== SERVICE CARDS ====== */}
      <div className='max-w-[1400px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
        {services.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
              ease: 'easeOut',
            }}
            className='rounded-tr-4xl overflow-hidden border-2 border-zinc-300 bg-white shadow-lg group'
          >
            {/* Image */}
            <div className='h-[320px] w-full relative overflow-hidden'>
              <img
                src={item.image}
                alt={item.title}
                className='h-full w-full object-cover transition-all duration-700 group-hover:scale-110'
              />

              <div className='absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500'>
                <a
                  href='tel:7891015303'
                  className='text-black text-2xl font-bold tracking-wide bg-white/70 px-6 py-3 rounded-xl hover:bg-white transition'
                >
                  Call Now
                </a>
              </div>
            </div>

            {/* ===== 3D TITLE ===== */}
            <div className='bg-black py-5 text-center perspective-1000'>
              <h3
                className='
                  text-[#f5b23c] text-3xl font-serif
                  transition-all duration-500
                  group-hover:scale-110
                  group-hover:-translate-y-1
                  group-hover:rotate-x-6
                '
                style={{
                  textShadow:
                    '1px 1px 0 rgba(0,0,0,0.25), 2px 2px 0 rgba(0,0,0,0.15)',
                }}
              >
                {item.title}
              </h3>
               <div>
                <p className='text-gray-200 pb-4 text-lg'>Contact Us For Best Price</p>
                <a
                  href='https://wa.me/917891015303?text=Hello%20I%20want%20to%20book%20decoration%20service'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hover:text-black text-white text-xl font-bold tracking-wide bg-[#c72f57] px-4 py-2 rounded-xl hover:bg-white transition'
                >
                  Book Now
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServiceCategory;
