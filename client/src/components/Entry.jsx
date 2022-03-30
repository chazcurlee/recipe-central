import React from "react";
import { useState, useEffect } from 'react'
import axios from "axios";


const Entry = () => {
    const [newRecipe, setNewRecipe] = useState({})
    

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
                setNewRecipe({
                    ...newRecipe,
                    chef: update,
                })
                break;
                    

            default:
                console.log("default")
                break;
        }

        console.log(newRecipe)

    }




    const submitRecipe = async () => {

        
        console.log(newRecipe)
        await axios.post(`http://localhost:3001/recipe`, {newRecipe})



    }



return (
    <div className="main-content">
        <h2>Add A New Recipe Here</h2>
        <form id="recipe-form" onSubmit={submitRecipe}>
            <input type="text" placeholder="Recipe Name" id="name" onChange={handleChange}/><br/>
            <input type="text" placeholder="Description" id="description" onChange={handleChange}/><br/>
            <input type="text" placeholder="Ingredients" id="ingredients" onChange={handleChange}/><br/>
            <input type="text" placeholder="Instructions"id="instructions" onChange={handleChange}/> <br/>
            
            <input type="text" placeholder="Image URL" id="url" onChange={handleChange}/><br/>
            <select id="dropdown-chef" onChange={handleChange}>
                <option>---Choose Whose Recipe This Is---</option>
                <option>Gordon Ramsey</option>
                <option>Anthony Bourdain</option>
                <option>Julia Child</option>
                <option>Bobby Flay</option>
            </select><br/>
            
            <input type="submit"/>



        </form>
    </div>
    

)



}

export default Entry