import React from 'react';

//components
import TitleUnderlineCircuit from '../Titles/TitleUnderlineCircuit';
import PricePack from '../PricePacks/PricePack';

//styles\
import '../../assets/styles/components/PricePacks/PricePacks.css';

const PricePacks = () => {
    return(
        <React.Fragment>
        <div className="price-packs">
            <TitleUnderlineCircuit title="NUESTROS PLANES A TU MEDIDA"/>
            <div className="price-packs--container">
                <PricePack/>
                <PricePack/>
                <PricePack/>
                <PricePack/>
                <PricePack/>
                <PricePack/>
                <PricePack/>
            </div>
            <div className="price-packs--extra-data">
                <p>
                    * En los planes <b>no se incluye el costo</b> de la compra del Dominio y Hosting.
                </p>
                <p>
                    * El <b>IVA no esta incluido</b> en los precios.
                </p>
            </div>
        </div>
        </React.Fragment>
    )
}

export default PricePacks;