import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

/* ================= DATA ================= */
const stats = [
  {
    value: 3500,
    suffix: '+',
    label: 'Happy Clients',
    color: 'from-pink-400 to-pink-600',
  },
  {
    value: 3250,
    suffix: '+',
    label: 'Successful Events',
    color: 'from-lime-400 to-green-500',
  },
  {
    value: 95,
    suffix: '%',
    label: 'Customer Satisfaction',
    color: 'from-yellow-400 to-orange-500',
    isPartial: true,
  },
];

/* ================= COUNTER CIRCLE ================= */
const CounterCircle = ({ value, suffix, label, color, isPartial }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  const radius = 65;
  const circumference = 2 * Math.PI * radius;
  const progress = (count / 100) * circumference;

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 1500;
    const increment = value / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className='flex flex-col items-center'
    >
      {/* ===== CIRCLE ===== */}
      <div className='relative w-40 h-40'>
        {!isPartial ? (
          <>
            <div
              className={`absolute inset-0 rounded-full bg-gradient-to-tr ${color}`}
            />
            <div className='absolute inset-3 bg-white rounded-full flex items-center justify-center'>
              <span className='text-3xl font-semibold text-gray-800'>
                {count}
                {suffix}
              </span>
            </div>
          </>
        ) : (
          <>
            <svg className='w-full h-full rotate-[-90deg]'>
              <defs>
                <linearGradient
                  id='orangeGrad'
                  x1='0%'
                  y1='0%'
                  x2='100%'
                  y2='100%'
                >
                  <stop offset='0%' stopColor='#facc15' />
                  <stop offset='100%' stopColor='#f97316' />
                </linearGradient>
              </defs>

              <circle
                cx='80'
                cy='80'
                r={radius}
                stroke='#e5e7eb'
                strokeWidth='12'
                fill='none'
              />

              <circle
                cx='80'
                cy='80'
                r={radius}
                stroke='url(#orangeGrad)'
                strokeWidth='12'
                fill='none'
                strokeLinecap='round'
                strokeDasharray={`${progress} ${circumference}`}
              />
            </svg>

            <div className='absolute inset-0 flex items-center justify-center'>
              <span className='text-3xl font-semibold text-gray-800'>
                {count}
                {suffix}
              </span>
            </div>
          </>
        )}
      </div>

      {/* ===== LABEL ===== */}
      <p className='mt-6 text-lg font-medium text-gray-800 text-center'>
        {label}
      </p>
    </motion.div>
  );
};

/* ================= STATS SECTION ================= */
const StatsSection = () => {
  return (
    <section className='relative py-4 lg:py-20 px-4 lg:px-16 overflow-hidden'>
      {/* ===== Background Image ===== */}
      {/* ===== Background Image ===== */}
      <div
        className='absolute inset-0 bg-cover bg-center bg-fixed'
        style={{
          backgroundImage: "url('/party/party1.jpg')",
        }}
      />

      {/* ===== Dark Overlay ===== */}
      <div className='absolute inset-0 bg-black/60' />

      {/* ===== Content ===== */}
      <div className='relative max-w-8xl mx-auto bg-white/60 border-2 border-zinc-100 rounded-2xl py-12 px-6 shadow-xl'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12'>
          {stats.map((item, index) => (
            <CounterCircle key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
