import { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
} from 'react-router-dom'
import Home from '../src/pages/Home';
import About from '../src/pages/About';
import Contacts from '../src/pages/Contact';
import Productcardmobile from './productcardmobile';

export default function Nav_mob() {
  const [isActive, setIsActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsActive(!isActive);
  };
  const togglemenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={`${isActive ? 'fixed w-full' : ''}`}>
        <header className="flex  w-full py-2 content-between px-4 lg:py-5 lg:px-6 text-white bg-main-color border-0 bg-primary-700">
          <div className="mobile-container h-full max-w-[1536px] w-full">

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
            <a className={`bars mt-[6%] ${isActive ? 'active mr-3 fade-in' : ''}`} href="#menu" onClick={toggle}>
              <div className="top-bar"></div>
              <div className="bottom-bar"></div>
            </a>

          </div>


        </header>
        <Router>

          <div className={` bg-main-color fixed w-full h-full ${isActive ? 'block' : 'hidden'}`} style={{ width: '100vw' }}>
            <div className=' flex flex-col items-start gap space-x-[4.375rem] lg:space-x-[2.5rem]'>

              <ul className=' mt-12 ml-5 text-white'>
                <li className='mb-10 flex items-center' onClick={togglemenu}>
                  <a>Products</a>
                  <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                  </svg>
                </li>
                <div className={` flex flex-col items-center ${isOpen ? 'scroll-smooth inline' : 'hidden'}`}>
                  <div className='flex flex-row '>
                    <Productcardmobile />
                    <Productcardmobile />
                  </div>
                  <div className='flex flex-row '>
                    <Productcardmobile />
                    <Productcardmobile />
                  </div>
                  <Productcardmobile />
                </div>
                <li className='mb-10'><Link to="/about" onClick={toggle}>Raw Materials</Link></li>
                <li className='mb-10'><Link to="/about" onClick={toggle}>Our Process</Link></li>
                <li><Link to="/contacts" onClick={toggle}>Company</Link></li>
              </ul>

            </div>

            <div className=' fixed  bottom-8  z-50 '>
              <button className="h-[50px] w-[90vw]  text-center mx-5 text-white navbar-text text-nowrap rounded-full border-white border ">Contact Us</button>
            </div>
          </div>
          <main>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contacts" element={<Contacts />} />
            </Routes>
          </main>
        </Router>
      </div>
    </>
  );
}