import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Componants/Home/Home';
import Footer from './Componants/Footer/Footer';
import About from './Componants/About/About';
import Header from './Componants/Header/Header';
import Gallery from './Componants/Gallery/Gallery';
import ContactUs from './Componants/ContactUs/ContactUs';
import ServiceProvider from './Componants/ServiceProvider/ServiceProvider';
import BecomeOurPartner from './Componants/BecomeOurPartner/BecomeOurPartner';
import PrivacyPolicy from './Componants/PrivacyPolicy/PrivacyPolicy';
import ReturnandRefundPolicy from './Componants/ReturnandRefundPolicy/ReturnandRefundPolicy';
import Termsandcondition from './Componants/TermsandCondition/Termsandcondition';
import ModuleSecriptions from './Componants/ModuleDescriptions/ModuleSecriptions';

function App() {

  return (
    <>
      <BrowserRouter>

        <Header/>
        <Routes>
        
          <Route path='/' element={<Home /> } />
          <Route path='/about' element={<About /> } />
          <Route path='/gallery' element={<Gallery /> } />
          <Route path='/contactus' element={<ContactUs /> } />
          <Route path='/serviceprovider' element={<ServiceProvider /> } />

          <Route path='/becomeourpartner' element={<BecomeOurPartner /> } />
          <Route path='/privacypolicy' element={<PrivacyPolicy /> } />
          <Route path='/returnandrefundpolicy' element={<ReturnandRefundPolicy /> } />
          <Route path='/termsandcondition' element={<Termsandcondition /> } />
          <Route path='/moduledescription' element={<ModuleSecriptions    /> } />


        </Routes>
       
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
