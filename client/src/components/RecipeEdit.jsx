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
   
    

    const handleChange = (e) => {

        let update = e.target.value

        switch (e.target.id) {

            case "name1":
                setRecipe({
                    ...recipe,
                    name: update,
                })
                break;

            case "description1":
                setRecipe({
                    ...recipe,
                    description: update,
                })
                break;
                
            case "instructions1":
                setRecipe({
                    ...recipe,
                    steps: update,
                })
                break;
                    
            case "ingredients1":
                setRecipe({
                    ...recipe,
                    ingredients: update,
                })
                break;
                 
                
            case "url1":
                setRecipe({
                    ...recipe,
                    img: update,
                })
                break;
                    
            case "dropdown-chef1":
                switch (update) {
                    case "Gordon Ramsey":
                        setRecipe({
                            ...recipe,
                            chef: "6244578a1f15f32c6e1f29e0",
                        })
                        break;

                    case "Julia Child":
                        setRecipe({
                            ...recipe,
                            chef: "6244578a1f15f32c6e1f29e3",
                        })
                        break;
                    
                    case "Bobby Flay":
                        setRecipe({
                            ...recipe,
                            chef: "6244578a1f15f32c6e1f29e2",
                        })
                        break;

                    case "Anthony Bourdain":
                        setRecipe({
                            ...recipe,
                            chef: "6244578a1f15f32c6e1f29e1",
                        })
                        break;

                    default:
                        console.log("chef default")
                        break;

                }
                    
                
                break;
                    

            default:
                console.log("change default")
                break;
        }

        
        
    }

    const submitEdit = async () => {

        let edit = await axios.put(`http://localhost:3001/recipe-detail/${id}`, {
            name: recipe.name,
            description: recipe.description,
            img: recipe.img,
            chef: recipe.chef,
            steps: recipe.steps,
            ingredients: recipe.ingredients
        })
        console.log(edit)
        navigate(`/recipe/${id}`, {replace: true})


    }

return (
    <div className="main-content outer-container">

        <h2>Recipe Detail</h2>
        
            
                <div className=" middle-container">
                    <form>
                    
                    
                        <div className="inner-container">
                            Name: <input type="text" className="recipe-name" id="name1"  value={recipe.name} onChange={handleChange}></input> 
                            Description:
                            <input type="text" className="recipe-name" id="description1" value={recipe.description}onChange={handleChange}></input>
                            Ingredients:
                            <input type="text" className="recipe-name" id="ingredients1" value={recipe.ingredients}onChange={handleChange}></input>
                            Instructions:
                            <input type="text" className="recipe-name" id="instructions1" value={recipe.steps}onChange={handleChange}></input>
                            Image URL:
                            <input type="text" className="recipe-name" id="url1" value={recipe.img}onChange={handleChange}></input>
                            Select Chef:
                            <select type="text" className="recipe-name" id="dropdown-chef1" onChange={handleChange}>
                                <option>---Choose Chef---</option>
                                <option>Gordon Ramsay</option>
                                <option>Bobby Flay</option>
                                <option>Julia Child</option>
                                <option>Anthony Bourdain</option>
                                </select><br />
                            <input type="submit" value="Save"  /><br />
                            
                        </div>
                    </form>
                </div>

            


        
    
            



         

    </div>
  

)



}

export default RecipeEdit