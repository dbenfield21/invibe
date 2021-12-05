import React, { useState, useEffect } from 'react';
import * as userService from '../../services/userService'
import Users from '../Users/Users';




const Profile = (props) => {

  // const userId = props.match.params.userId
  
  return (
    <>
      <h1>Name: {props.user.name}</h1>
      <h1>Email: {props.user.email}</h1>
      <h2>{props.user.defaultImage}</h2>


    </>
  );
}

export default Profile;