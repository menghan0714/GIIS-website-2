
import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './Testimonial.module.css';

const Testimonial = () => {
    const [sliderIndex, setSliderIndex] = useState(0);
    const sliderRef = useRef();

    const testimonials = [
        {
            id: 1,
            name: "John Doe",
            comment: "This program has been transformative for my career!",
            photoUrl: "https://oyster.ignimgs.com/mediawiki/apis.ign.com/pokemon-go/f/f3/1.jpg"
        },
        {
            id: 2,
            name: "Jane Smith",
            comment: "Thanks to this school, I've gained skills that set me up for success.",
            photoUrl: "https://oyster.ignimgs.com/mediawiki/apis.ign.com/pokemon-go/f/f3/1.jpg"
        },
        {
            id: 3,
            name: "Alice Johnson",
            comment: "A truly wonderful experience with supportive teachers and engaging material.",
            photoUrl: "https://oyster.ignimgs.com/mediawiki/apis.ign.com/pokemon-go/f/f3/1.jpg"
        },
        {
            id: 4,
            name: "Alice Johnson2",
            comment: "The teaching staff is highly knowledgeable and always available for guidance.",
            photoUrl: "https://oyster.ignimgs.com/mediawiki/apis.ign.com/pokemon-go/f/f3/1.jpg"
        },
        {
            id: 5,
            name: "Bob Lee",
            comment: "The practical skills I've gained have directly impacted my professional development positively.",
            photoUrl: "https://oyster.ignimgs.com/mediawiki/apis.ign.com/pokemon-go/f/f3/1.jpg"
        },
        {
            id: 6,
            name: "Clara Belle",
            comment: "Engaging, informative, and truly empowering! This program has it all.",
            photoUrl: "https://oyster.ignimgs.com/mediawiki/apis.ign.com/pokemon-go/f/f3/1.jpg"
        }
    ];

    const settings = {
        dots: false,  // Turn off default dots
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        afterChange: current => setSliderIndex(current),  // Update index on slide change
        easing: "ease-in-out",  // Add easing for smoother sliding
    };

    const handleScrollbarChange = (event) => {
        const slideIndex = parseInt(event.target.value, 10);
        sliderRef.current.slickGoTo(slideIndex);  // Go to selected slide
    };

    return (
        <div className={styles.testimonialContainer}>
            <Slider ref={sliderRef} {...settings}>
                {testimonials.map((testimonial, index) => (
                    <div key={index} className={styles.testimonialItem}>
                        <img src={testimonial.photoUrl} alt={testimonial.name} className={styles.testimonialPhoto} />
                        <h3>{testimonial.name}</h3>
                        <p>{testimonial.comment}</p>
                    </div>
                ))}
            </Slider>
            <input
                type="range"
                min={0}
                max={testimonials.length - 1}
                value={sliderIndex}
                onChange={handleScrollbarChange}
                className={styles.customScrollbar}
            />
        </div>
    );
};

export default Testimonial;


