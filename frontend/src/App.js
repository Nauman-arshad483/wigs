import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from './component/Home/Home';
import React from 'react';
import  Header  from './component/layout/Header/Header';
import Footer from './component/layout/Footer/Footer';
import ContactUs from './component/Pages/ContactUs';
import TrackOrder from './component/Pages/TrackOrder';
function App() {
  return (
<Router>
  <Header/>
  <Routes>
  <Route  path="/Home"  element={<Home/>}/>
  <Route  path="/"  element={<Home/>}/>
  <Route  path="/ContactUs"  element={<ContactUs/>}/>
  <Route  path="/TrackOrder"  element={<TrackOrder/>}/>
  </Routes>
  
  <Footer/>

</Router>
  );
}

export default App;
