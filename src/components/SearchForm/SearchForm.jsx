import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from "./SearchForm.module.css"

const SearchForm = (props) => {
  const [formData, setFormData] = useState({
    location: ""
  })

  // const [defaultFormValue, setDefaultFormValue] = useState({
  //   formDefaultValue: "city / state"
  // })
  
  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }
  const handleSubmit = async e => {
    e.preventDefault()
    // setDefaultFormValue({
    //   formDefaultValue: "city / state"
    // })
    try {
      props.handleSearch(formData)
      
    } catch (err) {
      console.log(err)
    } 
  }

  // const { formDefaultValue } = defaultFormValue
  const { location } = formData

  const isFormInvalid = () => {
    return !(location)
  }

  return(
    <form className={styles.searchForm}
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <h1>Where to?</h1>
      <img className={styles.mainImage}src="https://lh5.googleusercontent.com/proxy/FeyJLfzu7WGGIF32xQhaC3fPC2FpqSW8K9eTjc5JwxMXCTloOsHdKLFDih7PEWgn3pvXxKLzCsojup6Yy2hgNK2s-v0bVBQH7EyS=w1200-h630-p-k-no-nu" alt="question mark" />
      <div className={styles.searchItems}>
      <input
        placeholder= "City / State"
        type="text"
        value={location}
        name="location"
        onChange={handleChange}
      />
      <div>
      <button disabled={isFormInvalid()}>Search</button>
      </div>
      </div>
    </form>
  )
}

export default SearchForm

// pass function for handling searching 