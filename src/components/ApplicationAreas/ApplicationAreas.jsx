import React from 'react';

//components
import ApplicationArea from './ApplicationArea';
import TitleUnderlineCircuit from '../Titles/TitleUnderlineCircuit';

//styles
import '../../assets/styles/components/ApplicationAreas/ApplicationAreas.css';

const ApplicationAreas = () => {
    return(
        <React.Fragment>
            <div className="application-areas">
                <TitleUnderlineCircuit
                    title="ÁREAS DONDE SE PUEDE APLICAR REALIDAD AUMENTADA"
                />
                <p>la realidad aumentada está presente e influye en distintos aspectos de nuestra vida. Estos son solo algunos de los más destacados:</p>
                <div className="application-areas--container">
                    <ApplicationArea/>
                    <ApplicationArea/>
                    <ApplicationArea/>
                    <ApplicationArea/>
                    <ApplicationArea/>
                    <ApplicationArea/>
                    <ApplicationArea/>
                </div>
            </div>
        </React.Fragment>
    )
}

export default ApplicationAreas;