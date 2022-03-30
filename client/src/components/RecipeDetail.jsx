import React from "react";
import { useState, useEffect } from 'react'
import axios from "axios";


const RecipeDetail = () => {

    const [recipe, setRecipe ] = useState([])
    

    useEffect(() => {

        const getRecipe = async () => {

            

            let recipe = await axios.get("http://localhost:3001/recipe/")
            setRecipe(recipe.data)
            
            

        }
        getRecipe()
        

    }, [])
   

return (
    <div className="main-content outer-container">

        <h2>Recipe Detail</h2>
        
            {recipe.map((recipe) => (
                <div className=" middle-container">
                    <img className="recipe-img" src={recipe.img} alt="picture of recipe" />
                
                    <div className="inner-container">
                        <h2 className="recipe-name">{recipe.name}</h2> 
                        <p className="recipe-info">{recipe.description}</p>
                        <p className="recipe-info">Ingredients: {recipe.ingredients}</p>
                        <p className="recipe-info">Steps: {recipe.steps}</p>
                        <p></p>
                    </div>
                </div>

            ))}


        
    
            



         

    </div>
  

)



}

export default RecipeDetail