import React from 'react';

//styles
import '../../assets/styles/components/Header/NavLink.css';

const NavLink = (props) => {
    const {text} = props;
    return(
        <React.Fragment>
            <a className="nav-link">
                <div className="link">
                    <span>{text}</span>
                    <div className="link-underline">
                        <div className="nav-link--line"></div>
                        <div className="nav-link--circle"></div>
                    </div>
                </div>
            </a>
        </React.Fragment>
    )
}

export default NavLink;