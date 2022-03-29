import React from "react";
import { useState, useEffect } from 'react'
import axios from "axios";


const Breakfast = () => {

    const [recipes, setRecipes ] = useState()
    let recipes1 = 0

    useEffect(() => {

        const getRecipes = async () => {

            let breakfastRecipes = await axios.get("http://localhost:3001/breakfast")
            setRecipes(breakfastRecipes.data)
            console.log(recipes)
            

        }
        getRecipes()
        

    }, [])
    console.log(recipes)

return (
    <div className="main-content outer-container">

        <h2>Breakfast</h2>
        <div className=" middle-container">
            {recipes.map((recipe) => (
                
                <div>
                    <img src={recipe.img} alt="picture of recipe" />
                    <h2>{recipe.name}</h2> 
                    <p>Steps: {recipe.ingredients}</p>
                    <p></p>
                </div>


            
            ))}


        </div>
    
            



         

    </div>
  

)



}

export default Breakfast