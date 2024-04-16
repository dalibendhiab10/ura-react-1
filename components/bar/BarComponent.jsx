/* eslint-disable react/prop-types */
import {
    Link,
    useLocation
} from 'react-router-dom'
import { useState, useEffect } from 'react';
import Products from '../other/productcard';

function AppInner() {
    let location = useLocation();
    return <Bar pathname={location.pathname} />;
}
function Bar({ pathname }) {


    let [isOpen, setIsOpen] = useState(false);
    let [Background, setBackground] = useState(false);
    let [menu, setMenu] = useState(false);
    const handleclick = () => {
        setMenu(!menu)
        setIsOpen(!isOpen)
    }
    useEffect(() => {
        if (pathname === '/') {
            setBackground(true);
        }
        else {
            setBackground(false);
        }

    }, [pathname]);

    return (
        <div>
            <nav className={` ${isOpen ? 'navbar-toggle' : 'navbar'} ${!Background ? 'bg-none' : 'bg-navbar'} ${(!Background && isOpen) ? 'bg-navbar' : ''} `}>
                <div className='h-[70px] ltr flex flex-row justify-between  items-center nav-wrapper lg:mr-[15.75rem] '>
                    <div className=' w-2/5 h-3/5'>
                        <Link to="/" className='h-full'>
                            <img src="./assets/logo-white.svg" alt="logo" className='h-full w-full' />
                        </Link>
                    </div>
                    <div className='w-3/5 h-full flex flex-rows items-center space-x-[4.375rem] lg:space-x-[2.5rem]'>

                        <ul className='navbar-text ml-20 text-white flex text-nowrap space-x-[29px] items-center max-md:hidden '>
                            <li onClick={handleclick} className='navbar-text noshadow flex cursor-pointer' >products
                                <svg className="w-2.5 h-2.5 ms-2.5 cursor-pointer" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                </svg>
                            </li>

                            <li><Link to="/about">Raw Materials</Link></li>
                            <li><Link to="/about">Our Process</Link></li>
                            <li><Link to="/contacts">Company</Link></li>
                        </ul>



                        <div className='h-3/5 ml-8 '>
                            <button className="h-full w-full text-white navbar-text text-nowrap rounded-full border-white border px-8">Contact Us</button>
                        </div>
                    </div>
                    
                </div>
                <div className={ `product-menu flex flex-row justify-center space-x-6 ${!menu ? 'hidden' : ''}`} >
                                <Products />
                                <Products />
                                <Products />
                                <Products />
                </div>
                <div className={`backdrop-div backdrop-blur-sm ${!menu ? 'hidden' : ''} `} onClick={handleclick}></div>

            </nav>
            <div className={`backdrop-div2 ${!menu ? 'hidden' : ''}`} onClick={handleclick}></div>

        </div>
    )
}
export default AppInner;




