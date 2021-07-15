import React from 'react';

//components
import PhoneNumber from './PhoneNumber';

//styles
import '../../assets/styles/components/ContactUs/ContactInfo.css';
import '../../assets/styles/icons/CircleIcon.css';

//icons
import { FaWhatsapp, FaFacebookF } from "react-icons/fa";

const ContactInfo = () => {
    const phoneNumberList = [
        {
            "icon": <FaWhatsapp className="square-icon"/>,
            "type": "Whatsapp",
            "number": "+591 777 7777",
        },
    ];
    return(
        <React.Fragment>
            <div className="contact-info">
                <h3>Contacto</h3>
                <div className="phone-number--container">
                    {phoneNumberList.map((phoneNumber ,index) => (
                        <PhoneNumber key={index} data={phoneNumber}/>
                    ))}
                </div>
                <div className="social-media--container">
                    <a
                        href="https://www.facebook.com/dixelbo"
                        target="_blank"
                        className="circle-icon"
                        rel="noopener noreferrer"
                    >
                        <FaFacebookF/>
                    </a>
                </div>
            </div>
        </React.Fragment>
    )
}

export default ContactInfo;