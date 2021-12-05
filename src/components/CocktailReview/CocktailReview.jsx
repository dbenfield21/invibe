import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function CocktailReview(props) {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        name: '',
        image: '',
        content: '',
        author: '',
        barID: props.barID
    })

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

    useEffect(()=> {
		
	}, [])

    const { name, image, content, author } = formData

    const isFormInvalid = () => {
        return !(name && content)
      }

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
    {props.reviews.forEach(review => 
    
    <div>
      <p>{review.author}</p>
      <p>{review.imageURL}</p>
      <p>{review.content}</p>
    </div>
    
      )
}   
</div>
</>

    )


}

export default CocktailReview