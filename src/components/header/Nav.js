import React, { useState, useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import styles from './Nav.module.css'; // Ensure that the file path is correct

function Nav() {
    const [isNavSticky, setIsNavSticky] = useState(false);
    const [isCollapsed, setIsCollapsed] = useState(true); // State to manage the navbar's collapsed state

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

    const toggleNavbar = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <nav className={`navbar navbar-expand-lg ${isNavSticky ? 'fixed-top' : ''} bg-warning`}>
            <div className={`container-fluid ${styles.navContainer}`}>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContents" aria-controls="navbarSupportedContents" aria-expanded={!isCollapsed} aria-label="Toggle navigation" onClick={toggleNavbar}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${isCollapsed ? '' : 'show'}`} id="navbarSupportedContents">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item"><Link className="nav-link" smooth to="/#homepage">HomePage</Link></li>
                        <li className="nav-item"><Link className="nav-link" smooth to="/#about">About Us</Link></li>
                        <li className="nav-item"><Link className="nav-link" smooth to="/#accreditation">Accreditation</Link></li>
                        <li className="nav-item"><Link className="nav-link" smooth to="/#faculty-graduates">Faculty & Graduates</Link></li>
                        <li className="nav-item"><Link className="nav-link" smooth to="/#contact">Contact Us</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Nav;