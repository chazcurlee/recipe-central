import React from "react";
import { useState, useEffect } from 'react'
import axios from "axios";

const ChefsPage = () => {

    const [chefs, setChefs] = useState([])

    useEffect(() => {

        
        const getChef = async () => {
            let chef_imp = await axios.get("http://localhost:3001/chef")
            setChefs(chef_imp.data)


        }
        getChef()


    }, [])

    console.log(chefs)

return (

    <div className="main-content">
        <h2 className="main-title">Chefs' Page</h2>
        {chefs.map((ex) => (
            <div className="chef">
                <img className="chef-portrait" src={ex.img} alt="chef portrait" />
                <div className="chef-info">
                    <h3 className="chef-name" >{ex.name}</h3>
                    <p className="chef-history" >{ex.history}</p>
                </div>
            </div>
        ))} 
        

    </div>
    

)



}

export default ChefsPage