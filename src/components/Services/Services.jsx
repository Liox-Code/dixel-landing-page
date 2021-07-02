import React from 'react';

//components
import Service from './Service';
import TitleUnderlineCircuit from '../Titles/TitleUnderlineCircuit';

//styles
import '../../assets/styles/components/Services/Services.css';
import '../../assets/styles/components/Services/Animation.css';

//images
import webApp from '../../assets/static/web-app.svg';
import ar from '../../assets/static/augmented-reality.svg';
import app from '../../assets/static/app.svg';

const Services = () => {
    const listServices  = [
        {
            "id": 1,
            "title": "Tu Aplicación Web Profesional",
            "description": "Muchas empresas han decidido instalarse en el entorno digital puesto que está comprobado que tener una web es parte muy importante de un negocio.",
            "image": webApp 
        },
        {
            "id": 2,
            "title": "Realidad Aumentada en tu negocio",
            "description": `Con la realidad aumentada se puede experimentar la vida de una forma nunca antes vista.
                            Las empresas de todo tipo se pueden beneficiar de su capacidad para impactar en los clientes ofreciéndoles experiencias didácticas y útiles durante el proceso de compra.`,
            "image": ar         
        },
        {
            "id": 3,
            "title": "Tu propia Aplicación",
            "description": "Las PWA, son aplicaciones web que no dependen de una instalación o una tienda para su descarga. Únicamente se requiere acceso a Internet para encontrarlas y poder anclarlas al dispositivo en cuestión, aunque su funcionamiento posterior puede no depender de conexión a la red.",
            "image": app 
        }
    ]
    
    return(
        <React.Fragment>
            <div className="services">
                <TitleUnderlineCircuit
                    title="¿QUÉ TE OFRECEMOS?"
                />
                <div className="list-services">
                    {listServices.map( (service) => (
                            <Service
                                key={service.id} 
                                service={service}
                            />
                        )
                    )}
                </div>
                <div className="circuit-animation--container services-container">
                    <div className="circuit-animation">
                        <div className="circuit-animation--vertical-1 circuit-animation--vertical"></div>
                        <div className="circuit-animation--horizontal-1 circuit-animation--horizontal"></div>
                        <div className="circuit-animation--vertical-2 circuit-animation--vertical"></div>
                        <div className="circuit-animation--horizontal-2 circuit-animation--horizontal"></div>
                        <div className="circuit-animation--circle-1 circuit-animation--circle"></div>
                        <div className="circuit-animation--horizontal-3 circuit-animation--horizontal"></div>
                        <div className="circuit-animation--circle-2 circuit-animation--circle"></div>
                        <div className="circuit-animation--horizontal-4 circuit-animation--horizontal"></div>
                        <div className="circuit-animation--circle-3 circuit-animation--circle"></div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Services;