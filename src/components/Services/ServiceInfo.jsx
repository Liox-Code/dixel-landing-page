import React, { useState , useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { transitionEffectRightLeft } from '../../animations/ServiceInfoAnimation';

//components
import TitleUnderlineCircuit from '../Titles/TitleUnderlineCircuit';
import ServiceInfoCircuit from './ServiceInfoCircuit';

//styles
import '../../assets/styles/components/Services/ServiceInfo.css';
import '../../assets/styles/components/Buttons/Small-Red-Button.css';
import '../../assets/styles/components/Buttons/Small-Purple-Button.css';
import '../../assets/styles/icons/Arrow-Icon.css';

//icons
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { GoPrimitiveDot } from "react-icons/go";

const ServiceInfo = (props) => {
    const { image } = props.service[0];
    const { nextBtn, nextServiceId, title, description, benefits, buyBtnText } = props.service[0].serviceInfo;

    const [ serviceInfo, setServiceInfo ] = useState({
        windowWidth: null,
        descriptionPosition: [],
        benefitsPosition: [],
    });
    const refServiceContainer = useRef();
    const refDescriptionContainer = useRef();
    const refListBenefits = useRef();

    const animationControl = useAnimation();

    useEffect( () => {
        const resizeHandler = () => {
            const { innerWidth } = window;
    
            const descriptionContainer = [...refDescriptionContainer.current.children];
            const descriptionPositions = descriptionContainer.map( description => (description.getBoundingClientRect().top + 7 - refServiceContainer.current.getBoundingClientRect().top));
            
            const benefitsList = [...refListBenefits.current.children];
            const benefitsPositions = benefitsList.map( line => (line.getBoundingClientRect().top + 7 - refServiceContainer.current.getBoundingClientRect().top));

            setServiceInfo({
                windowWidth: innerWidth,
                descriptionPosition: descriptionPositions,
                benefitsPosition: benefitsPositions,
            });
        }
        animationControl.start("animate");
        window.addEventListener("resize", resizeHandler, true);
        return () => {
            window.removeEventListener("resize", resizeHandler, true);
        };
    }
    , [animationControl])

    useEffect( async () => {
        const { innerWidth } = window;

        const descriptionContainer = [...refDescriptionContainer.current.children];
        const descriptionPositions = descriptionContainer.map( description => (description.getBoundingClientRect().top + 7 - refServiceContainer.current.getBoundingClientRect().top));
        
        const benefitsList = [...refListBenefits.current.children];
        const benefitsPositions = benefitsList.map( line => (line.getBoundingClientRect().top + 7 - refServiceContainer.current.getBoundingClientRect().top));

        setServiceInfo({
            windowWidth: innerWidth,
            descriptionPosition: descriptionPositions,
            benefitsPosition: benefitsPositions,
        });
    }
    , [props])

    async function handleClick(serviceId) {
        await props.onClick(serviceId);
        await animationControl.start("animate")
    }
    return(
        <React.Fragment>
            <motion.div
                animate={animationControl}
                variants={transitionEffectRightLeft}
                className="service-info"
            >
                <div className="service-info-circuit--container service-info-container" ref={refServiceContainer}>
                    {(serviceInfo.benefitsPosition.length && serviceInfo.descriptionPosition.length && serviceInfo.windowWidth >= 800) && 
                        <ServiceInfoCircuit posBenefit={serviceInfo.benefitsPosition} desContainer={serviceInfo.descriptionPosition}/>
                    }
                </div>
                <button
                    className="service-info--return-btn small-purple-button"
                    onClick={() => handleClick(0)}
                >
                    <RiArrowLeftSLine className="arrow-icon-small"/> Volver
                </button>
                <button
                    className="service-info--next-btn small-red-button"
                    onClick={() => handleClick(nextServiceId)}
                >
                    {nextBtn} <RiArrowRightSLine className="arrow-icon-small"/>
                </button>
                <div className="service-info--title">
                    <TitleUnderlineCircuit
                        title={title}
                    />
                </div>
                <img
                    src={image}
                    alt=""
                    className="service-info--image"
                />
                <div className="service-info--description" ref={refDescriptionContainer}>
                    {description}
                </div>
                <div className="service-info--benefits">
                    <h2>BENEFICIOS</h2>
                    <ul className="list-benefits" ref={refListBenefits}>
                        {benefits.map( (benefit, id) => (
                            <li key={id}>
                                <GoPrimitiveDot className="list-benefits--dot"/>
                                {benefit}
                            </li>
                        ))}
                    </ul>
                </div>
                <button className="service-info--buy-button small-red-button">
                    {buyBtnText}
                </button>
            </motion.div>
        </React.Fragment>
    )
}

export default ServiceInfo;