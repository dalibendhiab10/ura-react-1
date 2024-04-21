/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */

import { useEffect } from 'react';
const ThankYou = ({ PageTitle }) => {
    let data = {
        error: "SUCCESS! THANK YOU.",
        message: "Your email was well recieved successfully we appreciate your message and we wish we stay in touch.",
    };

    useEffect(() => {
        document.title = PageTitle;

    }, [PageTitle]);

    return (
        <>
            <div className='thankyou-page-pc flex flex-col'>
                <div className={` flex flex-row w-screen min-h-screen thankyou-page-pc-container  `}>
                    <h1 className='thankyou-page-pc-title  text-white'>{data.error}</h1>
                    <div className={`flex flex-col  gap-2  text-white`}>
                        <p className='thankyou-page-pc-message '>{data.message}</p>
                        <div className='btn-home'>
                            <button className="opacity-0 btn-color-main  text-btn-main rounded-full contact-us-button mt-9"></button>
                            <button className=" btn-color-main  text-btn-main rounded-full contact-us-button mt-9 mr-2">Send again</button>

                        </div>
                    </div>

                </div>

            </div>
            <div className='thankyou-page-phone'>
                <div className={` flex flex-row w-screen min-h-screen thankyou-page-pc-container  `}>
                    <div className={`flex flex-col   text-btn-phone  text-white `}>
                        <div className={`container-mob-text  `}>
                            <h1 className={` thankyou-page-pc-title  text-white `}>{data.error}</h1>
                            <p className='thankyou-page-phone-message '>{data.message}</p>
                        </div>
                        <div className='btn-home w-screen btn-thankyou'>
                            <button className={`btn-color-main  text-btn-main rounded-full contact-us-button `} >Send again</button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}
export default ThankYou;