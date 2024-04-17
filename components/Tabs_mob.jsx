
import React from 'react'
import { useState } from 'react';

export default function Tabs_mob() {
    const tabs_btn=["Die cut pellets","Laminated","Micropellet","Strip","Raw materials"];
    let [btn_index, setbtnindex] = useState(0);
    return (
    <>
    <div className='tabis_mob relative tabs-mob-show'>
      <div className='rounded-[40px]'>
        <div className='buttons-tabs_mob flex flex-row text-white pt-4 absolute'>
        {tabs_btn.map((tab, index) => (
            <div className='flex-none'>
              <button 
              key={index} 
              onClick={() => setbtnindex(index)}
              className='px-4 py-2 flex flex-col justify-center rounded-[2.313rem] ml-[1.25rem] border-2 border-white font-medium whitespace-nowrap text-neutral-500 hover:enabled:bg-primary-100 hover:enabled:text-primary-800 active:enabled:bg-primary-200 active:enabled:text-primary-900 disabled:text-disabled-500 focus-visible:outline focus-visible:-outline-offset-2 focus-visible:shadow-[inset_0_0_0_4px_rgb(255,255,255)]'                    >{tab}</button>
            </div>
        ))}
       </div>
        <img src="/0007 2.png" alt="" className={`absolute imaaage_mob  ${btn_index == 0 ? 'opacity-100' : "opacity-0"}`}/>
        <img src='tabs_mob.svg' className='' alt=''/>
        <div className='moraba3_mob'></div>
        <div className='mostatil_mob'></div>
        <div className='container-corner_mob'>
          <div className='curved-corner-bottomright_mob'></div>
        </div>
      </div>
        <button className='flex justify-center align-middle  absolute button_tabs_mob text-btn-main text-main-color'>Discover</button>
    </div>
  </>
  )
}
