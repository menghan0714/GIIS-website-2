import React from 'react';
import ImgSlider from './Homepage/ImgSlider.js';
import Slogan from './Homepage/Slogan';
import Introduction from './Homepage/Introduction';
import CogniaAccreditation from './Homepage/CogniaAccreditation.js';
// import Video from './Homepage/Video';
// import Accredited from './Homepage/Accredited';
import FacultyGraduates from './Homepage/FacultyGraduates.js';
import ContactUs from './Homepage/ContactUs';

function Homepage() {
    return (
        <>
            <ImgSlider />
            <Slogan />
            <Introduction />
            <CogniaAccreditation />
            <FacultyGraduates />
            <ContactUs />

        </>


    );
}

export default Homepage;
