import React from 'react'
import './App.css'
import Footer from './components/footer/Footer'
import Navbaar from './components/Header/Navbaar'
import Maincomp from './components/home/Maincomp'
import Newnavbaar from './newnavbaar/Newnavbaar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignIn from './components/signup_signin/SignIn'
import SignUp from './components/signup_signin/SignUp'
import Cart from './components/cart/Cart'
import Buynow from './components/cart/Buynow'
import Addcart from './components/cart/Addcart'
const App:React.FC =()=> {
  return (
    <React.Fragment>
      
      <BrowserRouter>
          <Navbaar />
          <Newnavbaar />
      
        <Routes>
          
          <Route  path="/" element={<Maincomp />} />
          <Route  path="/signin" element={<SignIn />}/>
          <Route  path="/signup" element={<SignUp />}/>
          <Route  path="/getproducts/:id" element={<Cart />}/>
          <Route  path="/buynow" element={<Buynow />}/>
          <Route  path="/addtocart" element={<Addcart />}/>



        </Routes>
        
      </BrowserRouter>
      <Footer />
      
    </React.Fragment>
  )
}

export default App

