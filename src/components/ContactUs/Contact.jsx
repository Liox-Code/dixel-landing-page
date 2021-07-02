import React from 'react';

//components
import AboutUs from './AboutUs';
import ContactInfo from './ContactInfo';

//styles
import '../../assets/styles/components/ContactUs/Contact.css';

const Contact = () => {
    return(
        <React.Fragment>
            <div className="contact">
                <AboutUs/>
                <ContactInfo/>
            </div>
        </React.Fragment>
    )
}

export default Contact;