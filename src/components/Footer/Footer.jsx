import React from 'react';

//styles
import '../../assets/styles/components/Footer/Footer.css';

const Footer = () => {
    return(
        <React.Fragment>
            <div className="footer-container">
                <div className="footer">
                    <span>©2021. All rights reserved.</span>
                    <span>Made by <a href="#top">Dixel</a></span>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Footer;