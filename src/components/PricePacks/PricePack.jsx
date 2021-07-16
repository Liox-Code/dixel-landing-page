import React, {useState, useEffect} from 'react';
import { motion, AnimatePresence } from 'framer-motion';

//styles\
import '../../assets/styles/components/PricePacks/PricePack.css';

//icons
import { GoChevronUp, GoChevronDown, GoPrimitiveDot } from "react-icons/go";

//animation
import { transitionOpen } from '../../animations/PricePack';

const PricePack = (props) => {
    const { title, description, packBenefits, price, style} = props.packData;
    const { startOpen } = props
    const [ state, setState] = useState({
        open: ((window.innerWidth >= 800) || startOpen),
        screenWidth: window.innerWidth,
    });
    const { open, screenWidth } = state;

    useEffect(() => {
        const handleResize = () => {
            setState({
                open: ((window.innerWidth >= 800) || startOpen),
                screenWidth: window.innerWidth,
            });
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [startOpen])

    const handleToggleOpen = () => {
        setState({
            ...state,
            open: !open,
        });
    }

    return(
        <React.Fragment>
                <motion.div layout className={`price-pack--container ${style}`}>
                    <motion.div layout className={`price-pack--header ${open && "price-pack--bottom-border"}`} onClick={(screenWidth < 800) ? handleToggleOpen : undefined}>
                        {title}
                        {(screenWidth < 800) && (
                            open ?
                                <GoChevronUp className="price-pack--arrow" onClick={handleToggleOpen}/>
                                :
                                <GoChevronDown className="price-pack--arrow" onClick={handleToggleOpen}/>
                        )}
                    </motion.div>
                    <AnimatePresence>
                        { open &&
                            <React.Fragment>
                                <motion.div
                                    className="price-pack--content"
                                    layout
                                    initial="initial"
                                    animate="animate"
                                    exit="exit"
                                    variants={transitionOpen}
                                >
                                    <p>{description}</p>
                                    <ul className="price-pack--list">
                                        {
                                            packBenefits.map( (packItem, index) => (
                                                <li key={index}><GoPrimitiveDot className="price-pack--dot"/>{packItem}</li>
                                            ))
                                        }
                                    </ul>
                                </motion.div>
                                <motion.div layout className="price-pack--price">
                                    {price}
                                </motion.div>
                            </React.Fragment>
                        }
                    </AnimatePresence>
                </motion.div>
        </React.Fragment>
    )
}

export default PricePack;