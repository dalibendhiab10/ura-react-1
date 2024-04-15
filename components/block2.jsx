/* eslint-disable react/no-unescaped-entities */
import TabsBasic from "./Tabs";


const Text_desc = () => (
  <div className="text-descc grid grid-flow-col justify-center content-center lg:space-x-[240px] md:space-x-10 mt-10  ">
      <div className='grid grid-flow-row space-y-12 pl-[16px] '>
        <div className='text-desc3 text-desc3-mobile '>Raw materials</div>
        <div className='text-desc2 text-desc2-mobile   text-main-color '>"We offer wholesale distribution <p>of premium raw materials"</p></div>

      </div>

      <div className='text-h11 text-[#35A080]'>"We offer wholesale distribution <p>of premium raw materials to our</p>  valued customers."</div>

    </div>
);
const Text_Mobile = () => (
  <div className="text-mobilee grid grid-flow-row justify-center content-center space-y-[40px] mt-10 ">
      <div className='grid grid-flow-row pl-[10px] space-y-3'>
        <div className='text-desc2 '>Raw materials</div>
        <div className='text-desc2 text-main-color '>"We offer wholesale distribution <p>of premium raw materials"</p></div>

      </div>

      <div className='text-h11-mobile text-[#35A080]'>"We offer wholesale  <p>distribution of premium raw materials to our valued</p>   customers."</div>

    </div>
);

const Block2 = () => (
  <>
     <div className="text-mobilee">  
     <Text_Mobile/>
     </div>
     <div className="text-descc">
     <Text_desc/>
     </div>
    
    {/* <div className='flex flex-row justify-center'>
     
      <div className="flex lfex-row ml-[18.75rem] mr-[18.75rem] " >
        <div className="mt-[3.75rem] h-[40.313rem]   ">
          <TabsBasic />
        </div>
        <div>
          <div className="mt-[7.125rem]">
            <img src="/corner.png" alt="" />
          </div>
          <div className="h-[27.5rem] rounded-e-[3.813rem] w-[14.875rem] block bg-main-color"> </div>
        </div>
      </div>
    </div> */}
  </>
);

export default Block2;