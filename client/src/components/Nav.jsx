import React from "react";
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'


const Nav = () => {

return (

    <div>

        <nav className="nav">

            
            <Link to="/" className="nav-butt"> Home </Link>
            <Link to="recipe" className="nav-butt"> Recipes </Link>
            {/* <Link to="recipe/:id" className="nav-butt" />  */}
            <Link to="recipe-entry" className="nav-butt"> Recipe Entry </Link>
            <Link to="chefs-page" className="nav-butt"> Chefs' Pages </Link>

            



        </nav>
        
    </div>

  

)



}

export default Nav