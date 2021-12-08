import React, { useState, useEffect } from 'react';
import * as userService from '../../services/userService'
import Users from '../Users/Users';
import { useLocation } from 'react-router';

import { getFollowers, deleteFollowers, getProfile } from '../../services/profileService';


const Profile = (props) => {
  const location = useLocation()
  const user = location.state 

  const [profile, setProfile] = useState({})
  
  
    useEffect(() => {
      console.log("USER", user.profile)
      getProfile(user.profile._id)
      .then(profile => setProfile(profile))
    },[])
    
  return (
    <div>
      <h1>Name: {profile.name}</h1>
      <h1>Email: {profile.email}</h1>
      
      {(props.user.name !== user.name) &&  <button onClick={()=> getFollowers(user._id)} > Follow </button>}
    
      <h2>Following:</h2>
      {profile.followers && profile.followers.map((follower) =>
        <div key={follower._id}>
          <p>{follower.name}</p>
        </div>
        )}
    </div>
    
  ); 
}

export default Profile;