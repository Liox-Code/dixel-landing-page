import React, {useState, useEffect} from 'react';
import { motion, AnimatePresence } from "framer-motion";

//components
import NavBar from './NavBar';

//images
import logo from '../../assets/static/logo.svg';
import logoDixel from '../../assets/static/dixel-logo-color.svg';

//styles
import '../../assets/styles/components/Header/Header.css';

//icons
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Header = (props) => {
    const { screenWidth } = props;
    const [showMenu, setShowMenu] = useState(false);
    const toggle = () => {
        setShowMenu(!showMenu);
    }

    useEffect(() => {
        console.log(showMenu);
    },[showMenu])

    return(
        <React.Fragment>
            <div className="header">
                <a
                    href="#top"
                    className="logo-header"
                >
                    {(screenWidth < 800) ?
                        <img
                            src={logo}
                            alt="logo Dixel"
                        />
                        :
                        <img
                            src={logoDixel}
                            alt="logo Dixel"
                        />
                    }
                </a>
                {(screenWidth < 800) &&
                    <div className="icon-header--container">
                        {(showMenu) ?
                            <React.Fragment>
                                <AiOutlineClose
                                    className="icon-header"
                                    onClick={toggle}
                                />
                            </React.Fragment>
                            :
                            <AiOutlineMenu
                                className="icon-header"
                                onClick={toggle}
                            />
                        }
                    </div>
                }

                {(screenWidth >= 800) ?
                    <motion.div
                        className="header--navbar"
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={header}
                    >
                        <NavBar/>
                    </motion.div>
                    :
                    <AnimatePresence>
                        {(showMenu) &&
                            <motion.div
                                className="header--navbar"
                                initial="closed"
                                animate="open"
                                exit="closed"
                                variants={header}
                            >
                                <NavBar/>
                            </motion.div>
                        }
                    </AnimatePresence>
                }
            </div>
        </React.Fragment>
    )
}
const header = {
    open: {
        height: "auto",
        transition: {
            type: "spring",
            stiffness: 400,
            damping: 40,
            when: "beforeChildren",
            staggerChildren: 0.1,
        }
    },
    closed: {
        height: 0,
        transition: {
            type: "spring",
            stiffness: 400,
            damping: 40,
        }
    }
};
export default Header;