import React from 'react'

const UsersTable = ({ initialUserData, deleteUser }) => {
    return (
    <tr key={initialUserData.userId}>
        <td>
            <button onClick={deleteUser} className='button is-danger'>Delete</button>
        </td>
        <th>{initialUserData.userId}</th>
        <td>{initialUserData.email}</td>
        <td>{initialUserData.phone}</td>
    </tr>    
    )
  }
  
  export default UsersTable