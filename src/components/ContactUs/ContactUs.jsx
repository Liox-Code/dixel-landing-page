import React from 'react';

//components
import Email from '../Email/Email';
import TitleUnderlineCircuit from '../Titles/TitleUnderlineCircuit';

//styles
import '../../assets/styles/components/ContactUs/ContactUs.css';

const ContactUs = () => {
    return(
        <React.Fragment>
            <div className="contact-us">
                <TitleUnderlineCircuit
                    title="CONTÁCTANOS"
                />
                <div className="contact-us--container">
                    <div className="contact-us--description">
                        <h3>¿Tienes alguna consulta sobre nuestros servicios?</h3>
                        <p>Llena el formulario y te responderemos lo más antes posible, no dudes en consultar todas tus dudas sobre nuestros servicios.</p>
                    </div>
                    <Email/>
                </div>
            </div>
        </React.Fragment>
    )
}

export default ContactUs;