import React from 'react';

//styles
import '../../assets/styles/components/Carrousel/CarrouselItem.css';
import '../../assets/styles/components/Carrousel/Model.css';

const CarrouselItem = (props) => {
    const { title, description, model, modelButton } = props.data;
    return(
        <React.Fragment>
            <div className="carrousel-item--container">
                <div className="carrousel-item">
                    <model-viewer
                        src={model}
                        alt="Edificio 01"
                        shadow-intensity="1"
                        camera-controls=""
                        auto-rotate="" 
                        ar="" 
                        ar-modes="scene-viewer quick-look webxr" 
                        ar-scale="auto" 
                        data-js-focus-visible="" 
                        ar-status="not-presenting"
                    >
                        {modelButton}
                    </model-viewer>
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
            </div>
        </React.Fragment>
    )
}

export default CarrouselItem;