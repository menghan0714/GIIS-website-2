import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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

    // Function to import all images starting with 'homepage'
    const importAll = (r) => {
        return r.keys().map((fileName) => ({
            src: r(fileName),
            alt: `Campus scene - ${fileName.split('/').pop().replace(/^discovery/, '').replace(/\.\w+$/, '').replace(/[-_]/g, ' ')}`  // Create a descriptive alt text
        }));
    };


  
    return (
        <Slider {...settings}>
            {images.map((image, index) => (
                <div key={index} className="card-body">
                    <img
                        src={image.src}
                        alt={image.alt}
                        className="d-block h-100"
                        style={{ width: '100%', objectFit: 'cover' }}  // Ensure the image covers the slider area
                    />
                </div>
            ))}
        </Slider>
    );
}

export default ImgSlider;
