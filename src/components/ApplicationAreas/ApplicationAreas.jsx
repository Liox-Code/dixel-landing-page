import React from 'react';
import { motion } from 'framer-motion';

//components
import ApplicationArea from './ApplicationArea';
import TitleUnderlineCircuit from '../Titles/TitleUnderlineCircuit';

//styles
import '../../assets/styles/components/ApplicationAreas/ApplicationAreas.css';

//images
import appAreaEducation from '../../assets/static/App-Area-Educacion.svg';
import appAreaAuquitectura from '../../assets/static/App-Area-Auquitectura.svg';
import appAreaTurismo from '../../assets/static/App-Area-Turismo.svg';
import appAreaVideojuegos from '../../assets/static/App-Area-Videojuegos.svg';
import appAreaPublicidad from '../../assets/static/App-Area-Publicidad.svg';
import appAreaBienes from '../../assets/static/App-Area-Bienes-Raices.svg';
import appAreaSalud from '../../assets/static/App-Area-Salud.svg';

const ApplicationAreas = () => {
    const AplicationAreasList = [
        {
            "image":appAreaEducation,
            "title":"Educación",
            "description":"Contribuye a mejorar la experiencia de docentes y alumnos, incrementando así la interactividad y calidad de la enseñanza en los diferentes niveles educativos.",
        },
        {
            "image":appAreaAuquitectura,
            "title":"Arquitectura",
            "description":"Pueden presentar propuestas muy visuales de todo tipo de construcciones, también permite simular de forma tridimensional distintas versiones de un mismo edificio.",
        },
        {
            "image":appAreaTurismo,
            "title":"Turismo",
            "description":"Ayuda al viajero a moverse y desenvolverse mejor en las ciudades y pueblos, obteniendo todo tipo de información sobre los elementos del entorno",
        },
        {

            "image":appAreaVideojuegos,
            "title":"Videojuegos",
            "description":"Existen numerosos videojuegos basados en esta técnica que, a través de gafas 3D o sin ellas, permiten al jugador interactuar con el mundo real y con el propio juego a la vez.",
        },
        {
            "image":appAreaPublicidad,
            "title":"Publicidad",
            "description":"Son especialmente útiles para generar momentos WOW y tratar de hacer que la experiencia de compra y de interacción con los productos sea única.",
        },
        {
            "image":appAreaBienes,
            "title":"Bienes raíces",
            "description":"Puede mostrar viviendas, edificios, locales y más con la realidad aumentada. Todos los que deseen comprar o alquilar pueden tener una experiencia interactiva.   ",
        },
        {
            "image":appAreaSalud,
            "title":"Salud",
            "description":"Ayuda a derribar barreras, permitiendo que los médicos puedan atender y tratar a pacientes localizados a kilómetros de distancia.",
        }
    ];
    return(
        <React.Fragment>
            <motion.div layout className="application-areas">
                <TitleUnderlineCircuit
                    title="ÁREAS DONDE SE PUEDE APLICAR REALIDAD AUMENTADA"
                />
                <p>la realidad aumentada está presente e influye en distintos aspectos de nuestra vida. Estos son solo algunos de los más destacados:</p>
                <div className="application-areas--container">
                    {AplicationAreasList.map((item, index) => (
                        <ApplicationArea key={index} data={item}/>
                    ))}
                </div>
            </motion.div>
        </React.Fragment>
    )
}

export default ApplicationAreas;