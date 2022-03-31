import React from "react";
import { useState, useEffect } from 'react'
import { useFocusEffect} from '@react-navigation/native'
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";


const Recipes = () => {

    const [recipes, setRecipes ] = useState([])
    let navigate = useNavigate()

    const showDetails = (recipe) => {
        console.log(recipe)

        navigate(`${recipe}`)

    }
    

    useFocusEffect(
        React.useCallback(()=> {

        const getRecipes = async () => {

            let breakfastRecipes = await axios.get("http://localhost:3001/recipe")
            setRecipes(breakfastRecipes.data)
            
            

        }
        getRecipes()
        

    }, []))
   

return (
    <div className="main-content outer-container">

        <h2>Recipes</h2>
        
            {recipes.map((recipe) => (
                <div className=" middle-container" onClick={() => showDetails(recipe._id)}>
                    <img className="recipe-img" src={recipe.img} alt="picture of recipe" />
                
                    <div className="inner-container">
                        <h2 className="recipe-name">{recipe.name}</h2> 
                        <p className="recipe-info">{recipe.description}</p>
                        <p className="recipe-info">Ingredients: {recipe.ingredients}</p>
                        
                        <p></p>
                    </div>
                </div>

            ))}


        
    
            



         

    </div>
  

)



}

export default Recipes