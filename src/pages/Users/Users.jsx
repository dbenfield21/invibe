import React, { useState, useEffect } from 'react';
import * as profileService from '../../services/profileService'
import { Link } from 'react-router-dom';

const Users = (props) => {
  const [profiles, setProfiles] = useState([])

  useEffect(()=> {
    profileService.getAllProfiles()
    .then(profiles => setProfiles(profiles))
  }, [])
  

  return (
    <>
      <h1>Hello.  This is a list of all the users.</h1>
      {profiles ? 
      <>
        {profiles.map(profile=>
          <Link to={`/profile/${profile._id}`} state={profile._id}>
            <p key={profile._id}>{profile.name}</p></Link>
        )}
      </>
      :
        <p>An error occurred</p>
      }
      
    </>
  );
}
 
export default Users;