import { SfButton, SfDropdown, useDisclosure } from '@storefront-ui/react';
import { useState, useEffect } from 'react';

import Products from './productcard';

export default function BasicDropdown({ togle, setoggle }) {
  const { isOpen, toggle, close } = useDisclosure();
  const handleclick = () => {
    setoggle(!togle)
    toggle()
  }
  const handleclick2 = () => {
    setoggle(!togle)
    close()
  }

  return (
    <SfDropdown trigger={<SfButton onClick={handleclick} className='navbar-text noshadow' >Toggle
      <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
      </svg>
    </SfButton >} open={isOpen} onClose={close}>
      <div className='product-menu flex flex-row justify-center space-x-6 ' >
        <Products />
        <Products />
        <Products />
        <Products />
      </div>
      <div className='backdrop-div backdrop-blur-sm ' onClick={handleclick2}>
      </div>
      <div className='backdrop-div2 ' onClick={handleclick2}></div>
    </SfDropdown>
  );
}
