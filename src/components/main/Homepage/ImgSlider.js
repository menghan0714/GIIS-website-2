import React from 'react';
import Slider from 'react-slick';
import purdue_campus from '../../../img/Homepage/purdue_campus.jpg';
import upenn_campus from '../../../img/Homepage/upenn_campus.jpg';

function ImgSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    // Array of image sources
    const images = [
        { src: purdue_campus, alt: 'Purdue University campus' },
        { src: upenn_campus, alt: 'University of Pennsylvania campus' }
    ];

    return (
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
            <Slider {...settings}>
                {images.map((image, index) => (
                    <div key={index}>
                        <img src={image.src} alt={image.alt} style={{ width: "100%", display: 'block' }} />
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default ImgSlider;
