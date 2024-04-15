/* eslint-disable react/prop-types */
import {
    Link,
    useLocation
} from 'react-router-dom'
import { useState ,useEffect } from 'react';
import BasicDropdown from '../other/Dropdown';

function AppInner() {
    let location = useLocation();
    return <Bar pathname={location.pathname} />;
  }
function Bar({ pathname }) {
    

    let [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        console.log(pathname);
      }, [pathname]);
    return (
            <div>
                <nav className={` ${isOpen ? 'navbar-toggle' : 'navbar'} `}>
                    <div className='h-[70px] ltr flex flex-row justify-between  items-center nav-wrapper lg:mr-[15.75rem] '>
                        <div className=' w-2/5 h-3/5'>
                            <Link to="/" className='h-full'>
                                <img src="./logo crum.svg" alt="logo" className='h-full w-full' />
                            </Link>
                        </div>
                        <div className='w-3/5 h-full flex flex-rows items-center space-x-[4.375rem] lg:space-x-[2.5rem]'>

                            <ul className='navbar-text ml-20 text-white flex text-nowrap space-x-[29px] items-center max-md:hidden '>
                                <BasicDropdown togle={isOpen} setoggle={setIsOpen} className="" />
                                <li><Link to="/about">Raw Materials</Link></li>
                                <li><Link to="/about">Our Process</Link></li>
                                <li><Link to="/contacts">Company</Link></li>
                            </ul>
                            <div className='h-3/5 ml-8 '>
                                <button className="h-full w-full text-white navbar-text text-nowrap rounded-full border-white border px-8">Contact Us</button>
                            </div>
                        </div>
                    </div>
                </nav>

            </div>
    )
}
export default AppInner;




