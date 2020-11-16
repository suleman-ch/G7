import React from 'react'
import { NavLink } from 'react-router-dom'

const Menu = () => {
    return(
        <>
        <div className="menu_style">
        <NavLink exact activeClassName="active_class" to="/" >About Us</NavLink>
        <NavLink exact activeClassName="active_class" to="/servies">Servies</NavLink>
        <NavLink exact activeClassName="active_class" to="/contact" >Contact Us</NavLink>
        </div>

        </>
    )
}

export default Menu;