import React from "react";
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'


const Nav = () => {

return (

    <div>

        <nav className="nav">

            
            <Link to="/" className="nav-butt"> Home </Link>
            <Link to="breakfast" className="nav-butt"> Breakfast </Link>
            <Link to="lunch" className="nav-butt"> Lunch </Link>
            <Link to="dinner" className="nav-butt"> Dinner </Link>
            <Link to="snack" className="nav-butt"> Snack </Link>
            <Link to="recipe-entry" className="nav-butt"> Recipe Entry </Link>
            <Link to="chefs-page" className="nav-butt"> Chefs' Pages </Link>

            



        </nav>
        
    </div>

  

)



}

export default Nav