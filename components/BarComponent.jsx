import {
    BrowserRouter as Router,
    Route,
    Link,
    Routes,
} from 'react-router-dom'
import { useState } from 'react';
import BasicDropdown from './Dropdown';
import Home from '../src/pages/Home';
import About from '../src/pages/About';
import Contacts from '../src/pages/Contact';
import Tabs from '../components/Tabs';

function Bar() {
    let [isOpen, setIsOpen] = useState(false);
    return (
        <Router>
            <div>
                <nav className={` ${isOpen ? 'navbar-toggle' : 'navbar'} `}>
                    <div className='h-[70px] ltr flex flex-row justify-between  items-center nav-wrapper lg:mr-[15.75rem] '>
                        <div className=' w-2/5 h-3/5'>
                            <div className='h-full'>
                                <img src="./logo crum.svg" alt="logo" className='h-full w-full' />
                            </div>
                        </div>
                        <div className='w-3/5 h-full flex flex-rows items-center space-x-[4.375rem] lg:space-x-[2.5rem]'>

                            <ul className='navbar-text ml-20 text-white flex text-nowrap space-x-[29px] items-center max-md:hidden '>
                                <BasicDropdown togle={isOpen} setoggle={setIsOpen} className="" />
                                <li><Link to="/about">Raw Materials</Link></li>
                                <li><Link to="/about">Our Process</Link></li>
                                <li><Link to="/Tabs">Company</Link></li>
                            </ul>
                            <div className='h-3/5 ml-8 '>
                                <button className="h-full w-full text-white navbar-text text-nowrap rounded-full border-white border px-8">Contact Us</button>
                            </div>
                        </div>
                    </div>
                </nav>

                <main>
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contacts" element={<Contacts />} />
                        <Route path="/Tabs" element={<Tabs/>} />
                    </Routes>
                </main>
            </div>
        </Router>
    )
}
export default Bar;




