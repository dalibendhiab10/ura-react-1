import {
    BrowserRouter as Router,
    Route,
    Link,
    Routes,
} from 'react-router-dom'


import Home from '../pages/Home';
import About from '../pages/About';
import Contacts from '../pages/Contact';

function Bar() {
    return (
        <Router>
            <div>
                <nav>
                    <ul className="flex space-x-6">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contacts">Contact</Link></li>
                    </ul>
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
