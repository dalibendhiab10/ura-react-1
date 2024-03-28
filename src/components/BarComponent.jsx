import {
    BrowserRouter as Router,
    Route,
    Link,
    Routes,
} from 'react-router-dom'


import Home from '../pages/Home';
import About from '../pages/About';


function Bar() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </nav>

                <main>
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                    </Routes>
                </main>
            </div>
        </Router>
    )
}
export default Bar;
