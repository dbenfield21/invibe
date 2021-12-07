import React, { useState, useEffect } from 'react';
import * as userService from '../../services/userService'
import Users from '../Users/Users';
import { useLocation } from 'react-router';
import * as profileService from "../../services/profileService"
import { getFollower } from '../../services/profileService';


const Profile = (props) => {
  const location = useLocation()
  const user = location.state 
  const [profile, setProfile] = useState({})
  const [followers, setFollowers] = useState([])


  
  
  useEffect(()=> {
    getFollower()
    .then(followers => setFollowers(followers))      
    }, [])
    
    // const getFollower = async e => {
    //   e.preventDefault()
    //   try{
    //     profileService.getFollower(user._id)
    //     .then(followers=> {
    //       setFollowers(followers)
    //     })
        
    //   }
    //   catch(err) {
    //     console.log(err)
    //   }}
      
            
      console.log("FOLLOWERS", followers)
  return (
    <>
      <h1>Name: {user.name}</h1>
      <h1>Email: {user.waffle}</h1>
      <h2>Followers: {} </h2>

    {(props.user.name !== user.name) &&  <button onClick={()=> profileService.getFollower(user._id)} > Follow </button>}

  

    {/* {user.followers.map(follower =>
    <div key={follower._id}>

      <h1>{follower.name}</h1>
      

    </div>
      
    )} */}
</>
    
  );
}




export default Profile;