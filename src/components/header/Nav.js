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

    return (
        <nav className={`nav ${isNavSticky ? 'sticky' : ''} bg-success-subtle`}>
            <ul className="nav justify-center">
                <li><Link to="/">HomePage</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/acreditation">Acreditation</Link></li>
                <li><Link to="/faculty&Graduates">Faculty & Graduates</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
            </ul>
        </nav>
    );
}

export default Nav;
