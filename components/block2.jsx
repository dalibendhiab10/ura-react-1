/* eslint-disable react/no-unescaped-entities */
import Tabs from "./Tabs";
import Tabs_mob from "./Tabs_mob";


const Text_desc = () => (
  <div className="text-descc grid grid-flow-col	 md:space-x-10 mt-10  ">
      <div className='grid grid-flow-row space-y-12 pl-[183px] '>
        <div className='text-desc3 text-desc3-mobile '>Raw materials</div>
        <div className='text-desc2 text-desc2-mobile   text-main-color '>"We offer wholesale distribution <p>of premium raw materials"</p></div>

      </div>

      <div className='text-h11  text-[#35A080] pl-[10px]'>"We offer wholesale distribution <p>of premium raw materials to our</p>  valued customers."</div>

    </div>
);
const Text_Mobile = () => (
  <div className="text-mobilee grid grid-flow-row justify-center content-center space-y-[40px] mt-10 ">
      <div className='grid grid-flow-row pl-[10px] space-y-3'>
        <div className='text-title '>Raw materials</div>
        <div className='text-desc2  '>"We offer wholesale distribution <div>of premium raw materials"</div></div>
      </div>

      <div className='text-h11-mobile text-[#35A080]'>"We offer wholesale  <p>distribution of premium raw materials to our valued</p>   customers."</div>

    </div>
);

const Block2 = () => (
  <>
     <div className="pb-[50px]">
     <div className="text-mobilee">  
     <Text_Mobile/>
     </div>
     <div className="text-descc">
     <Text_desc/>
     </div>
      <div className="w-full grid grid-flow-col justify-center">
      <Tabs/>
      <Tabs_mob/>
      </div>
     </div>
  </>
);

export default Block2;