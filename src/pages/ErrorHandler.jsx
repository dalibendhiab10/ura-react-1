/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */

import { useEffect, useState } from 'react';
const ErrorPageHandler = ({ PageTitle, ComponentData }) => {
    let [data, SetData] = useState({
        error: ComponentData.error || 0,
        message: ComponentData.message || "",
        title: ComponentData.title || "",
    });

    useEffect(() => {
        document.title = PageTitle;
        SetData({
            error: ComponentData.error || 0,
            message: ComponentData.message || "",
            title: ComponentData.title || "",
        });
    }, [PageTitle, ComponentData]);

    return (
        <>
            <div className='error-page-pc flex flex-col'>
                <div className={`scale-error-text flex flex-row w-screen min-h-screen error-page-pc-container  ${data.message ? "pb-[5%] gap-x-16 " : "pb-[5%] "}`}>
                    <h1 className='error-page-pc-code  text-white'>{data.error}</h1>
                    <div className={`flex flex-col  gap-2 ${data.message ? "pt-[2%]" : ""} text-white`}>
                        <h2 className={`error-page-pc-title ${data.message ? "" : "no-message-title"} text-white`}>{data.title}</h2>
                        <p className='error-page-pc-message '>{data.message}</p>
                        <div className='btn-home'>
                            <button className="opacity-0 btn-color-main  text-btn-main rounded-full contact-us-button mt-9"></button>
                            <button className=" btn-color-main  text-btn-main rounded-full contact-us-button mt-9 mr-2">Main page</button>
                        </div>
                    </div>

                </div>

            </div>
            <div className='error-page-phone'>
                <div className={`scale-error-text flex flex-row w-screen min-h-screen error-page-pc-container  `}>
                    <h1 className={`error-page-phone-code  text-white ${!data.message ? 'phone-code-nomessage' : ''}`}>{data.error}</h1>
                    <div className={`flex flex-col   text-btn-phone  text-white ${data.error == 403 ? 'w-[100%]' : ''}`}>
                        <div className={`container-mob-text ${!data.message ? 'with-no-message-phone' : ''} `}>
                            <h2 className={`error-page-phone-title  text-white ${!data.message ? 'title-nomessage' : ''}`}>{data.title}</h2>
                            <p className='error-page-phone-message '>{data.message}</p>
                        </div>
                        <div className='btn-home'>

                            <button className={`btn-color-main  text-btn-main rounded-full contact-us-button ${!data.message ? 'main-page-btn-phone-nomessage' : 'main-page-btn-phone'} `} >Main page</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default ErrorPageHandler