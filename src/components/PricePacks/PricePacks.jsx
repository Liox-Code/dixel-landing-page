import React from 'react';
import { motion } from 'framer-motion';

//components
import TitleUnderlineCircuit from '../Titles/TitleUnderlineCircuit';
import PricePack from '../PricePacks/PricePack';

//styles\
import '../../assets/styles/components/PricePacks/PricePacks.css';

const PricePacks = (props) => {
    const listPacks = [
        {
            "id": "1",
            "title": <h3>Dixel Web AR Básico</h3>,
            "description": "Los modelos 3D son cotizados según la cantidad y complejidad que se requiera incluir.",
            "packBenefits": [
                "Diseño Web a medida",
                "Diseño Responsive",
                "Formulario de contacto",
                "Mapa de ubicación",
                "Sección servicios",
                "Sección AR",
                "Aplicación Web",
            ],
            "price": "850 Bs.",
            "style": "basic-pack"
        },
        {
            "id": "2",
            "title": <h3>Dixel Emprendedor</h3>,
            "description": "Desarrollado en Wordpress, con todo lo necesario para impulsar tu emprendimiento.",
            "packBenefits": [
                "Template Básico",
                "Pag. Inicio",
                "Pag. Blog",
                "Pag. Servicios o Productos",
                "Pag. Nosotros",
                "Pag. Contacto",
                "Formulario de contacto",
                "Mapa de ubicación",
            ],
            "price": "500 Bs.",
            "style": "normal-pack"
        },
        {
            "id": "3",
            "title": <h3>Dixel Catálogo Online</h3>,
            "description": "Desarrollado con Wordpress, para mostrar tu catálogo de productos disponibles a tus clientes.",
            "packBenefits": [
                "Template Básico",
                "Pag. Inicio",
                "Pag. Blog",
                "Pag. Servicios",
                "Pag. Nosotros",
                "Pag. Contacto",
                "Formulario de contacto",
                "Mapa de ubicación",
                "Catálogo/Galería de productos o servicios",
            ],
            "price": "800 Bs.",
            "style": "normal-pack"
        },
        {
            "id": "4",
            "title": <h3>Dixel Tienda Virtual</h3>,
            "description": "Desarrollado con Wordpress, digitaliza tu negocio y preparalo para el mundo digital.",
            "packBenefits": [
                "Template Básico",
                "Pag. Inicio",
                "Pag. Blog",
                "Pag. Servicios",
                "Pag. Nosotros",
                "Pag. Contacto",
                "Formulario de contacto",
                "Mapa de ubicación",
                "Sección de productos",
                "Carrito de compras",
            ],
            "price": "1400 Bs.",
            "style": "normal-pack"
        },
        {
            "id": "5",
            "title": <h3>Dixel Emprendedor <span>+</span></h3>,
            "description": "Desarrollado en Wordpress, con todo lo necesario para impulsar tu emprendimiento.",
            "packBenefits": [
                "Template a medida",
                "Pag. Inicio",
                "Pag. Blog",
                "Pag. Servicios o Productos",
                "Pag. Nosotros",
                "Pag. Contacto",
                "Formulario de contacto",
                "Mapa de ubicación",
            ],
            "price": "desde 1250 Bs.",
            "style": "plus-pack"
        },
        {
            "id": "6",
            "title": <h3>Dixel Catálogo Online <span>+</span></h3>,
            "description": "Desarrollado con Wordpress, para mostrar tu catálogo de productos disponibles a tus clientes.",
            "packBenefits": [
                "Template a medida",
                "Landing Page",
                "Pag. Blog",
                "Pag. Servicios",
                "Pag. Nosotros",
                "Pag. Contacto",
                "Formulario de contacto",
                "Mapa de ubicación",
                "Catálogo/Galería de productos o servicios",
            ],
            "price": "desde 2200 Bs.",
            "style": "plus-pack"
        },
        {
            "id": "7",
            "title": <h3>Dixel Tienda Virtual <span>+</span></h3>,
            "description": "Desarrollado con Wordpress, digitaliza tu negocio y preparalo para el mundo digital.",
            "packBenefits": [
                "Template a medida",
                "Landing Page",
                "Pag. Blog",
                "Pag. Servicios",
                "Pag. Nosotros",
                "Pag. Contacto",
                "Formulario de contacto",
                "Mapa de ubicación",
                "Sección de productos",
                "Carrito de compras",
            ],
            "price": "desde 3450 Bs.",
            "style": "plus-pack"
        },
    ];

    return(
        <React.Fragment>
            <motion.div layout className="price-packs">
                <TitleUnderlineCircuit title="NUESTROS PLANES A TU MEDIDA"/>
                <motion.div layout className="price-pack--first-item">
                    <PricePack packData={listPacks[0]} startOpen={true}/>
                </motion.div>
                <motion.div layout className="price-packs--container">
                    {
                        listPacks.slice(1).map( (pack, index) => (
                            <PricePack key={index} packData={pack} startOpen={false}/>
                        ))
                    }
                </motion.div>
                <motion.div layout className="price-packs--extra-data">
                    <p>
                        * En los planes <b>no se incluye el costo</b> de la compra del Dominio y Hosting.
                    </p>
                    <p>
                        * El <b>IVA no esta incluido</b> en los precios.
                    </p>
                </motion.div>
            </motion.div>
        </React.Fragment>
    )
}

export default PricePacks;