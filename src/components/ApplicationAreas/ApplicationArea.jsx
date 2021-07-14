import React from 'react';

//styles
import '../../assets/styles/components/ApplicationAreas/ApplicationArea.css';

const ApplicationArea = (props) => {
    const { image, title, description } = props.data;
    console.log(image);
    return(
        <React.Fragment>
            <div className="application-area">
                <img src={image} alt=""/>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </React.Fragment>
    )
}

export default ApplicationArea;