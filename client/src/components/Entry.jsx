import React from "react";
import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import axios from "axios";


const Entry = () => {
    const [newRecipe, setNewRecipe] = useState({})
    const navigate = useNavigate()
    

    const handleChange = (e) => {

        let update = e.target.value

        switch (e.target.id) {

            case "name":
                setNewRecipe({
                    ...newRecipe,
                    name: update,
                })
                break;

            case "description":
                setNewRecipe({
                    ...newRecipe,
                    description: update,
                })
                break;
                
            case "instructions":
                setNewRecipe({
                    ...newRecipe,
                    steps: update,
                })
                break;
                    
            case "ingredients":
                setNewRecipe({
                    ...newRecipe,
                    ingredients: update,
                })
                break;
                 
                
            case "url":
                setNewRecipe({
                    ...newRecipe,
                    img: update,
                })
                break;
                    
            case "dropdown-chef":
                switch (update) {
                    case "Gordon Ramsey":
                        setNewRecipe({
                            ...newRecipe,
                            chef: "6244578a1f15f32c6e1f29e0",
                        })
                        break;

                    case "Julia Child":
                        setNewRecipe({
                            ...newRecipe,
                            chef: "6244578a1f15f32c6e1f29e3",
                        })
                        break;
                    
                    case "Bobby Flay":
                        setNewRecipe({
                            ...newRecipe,
                            chef: "6244578a1f15f32c6e1f29e2",
                        })
                        break;

                    case "Anthony Bourdain":
                        setNewRecipe({
                            ...newRecipe,
                            chef: "6244578a1f15f32c6e1f29e1",
                        })
                        break;

                }
                    
                
                break;
                    

            default:
                console.log("default")
                break;
        }

        console.log(newRecipe)

    }




    const submitRecipe = async () => {

        
        console.log(newRecipe)
        let post = await axios.post(`http://localhost:3001/recipe`, {
            name: newRecipe.name,
            description: newRecipe.description,
            img: newRecipe.img,
            chef: newRecipe.chef,
            steps: newRecipe.steps,
            ingredients: newRecipe.ingredients





        })
        console.log(post)
        navigate('/recipe', {replace:true})

    }



return (
    <div className="main-content">
        <h2 className="main-title">Add A New Recipe Here</h2>
        <form id="recipe-form" onSubmit={submitRecipe}>

            <p className="entry-indicator">Recipe Name: <input type="text" className="recipe-other" placeholder="Recipe Name" id="name" onChange={handleChange}/></p><br />
            
            <p className="entry-indicator">Description: <textarea rows="4" className="recipe-instruc" placeholder="Description" id="description" onChange={handleChange}/></p>
            <br/>
            <p className="entry-indicator">Ingredients: <textarea rows="4" className="recipe-instruc" placeholder="Ingredients" id="ingredients" onChange={handleChange}/></p>
            <br/>
            <p className="entry-indicator">Instructions: <textarea rows="4" className="recipe-instruc" placeholder="Instructions"id="instructions" onChange={handleChange}/></p>
             <br/>
            <p className="entry-indicator">Image URL: <input type="text" className="recipe-other" placeholder="Image URL" id="url" onChange={handleChange}/></p>
            <br/>
            <p className="entry-indicator">Chef Name: <select id="dropdown-chef" onChange={handleChange}>
                <option>---Choose Whose Recipe This Is---</option>
                <option>Gordon Ramsey</option>
                <option>Anthony Bourdain</option>
                <option>Julia Child</option>
                <option>Bobby Flay</option>
            </select></p>
            
            
            <input type="submit"/>



        </form>
    </div>
    

)



}

export default Entry