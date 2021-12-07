import React, { useState, useEffect } from 'react';
import * as userService from '../../services/userService'
import Users from '../Users/Users';
import { useLocation } from 'react-router';




const Profile = (props) => {
  const location = useLocation()
  const user = location.state 

  //the addFollowers controller in our back end will return a profile object containing the
  // user added in the 'followers' field of the model

  // there must be a way to set props.user equal to this returned profile

  // 

  //Let's say...... props.user === returnedProfile works. 

  console.log(props.user)

  return (
    <>
      <h1>Name: {user.name}</h1>
      <h1>Email: {user.email}</h1>
      <h2>{user.defaultImage}</h2>
    </>
  );
}




export default Profile;