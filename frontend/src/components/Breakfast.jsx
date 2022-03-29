import React from "react";
import { useState, useEffect } from 'react'
import axios from "axios";


const Breakfast = () => {

    const [recipes, setRecipes ] = useState()
    let recipes1 = 0

    useEffect(() => {

        const getRecipes = async () => {

            let breakfastRecipes = await axios.get("http://localhost:3001/recipes")
            setRecipes(breakfastRecipes)
            

        }

        

    }, [])
    console.log(recipes)

return (
    <div>

        <h2>Breakfast</h2>
        <ul>
            {/* {recipes.map((recipe) => (

                <h3>{recipe.name}</h3>

            )
            )} */}



        </ul>   

    </div>
  

)



}

export default Breakfast