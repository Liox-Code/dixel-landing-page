import React, {useState} from 'react';
import emailjs from 'emailjs-com';

//styles
import '../../assets/styles/components/Email/Email.css';
import '../../assets/styles/components/Buttons/Small-Purple-Button.css';
import '../../assets/styles/icons/Loader.css';
import '../../assets/styles/icons/CheckIcon.css';
import '../../assets/styles/icons/WrongIcon.css';

//icons
import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";

const Email = () => {
    const [emailMessage, setEmailMessage] = useState({
        name: '',
        email: '',
        message: '',
        nameError: '',
        emailError: '',
        messageError: '',
        exitoEmail: false,
        cargandoEmail: false,
        errorEmail: false,
    });

    const enviarEmail = (e) => {
        e.preventDefault();

        setEmailMessage({
            ...emailMessage,
            name: emailMessage.name.trim(),
            email: emailMessage.email.trim(),
            message: emailMessage.message.trim(),
            cargandoEmail: true,
        });
        
        if(emailMessage.name && emailMessage.email && emailMessage.message){
            sendEmail(e);
        }
    }

    const sendEmail = async (e) => {
        emailjs.sendForm('service_email_dixel', 'template_mmekdah', e.target, 'user_9sNblMuv5tKXTJQFdZ9cZ')
        .then((result) => {
            setEmailMessage({
                ...emailMessage,
                exitoEmail: true,
                cargandoEmail: false,
            });
            resetEmailForm(true);
        }, (error) => {
            setEmailMessage({
                ...emailMessage,
                cargandoEmail: false,
                errorEmail: true,
            });
            resetEmailForm(false);
        });
        e.target.reset();
    }

    const resetEmailForm = (reset) => {
        if(reset){
            setTimeout(
                () => {
                    setEmailMessage({
                        ...emailMessage,
                        name: '',
                        email: '',
                        message: '',
                        nameError: '',
                        emailError: '',
                        messageError: '',
                        exitoEmail: false,
                        errorEmail: false,
                    });
                },
                1000
            );
        } else {
            setTimeout(
                () => {
                    setEmailMessage({
                        ...emailMessage,
                        exitoEmail: false,
                        errorEmail: false,
                    });
                },
                1000
            );
        }
    }

    const handleOnChange = e => {
        let errorCampoVacio = '';
        if(!e.target.value){
            errorCampoVacio = 'Campo vacio';
        }

        setEmailMessage({
            ...emailMessage,
            [e.target.name]: e.target.value,
            [e.target.name+'Error']: errorCampoVacio,
        });
    }

    return(
        <React.Fragment>
            <form
                onSubmit={enviarEmail}
                className="email"
            >
                <div className="email-form--input-container">
                    <input
                        type="text"
                        placeholder="Nombre"
                        name="name"
                        required
                        onChange={handleOnChange}
                        value={emailMessage.name}
                    />
                    { emailMessage.nameError && <span className="error-form-field">{emailMessage.nameError}</span>}
                </div>
                <div className="email-form--input-container">
                    <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        required
                        onChange={handleOnChange}
                        value={emailMessage.email}
                    />
                    { emailMessage.emailError && <span className="error-form-field">{emailMessage.emailError}</span>}
                </div>
                <div className="email-form--input-container">
                    <textarea
                        cols="30"
                        rows="10"
                        name="message"
                        required
                        onChange={handleOnChange}
                        value={emailMessage.message}
                    ></textarea>
                    { emailMessage.messageError && <span className="error-form-field">{emailMessage.messageError}</span>}
                </div>
                <button 
                    className="email-submit-button small-purple-button"
                    disabled={(!emailMessage.name || !emailMessage.email || !emailMessage.message || emailMessage.errorEmail || emailMessage.cargandoEmail)}
                    type="submit"
                >
                    { !emailMessage.cargandoEmail ? <span>ENVIAR</span> : <span>ENVIANDO</span> }
                </button>
                { emailMessage.cargandoEmail &&
                    <span className="email-icon">
                        <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
                    </span>
                }
                { emailMessage.exitoEmail &&
                    <span className="email-icon">
                        <AiFillCheckCircle className="check-icon"/> 
                    </span>
                }
                { emailMessage.errorEmail &&
                    <span className="email-icon">
                        <AiFillCloseCircle className="wrong-icon"/> 
                    </span>
                }
            </form>
        </React.Fragment>
    )
}

export default Email;