import React, {useState} from 'react';
import { motion, AnimatePresence } from 'framer-motion';

//styles\
import '../../assets/styles/components/PricePacks/PricePack.css';

//icons
import { GoChevronUp, GoChevronDown, GoPrimitiveDot } from "react-icons/go";

//animation
import { transitionOpen } from '../../animations/PricePack';

const PricePack = (props) => {
    const { title, description, packBenefits, price, style} = props.packData;
    const { isOpen } = props
    const [ open, setOpen] = useState(isOpen);

    const HandleToggleOpen = () => {
        setOpen(!open);
        console.log(open);
    }

    return(
        <React.Fragment>
                <motion.div className={`price-pack--container ${style}`} layout>
                    <div className="price-pack--header">
                        {title}
                        {open ?
                            <GoChevronUp className="price-pack--arrow" onClick={HandleToggleOpen}/>
                            :
                            <GoChevronDown className="price-pack--arrow" onClick={HandleToggleOpen}/>
                        }
                    </div>
                    <AnimatePresence>
                        { open &&
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
                        }
                    </AnimatePresence>
                    <div className="price-pack--price">
                        {price}
                    </div>
                </motion.div>
        </React.Fragment>
    )
}

export default PricePack;