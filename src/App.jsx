import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './Componants/Header/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Componants/Home/Home';
import Footer from './Componants/Footer/Footer';

function App() {

  return (
    <>
      <BrowserRouter>
   
        
        <Routes>
        
          <Route path='/' element={<Home /> } />
          

         
        </Routes>
       
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
