import React from 'react';

//images
import portraitImg from '../../assets/static/portrait-image.svg';

//styles
import '../../assets/styles/components/Header/Portrait.css';
import '../../assets/styles/components/Buttons/Small-Red-Button.css';

const Portrait = () => {
    return(
        <React.Fragment>
            <div className="portrait">
                <img
                    className="portrait--image"
                    src={portraitImg}
                    alt=""
                />
                <div className="portrait--container">
                    <h1>VISUALIZA TUS PROYECTOS 3D CUANDO QUIERAS, DONDE QUIERAS</h1>
                    <p>Tus proyectos en Realidad Aumentada desde cualquier dispositivo.</p>
                    <a
                        href="#Contact"
                        className="portrait--button small-red-button"
                    >
                        ¡LO QUIERO!
                    </a>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Portrait;