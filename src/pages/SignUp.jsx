import React from 'react'
import HomeNavbar from '../navbars/HomeNavbar'
import { useState, useEffect } from 'react'

const SignUp = () => {
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  useEffect(() => {
    axios.post('/user')
    .then((res) => {
      setEmail(res.data)
    })
    .catch((err) => {
      console.log(err);
    })

    axios.post('/user')
    .then((res) => {
      setPhone(res.data)
    })
    .catch((err) => {
      console.log(err);
    })
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log(email);
    console.log(phone);
  }

  return (
  <>
      <HomeNavbar />

      <form onSubmit={handleSubmit}>
      <div class="field">
        <label class="label has-text-white">Email</label>
          <div>
            <input class="input" formAction="/user" formMethod="post" value={email} onChange={(e) => setEmail(e.target.value)} type='email' placeholder="youremail@gmail.com"/>
          </div>
      </div>

      <div class="field">
        <label class="label has-text-white">Phone</label>
          <div>
            <input class="input" formAction="/user" formMethod="post" value={phone} onChange={(e) => setPhone(e.target.value)} type='phone' placeholder="123-456-7890"/>
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

      <div class="field is-grouped">
        <div class="control">
          <button class="button is-link" type='submit'>Submit</button>
        </div>
        <div class="control">
          <button class="button is-link is-light">Cancel</button>
        </div>
      </div>
      </form>
  </>
  )
}

export default SignUp