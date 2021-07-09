import React from 'react';

//styles
import '../../assets/styles/components/Email/Email.css';
import '../../assets/styles/components/Buttons/Small-Purple-Button.css';

//icons
// import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";

const Email = () => {
    return(
        <React.Fragment>
            <form
                action=""
                className="email"
            >
                <div className="email-form--input-container">
                    <input
                        type="text"
                        placeholder="Nombre"
                        name="name"
                        required
                        // onChange={updateField}
                        // value={emailMessage.name}
                    />
                    {/* { emailMessage.nameError && <span className="error-form-field">{emailMessage.nameError}</span>} */}
                </div>
                <div className="email-form--input-container">
                    <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        required
                        // onChange={updateField}
                        // value={emailMessage.email}
                    />
                    {/* { emailMessage.emailError && <span className="error-form-field">{emailMessage.emailError}</span>} */}
                </div>
                <div className="email-form--input-container">
                    <textarea
                        cols="30"
                        rows="10"
                        name="message"
                        required
                        // onChange={updateField}
                        // value={emailMessage.message}
                    ></textarea>
                    {/* { emailMessage.messageError && <span className="error-form-field">{emailMessage.messageError}</span>} */}
                </div>
                <input
                    type="submit"
                    className="small-purple-button"
                    value="ENVIAR"
                />
                {/* { emailMessage.cargandoEmail &&
                    <span className="center margin-top-4">
                        <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
                    </span>
                }
                { emailMessage.exitoEmail &&
                    <span className="circular-icon center margin-top-4">
                        <AiFillCheckCircle className="check-icon"/> 
                    </span>
                }
                { emailMessage.errorEmail &&
                    <span className="circular-icon center margin-top-4">
                        <AiFillCloseCircle className="wrong-icon"/> 
                    </span>
                } */}
            </form>
        </React.Fragment>
    )
}

export default Email;