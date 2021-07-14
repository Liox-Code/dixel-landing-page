import React from 'react';

//components
import NavLink from './NavLink';
import { motion } from "framer-motion";

//styles
import '../../assets/styles/components/Header/NavBar.css';

const NavBar = () => {
    return(
        <React.Fragment>
            <motion.nav className="navbar">
                <NavLink text={'Inicio'} link={"top"}/>
                <NavLink text={'Servicios'} link={"services"}/>
                <NavLink text={'Contacto'} link={"Contact"}/>
                <NavLink text={'Nosotros'} link={"AboutUs"}/>
            </motion.nav>
        </React.Fragment>
    )
}

export default NavBar;