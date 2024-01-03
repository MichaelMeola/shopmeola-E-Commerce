import React from 'react'
import HomeNavbar from '../navbars/HomeNavbar'

const SignUp = () => {
  return (
    <div>
      <HomeNavbar />
    
      <div class="field">
        <label class="label has-text-white">Email</label>
          <div>
            <input class="input" type="email" placeholder="email@email.com"/>
          </div>
      </div>

      <div class="field">
        <label class="label has-text-white">Phone</label>
          <div>
            <input class="input " type="phone" placeholder="123-456-789"/>
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
          <button class="button is-link">Submit</button>
        </div>
        <div class="control">
          <button class="button is-link is-light">Cancel</button>
        </div>
      </div>
    </div>
  )
}

export default SignUp