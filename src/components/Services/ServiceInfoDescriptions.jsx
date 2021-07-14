import React from 'react';

//styles
import '../../assets/styles/components/Services/ServiceInfoDescriptions.css';

const ServiceItemWebApp = () => {
    return(
        <React.Fragment>
            <div className="service-description-section">
                <h3>¿Por qué tener un sitio web?</h3>
                <p>Los <b>potenciales clientes</b> de una empresa o negocio ahora recurren a Internet antes de realizar una compra ya sea de un producto o servicio que necesitan. Si una pequeña o mediana empresa (Pyme) cuenta con un sitio web profesional administrable, podrá garantizar su presencia en el entorno digital y así atraer prospectos</p>
            </div>
            <div className="service-description-section">
                <h3>Ventaja competitiva para Pymes y emprendimientos</h3>
                <p>Un sitio web profesional para Pymes ofrece un sinnúmero de diferentes <b>ventajas competitivas</b> y necesarias porque mientras algunos negocios pequeños e incluso medianos desisten de la idea de tener una página web, su competencia aprovecha ese vacío para ganar terreno y, por consiguiente, incrementan a mayor velocidad su cartera de clientes. </p>
            </div>
        </React.Fragment>
    )
}

const ServiceItemAR = () => {
    return(
        <React.Fragment>
            <div className="service-description-section">
                <h3>¿Realidad Aumentada?</h3>
                <p>
                    La <b>Realidad Aumentada</b> es una herramienta que permite añadir información virtual dentro de la realidad física a través de la pantalla del celular usando la cámara.
                </p>
                <p>
                    Esto aporta un conocimiento relevante y diferente sobre nuestro entorno al darnos datos importantes de un tema para que quede impreso en nuestra memoria mediante una experiencia muy placentera y divertida.
                </p>
            </div>
            <div className="service-description-section">
                <h3>Beneficios de aplicar la RA en tu negocio</h3>
                <p>
                    La <b>Realidad Aumentada</b> se ha transformado en un nuevo canal de comunicación para estimular la conexión entre clientes y empresas que también permite interactuar en tiempo real con productos, servicios y experiencias.
                </p>
                <p>
                    La <b>Realidad Aumentada</b> está aquí para quedarse, no se trata de una tendencia de corta duración. Es más, en los próximos años formará parte de cualquier estrategia de marketing, igual como lo hacen en la actualidad las redes sociales.
                </p>
            </div>
        </React.Fragment>
    )
}

const ServiceItemPWA = () => {
    return(
        <React.Fragment>
            <div className="service-description-section">
                <h3>¿Qué son las Progressive Web Apps?</h3>
                <p>Una <b>Progressive Web App (PWA)</b> es un híbrido entre una aplicación móvil y una página web, fusionando las mejores funcionalidades de ambas soluciones.</p>
            </div>
            <div className="service-description-section">
                <h3>¿Por qué aplicar una PWA a mi negocio?</h3>
                <p>
                    Con cada año que pasa, los usuarios esperan acceso más directo a las aplicaciones que les interesan. Por eso, para lograr una mayor retención, conviene reducir la cantidad de pasos que separan al usuario del servicio que les ofreces.
                </p>
                <p>
                    Para descargar una aplicación, un usuario debe realizar varias acciones. Deben enterarse de ella, encontrarla en una tienda de aplicaciones, esperar a que se descargue, instalarla y, finalmente, usarla. A veces puede haber un paso extra de configuración por parte del usuario. En cambio, un usuario puede acceder a todos los beneficios de las <b>PWA</b> tan pronto como llega a tu página web móvil.
                </p>
            </div>
        </React.Fragment>
    )
}

export {ServiceItemWebApp,ServiceItemAR,ServiceItemPWA};