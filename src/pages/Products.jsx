/* eslint-disable react/prop-types */
import { useEffect } from 'react';

const Products = ({ PageTitle }) => {
  useEffect(() => {
    document.title = PageTitle;
  }, [PageTitle]);

  return (
    <>
      <div className={` title-prod relative product-menu flex flex-row  space-x-6 w-screen `} >
      <div className=' flex flex-row justify-start imL-Container'>
          <img src="/assets/productPage/LeftP.svg" alt="product" className='ImgL' />
        </div>
        <div className=' flex flex-row justify-end imR-Container'>
          <img src="/assets/productPage/RightP.svg" alt="product" className='ImgR' />

        </div>

      </div>
    </>
  );
}

export default Products;