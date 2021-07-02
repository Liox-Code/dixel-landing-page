import React from 'react';

//styles
import '../../assets/styles/components/ApplicationAreas/ApplicationArea.css';

//icons
import appArea from '../../assets/static/Application-Area.svg';

const ApplicationArea = () => {
    return(
        <React.Fragment>
            <div className="application-area">
                <img src={appArea} alt=""/>
                <h3>Educación</h3>
                <p>contribuye a mejorar la experiencia de docentes y alumnos, incrementando así la interactividad y calidad de la enseñanza en los diferentes niveles educativos.</p>
            </div>
        </React.Fragment>
    )
}

export default ApplicationArea;