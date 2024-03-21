import React, { useState, useEffect } from 'react';
import logo from '../../img/logo.png';
function Nav() {
    const [isNavSticky, setIsNavSticky] = useState(false);
    const handleNavClick = (e) => {
        e.preventDefault();
        const target = e.target.getAttribute('href').substring(1);
        const targetElement = document.getElementById(target);
        if (targetElement) {
            const targetOffsetTop = targetElement.offsetTop;
            window.scrollTo({
                top: targetOffsetTop,
                behavior: 'smooth'
            });
        }
    };

    const handleBrandClick = (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

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
        <nav className={`nav bg-success-subtle ${isNavSticky ? 'sticky' : ''}`}>
            <a className="navbar-brand" href="/" onClick={handleBrandClick}>
                <img src={logo} alt='logo' width="125px" height="125px" />
            </a>


            <ul className="nav justify-content-end">
                <li className="nav-item">
                    <a className="nav-link" href="#aboutus" onClick={handleNavClick}>About Us</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#ourprograms" onClick={handleNavClick}>Our Programs</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#enrollment" onClick={handleNavClick}>Enrollment</a>
                </li>

            </ul>
        </nav>

    );
}

export default Nav;
