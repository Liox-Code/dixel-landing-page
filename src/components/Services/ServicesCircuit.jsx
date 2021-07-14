import React, { useState , useEffect } from 'react';

//styles
import '../../assets/styles/components/Services/ServicesCircuit.css';

const ServicesCircuit = (props) => {
    const {posServices} = props;
    const [ serviceCircuitState, setServiceCircuitState ] = useState({
        servicePosition: posServices
    });

    useEffect(() => {
        setServiceCircuitState({
            servicePosition: posServices,
        });
    }, [posServices]);

    return(
        <React.Fragment>
            <div
                className="services-circuit"
                style={{height: serviceCircuitState.servicePosition[2] - 20}}
            >
                <div className="services-circuit--vertical-1 services-circuit--vertical"></div>
                <div className="services-circuit--horizontal-1 services-circuit--horizontal"></div>
                <div className="services-circuit--vertical-2 services-circuit--vertical"></div>
                <div className="services-circuit--horizontal-2 services-circuit--horizontal" style={{top: serviceCircuitState.servicePosition[0]}}></div>
                <div className="services-circuit--circle-1 services-circuit--circle" style={{top: serviceCircuitState.servicePosition[0] - 3}}></div>
                <div className="services-circuit--horizontal-3 services-circuit--horizontal" style={{top: serviceCircuitState.servicePosition[1]}}></div>
                <div className="services-circuit--circle-2 services-circuit--circle" style={{top: serviceCircuitState.servicePosition[1] - 3}}></div>
                <div className="services-circuit--horizontal-4 services-circuit--horizontal" style={{top: serviceCircuitState.servicePosition[2]}}></div>
                <div className="services-circuit--circle-3 services-circuit--circle" style={{top: serviceCircuitState.servicePosition[2] - 3}}></div>
            </div>
        </React.Fragment>
    )
}

export default ServicesCircuit;