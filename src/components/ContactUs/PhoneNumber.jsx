import React from 'react';

//icons
import { FaFacebookF } from 'react-icons/fa';

//styles
import '../../assets/styles/components/ContactUs/PhoneNumber.css';
import '../../assets/styles/icons/SquareIcon.css';

const PhoneNumber = () => {
    return(
        <div className="phone-number">
            <FaFacebookF className="square-icon"/>
            <span>Numero:</span>
            <span>+591 777 7777</span>
        </div>
    )
}

export default PhoneNumber;