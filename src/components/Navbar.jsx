import React, { useState } from 'react';
import { Search, Phone, MessageCircle } from 'lucide-react';
import { FaInstagramSquare } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { Link, NavLink } from 'react-router-dom';
import Marque from '../components/Marque';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);
  const [mobileDrop, setMobileDrop] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Party Planning', path: '/party-planning' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Follow Us', path: '/followus' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const decorationLinks = [
    { name: 'Adult Birthday Decoration', path: '/adult-birthday-decoration' },
    { name: 'Kids Birthday Decoration', path: '/kidsbirthday-decoration' },
    { name: 'Anniversary Decoration', path: '/anniversary-decoration' },
    { name: 'New Born Baby Decoration', path: '/new-born-baby-decoration' },
    { name: 'Baby Shower Decoration', path: '/baby-shower-decoration' },
    { name: 'Just Married Decoration', path: '/just-married-decoration' },
    { name: 'Haldi Decoration', path: '/haldi-decoration' },
    { name: 'Mehndi Decoration', path: '/mehndi-decoration' },
  ];

  return (
    <div className='w-full bg-[#c72f57] fixed top-0 left-0 z-50'>
      {/* Top bar */}
      <div className='bg-white'>
        <div className='hidden lg:block px-4 py-3'>
          <Marque />
        </div>

        <div className='flex items-center lg:hidden justify-between px-4 py-3 shadow-md'>
          <a
            href='tel:7891015303'
            className='flex items-center gap-2 text-[#c72f57] font-semibold'
          >
            <Phone size={20} />
            <span>Call Now</span>
          </a>

          <a
            href='https://wa.me/917891015303'
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center gap-2 text-green-600 font-semibold'
          >
            <span>WhatsApp</span>
            <MessageCircle size={20} />
          </a>
        </div>
      </div>

      {/* Navbar */}
      <div className='pt-6 lg:pt-10 pb-4'>
        <header className='bg-white flex items-center justify-between lg:mx-15 relative rounded-lg'>
          {/* Logo */}
          <Link to='/'>
            <img
              src='/navlogo/nav-logo.png'
              alt='Your Choice Event'
              className='h-[58px] md:h-[100px] w-auto object-contain'
            />
          </Link>

          {/* Desktop Menu */}
          <ul className='hidden lg:flex gap-10 text-[20px] font-bold items-center'>
            {navLinks.slice(0, 2).map((item, index) => (
              <li key={index}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `relative pb-2 transition-all duration-300
                    ${isActive ? 'text-[#c72f57] after:w-full' : 'text-black after:w-0'}
                    after:content-[''] after:absolute after:left-0 after:-bottom-1
                    after:h-[3px] after:bg-[#c72f57]
                    after:transition-all after:duration-300
                    hover:text-[#c72f57] hover:after:w-full`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}

            {/* Decoration Dropdown */}
            <li
              className='relative'
              onMouseEnter={() => setDropOpen(true)}
              onMouseLeave={() => setDropOpen(false)}
            >
              <span className='cursor-pointer flex items-center gap-1'>
                Decoration ⌵
              </span>

              {dropOpen && (
                <ul className='absolute top-6 left-0 bg-white shadow-lg rounded-md w-80 py-3'>
                  {decorationLinks.map((item, index) => (
                    <li key={index}>
                      <NavLink
                        to={item.path}
                        className='block px-4 py-2 hover:bg-gray-100'
                      >
                        {item.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {navLinks.slice(2).map((item, index) => (
              <li key={index}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `relative pb-2 transition-all duration-300
                    ${isActive ? 'text-[#c72f57] after:w-full' : 'text-black after:w-0'}
                    after:content-[''] after:absolute after:left-0 after:-bottom-1
                    after:h-[3px] after:bg-[#c72f57]
                    after:transition-all after:duration-300
                    hover:text-[#c72f57] hover:after:w-full`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Right Icons */}
          <div className='flex items-center gap-8 pr-4'>
            <button
              className='flex flex-col gap-[6px] lg:hidden'
              onClick={() => setOpen(!open)}
            >
              <span className='w-10 h-[3px] bg-black'></span>
              <span className='w-10 h-[3px] bg-black'></span>
              <span className='w-10 h-[3px] bg-black'></span>
            </button>

            <Search className='hidden lg:block w-10 h-10 pr-4 cursor-pointer' />
          </div>
        </header>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className='lg:hidden bg-[#c72f57] py-8 h-[calc(100vh-120px)] overflow-y-auto'>
          <ul className='flex flex-col gap-6 px-4 pb-20 text-white font-semibold'>
            <li>
              <NavLink to='/' onClick={() => setOpen(false)}>
                Home
              </NavLink>
            </li>

            <li>
              <NavLink to='/about' onClick={() => setOpen(false)}>
                About Us
              </NavLink>
            </li>

            {/* Mobile Decoration Dropdown */}
            <li>
              <button
                onClick={() => setMobileDrop(!mobileDrop)}
                className='flex justify-between w-full font-bold'
              >
                Decoration
                <span className='text-lg'>{mobileDrop ? '⌃' : '⌵'}</span>
              </button>

              {mobileDrop && (
                <ul className='flex flex-col gap-4 mt-3 pl-4 text-sm'>
                  {decorationLinks.map((item, index) => (
                    <li key={index}>
                      <NavLink to={item.path} onClick={() => setOpen(false)}>
                        {item.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            <li>
              <NavLink to='/party-planning' onClick={() => setOpen(false)}>
                Party Planning
              </NavLink>
            </li>

            <li>
              <NavLink to='/portfolio' onClick={() => setOpen(false)}>
                Portfolio
              </NavLink>
            </li>

            <li>
              <NavLink to='/followus' onClick={() => setOpen(false)}>
                Follow Us
              </NavLink>
            </li>

            <li>
              <NavLink to='/contact' onClick={() => setOpen(false)}>
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
