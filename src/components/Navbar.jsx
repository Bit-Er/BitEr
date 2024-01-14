// Import necessary dependencies and data
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { nav, smalllogo, logo } from '../data/Data';
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
  const [color, setColor] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSmall, setIsSmall] = useState(window.innerWidth < 800);
  const location = useLocation();

  const changeColor = () => {
    if (window.scrollY >= 200) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleResize = () => {
    setIsSmall(window.innerWidth < 800);
    closeMobileMenu();
  };

  useEffect(() => {
    window.addEventListener('scroll', changeColor);
    window.addEventListener('resize', handleResize);

    // Cleanup the event listeners on component unmount
    return () => {
      window.removeEventListener('scroll', changeColor);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const mainLogo = isSmall ? smalllogo : logo;
  const logoAlt = isSmall ? 'Small Logo' : 'Logo';
  const logoSize = isSmall ? 'w-20 h-20' : 'w-40'; // Adjust the sizes as needed

  return (
    <header className={`w-full flex fixed  z-20 justify-center transition-colors py-2 ${color || (isMobileMenuOpen && isSmall) || location.pathname != "/" ? 'bg-dark bg-opacity-90' : 'bg-transparent'}`}>
      <div className={`w-4/5 flex flex-row justify-between items-center`}>
        <div className={`text-light z-20 text-center ${logoSize}`}>
          {/* Logo */}
          <a href="/">        
            <img src={mainLogo} alt={logoAlt} className='my-auto' />
          </a>
        </div>

        <div className={isSmall ? 'text-light text-2xl cursor-pointer' : 'md:hidden'}>
          {/* Hamburger Icon */}
          <div onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? (
              <span className='text-light text-2xl'>&#10005;</span>
            ) : (
              <span className='text-light text-2xl'>&#9776;</span>
            )}
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <nav className='absolute top-full left-0 right-0 bg-dark bg-opacity-90 py-2'>
              <ul className='flex flex-col items-center'>
                {nav.map((res) => (
                  <li key={res.title + res.path} className={`text-sm uppercase font-medium my-2 ${location.pathname === res.path ? 'text-primary' : 'text-light'} hover:text-primary cursor-pointer`}>
                    <HashLink to={res.path}  >{res.title}</HashLink>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </div>

        {/* Regular Navbar for Medium and Larger Screens */}
        {!isSmall && (
          <nav className='my-auto md:block'>
            <ul className='flex justify-evenly gap-5 flex-row'>
              {nav.map((res) => (
                <li key={res.title + res.path} className={`text-sm uppercase font-medium inline-block ${location.pathname === res.path ? 'text-primary' : 'text-light'} hover:text-primary cursor-pointer`}>
                  <HashLink to={res.path}  >{res.title}</HashLink>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
