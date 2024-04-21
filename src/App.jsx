/* eslint-disable react/no-unescaped-entities */
import Bar from '../components/bar/BarComponent';
import Nav_mob from '../components/bar/mobile-nav';
import {
  Route,
  Routes,
} from 'react-router-dom'
// pages
import Home from './pages/Home';
import Products from './pages/Products';
import Contacts from './pages/Contact';
import ErrorPageHandler from './pages/ErrorHandler'


import {
  BrowserRouter as Router,

} from 'react-router-dom'
import Foo from '../components/foo';
import OurCompany from '../components/OurCompanyComponent';
import ThankYou from './pages/ThankYou';

function App() {
  let errors = [
    {
      error: 400,
      message: "You have uploaded the wrong index file to the server",
      title: "Invalid request",
    },
    {
      error: 404,
      message: "",
      title: "Could not find this page",
    },
    {
      error: 403,
      message: "Authorization access error",
      title: "Access error",
    },

    {
      error: 500,
      message: "You have uploaded the wrong index file to the server",
      title: "Invalid request",
    },

  ]
  return (
    <div className='body no-scrollbar' >
      <Router>

        <div className='bar-web w-svw'>

          <Bar />

        </div>
        <div className='bar-mob relative z-[9999]'>
          <Nav_mob />

        </div>
        <Routes>
          <Route exact path="/" element={<Home PageTitle="Crum Snack - Home Page" />} />
          <Route path="/products" element={<Products PageTitle="Crum Snack - Products" />} />
          <Route path="/contacts" element={<Contacts PageTitle="Crum Snack - Contact us" />} />
          <Route path="/Tabs" element={<Foo />} />
          <Route path="/Tabs_mob" element={<OurCompany />} />
          
          {/* Error Handling */}
          <Route path="*"         element={<ErrorPageHandler PageTitle={`Crum Snack - ${errors[1].title}`} ComponentData={errors[1]}/>} />
          <Route path="/400"      element={<ErrorPageHandler PageTitle={`Crum Snack - ${errors[0].title}`} ComponentData={errors[0]}/>} />
          <Route path="/403"      element={<ErrorPageHandler PageTitle={`Crum Snack - ${errors[2].title}`} ComponentData={errors[2]}/>} />
          <Route path="/500"      element={<ErrorPageHandler PageTitle={`Crum Snack - ${errors[3].title}`} ComponentData={errors[3]}/>} />
          <Route path="/thankyou" element={<ThankYou         PageTitle={`Crum Snack - Mail Sent`} />} />
          
        </Routes>
      </Router>

    </div>
  );
}

export default App;
