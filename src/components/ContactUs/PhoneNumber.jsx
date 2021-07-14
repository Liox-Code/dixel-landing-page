import React from 'react';

//icons
import { FaWhatsapp } from 'react-icons/fa';

//styles
import '../../assets/styles/components/ContactUs/PhoneNumber.css';
import '../../assets/styles/icons/SquareIcon.css';

const PhoneNumber = () => {
    return(
        <div className="phone-number">
            <FaWhatsapp className="square-icon"/>
            <span>Whatsapp:</span>
            <span>+591 777 7777</span>
        </div>
    )
}

export default PhoneNumber;