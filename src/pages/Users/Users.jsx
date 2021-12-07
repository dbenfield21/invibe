import React, { useState, useEffect } from 'react';
import * as userService from '../../services/userService'
import { Link } from 'react-router-dom';
import { getUser } from '../../services/authService';
import * as profileService from "../../services/profileService"

const Users = (props) => {
  const [users, setUsers] = useState([])

  useEffect(()=> {
    userService.getAllUsers()
    .then(users => setUsers(users))
  }, [])

    return (
    <>
      <h1>Hello.  This is a list of all the users.</h1>
      {users.length ? 
      <>
        {users.map(user=>
          <Link to="/profile" state={user}><p><p key={user._id}>{user.name}</p></p></Link>
        )}
      </>
      :
        <p>Whoops we had an error</p>
      }
      
    </>
  );
}




export default Users;