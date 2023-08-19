import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './signinsignup.css'
// import { useForm } from 'react-hook-form'


const SignIn = () => {

  const [inputdata,setInputdata] = useState({
    email:"",
    password:""
  })
  console.log(inputdata);
  return (
    <>
      <section>
        <div className="sign_container">
          <div className="sign_header">
            <img src="./blacklogoamazon.png" alt="amazonlogo" />
          </div>
          <div className="sign_form">
            <form>
              <h1>Sign In</h1>

              <div className="form_data">
                <label htmlFor="email">Email</label>
                <input type="text" name="email" id="email"
                onChange={(e)=>setInputdata({...inputdata,email:e.target.value})}
                value={inputdata.email}
                
              />
              </div>

              <div className="form_data">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="At least 6 characters"
                  onChange={(e)=>setInputdata({...inputdata,password:e.target.value})}

                />
              </div>

              <button className="signin_btn">Continue</button>
            </form>
          </div>

          <div className="create_accountinfo">
            <p>New to Amazon ?</p>
            <NavLink to="/signup">
              <button className='last_btn'> Create your Amazon account </button>
            </NavLink>
          </div>
        </div>
      </section>
    </>
  )
}

export default SignIn
