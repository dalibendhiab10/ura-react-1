import React from 'react'

export default function Nikom_footer() {
  return (
  <div className='w-full h-[1050px] relative mt-[148px]'> 
    
    <img src="union.svg" alt="footer background" className='absolute' />
    <div className="flex flex-col contact-text content-center  contact-text-position absolute top-[4%] left-[45.4%] scale-75 " >
            <div className="2xl:pb-11">
                <h2 className="text-h2  text-white contact-title got-idea ">
                    Got an idea?
                </h2>
                <h2 className="text-h2 text-white contact-title">
                    Let’s talk.
                </h2>
            </div>
            <p className="text-desc3  text-white opacity-80  contact-usdesc3  ">
                Our team of experts is always at the service of our clients.
            </p>
            <button className="btn-color-main  text-btn-main rounded-full contact-us-button">Contact us</button>
        </div>

    <div className='absolute top-[-14%] left-[-0.3%] scale-90 ' >
      <svg width="500" height="350" viewBox="0 0 596 350" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className="relative svg-potion-laptop">
                <mask id="mask0_307_4703" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="596" height="350">
                    <path d="M0.703378 80.0005C0.703103 35.8175 36.5204 -2.29894e-06 80.7034 -5.13482e-06L245.501 -1.57123e-05C278.523 -1.78318e-05 305.292 26.7696 305.292 59.7916C305.292 92.8136 332.062 119.583 365.084 119.583L515.703 119.583C559.886 119.583 595.703 155.4 595.703 199.583L595.703 270C595.703 314.183 559.886 350 515.703 350L80.7045 350C36.5219 350 0.704833 314.183 0.704558 270.001L0.703378 80.0005Z" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_307_4703)">
                    <rect x="-95.2971" y="-148.056" width="524.244" height="685.724" transform="rotate(-6.63111 -95.2971 -148.056)" fill="url(#pattern0)" />
                    <rect width="532.106" height="685.724" transform="matrix(-0.99331 0.115477 0.115477 0.99331 945.046 -269)" fill="url(#pattern1)" />
                </g>
                <defs>
                    <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                        <use xlinkHref="#image0_307_4703" transform="matrix(0.00237823 0 0 0.00181818 -0.000617251 0)" />
                    </pattern>
                    <pattern id="pattern1" patternContentUnits="objectBoundingBox" width="1" height="1">
                        <use xlinkHref="#image0_307_4703" transform="matrix(0.0023834 0 0 0.00181818 -0.00170557 0)" />
                    </pattern>
                    <image id="image0_307_4703" width="421" height="550" xlinkHref="/assets/contactus/download.png" />

                </defs>
            </svg>
      </div>

    <div className=" w-[32.95%] h-[50%]  bloc2	pb-12 absolute top-[28%] left-[63%] scale-90	 ">
                <div className="footer-contact flex flex-col gap-y-4 ">
                    <p className="footer-title text-white text-tab">Contact us</p>
                    <div className="flex flex-col">
                        <a className="adress-content text-white text-tab" href="Tel: +14243240200"> +14243240200</a>
                        <a className="adress-content text-white pt-3.5 text-tab" href="mailto: info@crumsnack.com">info@crumsnack.com</a>
                    </div>
                    <div className="flex flex-col p-t-67">
                        <p className="social-media-text text-white text-tab">Social Networks</p>
                        <div className="flex flex-row mt-4">

                            <a href="https://facebook.com" target="_blank">
                                <img className="social-media-img " src="assets/footer/fb.svg" alt="Facebook" />
                                <img className="social-media-img-tab " src="assets/footer/fb-b.svg" alt="Facebook" />

                            </a>
                            <a href="https://instagram.com" target="_blank">
                                <img className="social-media-img p-l-30" src="assets/footer/insta.svg" alt="Instagram" />
                                <img className="social-media-img-tab p-l-30" src="assets/footer/insta-b.svg" alt="Instagram" />

                            </a>
                        </div>
                    </div>
                </div>
      </div>  
      
      <div className="flex flex-col absolute footer-left g-y-logo pt-[4%] pr-[7.4%] top-[33%] left-[11.3%]">
              <img src="assets/logo-black.svg" className="adress-logo" alt="logo" />
              <div className="flex flex-col gap-y-4">
                  <p className="text-main-color footer-title">Address</p>
                  <p className="adress-content">223229, Minsk region, Chervensky district,
                      <br />Smilovichsky s/s, ag. Zapolye, st.
                      <br />Sadovaya 10, room 1,
                  </p>
              </div>
      </div>
              
      <div className="footer-left flex flex-col gap-y-4 m-l-8rem pt-[4%] forgot-tab absolute top-[33%%] left-[44%] ">
        <p className="footer-title text-main-color">Forget-Me-Not</p>
        <div className="flex flex-col g-y-22">
            <a className="adress-content" href=""> Products</a>
            <a className="adress-content" href="">Raw Materials</a>
            <a className="adress-content" href="">Our Process</a>
            <a className="adress-content" href="">Company</a>
            <a className="adress-content" href="">Contacts</a>
        </div>
      </div>
       
    </div>
  )
}
