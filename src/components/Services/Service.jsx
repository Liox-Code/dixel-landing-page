import React from 'react';

//styles
import '../../assets/styles/components/Services/Service.css';
import '../../assets/styles/components/Buttons/Small-Red-Button.css';
import '../../assets/styles/icons/Arrow-Icon.css';

//icons
import { RiArrowRightSLine } from "react-icons/ri";

const Service = (props) => {
    const {title, description, image} = props.service;
    console.log(props);
    return(
        <React.Fragment>
            <div className="service">
                <img src={image} alt=""/>
                <a
                    className="small-red-button"
                    href="#"
                >
                    {title} <RiArrowRightSLine className="arrow-icon"/>
                </a>
                <p>
                    {description}
                </p>
            </div>
        </React.Fragment>
    )
}

export default Service;