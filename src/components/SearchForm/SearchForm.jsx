import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const SearchForm = (props) => {
  const [formData, setFormData] = useState({
    location: ""
  })
  
  const navigate = useNavigate()

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }
  const handleSubmit = async e => {
    e.preventDefault()
    try {
      props.handleSearch(formData)
      
    } catch (err) {
      console.log(err)
    }
  }

  const { location } = formData

  const isFormInvalid = () => {
    return !(location)
  }

  return(
    <form 
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <h1>Where to?</h1>
      <input
      placeholder="city / state"
        type="text"
        value={location}
        name="location"
        onChange={handleChange}
      />
      <div>
      <button disabled={isFormInvalid()}>Search</button>
      </div>
    </form>
  )
}

export default SearchForm

// pass function for handling searching 