import React from 'react';
import { motion } from "framer-motion";

//styles
import '../../assets/styles/components/Header/NavLink.css';

const header = {
    open: {
        opacity: 1
    },
    closed: {
        opacity: 0
    }
};

const NavLink = (props) => {
    const { text, link } = props;
    return(
        <React.Fragment>
            <motion.a
                href={`#${link}`}
                className="nav-link"
                variants={header}
            >
                <div className="link">
                    <span>{text}</span>
                    <div className="link-underline">
                        <div className="nav-link--circle nav-link--circle-left"></div>
                        <div className="nav-link--line nav-link--line-left"></div>
                        <div className="nav-link--line nav-link--line-right"></div>
                        <div className="nav-link--circle nav-link--circle-right"></div>
                    </div>
                </div>
            </motion.a>
        </React.Fragment>
    )
}

export default NavLink;