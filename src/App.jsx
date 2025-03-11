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

        </Routes>
       
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
