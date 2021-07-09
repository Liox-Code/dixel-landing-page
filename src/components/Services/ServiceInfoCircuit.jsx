import React from 'react';

//styles
import '../../assets/styles/components/Services/ServiceInfoCircuit.css';

const ServiceInfoCircuit = (props) => {
    const {desContainer, posBenefit} = props;

    return(
        <React.Fragment>
            <div className="service-info-circuit">
                <div
                    className="service-info-circuit--line service-info-circuit--vertical-1 service-info-circuit--left"
                    style={{
                        maxHeight: desContainer[1] - 50
                    }}
                >
                </div>
                <div
                    className="service-info-circuit--line service-info-circuit--vertical-2 service-info-circuit--right"
                    style={{
                        maxHeight: posBenefit[posBenefit.length - 1]
                    }}
                >
                </div>
                <div
                    className="service-info-circuit--line service-info-circuit--horizontal-1 service-info-circuit--left">
                    </div>
                <div
                    className="service-info-circuit--line service-info-circuit--horizontal-2 service-info-circuit--left"
                    style={{top: desContainer[0]}}>
                </div>
                <div
                    className="service-info-circuit--line service-info-circuit--circle-1 service-info-circuit--left"
                    style={{top: desContainer[0] - 3}}>
                </div>
                <div
                    className="service-info-circuit--line service-info-circuit--horizontal-3 service-info-circuit--left"
                    style={{top: desContainer[1]}}>
                </div>
                <div
                    className="service-info-circuit--line service-info-circuit--circle-2 service-info-circuit--left"
                    style={{top: desContainer[1] - 3}}>
                </div>
                {
                    posBenefit.map( (benefitPos, i) => {
                        return <div className="service-info-circuit--line service-info-circuit--horizontal service-info-circuit--right" key={i} style={{top:posBenefit[i]}}></div>
                    })
                }
            </div>
        </React.Fragment>
    )
}

export default ServiceInfoCircuit;