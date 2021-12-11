import './Navbar.css';
import CartWidget from '../CartWidget';


import React from "react";

export const NavBar = ({marca}) =>{
    return (
        <>
            <header>
                <h1> {marca}</h1>
                <li>Salas</li>
                <li>Comedor</li>
                <li>Camas</li>
                <li>Contactenos</li>
                <CartWidget />
            </header>
        </>
    )

}