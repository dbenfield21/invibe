import React, { useState, useEffect } from 'react';
import * as profileService from '../../services/profileService'
import { Link } from 'react-router-dom';
import styles from './Users.module.css'

const Users = (props) => {
  const [profiles, setProfiles] = useState([])

  useEffect(()=> {
    profileService.getAllProfiles()
    .then(profiles => setProfiles(profiles))
  }, [])
  

  return (
    <>
      <div className={styles.users}>
        <div className={styles.usersBackground}>
          <div className={styles.usersCard}>
            <h1 className={styles.head}>InVibe Users
            <span role="img" aria-label="clinking cocktail glasses">🥂</span></h1>

          {profiles ? 
            <div className={styles.wrap}>
              {profiles.map(profile=>
                <Link to={`/profile/${profile._id}`} state={profile._id}>
                <p className={styles.usersName} key={profile._id}>{profile.name}</p></Link>
              )}
            </div>
          :
            <p>An error occurred</p>
          }
        </div>
        </div>  
      </div>
    </>
  );
}
 
export default Users;