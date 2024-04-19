import React from 'react';
import ImgSlider from './Homepage/ImgSlider.js';
import Slogan from './Homepage/Slogan';
import Introduction from './Homepage/Introduction';
import CogniaAccreditation from './Homepage/CogniaAccreditation.js';
import Testimonial from './Homepage/Testimonial.js';
import FacultyGraduates from './Homepage/FacultyGraduates.js';
import ContactForm from './Homepage/ContactForm';

function Homepage() {
    return (
        <>
            <ImgSlider />
            <Slogan />
            <Introduction />
            <CogniaAccreditation />
            <Testimonial />
            <FacultyGraduates />
            <ContactForm />

        </>


    );
}

export default Homepage;
