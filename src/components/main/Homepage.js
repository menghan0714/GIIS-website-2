import React from 'react';
import ImgSlider from './Homepage/ImgSlider.js';
import Slogan from './Homepage/Slogan';
import Introduction from './Homepage/Introduction';
import CogniaAccreditation from './Homepage/CogniaAccreditation.js';
import Testimonial from './Homepage/Testimonial.js';
import FacultyGraduates from './Homepage/FacultyGraduates.js';
import ContactUs from './Homepage/ContactUs';

function Homepage() {
    return (
        <>
            <ImgSlider />
            <Slogan />
            <Introduction />
            <CogniaAccreditation />
            <Testimonial />
            <FacultyGraduates />
            <ContactUs />

        </>


    );
}

export default Homepage;
