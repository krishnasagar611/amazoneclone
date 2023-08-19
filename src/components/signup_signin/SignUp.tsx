import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './signinsignup.css'
import axios from 'axios'

const initialstate = {
  name: '',
  email: '',
  mobile: '',
  password: '',
  cpassword: '',
}

const SignUp = () => {
  const [signupdata, setSignupdata] = useState(initialstate)

  const handleSubmit = () => {
    try {
      const response = axios.post('http://localhost:4800/signup', signupdata)
      console.log(response)
    } catch (error) {
      console.log('error', error)
    }
  }

  const handleinput = (e: any) => {
    setSignupdata({ ...signupdata, [e.target.name]: e.target.value })
  }

  return (
    <>
      <section>
        <div className="sign_container">
          <div className="sign_header">
            <img src="./blacklogoamazon.png" alt="amazonlogo" />
          </div>
          <div className="sign_form">
            <form onSubmit={handleSubmit}>
              <h1>Sign Up</h1>
              <div className="form_data">
                <label htmlFor="name">Your name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  onChange={(e) => handleinput(e)}
                />
              </div>
              <div className="form_data">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  onChange={(e) => handleinput(e)}
                />
              </div>
              <div className="form_data">
                <label htmlFor="number">Mobile</label>
                <input
                  type="text"
                  name="mobile"
                  id="mobile"
                  onChange={(e) => handleinput(e)}
                />
              </div>
              <div className="form_data">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  placeholder="At least 6 characters"
                  name="password"
                  id="password"
                  onChange={(e) => handleinput(e)}
                />
              </div>
              <div className="form_data">
                <label htmlFor="password">Confirm Password</label>
                <input
                  type="password"
                  name="cpassword"
                  id="cpassword"
                  onChange={(e) => handleinput(e)}
                />
              </div>
              <button className="signin_btn">Continue</button>
              <div className="signin_info">
                <p>Already have an account ? </p>
                <NavLink to="/signin">Signin</NavLink>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default SignUp
