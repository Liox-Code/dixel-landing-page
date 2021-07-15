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

//models
import departamento01 from '../../assets/models/departamento-01.glb'; 
import dep01 from '../../assets/models/dept-01.glb';
import edificio01 from '../../assets/models/edificio-01.glb';
import monticulo from '../../assets/models/monticulo.glb';

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
    const carrouselList = [
        {
            "title": "Departamento 01 Demo",
            "description": "Hecho por Dixel",
            "model": departamento01,
        },
        {
            "title": "Departamento 02 Demo",
            "description": "Hecho por Dixel",
            "model": dep01,
        },
        {
            "title": "Edificio con AR Demo",
            "description": "Hecho por Dixel",
            "model": edificio01,
            "modelButton": 
            <button className="hotspot selected" slot="hotspot-hand" data-position="0.10264444293048927m 0.20842031896801913m 0.2226409711973905m" data-normal="0m -0.0000017335914033395967m 0.9999999999984973m">
                <div id="annotation">Departamento Demo</div>
            </button>,
        },
        {
            "title": "Fuente Neptuno (Monticulo)",
            "description": "Hecho por Dixel",
            "model": monticulo,
        },
    ];
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
                breakpoint: 1090,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 760,
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
                    {carrouselList.map((item, index) => (
                        <CarrouselItem key={index} data={item}/>
                    ),[])}
                </Slider>
            </div>
        </React.Fragment>
    )
}

export default Carrousel;