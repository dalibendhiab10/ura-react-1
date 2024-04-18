const Contactus = () => (
    <>
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
        <div className="flex flex-col contact-text justify-evenly  relative contact-text-position" >

            <div><h2 className="text-h2  text-white contact-title ">
                Got an idea?

            </h2>
                <h2 className="text-h2 text-white contact-title">
                    Let’s talk.
                </h2>
            </div>
            <p className="text-desc3  text-white opacity-80  contact-usdesc3">
                Our team of experts is always at the service of our clients.
            </p>
            <button className="btn-color-main  text-btn-main rounded-full contact-us-button">Contact us</button>

        </div>
    </>
)
export default Contactus;