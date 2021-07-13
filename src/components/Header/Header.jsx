import React, {useState} from 'react';

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
                
                {(screenWidth >= 800 || showMenu) &&
                    <div className="header--navbar">
                        <NavBar/>
                    </div>
                }
            </div>
        </React.Fragment>
    )
}

export default Header;