import React from 'react';
import Slider from 'react-slick';
import purdue_logo from '../../../img/Homepage/SchoolLogo/purdue_logo.png';
import upenn_logo from '../../../img/Homepage/SchoolLogo/upenn_logo.png';
import utaustin_logo from '../../../img/Homepage/SchoolLogo/utaustin_logo.png';
import nthu_logo from '../../../img/Homepage/SchoolLogo/nthu_logo.png';

function FacultyGraduates() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true
    };

    const logos = [
        { src: purdue_logo, alt: "Purdue University" },
        { src: upenn_logo, alt: "University of Pennsylvania" },
        { src: utaustin_logo, alt: "University of Texas at Austin" },
        { src: nthu_logo, alt: "National Tsing Hua University" }
    ];

    return (
        <section className="school-logos">
            <div className="container">
                <Slider {...settings}>
                    {logos.map((logo, index) => (
                        <div key={index} className="logo-slide">
                            <img src={logo.src} alt={logo.alt} className="img-fluid" />
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
}

export default FacultyGraduates;
