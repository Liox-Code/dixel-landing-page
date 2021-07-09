import React from 'react';
import { motion } from 'framer-motion';
import { transitionEffectLeftRight } from '../../animations/ServicesAnimation';

//components
import Service from './Service';
import TitleUnderlineCircuit from '../Titles/TitleUnderlineCircuit';
import ServiceInfo from './ServiceInfo';
import { ServiceItemWebApp, ServiceItemAR, ServiceItemPWA } from './ServiceInfoDescriptions';
import ServicesCircuit from './ServicesCircuit';

//styles
import '../../assets/styles/components/Services/Services.css';

//images
import webApp from '../../assets/static/web-app.svg';
import ar from '../../assets/static/augmented-reality.svg';
import app from '../../assets/static/app.svg';

const Services = () => {
    const [serviceShown, setServiceShown] = React.useState(0);

    const listServices  = [
        {
            "id": 1,
            "title": "Tu Aplicación Web Profesional",
            "description": "Muchas empresas han decidido instalarse en el entorno digital puesto que está comprobado que tener una web es parte muy importante de un negocio.",
            "image": webApp,
            "serviceInfo": {
                "nextBtn": "¿REALIDAD AUMENTADA?",
                "nextServiceId": 2,
                "title": "SITIOS WEB PROFESIONALES",
                "description": <ServiceItemWebApp/>,
                "benefits": [
                    "Expandir el mercado e incrementar ventas (internacionalización)",
                    "Abierto las 24 hrs., siempre accesible",
                    "Promoción constante (Marketing)",
                    "Le mantiene informado al cliente",
                    "Mejora la imagen de la Marca, credibilidad y autoridad",
                    "Todos tus clientes potenciales están en línea y esperan que tu también",
                    "Permite recoger información de los clientes (prospectos)",
                    "Un Sitio Web Profesional ahorra dinero",
                    "Te sirve para vender más allá de tu entorno",
                    "Los beneficios del “webrooming” para tu negocio",
                ],
                "buyBtnText": "QUIERO MI SITIO"
            }
        },
        {
            "id": 2,
            "title": "Realidad Aumentada en tu negocio",
            "description": `Con la realidad aumentada se puede experimentar la vida de una forma nunca antes vista.
                            Las empresas de todo tipo se pueden beneficiar de su capacidad para impactar en los clientes ofreciéndoles experiencias didácticas y útiles durante el proceso de compra.`,
            "image": ar,   
            "serviceInfo": {
                "nextBtn": "¿APLICACIÓN WEB MOVIL?",
                "nextServiceId": 3,
                "title": "REALIDAD AUMENTADA",
                "description": <ServiceItemAR/>,
                "benefits": [
                    "Atracción de nuevos consumidores e incremento de la fidelidad hacia el establecimiento.",
                    "Customer Experience: Crea valor desde la perspectiva emocional y relacional con los clientes.",
                    "Brannding Marketing: Posicionamiento de marca y creación de notoriedad.",
                    "Customer Experience: Crea valor desde la perspectiva emocional y relacional con los clientes.",
                    "Facilita la formación, porque permite un aprendizaje mucho más versátil y llamativo.",
                    "Debido al impacto que tiene eleva las ventas de negocios y comercios.",
                    "Para las empresas, la RA permite que el cliente conozca mejor un producto antes de realizar la compra.",
                    "Es una tecnología aplicable en diversos ámbitos.",
                ],
                "buyBtnText": "QUIERO APLICARLO"
            }
        },
        {
            "id": 3,
            "title": "Tu propia Aplicación",
            "description": "Las PWA, son aplicaciones web que no dependen de una instalación o una tienda para su descarga. Únicamente se requiere acceso a Internet para encontrarlas y poder anclarlas al dispositivo en cuestión, aunque su funcionamiento posterior puede no depender de conexión a la red.",
            "image": app,
            "serviceInfo": {
                "nextBtn": "¿APLICACIÓN WEB PROFESIONAL?",
                "nextServiceId": 1,
                "title": "SIEMPRE DISPONIBLE PARA TUS CLIENTES",
                "description": <ServiceItemPWA/>,
                "benefits": [
                    "Bajos costes de desarrollo web de la PWA.",
                    "Pueden ser usadas incluso cuando el usuario no cuenta con conexión a internet.",
                    "Diseño similar al de una App.",
                    "La instalación es instantánea y pueden ser accedidas por los usuarios sin tener que esperar.",
                    "Sin problemas de actualización.",
                    "Se descargan directamente de tu página web, no hay necesidad de un intermediario entre el usuario y tu producto.",
                    "Pueden enviar notificaciones al igual que las Apps nativas.",
                    "El tamaño del archivo de un PWA es drásticamente menor al de una aplicación nativa.",
                    "El uso que le den los usuarios a tu PWA mejorará el posicionamiento SEO de tu página web.",
                ],
                "buyBtnText": "CONTACTARME"
            }
        }
    ]

    function handleClick(serviceId) {
        setServiceShown(serviceId);
    }

    return(
        <React.Fragment>
            {(serviceShown === 0) &&
                <motion.div
                    animate="animate"
                    variants={transitionEffectLeftRight}
                    className="services"
                >
                    <TitleUnderlineCircuit
                        title="¿QUÉ TE OFRECEMOS?"
                    />
                    <div className="list-services">
                        {listServices.map( (service) => (
                                <Service
                                    key={service.id}
                                    service={service}
                                    onClick={handleClick}
                                />
                            )
                        )}
                    </div>
                    <div className="services-container">
                        <ServicesCircuit/>
                    </div>
                </motion.div>
            }
            {(serviceShown) &&
                <ServiceInfo
                    service={
                        listServices.filter( (service) => {
                            return ((service.id === serviceShown) && service)
                        })
                    }
                    onClick={handleClick}
                />
            }
        </React.Fragment>
    )
}

export default Services;