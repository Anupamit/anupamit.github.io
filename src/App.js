import './App.css'
import Aboutus from './Components/Aboutus';
import Contact from './Components/Contact';
import Portfolio from './Components/Portfolio';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Home';

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/aboutus" element={<Aboutus/>} />
        <Route path="/portfolio" element={<Portfolio/>} />
        <Route path="/contact" element={<Contact/>} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
