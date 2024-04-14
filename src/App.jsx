/* eslint-disable react/no-unescaped-entities */
import Bar from '../components/BarComponent';
import Nav_mob from '../components/mobile-nav';
import Block1 from '../components/1firstblock';
import Block1_mob from '../components/firstblock-mob';
import Block2 from '../components/block2';
import OurProcess from '../components/ProcessComponent';
import Footer from '../components/FooterComponent';
import OurCompany from '../components/OurCompanyComponent';
function App() {

  return (
    <div className='body' >
      
      <div className='bar-web'>
        
      <Bar/>
      
      </div>
      <div className='bar-mob relative z-[9999]'>
      <Nav_mob/>
      </div>


      <Block1/>
      <Block2 />  
      <OurProcess/>
<OurCompany/>
      <Footer/>
    </div>
  );
}

export default App;
