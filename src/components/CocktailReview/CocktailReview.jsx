import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getAllCocktails } from "../../services/locationService"

function CocktailReview(props) {
    
    const [formData, setFormData] = useState({
        name: '',
        image: '',
        content: '',
        author: '',
        barID: props.barID
    })

    const [cocktails, setCocktails] = useState([])

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
            
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getAllCocktails(props.barID)
          .then(allCocktails => setCocktails(allCocktails))
      },[])

    const { name, image, content, author } = formData

    const isFormInvalid = () => {
        return !(name && content)
      }

    console.log("=====>",cocktails)

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
      

<div>
    {cocktails.map(cocktail=> 
    
    <div>
      <p>{cocktail.name}</p>
      <p>{cocktail.imageURL}</p>
      <p>{cocktail.content}</p>
    </div>
    
      )
}   
</div>

</>

    )


}

export default CocktailReview