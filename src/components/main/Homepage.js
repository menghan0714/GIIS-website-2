import React from 'react';
import ImgSlider from './Homepage/ImgSlider.js';
import Slogan from './Homepage/Slogan';
import Introduction from './Homepage/Introduction';
import CogniaAccreditation from './Homepage/CogniaAccreditation.js';
// import Video from './Homepage/Video';
// import Accredited from './Homepage/Accredited';
import Faculty_Graduates from './Homepage/Faculty_Graduates.js';
import ContactUs from './Homepage/ContactUs';

function Homepage() {
    return (
        <>
            <ImgSlider />
            <Slogan />
            <Introduction />
            <CogniaAccreditation />
            <Faculty_Graduates />
            <ContactUs />

        </>


    );
}

export default Homepage;
