import React from 'react';

//styles
import '../../assets/styles/components/Header/NavLink.css';

const NavLink = (props) => {
    const {text} = props;
    return(
        <React.Fragment>
            <a href="#top" className="nav-link">
                <div className="link">
                    <span>{text}</span>
                    <div className="link-underline">
                        <div className="nav-link--circle nav-link--circle-left"></div>
                        <div className="nav-link--line nav-link--line-left"></div>
                        <div className="nav-link--line nav-link--line-right"></div>
                        <div className="nav-link--circle nav-link--circle-right"></div>
                    </div>
                </div>
            </a>
        </React.Fragment>
    )
}

export default NavLink;