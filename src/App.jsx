/* eslint-disable react/no-unescaped-entities */
import { useState , useEffect } from 'react';
import Bar from '../components/BarComponent';
import Nav_mob from '../components/mobile-nav';
import Block1 from '../components/1firstblock';
import Block1_mob from '../components/firstblock-mob';
import Block2 from '../components/block2';
import OurProcess from '../components/ProcessComponent';
import Footer from '../components/FooterComponent';
import OurCompany from '../components/OurCompanyComponent';
function App() {
  useEffect(() => {
    window.addEventListener("resize", () => {
      setDesktop(window.innerWidth);
    });
  }, []);
  const [isDesktop, setDesktop] = useState(0);

  return (
    <div className='body' >
      
      <div className='bar-web'>
        
      <Bar/>
      
      </div>
      <div className='bar-mob relative z-[9999]'>
      <Nav_mob/>
      
      </div>
      <div className='block-desk'>
      <Block1 /> 
      </div>
      <div className='block-mobile'>
       <Block1_mob />  
      </div>
      
  
     
      
      <Block2 />  
      <OurProcess/>
<OurCompany/>
      <Footer/>
    </div>
  );
}

export default App;
