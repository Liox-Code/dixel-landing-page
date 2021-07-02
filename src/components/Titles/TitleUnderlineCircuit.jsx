import React from 'react';

//styles
import '../../assets/styles/components/Titles/TitleUnderlineCircuit.css';

const TitleUnderlineCircuit = (props) => {
    const { title } = props;
    return(
        <React.Fragment>
            <div className="carrousel-title">
                <h2>{title}</h2>
                <div className="underline-circuit">
                    <div className="underline-circle underline-circle-left"></div>
                    <div className="underline-line"></div>
                    <div className="underline-circle underline-circle-right"></div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default TitleUnderlineCircuit;