import React from 'react';

//styles
import '../../assets/styles/components/ContactUs/AboutUs.css';

//images
import dixelLogo from '../../assets/static/dixel-logo.svg';

const ContactInfo = () => {
    return(
        <React.Fragment>
            <div className="about-us">
                <img src={dixelLogo} alt=""/>
                <p>
                    Nos dedicamos a la construcción y elaboración de sitios web profesionales,
                    enfocandonos en la implementación de modelos en 3D para poder ser visualizados
                    desde cualquier dispositivo por Realidad Aumentada y mostrar los proyectos de una
                    manera inovadora y atrayente para tus clientes.
                </p>
            </div>
        </React.Fragment>
    )
}

export default ContactInfo;