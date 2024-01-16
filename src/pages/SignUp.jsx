import React from 'react'
import HomeNavbar from '../navbars/HomeNavbar'
import Footer from '../Footer/Footer.jsx'
import { useState, useEffect } from 'react'
import axios from 'axios'

const SignUp = () => {
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [error, setError] = useState(false)

  const handleSubmit = async (e) => {
    
    if (email === '' && phone === '') {
      e.preventDefault()
      setError(true)
      return
    } else {
      setError
    }

    await axios.post('/user', { email, phone })
  }

  return (
  <>
      <HomeNavbar />

      <form onSubmit={handleSubmit}>
      <div className="field">
        <label className="label has-text-white">Email</label>
          <div>
            <input className="input" onChange={(e) => setEmail(e.target.value)} onFocus={() => setError(false)} type='email' placeholder="youremail@gmail.com"/>
          </div>
      </div>

      <div className="field">
        <label className="label has-text-white">Phone</label>
          <div>
            <input className="input" onChange={(e) => setPhone(e.target.value)} onFocus={() => setError(false)} type='text' placeholder="123-456-7890"/>
          </div>
      </div>

      <div className="field">
        <div className="control">
          <label className="checkbox has-text-white">
          <input type="checkbox" required/>
            Subscibe to updates from MEOLA
          </label>
        </div>
      </div>

      <div className="field is-centered">
        <div className="control">
          <button className="button is-success" type='submit'>Submit</button>
        </div>
      </div>

      <div className="field is-centered">
        <div className="control">
          <h2>{error ? "Both fields cannot be empty" : ""}</h2>
        </div>
      </div>
      </form>
      <Footer />
  </>
  )
}

export default SignUp