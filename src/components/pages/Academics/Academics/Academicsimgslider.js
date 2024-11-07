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

    return (
        <Slider {...settings}>
            <h2>IGCSE</h2>
            <hr />
            <p>Challenge yourself with the globally recognized Pearson Edexcel International GCSEs.</p>
            <p>These courses provide a comprehensive curriculum, designed to develop students' analytical skills, creativity, and problem-solving abilities across various subjects, preparing them for future academic success.</p>
     
  
            <h2>A-Level</h2>
            <hr />
            <p>Our A-Level courses build on the foundation of IGCSE, providing a rigorous academic experience that sharpens critical thinking, enhances subject mastery, and prepares students for the demands of university-level education. </p>
            <p>With a broad range of subjects to choose from, students can tailor their studies to suit their academic and career aspirations.</p>
       
         
     
            <h2>AP</h2>
            <hr />
            <p>Empower yourself with the globally recognized Advanced Placement  Program. </p>
            <p>Our AP courses are designed to provide students with the opportunity to pursue college-level studies while still in high school. These courses not only prepare students for the AP exams but also foster a deeper understanding of subjects, equipping them with the skills necessary for success in university and beyond.</p>
         
        
        </Slider>
    );
}

export default ImgSlider;
