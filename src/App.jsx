import Bar from '../components/BarComponent';
import Nav_mob from '../components/mobile-nav';
import Block1 from '../components/1firstblock';
import Block1_mob from '../components/firstblock-mob';
import Block2 from '../components/block2';
import OurProcess from '../components/ProcessComponent';
import Footer from '../components/FooterComponent';
function App() {

  return (
    <div className='body' >
      <Bar/>
 
      {/* <div className="mt-[-86px]">
      <Block1_mob/>
      </div> */}
      <div className=" grid grid-flow-col justify-center content-center space-x-[240px] mt-10 ">
        <div className='grid grid-flow-row space-y-12'>
          <div className='text-desc3 '>Raw materials</div>
          <div className='text-desc2 text-main-color '>"We offer wholesale distribution <p>of premium raw materials"</p></div>
        
        </div>
        
        <div className='text-h11 text-[#35A080]'>"We offer wholesale distribution <p>of premium raw materials to our</p>  valued customers."</div>
       
       </div>
      <div className='flex flex-row justify-center'>
      <Block2 />  
      </div>  
      <OurProcess/>
      <Footer/>
    </div>
  );
}

export default App;
