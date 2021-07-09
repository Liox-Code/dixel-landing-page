import React from 'react';

//styles
import '../../assets/styles/components/Services/ServicesCircuit.css';

const ServicesCircuit = () => {
    return(
        <React.Fragment>
            <div className="services-circuit">
                <div className="services-circuit--vertical-1 services-circuit--vertical"></div>
                <div className="services-circuit--horizontal-1 services-circuit--horizontal"></div>
                <div className="services-circuit--vertical-2 services-circuit--vertical"></div>
                <div className="services-circuit--horizontal-2 services-circuit--horizontal"></div>
                <div className="services-circuit--circle-1 services-circuit--circle"></div>
                <div className="services-circuit--horizontal-3 services-circuit--horizontal"></div>
                <div className="services-circuit--circle-2 services-circuit--circle"></div>
                <div className="services-circuit--horizontal-4 services-circuit--horizontal"></div>
                <div className="services-circuit--circle-3 services-circuit--circle"></div>
            </div>
        </React.Fragment>
    )
}

export default ServicesCircuit;