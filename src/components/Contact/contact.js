import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function ContactForm() {

    const { formState, setFormState } = useState({ name: '' , email: '', message: '' });

    const [errorMessage, setErrorMessage] = useState('');

    const { name, email, message } = formState;

    function handleChange(e) {

        if (e.target.name === 'email') {

            const isValid = validateEmail(e.target.value);

            if (!isValid) {

                setErrorMessage('Your email is invalid.');

            } else {

                setErrorMessage('');

            }

        } else {

            if (!e.target.value.length) {

                setErrorMessage(`${e.target.name} is required.`);

            } else {

                setErrorMessage('');

            }

        }

        if (!errorMessage) {

            setFormState({ ...formState, [e.target.name]: e.target.value });

        }

    }

    function handleSubmit(e) {

        e.preventDefault();

        console.log(formState);

    }

    return (
        <section class="justify-content-center" id="contact-section">
            <h1 class="contact"> Contact Me </h1>
            <hr></hr>
            <form class="justify-content-center" id="contact-form">
                <div>
                    <label htmlFor="name"> Name: </label>
                    <input class="form-control" type="text" name="name" defaultValue={name} onBlur={handleChange} />
                </div>
                <div> 
                    <label htmlFor="email"> Email address: </label>
                    <input class="form-control" type="email" name="email" defaultValue={email} onBlur={handleChange} />
                </div>
                <div>
                    <label htmlFor="message"> Message: </label>
                    <textarea class="form-control" name="message" rows="8" defaultValue={message} onBlur={handleChange} />
                </div>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}

                <div> 
                <button class="btn btn-primary" data-testid="button" type="submit" onClick={handleSubmit}>Submit</button>
                </div>
            </form>
        </section>
    );
}

export default ContactForm;