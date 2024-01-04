import React from 'react'
import HomeNavbar from '../navbars/HomeNavbar'
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
      <div class="field">
        <label class="label has-text-white">Email</label>
          <div>
            <input class="input" onChange={(e) => setEmail(e.target.value)} onFocus={() => setError(false)} type='email' placeholder="youremail@gmail.com"/>
          </div>
      </div>

      <div class="field">
        <label class="label has-text-white">Phone</label>
          <div>
            <input class="input" onChange={(e) => setPhone(e.target.value)} onFocus={() => setError(false)} type='text' placeholder="123-456-7890"/>
          </div>
      </div>

      <div class="field">
        <div class="control">
          <label class="checkbox has-text-white">
          <input type="checkbox" required/>
            Subscibe to updates from MEOLA
          </label>
        </div>
      </div>

      <div class="field is-centered">
        <div class="control">
          <button class="button is-success" type='submit'>Submit</button>
        </div>
      </div>

      <div class="field is-centered">
        <div class="control">
          <h2>{error ? "Both fields cannot be empty" : ""}</h2>
        </div>
      </div>
      </form>
  </>
  )
}

export default SignUp