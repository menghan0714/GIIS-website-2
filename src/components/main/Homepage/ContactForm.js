import React, { useState } from 'react';

function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = new FormData();
        for (const field in formData) {
            form.append(field, formData[field]);
        }

        const response = await fetch('/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams(formData).toString()
        });

        if (response.ok) {
            console.log('Form successfully submitted');
        } else {
            console.log('Error submitting form');
        }
    };

    return (
        <form name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit}>
            <p>
                <label>Your Name: <input type="text" name="name" value={formData.name} onChange={handleChange} /></label>
            </p>
            <p>
                <label>Your Email: <input type="email" name="email" value={formData.email} onChange={handleChange} /></label>
            </p>
            <p>
                <label>Message: <textarea name="message" value={formData.message} onChange={handleChange}></textarea></label>
            </p>
            <p>
                <button type="submit">Send</button>
            </p>
        </form>
    );
}

export default ContactForm;
