import React from 'react';

//styles
import '../../assets/styles/components/ContactUs/PhoneNumber.css';
import '../../assets/styles/icons/SquareIcon.css';

const PhoneNumber = (props) => {
    const {icon, type, number} = props.data;
    return(
        <div className="phone-number">
            {icon}
            <span>{type}:</span>
            <span>{number}</span>
        </div>
    )
}

export default PhoneNumber;