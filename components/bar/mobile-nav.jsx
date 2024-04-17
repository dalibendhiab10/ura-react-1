/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';

import {
  Link,
} from 'react-router-dom'

import Productcardmobile from '../other/productcardmobile';

function Nav_mob() {
  const [isActive, setIsActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsActive(!isActive);
    
  };
  const togglemenu = () => {
    setIsOpen(!isOpen);

  };

  useEffect(() => {
    if (isActive) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
      setIsOpen(false);
    }
  }, [isActive]);

  return (
    <>

      <div className={`${isActive ? 'fixed w-full top-0' : ''}  `}>
        <header className=" z-20 flex  w-full py-2 content-between px-4 lg:py-5 lg:px-6 text-white bg-navmob-color bg-primary-700 mobile-header" style={{ borderBottom: isActive ? '1px solid rgba(114, 189, 167, 1)' : 'none' }}>
          <div className="mobile-container-nav h-full max-w-[1536px] w-full">

            <a
              href="#"
              aria-label="SF Homepage"
              className="inline-block mr-4 focus-visible:outline focus-visible:outline-offset focus-visible:rounded-sm shrink-0"
            >

              <picture>
                <img
                  src="/assets/logo-white.svg"
                  className="w-40 h-10 "
                />
              </picture>
            </a>
            <a className={`bars mt-[6%] sm:mt-[2%] ${isActive ? 'active mr-3 fade-in' : ''}`} href="#menu" onClick={toggle}>
              <div className="top-bar"></div>
              <div className="bottom-bar"></div>
            </a>

          </div>


        </header>

        <div className={` bg-navmob-color   fixed top-0 z-0 w-full h-full ${isActive ? 'block' : 'hidden'} ${isOpen ? 'scrollable-container  ' : ''} `} style={{ width: '100vw' }}>
          <div className=' flex flex-col items-start gap space-x-[4.375rem] lg:space-x-[2.5rem]'>

            <ul className='  text-white ul-container' style={{ width: '-webkit-fill-available' }}>
              <li className=' flex items-center scrollable-container' onClick={togglemenu}>
                <a>Products</a>
                <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                </svg>
              </li>
              <li className={`flex flex-row items-center flex-wrap  wrap-product-size  ${isOpen ? 'scroll-smooth inline ' : 'hidden'}`} >
                <Productcardmobile className="pr-2" />
                <Productcardmobile className="pr-2" />
                <Productcardmobile className="pr-2" />
                <Productcardmobile className="pr-2" />
                <Productcardmobile className="pr-2" />
              </li>
              <li className='mb-10 mt-10'><Link to="/about" onClick={toggle}>Raw Materials</Link></li>
              <li className='mb-10'><Link to="/about" onClick={toggle}>Our Process</Link></li>
              <li><Link to="/contacts" onClick={toggle}>Company</Link></li>
              <button className={`contact-us-btn      ${isOpen ? 'w-[95%]' : 'fixed bottom-0 w-[90%]'}`}>Contact Us</button>

            </ul>

          </div>

        </div>
        <main>

        </main>
      </div>
    </>
  );
}
export default Nav_mob;  