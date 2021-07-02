import React from 'react';

//styles
import '../../assets/styles/components/Quotes/Quotes.css';

const Quotes = () => {
    return(
        <React.Fragment>
            <div className="quotes-container">
                <div className="quotes">
                    <p>“El mundo de la realidad tiene sus límites, pero el mundo de la imaginación es ilimitado”</p>
                    <span>Jacques Rousseau</span>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Quotes;