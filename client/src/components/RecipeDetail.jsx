import React from "react";
import { useState, useEffect } from 'react'
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";


const RecipeDetail = () => {

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
            
            let specChef = await axios.get(`http://localhost:3001/chef/${chefId}`)
            
            setChef(specChef.name)
            
            

        }
        getRecipe()
        

    }, [])
   
    const deleteEntry = async () => {

        
        let ans = prompt("Please type in the name of the recipe you are trying to delete.")
        if (ans === recipe.name) {
            
            let dlte = await axios.delete(`/recipe-detail/${id}`)
            console.log(dlte)
            navigate('/recipe', {replace: true}, {reloadDocument: true})
            
            


        } 
        
        


    }

    const editEntry = () => {

        console.log('test edit')
        navigate(`edit`)



    }

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
                        <button onClick={editEntry}>Edit</button><br />
                        <button onClick={deleteEntry}>Delete</button>
                    </div>
                </div>

            


        
    
            



         

    </div>
  

)



}

export default RecipeDetail