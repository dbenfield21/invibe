import React, { useState } from 'react';
import { getLocation } from '../../services/locationService';


const LocationResults = (props) => {

  const [formData, setFormData] = useState({
    location: ''
  })

  // const [locationData, setLocationData]= useState({
  // })
  // const handleChange = e => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value
  //   })
  // }
  // const handleSubmit = async e => {
  //   e.preventDefault()
  //   try {
  //     getLocation(formData.location)
  //     .then(locationData => {
  //       setLocationData(locationData)
  // console.log(locationData)
  //     })
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }
  // const { location } = formData





  
// how to take the results from the API and show them. 


  return (
    <>
    all the places
    {/* API RESULTS HERE */}
    </>
  );
}

export default LocationResults;