import React from 'react';

//styles\
import '../../assets/styles/components/PricePacks/PricePack.css';

//icons
import { GoPrimitiveDot } from "react-icons/go";

const PricePack = () => {
    return(
        <React.Fragment>
            <div className="price-pack--container">
                <div className="price-pack--header">
                    <h3>Dixel Web AR Básico</h3>
                    <span></span>
                </div>
                <div className="price-pack--content">
                    <p>Los modelos 3D son cotizados según la cantidad y complejidad que se requiera incluir.</p>
                    <ul className="price-pack--list">
                        <li><GoPrimitiveDot className="price-pack--dot"/> Diseño Web a medida Web</li>
                        <li><GoPrimitiveDot className="price-pack--dot"/> Diseño Responsive</li>
                        <li><GoPrimitiveDot className="price-pack--dot"/> Formulario de contacto</li>
                        <li><GoPrimitiveDot className="price-pack--dot"/> Mapa de ubicación</li>
                        <li><GoPrimitiveDot className="price-pack--dot"/> Sección servicios</li>
                        <li><GoPrimitiveDot className="price-pack--dot"/> Sección AR</li>
                        <li><GoPrimitiveDot className="price-pack--dot"/> Aplicación Web</li>
                    </ul>
                </div>
                <div className="price-pack--price">
                    580 Bs.
                </div>
            </div>
        </React.Fragment>
    )
}

export default PricePack;