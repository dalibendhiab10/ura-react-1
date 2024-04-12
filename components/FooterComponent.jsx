import Contactus from "./footer/ContactComponent";
import Contact from "./footer/ContactInfo";
import Forget from "./footer/ForgetMeNot";
import MobileFooter from "./footer/Footermobile";

const Footer = () => {
    return (
        <>
            <div className="px-5	py-5	">
                <div className="flex-d  ">

                    <div className="bg-main  bloc1 bloc1-div rounded-l-[80px] rounded-tr-[80px] ">
                        <div className="grid grid-col-template  margin-bloc1">
                            <Contactus />
                        </div>
                    </div>

                </div>
                <div className="flex flex-col justify-end  ">

                    <div className="flex justify-end contentfooter">

                        <Forget />

                        <img src="assets/footer/footercomponent/other/3.svg" className=" w-[80px] h-[80px] bloc3-svg3" />
                        <Contact />
                        <MobileFooter/>

                    </div>
                    <div className="flex justify-end mr-7p  items-center">
                        <img src="assets/footer/footercomponent/other/5.svg" className=" w-[80px] h-[80px] bloc3-svg5" />

                        <div className="bg-main  bloc3 "></div>
                        <img src="assets/footer/footercomponent/other/4.svg" className="h-[83px] w-[81px] bloc3-svg4" />

                    </div>
                    <div className="flex justify-end mr-12p ">

                        <div className="bg-main w-80p bloc4 rounded-l-[80px] rounded-br-[80px]  ">
                            <p className=" pl-6 text-btn-nav text-white">© 2024 CrumSnack</p>
                            <div className="flex   pr-6 ">

                                <p className="text-btn-nav text-white mr-6">Terms & Conditions</p>
                                <p className="text-btn-nav text-white">Privacy Policy</p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}
export default Footer;