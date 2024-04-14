/* eslint-disable react/no-unescaped-entities */
import TabsBasic from "./Tabs";


const Block2 = () => (
  <>
    <div className=" grid grid-flow-col justify-center content-center space-x-[240px] mt-10 ">
      <div className='grid grid-flow-row space-y-12'>
        <div className='text-desc3 '>Raw materials</div>
        <div className='text-desc2 text-main-color '>"We offer wholesale distribution <p>of premium raw materials"</p></div>

      </div>

      <div className='text-h11 text-[#35A080]'>"We offer wholesale distribution <p>of premium raw materials to our</p>  valued customers."</div>

    </div>
    <div className='flex flex-row justify-center'>

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
    </div>
  </>
);

export default Block2;