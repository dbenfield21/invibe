import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getAllCocktails } from "../../services/locationService"

function CocktailForm(props) {
    
    const [formData, setFormData] = useState({
        name: '',
        image: '',
        content: '',
        author: '',
        barID: props.barID
    })
    console.log("TESTING PROPS REVIEWS",props)
    

    
    

    const handleChange = e => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        })
      }

    const handleSubmit = e => {
        e.preventDefault()
        try {
            props.handleCreateCocktail(formData)
            setFormData({content:'', name:'',author:'',barID: props.ID,image:''})
            
        } catch (err) {
            console.log(err)
        }
    }

    

    const { name, image, content, author } = formData

    const isFormInvalid = () => {
        return !(name && content)
      }

    console.log("=====>",props)

    return (
        <>
        <form
        autoComplete="off"
        onSubmit={handleSubmit}
      > 
        <p>Cocktail Name</p>
        <input
          type="text"
          value={name}
          name="name"
          onChange={handleChange}
        />
        <br />
        <p>Tell Us More</p>
        <textarea
          value={content}
          name="content"
          onChange={handleChange}
        /> 
        
        <br />
        <button disabled={isFormInvalid()}>Post</button>
     
      </form>
      



</>

    )


}

export default CocktailForm