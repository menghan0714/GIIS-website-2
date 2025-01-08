import React, { useRef ,useState } from 'react'; // Make sure useRef is included here
import styles from './Testimonial.module.css';

import student1 from '../../../../img/Homepage/StuPhoto/student1.png';
import student2 from '../../../../img/Homepage/StuPhoto/student2.png';
import student3 from '../../../../img/Homepage/StuPhoto/student3.png';


function Testimonial() {
    const [activeTestimonial, setActiveTestimonial] = useState(null);

    const testimonials = [
        {
            id: 1,
            name: "Ananya Rao", 
            feedback: "My experience at this institution has been nothing short of transformative. The supportive faculty fostered an environment that encouraged exploration and innovation, which helped me develop a critical analytical mindset that is invaluable in my current entrepreneurial ventures.",
            image: student1
        },
        {
            id: 2,
            name: "Chen Yu Yan",
            feedback: "The knowledge and support I received from the teaching staff were phenomenal. Their expertise in diverse fields provided a well-rounded education and they were always available to provide guidance, ensuring that I was never lost during my studies.",
            image: student2
        },
        {
            id: 3,
            name: "Haruto Takahashi",
            feedback: "The skills I've developed here, especially in innovative problem-solving and strategic planning, have greatly propelled my career in technology management. The learning environment is unparalleled in its commitment to student success and professional development.",
            image: student3
        },
    ];

    return (
        <div className="testimonial-container">
            {testimonials.map((testimonial) => (
                <div
                    key={testimonial.id}
                    className="testimonial-item"
                    onClick={() =>
                        setActiveTestimonial(
                            activeTestimonial === testimonial.id ? null : testimonial.id
                        )
                    }
                >
                    <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="testimonial-image"
                    />
                    <h3 className="testimonial-name">{testimonial.name}</h3>
                    {activeTestimonial === testimonial.id && (
                        <p className="testimonial-feedback">{testimonial.feedback}</p>
                    )}
                </div>
            ))}
        </div>
    );
}

export default Testimonial;
