import Contactus from "./ContactComponent";

const Test = () => {
    return (
        <>
            <div className="flex-d  ">
                {/* <img src="assets/footer/footercomponent/1.svg" className=" w-450 bloc1  bloc1-svg1" /> */}

                <div className="bg-main  bloc1 bloc1-div rounded-l-[80px] rounded-tr-[80px] ">
                    <div className="grid grid-col-template  margin-bloc1">
                        <Contactus />
                    </div>
                </div>

            </div>
            <div className="flex flex-col justify-end  ">
                <div className="flex justify-end">
                    <img src="assets/footer/footercomponent/3.svg" className=" w-450  pb-44" />

                    <div className="bg-main w-4/12 br-80  bloc2	 ">
                        bloc 2
                    </div>

                </div>
                <div className="flex justify-end mr-7p  ">
                    <img src="assets/footer/footercomponent/5.svg" className="w-450 bloc3-svg5" />

                    <div className="bg-main  w-225 	 ">
                        bloc 3
                    </div>
                    <img src="assets/footer/footercomponent/4.svg" className="w-450 " />

                </div>
                <div className="flex justify-end mr-12p ">

                    <div className="bg-main w-80p   	bloc4 rounded-l-[80px] rounded-br-[80px] ">
                        bloc 4
                    </div>

                </div>
            </div>

        </>
    )
}
export default Test;