import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    const [isNavSticky, setIsNavSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPosition = window.pageYOffset;
            if (currentScrollPosition > 60) {
                setIsNavSticky(true);
            } else {
                setIsNavSticky(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // const scrollToElement = (selector) => {
    //     const targetElement = document.querySelector(selector);
    //     if (targetElement) {
    //         targetElement.scrollIntoView({ behavior: 'smooth' });
    //     }
    // };

    return (
        <nav className={`nav bg-success-subtle ${isNavSticky ? 'sticky' : ''}`}>

            <ul className="nav justify-content-end">
                {/* <li className="nav-item">
                    <Link className="nav-link" to="/#aboutus" onClick={() => scrollToElement('#aboutus')}>About Us</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/#enrollment" onClick={() => scrollToElement('#enrollment')}>Enrollment</Link>
                </li> */}
                <li><Link to="/">HomePage</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/programs">Our Programs</Link></li>
                <li><Link to="/enrollment">Enrollment</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>



            </ul>
        </nav>
    );
}

export default Nav;
