import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import styles from './Nav.module.css'; 

function Nav({ language }) {
    const [isNavSticky, setIsNavSticky] = useState(false);
    const [isCollapsed, setIsCollapsed] = useState(true); 

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
        <nav className={`navbar navbar-expand-lg ${isNavSticky ? 'fixed-top' : ''} ${styles.customBackground}`}>
            <div className={`container-fluid ${styles.navContainer}`}>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContents" aria-controls="navbarSupportedContents" aria-expanded={!isCollapsed} aria-label="Toggle navigation" onClick={toggleNavbar}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${isCollapsed ? '' : 'show'}`} id="navbarSupportedContents">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex justify-content-between w-100 ">
                        <li className="nav-item text-center"><Link className={`nav-link ${styles.navLink}`} to="/discovery">{language === 'en' ? 'DISCOVERY' : '发现'}</Link></li>
                        <li className="nav-item text-center"><Link className={`nav-link ${styles.navLink}`} to="/academics">{language === 'en' ? 'ACADEMICS' : '学术'}</Link></li>   
                        <li className="nav-item text-center"><Link className={`nav-link ${styles.navLink}`} to="/admission">{language === 'en' ? 'ADMISSION' : '入学'}</Link></li>
                        <li className="nav-item text-center"><Link className={`nav-link ${styles.navLink}`} to="/support">{language === 'en' ? 'STUDENT SUPPORT' : '学生支持'}</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Nav;
