import Contactus from "./footer/ContactComponent";
import Contact from "./footer/ContactInfo";
import Forget from "./footer/ForgetMeNot";
import MobileFooter from "./footer/Footermobile";
const Foo = () => {
    return (<>
        <div className="union-parent">
            <div className="union-icon" alt=""  >


                <div className="flex-d  ">

                    <div className="  bloc1  rounded-l-[80px] rounded-tr-[80px] ">
                        <div className="flex flex-row   items-center  absolute">
                            <Contactus />
                        </div>
                    </div>

                </div>
                <div className="flex flex-col justify-end  opacity-0">

                    <div className="flex justify-end contentfooter">

                        <Forget />

                        <Contact />
                        <MobileFooter />

                    </div>

                    <div className="flex justify-end mr-7p  items-center">

                        <div className="  bloc3 "></div>

                    </div>
                    <div className="flex justify-end mr-12p ">

                        <div className=" w-80p bloc4 rounded-l-[80px] rounded-br-[80px]  ">
                            <p className=" pl-6 text-btn-nav text-white">© 2024 CrumSnack</p>
                            <div className="flex   pr-6 ">

                                <p className="text-btn-nav text-white mr-6">Terms & Conditions</p>
                                <p className="text-btn-nav text-white">Privacy Policy</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </>)
};
export default Foo;