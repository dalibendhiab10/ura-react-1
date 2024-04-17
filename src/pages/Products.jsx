/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import ProductCard from '../../components/ProductPage/Prod';
import Footer from '../../components/FooterComponent';

const Products = ({ PageTitle }) => {
  useEffect(() => {
    document.title = PageTitle;
  }, [PageTitle]);

  return (
    <>
      <div className='flex flex-col items-center mb-40'>
        <div className={` title-prod relative product-menu flex flex-row  space-x-6 w-screen `} >
          <div className=' flex flex-row justify-start imL-Container'>
            <img src="/assets/productPage/LeftP.svg" alt="product" className='ImgL' />
            <img src="/assets/productPage/LeftPMob.svg" alt="product" className='ImgL ImgMob' />
          </div>
          <div className='flex flex-col pt-24 relative z-30 '>
            <h1 className='text-h1 text-white mb-4'>Products</h1>
            <p className='text-white text-desc3'>We believe that the highest quality is achieved through the development of new generation processes: discover them.</p>
          </div>
          <div className=' flex flex-row justify-end imR-Container'>
            <img src="/assets/productPage/RightP.svg" alt="product" className='ImgR' />
            <img src="/assets/productPage/RightPMob.svg" alt="product" className='ImgR ImgMob' />

          </div>

        </div>
        <div className='flex flex-col gap-28'>
          <div className='flex flex-col gap-4'>
            <p className='text-desc1 product-type'>Efficiently</p>
            <div className=' Product-card-Container'>
              <ProductCard classProd="mr-4" titleProd="Die cut pellets" />
              <ProductCard classProd="mr-4" titleProd="Die cut pellets" />
              <ProductCard titleProd="Die cut pellets" />
            </div>
            <div className='Product-card-Container '>
              <ProductCard classProd="mr-4" titleProd="Die cut pellets" />
              <ProductCard classProd="product-card-xl" titleProd="Die cut pellets" />
            </div>
          </div>
          <div className='flex flex-col gap-4'>
            <p className='text-desc1 product-type'>Fried</p>
            <div className='Product-card-Container '>
              <ProductCard classProd="mr-4" titleProd="Die cut pellets" />
              <ProductCard classProd="product-card-xl" titleProd="Die cut pellets" />
            </div>
          </div>
          <div className='flex flex-col gap-4'>
            <p className='text-desc1 product-type'>Shaped</p>
            <div className=' Product-card-Container'>
              <ProductCard classProd="mr-4" titleProd="Die cut pellets" />
              <ProductCard classProd="mr-4" titleProd="Die cut pellets" />
              <ProductCard titleProd="Die cut pellets" />
            </div>
          </div>
        </div>
      </div>
      <Footer />

    </>
  );
}

export default Products;