import React from 'react';
import Slider from './Homepage/Slider';
import Introduction from './Homepage/Introduction';
import Programs from './Homepage/Programs.js';
// import Video from './Homepage/Video';
// import Accredited from './Homepage/Accredited';
import TeacherAndGraduates from './Homepage/TeacherAndGraduates';
import ContactUs from './Homepage/ContactUs';

function Homepage() {
    return (
        <>
            <Slider />
            <Introduction />
            <Programs />
            {/* <Video />
            <Accredited /> */}
            <TeacherAndGraduates />
            <ContactUs />

        </>


    );
}

export default Homepage;
