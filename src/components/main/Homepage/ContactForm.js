import React, { useState } from 'react';

function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Sending form data...', formData);
    };

    return (
        <form onSubmit={handleSubmit} data-netlify="true" name="contact">
            <p>
                <label>您的名字：<input type="text" name="name" value={formData.name} onChange={handleChange} /></label>
            </p>
            <p>
                <label>您的郵箱：<input type="email" name="email" value={formData.email} onChange={handleChange} /></label>
            </p>
            <p>
                <label>留言：<textarea name="message" value={formData.message} onChange={handleChange}></textarea></label>
            </p>
            <p>
                <button type="submit">發送</button>
            </p>
        </form>
    );
}

export default ContactForm;
