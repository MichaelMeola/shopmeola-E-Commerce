import React from 'react'

const UsersTable = ({ initialUserData }) => {
    return (
    <tr key={initialUserData.userId}>
        <th>{initialUserData.userId}</th>
        <td>{initialUserData.email}</td>
        <td>{initialUserData.phone}</td>
    </tr>    
    )
  }
  
  export default UsersTable