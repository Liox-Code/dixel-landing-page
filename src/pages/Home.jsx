import React, { useState, useEffect} from 'react';

//Components
import Header from '../components/Header/Header';
import Portrait from '../components/Header/Portrait';
import Quotes from '../components/Quotes/Quotes';
import Services from '../components/Services/Services';
import Carrousel from '../components/Carrousel/Carrousel';
import ApplicationAreas from '../components/ApplicationAreas/ApplicationAreas';
import ContactUs from '../components/ContactUs/ContactUs';
import Contact from '../components/ContactUs/Contact';
import Footer from '../components/Footer/Footer';

//images
import portraitBackground from '../assets/static/background-figures-vertical.svg';

//styles
import '../assets/styles/pages/Home.css';

function useWindowsSize() {
    const [size, setSize] = useState( window.innerWidth );
    const handleResize = () => setSize( window.innerWidth );
    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [])
    return size;
}

const Home = () => {
    const width = useWindowsSize();
    return(
        <React.Fragment>
            <div className="home">
                {/* <img
                    className="portrait--background-image"
                    src={portraitBackground}
                    alt=""
                /> */}
            {/* <img
                className="background--image"
                src={portraitBackground}
                alt="Imagen de Fondo"
            /> */}
                <div className="background--image"></div>
                <div className="header--background background">
                    <Header width={width}/>
                </div>
                <div className="portrait--background background">
                    <Portrait/>
                </div>
                <div className="quotes--background background">
                    <Quotes/>
                </div>
                <div className="services--background background">
                    <Services/>
                </div>
                <div className="carrousel--background background">
                    <Carrousel/>
                </div>
                <div className="application-areas--background background">
                    <ApplicationAreas/>
                </div>
                <div className="contact-us--background background">
                    <ContactUs/>
                </div>
                <div className="contact-info--background background">
                    <Contact/>
                </div>
                <div className="footer-info--background background">
                    <Footer/>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Home;