import React from "react";
import { useState, useEffect } from 'react'
import axios from "axios";
import { useParams } from "react-router-dom";


const RecipeDetail = (props) => {

    const [recipe, setRecipe ] = useState([])
    const [chef, setChef] = useState("")
    const { id } = useParams()
    

    useEffect(() => {

        const getRecipe = async () => {

            

            let recipe = await axios.get(`http://localhost:3001/recipe-detail/${id}`)
            console.log(recipe.data)
            let chefId = recipe.data.chef[0]
            setRecipe(recipe.data)
            console.log(chefId)
            let specChef = await axios.get(`http://localhost:3001/chef/${chefId}`)
            console.log(specChef)
            setChef(specChef.name)
            
            

        }
        getRecipe()
        

    }, [])
   

return (
    <div className="main-content outer-container">

        <h2>Recipe Detail</h2>
        
            
                <div className=" middle-container">
                    <img className="recipe-img" src={recipe.img} alt="picture of recipe" />
                
                    <div className="inner-container">
                        <h2 className="recipe-name">{recipe.name}</h2> 
                        <p className="recipe-info">{recipe.description}</p>
                        <p className="recipe-info">Ingredients: {recipe.ingredients}</p>
                        <p className="recipe-info">Steps: {recipe.steps}</p>
                        <p className="recipe-info">Chef: {chef}</p>
                        <button>Edit</button><br />
                        <button>Delete</button>
                    </div>
                </div>

            


        
    
            



         

    </div>
  

)



}

export default RecipeDetail