/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import Block1 from '../../components/bloc1/1firstblock';
import Block1_mob from '../../components/bloc1/firstblock-mob';
import Block2 from '../../components/block2';
import OurProcess from '../../components/ProcessComponent';
import Footer from '../../components/FooterComponent';
import Nikom_footer from '../../components/footer_tarchoun';
import OurCompany from '../../components/OurCompanyComponent';
import { useEffect } from 'react';

const Home = ({ PageTitle }) => {
  useEffect(() => {
    document.title = PageTitle;
  }, [PageTitle]);

  return (
    <>
      <div className='block-desk '>
        <Block1 />
      </div>
      <div className='block-mobile '>
        <Block1_mob />
      </div>


      <div className='mt-14'>

        <Block2 />
      </div>
      <div className='mt-28 md:mt-14'>
        <OurProcess />
      </div>
      <OurCompany />
      <div className='mt-[-1rem]'>

      <Nikom_footer /> 
      </div>
    </>)
}

export default Home