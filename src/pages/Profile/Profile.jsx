import React, { useState, useEffect } from 'react';
import * as userService from '../../services/userService'
import Users from '../Users/Users';
import { useLocation } from 'react-router';




const Profile = () => {
  const location = useLocation()
  const user = location.state 
  return (
    <>
      <h1>Name: {user.name}</h1>
      <h1>Email: {user.email}</h1>
      <h2>{user.defaultImage}</h2>
    </>
  );
}




export default Profile;