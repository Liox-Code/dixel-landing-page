import React from 'react';

//components
import CarrouselItem from '../Carrousel/CarrouselItem';
import TitleUnderlineCircuit from '../Titles/TitleUnderlineCircuit';

//styles
import '../../assets/styles/components/Carrousel/Carrousel.css';
import '../../assets/styles/components/Buttons/Circular-Red-Button.css';

//icons
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

//slider
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <div
            className="circula-red-button circula-red-button--right carrousel-right-arrow"
            onClick={onClick}
        >
            <RiArrowRightSLine/>
        </div>
    );
}

function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <div
            className="circula-red-button circula-red-button--left carrousel-left-arrow"
            onClick={onClick}
        >
            <RiArrowLeftSLine/>
        </div>
    );
}


const Carrousel = () => {
    const settings = {
        centerMode: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 500,
        centerPadding: "0px",
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        className: "slides",
        responsive: [
            {
                breakpoint: 1060,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };
    return(
        <React.Fragment>
            <div className="carrousel">
                <TitleUnderlineCircuit
                    className="carrousel-title"
                    title="DEMO DE REALIDAD AUMENTADA"
                />
                <Slider {...settings}>
                    <CarrouselItem/>
                    <CarrouselItem/>
                    <CarrouselItem/>
                    <CarrouselItem/>
                </Slider>
            </div>
        </React.Fragment>
    )
}

export default Carrousel;