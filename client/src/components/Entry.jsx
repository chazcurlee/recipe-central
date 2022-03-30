import React from "react";
import { useState, useEffect } from 'react'
import axios from "axios";


const Entry = () => {
    const [newRecipe, setNewRecipe] = useState([])
    const [chef, setChef] = useState()
    const [cat, setCat] = useState()

    const chefChange = (event) => {

        let chefChoice = event.target.value
        setChef(chefChoice)



    }

    const catChange = (event) => {

        let catChoice = event.target.value
        setCat(catChoice)
    }


    const submitRecipe = async () => {

        let category = 0

        const inp = await axios.post(`http://localhost:3001/breakfast`)



    }



return (
    <div className="main-content">
        <h2>Add A New Recipe Here</h2>
        <form id="recipe-form">
            <input type="text" placeholder="Recipe Name" id="name"/><br/>
            <input type="text" placeholder="Description" id="description"/><br/>
            <input type="text" placeholder="Ingredients" id="ingredients"/><br/>
            <input type="text" placeholder="Instructions"id="instructions"/> <br/>
            
            <input type="text" placeholder="Image URL" id="url"/><br/>
            <select id="dropdown-chef" onChange={chefChange}>
                <option>---Choose Whose Recipe This Is---</option>
                <option>Gordon Ramsey</option>
                <option>Anthony Bourdain</option>
                <option>Julia Child</option>
                <option>Bobby Flay</option>
            </select><br/>
            <select id="dropdown-cat" onChange="">
                <option>---Choose Category---</option>
                <option>Breakfast</option>
                <option>Lunch</option>
                <option>Dinner</option>
                <option>Snack</option>
            </select><br/>
            <input type="submit"/>



        </form>
    </div>
    

)



}

export default Entry