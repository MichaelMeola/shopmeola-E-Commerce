import React from 'react'

const UsersTable = ({ initialUserData }) => {
    return (
      <body>
          <div className="container">
              <h1>Users Table</h1>
          <table class="table">
              <thead>
                  <tr>
                      <th>Id</th>
                      <th>email</th>
                      <th>phone</th>
                  </tr>
              </thead>
              
              <tbody>
                  <tr>
                      <th>{initialUserData.userId}</th>
                      <td>{initialUserData.email}</td>
                      <td>{initialUserData.phone}</td>
                  </tr>
              </tbody>
          </table>
          </div>
      </body>
    )
  }
  
  export default UsersTable