import React from 'react';

//components
import PhoneNumber from './PhoneNumber';

//styles
import '../../assets/styles/components/ContactUs/ContactInfo.css';
import '../../assets/styles/icons/CircleIcon.css';

//icons
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const ContactInfo = () => {
    return(
        <React.Fragment>
            <div className="contact-info">
                <h3>Contacto</h3>
                <div className="phone-number--container">
                    <PhoneNumber/>
                </div>
                <div className="social-media--container">
                    <div className="circle-icon">
                        <FaFacebookF/>
                    </div>
                    <div className="circle-icon">
                        <FaTwitter/>
                    </div>
                    <div className="circle-icon">
                        <FaInstagram/>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default ContactInfo;