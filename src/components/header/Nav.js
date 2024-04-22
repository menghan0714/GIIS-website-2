import React, { useState, useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import styles from './Nav.module.css'; // Ensure that the file path is correct

function Nav() {
    const [isNavSticky, setIsNavSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPosition = window.pageYOffset;
            setIsNavSticky(currentScrollPosition > 60);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Use Bootstrap classes to apply styles
    return (
        <nav className={`navbar navbar-expand-lg ${isNavSticky ? 'fixed-top' : ''} bg-warning`}>
            <div className={`container-fluid ${styles.navContainer}`}>
                <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                    <li className="nav-item"><Link className="nav-link" smooth to="/#homepage">HomePage</Link></li>
                    <li className="nav-item"><Link className="nav-link" smooth to="/#about">About Us</Link></li>
                    <li className="nav-item"><Link className="nav-link" smooth to="/#accreditation">Accreditation</Link></li>
                    <li className="nav-item"><Link className="nav-link" smooth to="/#faculty-graduates">Faculty & Graduates</Link></li>
                    <li className="nav-item"><Link className="nav-link" smooth to="/#contact">Contact Us</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;
