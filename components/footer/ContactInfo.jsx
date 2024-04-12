const Contact = () => {

    return (
        <>
            <div className="bg-main w-[32.95%] h-[50%]  bloc2	pb-12 ">
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

        </>
    )
}
export default Contact;