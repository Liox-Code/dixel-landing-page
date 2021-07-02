import React from 'react';

//styles
import '../../assets/styles/components/Carrousel/CarrouselItem.css';

import image from '../../assets/static/bitcoinbaby.jpg';

const CarrouselItem = () => {
    return(
        <React.Fragment>
            <div className="carrousel-item--container">
                <div className="carrousel-item">
                    <img src={image} alt=""/>
                    <h2>Nombre del proyecto a mostrar</h2>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim</p>
                </div>
            </div>
        </React.Fragment>
    )
}

export default CarrouselItem;