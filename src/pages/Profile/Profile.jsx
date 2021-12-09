import React, { useState, useEffect } from 'react';
import * as profileService from '../../services/profileService'
import Users from '../Users/Users';
import { useLocation, useParams } from 'react-router';

import { getFollowers, deleteFollowers, getProfile } from '../../services/profileService';


const Profile = (props) => {
  const location = useLocation()
  const params = useParams()

  const [profile, setProfile] = useState({})
  
  
    useEffect(() => {
      console.log("profile", params)
      getProfile(params.id)
      .then(profile => setProfile(profile))
    },[params])
    
  return (
    <div>
      <h1>Name: {profile.name}</h1>
      <h1>Email: {profile.email}</h1>
      
      {(props.user.name !== profile.name) &&  <button onClick={()=> getFollowers(profile._id)} > Follow </button>}
    
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