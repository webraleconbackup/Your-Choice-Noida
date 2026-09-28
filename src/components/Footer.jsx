import React from 'react';
import { FaInstagramSquare } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';
import { IoCall } from 'react-icons/io5';
import { Link } from 'react-router-dom'; // ✅ added

const Footer = () => {
  return (
    <footer className='relative text-white pb-4'>
      <div className="absolute inset-0 bg-[url('/portfolio/portfolio1.jpg')] bg-cover bg-center" />
      <div className='absolute inset-0 bg-black/80' />

      <div className='relative max-w-7xl mx-auto px-5 pt-8 pb-14'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12'>
          {/* Logo & About */}
          <div>
            <img
              src='/navlogo/nav-logo.png'
              alt='Your Choice Event'
              className='h-16 mb-4 md:h-20'
            />

            <p className='text-lg leading-relaxed text-gray-300 font-medium'>
              We Specialize in Premium Balloon and Event Decorations including
              Birthdays, Anniversaries, Baby showers, Festivals, Office Openings
              and traditional ceremonies — crafted to make your moments special.
            </p>

       
          </div>

          {/* Useful Links (NO CHANGE) */}
          <div>
            <h3 className='text-xl font-bold mb-5 text-[#f4c430]'>
              Useful Links
            </h3>
            <ul className='space-y-3 text-lg font-semibold text-gray-300'>
              <li className='hover:text-white cursor-pointer'>
                <Link to='/'>Home</Link>
              </li>
              <li className='hover:text-white cursor-pointer'>
                <Link to='/about'>About Us</Link>
              </li>
              <li className='hover:text-white cursor-pointer'>
                <Link to='/party-planning'>Party Planning</Link>
              </li>
              <li className='hover:text-white cursor-pointer'>
                <Link to='/portfolio'>Portfolio</Link>
              </li>
              <li className='hover:text-white cursor-pointer'>
                <Link to='/contact'>Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Our Services (ONLY THIS USES LINK) */}
          <div>
            <h3 className='text-xl font-bold mb-5 text-[#f4c430]'>
              Decoration
            </h3>
            <ul className='space-y-3 text-lg font-semibold text-gray-300'>
              <li>
                <Link to='#' className='hover:text-white'>
                  Adult's Birthday
                </Link>
              </li>
              <li>
                <Link to='#' className='hover:text-white'>
                  Kid's Birthday
                </Link>
              </li>
              <li>
                <Link to='#' className='hover:text-white'>
                  New Born Baby
                </Link>
              </li>
              <li>
                <Link to='#' className='hover:text-white'>
                  Anniversary
                </Link>
              </li>
                 <li>
                <Link to='#' className='hover:text-white'>
                  First Night Deor
                </Link>
              </li>
              <li>
                <Link to='#' className='hover:text-white'>
                  Haldi
                </Link>
              </li>
                <li>
                <Link to='#' className='hover:text-white'>
                  Mehndi
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us (NO CHANGE) */}
          <div>
            <h3 className='text-xl font-bold mb-5 text-[#f4c430]'>
              Contact Us
            </h3>

            <p className='text-lg text-gray-300 font-medium mb-3'>
              Shiv Mandir, Barola, Sector-49
              <br />
              Noida, Pin-201301 (U.P.)
            </p>

            <div className='text-md font-semibold mb-2 flex items-center gap-2'>
              <IoCall className='text-[#f4c430] text-xl' />
              <p>+91-7891015303</p>
            </div>
            <p className='text-md font-semibold flex items-center gap-2'>
              <IoMdMail className='text-[#f4c430] text-xl' />
              enquiry@yourchoiceevent.com
            </p>
                 <div className='flex gap-4 mt-4 text-[#f4c430] text-xl'>
              <a
                href='https://www.instagram.com/raghav.balloon.decoration?igsh=cGlsZno1bmRoaTl1'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-2 hover:text-white'
              >
                <FaInstagramSquare className='text-red-500 text-2xl' />
                Follow Us
              </a>
            </div>
          </div>
        </div>

        <div className='border-t border-gray-700 mt-6 md:text-center text-lg text-gray-400'>
          © {new Date().getFullYear()} Your Choice Event & Decor. All Rights
          Reserved. Desigined By www.webralecon.com
        </div>
      </div>
    </footer>
  );
};

export default Footer;
