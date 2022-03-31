import React from "react";
import { useState, useEffect } from 'react'
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";


const RecipeEdit = () => {

    const [recipe, setRecipe ] = useState([])
    const [chef, setChef] = useState("")
    const { id } = useParams()
    const navigate = useNavigate()
    

    useEffect(() => {

        const getRecipe = async () => {

            

            let recipe = await axios.get(`http://localhost:3001/recipe-detail/${id}`)
            console.log(recipe.data)
            setRecipe(recipe.data)

            let chefId = recipe.data.chef[0]
            console.log(chefId)
            let specChef = await axios.get(`http://localhost:3001/chef/${chefId}`)
            console.log(specChef)
            setChef(specChef.name)
            
            

        }
        getRecipe()
        

    }, [])
   
    

    const editEntry = async () => {

        



    }

return (
    <div className="main-content outer-container">

        <h2>Recipe Detail</h2>
        
            
                <div className=" middle-container">
                    <img className="recipe-img" src={recipe.img} alt="picture of recipe" />
                
                    <div className="inner-container">
                        <input type="text" className="recipe-name" value={recipe.name}></input> 
                        <p className="recipe-info">{recipe.description}</p>
                        <p className="recipe-info">Ingredients: {recipe.ingredients}</p>
                        <p className="recipe-info">Steps: {recipe.steps}</p>
                        <p className="recipe-info">Chef: {chef}</p>
                        <button onCLick={editEntry}>Save</button><br />
                        
                    </div>
                </div>

            


        
    
            



         

    </div>
  

)



}

export default RecipeEdit