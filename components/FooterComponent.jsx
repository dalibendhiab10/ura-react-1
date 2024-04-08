const Footer = () => {
    return (
        <>
            <footer className="relative">
                {/* Background SVG */}
                {/* <div className="absolute inset-0 z-0 pointer-events-none footer-img footer" >
                    <img src="assets/footer/footer.svg" className="w-full h-full" alt="background" />
                </div> */}
                {/* Content */}
                <div className="flex flex-col" >
                    <div className="flex flex-row p-y-66 relative z-10">
                        <div className="flex flex-col footer-left g-y-logo ">
                            <img src="assets/logo-black.svg" className="adress-logo" alt="logo" />
                            <div className="flex flex-col gap-y-4">
                                <p className="text-main-color footer-title">Address</p>
                                <p className="adress-content">223229, Minsk region, Chervensky district,
                                    <br />Smilovichsky s/s, ag. Zapolye, st.
                                    <br />Sadovaya 10, room 1,
                                </p>
                            </div>
                            <div className="footer-left flex p-t-28 ">
                                <p className="text-btn-nav text-white">© 2024 CrumSnack</p>
                            </div>
                        </div>
                        <div className="footer-left flex flex-col gap-y-4 m-l-8rem pt-5">
                            <p className="footer-title text-main-color">Forget-Me-Not</p>
                            <div className="flex flex-col g-y-22">
                                <a className="adress-content" href=""> Products</a>
                                <a className="adress-content" href="">Raw Materials</a>
                                <a className="adress-content" href="">Our Process</a>
                                <a className="adress-content" href="">Company</a>
                                <a className="adress-content" href="">Contacts</a>
                            </div>
                        </div>
                        <div className="footer-left flex flex-col gap-y-4 pl-36 pt-5">
                            <p className="footer-title text-white">Contact us</p>
                            <div className="flex flex-col">
                                <a className="adress-content text-white" href="Tel: +14243240200"> +14243240200</a>
                                <a className="adress-content text-white pt-3.5" href="mailto: info@crumsnack.com">info@crumsnack.com</a>
                            </div>
                            <div className="flex flex-col p-t-67">
                                <p className="social-media-text text-white">Social Networks</p>
                                <div className="flex flex-row mt-4">

                                    <a href="https://facebook.com" target="_blank"><img className="social-media-img " src="assets/footer/fb.svg" alt="Facebook" /></a>
                                    <a href="https://instagram.com" target="_blank"> <img className="social-media-img p-l-30" src="assets/footer/insta.svg" alt="Instagram" /></a>
                                </div>
                            </div>
                            <div className="flex flex-row p-t-65 ">
                                <p className="text-btn-nav text-white mr-6">Terms & Conditions</p>
                                <p className="text-btn-nav text-white">Privacy Policy</p>
                            </div>
                        </div>
                    </div>


                </div>
            </footer>
        </>
    )
}
export default Footer;
