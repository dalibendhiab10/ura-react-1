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
                <nav>
                    <ul>
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
