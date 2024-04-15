/* eslint-disable react/no-unescaped-entities */
import Bar from '../components/bar/BarComponent';
import Nav_mob from '../components/bar/mobile-nav';
import {
  Route,
  Routes,
} from 'react-router-dom'
import Home from '../src/pages/Home';
import Products from '../src/pages/Products';
import Contacts from '../src/pages/Contact';
import {
  BrowserRouter as Router,
   
} from 'react-router-dom'
import Tabs from '../components/Tabs';

function App() {

  return (
    <div className='body' >
      <Router>

        <div className='bar-web'>

          <Bar />

        </div>
        <div className='bar-mob relative z-[9999]'>
          <Nav_mob />

        </div>
        <Routes>
          <Route exact path="/" element={<Home PageTitle="Crum Snack - Home Page" />} />
          <Route path="/about" element={<Products PageTitle="Crum Snack - Products" />} />
          <Route path="/contacts" element={<Contacts PageTitle="Crum Snack - Contact us" />} />
          <Route path="/Tabs" element={<Tabs/>} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
