import {
    BrowserRouter as Router,
    Route,
    Link,
    Routes,
} from 'react-router-dom'


import Home from '../src/pages/Home';
import About from '../src/pages/About';
import Contacts from '../src/pages/Contact';

function Bar() {
    return (
    
        <Router>
            <div>
                <nav className="navbar">
                    <img src="./logo crum.svg" alt="logo" className="w-[114.45px] h-[35px]" />
                    <div className='grid grid-cols-2 space-x-6'>
                        <ul className='text-nav text-white  flex flex-row space-x-[29px]'>                       
                            <li><Link to="/contacts" >Products</Link></li>
                            <li><Link to="/about">Raw Materials</Link></li>
                            <li><Link to="/about">Our Process</Link></li>
                            <li><Link to="/contacts">Company</Link></li>
                        </ul>
                        <button className="bg-[#FFA800] text-white rounded-2xl ">Contact Us</button>
                    </div>
                </nav>

                <main>
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contacts" element={<Contacts/>} />
                    </Routes>
                </main>
            </div>
        </Router>
    )
}
export default Bar;
