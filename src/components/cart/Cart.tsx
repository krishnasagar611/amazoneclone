import { Divider } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'
import './cart.css'
const Cart = () => {
  return (
    <div className="cart_section">
      <div className="cart_container">
        <div className="left_cart">
          <img
            src="https://rukminim1.flixcart.com/image/416/416/kl6wx3k0/sandwich-maker/8/r/d/sandwich-01-flipkart-smartbuy-original-imagydds4zthxt8z.jpeg?q=70"
            alt=""
          />

          <div className="cart_btn">
      
       <NavLink to='/buynow'> <button className="cart_btn1">Buy Now</button></NavLink>    
           
           <NavLink to='/addtocart'>  <button className="cart_btn2">Add to cart</button></NavLink>
         
          </div>
        </div>
        <div className="right_cart">
        <h3>Sandwich Makers</h3>
        <h4>Flipkart SmartBuy Sandwich 01 Grill  (Black)</h4>
        <Divider/>
        <p className='mrp'>M.R.P: ₹1234</p>
        <p>Deal of the day : <span style={{color:"#b12705"}} >₹890</span> </p>
        <p>You save : <span style={{color:"#b12705"}} >₹560 (43%)</span> </p>
         <div className="discount_box">
          <h5>Discount   <span style={{color: "#111"}}>Extra 10% off</span> </h5>
          <h4>Free Delivery : <span style={{color:"#111", fontWeight:600 }}>Nov-6-22</span>  Details</h4>
          <p>Fastet delivery <span style={{color:"#111", fontWeight:600}}>Tomorrow 11AM </span></p>

         </div>
         <p className='description'> About the item: <span style={{ color:"#565659" ,fontSize:14,fontWeight:500, letterSpacing:"o.4px" }}>This non-stick sandwich toaster .easy to use and very handy. Directly hold over flame to make tasty toasts and toasted sandwiches. Specially designed by keeping your needs in mind, the sandwich maker makes whatever youre doing simpler, smarter and better</span></p>



        </div>
      </div>
    </div>
  )
}

export default Cart
