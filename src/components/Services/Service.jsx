import React from 'react';

//styles
import '../../assets/styles/components/Services/Service.css';
import '../../assets/styles/components/Buttons/Small-Red-Button.css';
import '../../assets/styles/icons/Arrow-Icon.css';

//icons
import { RiArrowRightSLine } from "react-icons/ri";

const Service = (props) => {
    const {title, description, image, id} = props.service;

    function handleClick(serviceId) {
        props.onClick(serviceId);
    }

    return(
        <React.Fragment>
            <div className="service">
                <img src={image} alt=""/>
                <button
                    onClick={() => handleClick(id)}
                    className="small-red-button"
                >
                    {title} <RiArrowRightSLine className="arrow-icon"/>
                </button>
                <p>
                    {description}
                </p>
            </div>
        </React.Fragment>
    )
}

export default Service;