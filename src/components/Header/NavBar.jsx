import React from 'react';

//components
import NavLink from './NavLink';

//styles
import '../../assets/styles/components/Header/NavBar.css';

const NavBar = () => {
    return(
        <React.Fragment>
            <nav className="navbar">
                <NavLink text={'Inicio'}/>
                <NavLink text={'Servicios'}/>
                <NavLink text={'Contacto'}/>
                <NavLink text={'Nosotros'}/>
            </nav>
        </React.Fragment>
    )
}

export default NavBar;