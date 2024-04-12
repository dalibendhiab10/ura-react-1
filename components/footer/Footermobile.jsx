const MobileFooter = () => {
    return (
        <>
        
            <div className="flex flex-col footer-mobile-display " >
                <div className="flex ">

                    <div className="bg-main  mt-3 rounded-tl-[40px] w-[60%] rounded-tr-[40px]">
                        <div className="pt-[27%]  flex flex-col gap-2 pl-3"> 
                            <p className="footer-title text-white text-tab">Contact us</p>
                            <a className="adress-content text-white text-tab" href="Tel: +14243240200"> +14243240200</a>

                        </div>
                    </div>
                    <img src="assets/footer/footercomponent/mobile/1.svg" className=" pt-24 " />
                </div>

                <div className="bg-main   mobile-contactinf ">
                    <div className=" flex flex-col items-start pt-3">

                        <p className="footer-title text-white text-tab pl-3 ">info@crumsnack.com</p>
                        <div className=" flex flex-col items-start pl-3 pt-5">

                            <p className="social-media-text text-white text-tab">Social Networks</p>

                            <div className="flex flex-row mt-2 mb-4 ">

                                <a href="https://facebook.com" target="_blank">
                                    <img className="social-media-img " src="assets/footer/fb.svg" alt="Facebook" />
                                    <img className="social-media-img-tab " src="assets/footer/fb-b.svg" alt="Facebook" />

                                </a>
                                <a href="https://instagram.com" target="_blank">
                                    <img className="social-media-img ml-4" src="assets/footer/insta.svg" alt="Instagram" />
                                    <img className="social-media-img-tab " src="assets/footer/insta-b.svg" alt="Instagram" />

                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="  mobile-termsdiv  ">

                    <div className=" flex  items-start">
                        <img src="assets/footer/footercomponent/mobile/2.svg" />

                        <div className=" bg-main flex flex-col  mobile-terms-text rounded-bl-[40px] rounded-br-[40px]">
                            <div className="flex    ">

                                <p className="text-btn-nav text-white mr-6 termsc">Terms & Conditions</p>
                                <p className="text-btn-nav text-white">Privacy Policy</p>
                            </div>
                            <p className="  text-btn-nav text-white opacity-60">© 2024 CrumSnack</p>

                        </div>
                        <img src="assets/footer/footercomponent/mobile/3.svg" />

                    </div>
                </div>
            </div>
        </>
    )
}
export default MobileFooter; 