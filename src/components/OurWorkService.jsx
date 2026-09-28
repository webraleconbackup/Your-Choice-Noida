import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Birthday Events\n& Decoration',
    image: '/service/birthday.jpg',
  },
  {
    title: 'Anniversary Events\n& Decoration',
    image: '/service/anniversary.jpeg',
  },
  {
    title: 'Baby Shower Events\n& Decoration',
    image: '/service/baby1.jpg',
  },
  {
    title: 'Haldi & Mehandi Events\n& Decoration',
    image: '/service/mehndi.jpg',
  },
];

const cardVariant = {
  hidden: { opacity: 0, y: 80 }, // ⬇️ start from bottom
  visible: (i) => ({
    opacity: 1,
    y: 0, // ⬆️ move to original position
    transition: {
      delay: i * 0.15,
      duration: 0.7,
      ease: 'easeOut',
    },
  }),
};

const OurWorkService = () => {
  return (
    <section className='bg-[#c72f57] py-16 px-4'>
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }} // bottom → top
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className='text-center text-[#f4b740] text-3xl md:text-4xl font-semibold mb-14'
      >
        Our Work / Service
      </motion.h2>

      {/* Cards */}
      <div className='max-w-[1400px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10'>
        {services.map((item, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={cardVariant}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            className='text-center'
          >
            {/* Image Card */}
            {/* Image Card */}
            <div className='relative overflow-hidden rounded-tr-[28px] border-2 border-black group'>
              <img
                src={item.image}
                alt={item.title}
                className='w-full h-[320px] rounded-tr-[28px] object-cover group-hover:scale-105 transition duration-500'
              />

              {/* Hover Overlay */}
              <div className='absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300'>
                <a
                  href='tel:7891015303'
                  className='bg-[#f6c56f] text-black px-6 py-2 rounded-full font-semibold hover:bg-yellow-400 transition'
                >
                  Book Now
                </a>
              </div>
            </div>

            {/* Title */}
            <h3 className='text-[#f4b740] text-2xl font-serif mt-6 leading-snug whitespace-pre-line'>
              {item.title}
            </h3>

            {/* Button */}
            <button className='mt-4 bg-[#f6c56f] text-black px-6 py-1.5 rounded-bl-full rounded-tr-full font-medium hover:bg-yellow-400 transition'>
              Get More
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default OurWorkService;
