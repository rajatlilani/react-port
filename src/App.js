
import './App.css';
import React from 'react'
import Home from './component/home/home';


import Navbar from './component/nav/Navbar';
import Trying from './component/trying/Trying';
import About from './component/about/About';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";




function App() {
  return (

    <BrowserRouter>
      <div className="bg-circle1"></div>
      <div className="bg-circle2"></div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/try' element={<Trying />} />
        <Route path='/test' element={<About />} />
      </Routes>
    </BrowserRouter>







  );
}

export default App;
