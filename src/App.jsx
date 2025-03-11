import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Componants/Home/Home';
import Footer from './Componants/Footer/Footer';
import About from './Componants/About/About';
import Header from './Componants/Header/Header';
import Gallery from './Componants/Gallery/Gallery';

function App() {

  return (
    <>
      <BrowserRouter>

        <Header/>
        <Routes>
        
          <Route path='/' element={<Home /> } />
          <Route path='/about' element={<About /> } />
          <Route path='/gallery' element={<Gallery /> } />

         
        </Routes>
       
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
