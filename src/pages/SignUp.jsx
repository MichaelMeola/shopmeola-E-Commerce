import React from 'react'
import HomeNavbar from '../navbars/HomeNavbar'
import { useState, useEffect } from 'react'
import axios from 'axios'

const SignUp = () => {
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  const handleSubmit = async (e) => {
    
    if (email === '' && phone === '') {
      e.preventDefault()
      return alert('STOPPPP')
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
            <input class="input" onChange={(e) => setEmail(e.target.value)} type='email' placeholder="youremail@gmail.com"/>
          </div>
      </div>

      <div class="field">
        <label class="label has-text-white">Phone</label>
          <div>
            <input class="input" onChange={(e) => setPhone(e.target.value)} type='text' placeholder="123-456-7890"/>
          </div>
      </div>

      <div class="field">
        <div class="control">
          <label class="checkbox has-text-white">
          <input type="checkbox"/>
            I agree to the <a href="#">terms and conditions</a>
          </label>
        </div>
      </div>

      <div class="field is-centered">
        <div class="control">
          <button class="button is-success" type='submit'>Submit</button>
        </div>
      </div>
      </form>
  </>
  )
}

export default SignUp