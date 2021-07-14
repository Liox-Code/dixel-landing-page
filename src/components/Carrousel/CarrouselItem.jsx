import React from 'react';

//styles
import '../../assets/styles/components/Carrousel/CarrouselItem.css';
import '../../assets/styles/components/Carrousel/Model.css';

const CarrouselItem = (props) => {
    const { title, description, model } = props.data;
    console.log(model);
    return(
        <React.Fragment>
            <div className="carrousel-item--container">
                <div className="carrousel-item">
                    {/* <img src={image} alt=""/> */}
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
                        <button className="hotspot selected" slot="hotspot-hand" data-position="0.10264444293048927m 0.20842031896801913m 0.2226409711973905m" data-normal="0m -0.0000017335914033395967m 0.9999999999984973m">
                            <div id="annotation">Departamento Demo</div>
                        </button>
                    </model-viewer>
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
            </div>
        </React.Fragment>
    )
}

export default CarrouselItem;