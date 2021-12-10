import React, { useState, useEffect } from 'react';
import * as profileService from '../../services/profileService'
import Users from '../Users/Users';
import { useLocation, useParams } from 'react-router';

import { getFollowers, deleteFollowers, getProfile } from '../../services/profileService';

import styles from './Profile.module.css'


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
    
    <div className={styles.profiles}>
      <div className={styles.profileBackground}>
      <div className={styles.profileCard}>
        <h1 className={styles.userInfo}>Name: {profile.name}</h1>
        <h1 className={styles.userInfo}>Email: {profile.email}</h1>
        
        {(props.user.name !== profile.name) &&  <button className={styles.followButton} onClick={()=> getFollowers(profile._id)} > Follow </button>}
      </div>
      </div>

      <div className={styles.followersBackground}>
      <div className={styles.followersCard}>
        <h2 className={styles.followerInfo}>Following:</h2>
        <div className={styles.followerContainer}>
          {profile.followers && profile.followers.map((follower) =>
            <div key={follower._id}>
              <p className={styles.followingInfo}>{follower.name}</p>
            </div>
          )}
          </div>
      </div>
    </div>
    </div>
    
  ); 
}

export default Profile;