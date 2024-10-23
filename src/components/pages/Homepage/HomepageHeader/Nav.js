import React, { useState, useEffect } from 'react';
import styles from './Nav.module.css'; 
import { Link, useNavigate } from 'react-router-dom';

function Nav({ language }) {
    const [isNavSticky, setIsNavSticky] = useState(false);
    const [isCollapsed, setIsCollapsed] = useState(true); 

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPosition = window.pageYOffset;
            setIsNavSticky(currentScrollPosition > 150);
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
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarLeftMenu" aria-controls="navbarLeftMenu" aria-expanded={!isCollapsed} aria-label="Toggle navigation" onClick={toggleNavbar}>
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className={`collapse navbar-collapse ${!isCollapsed ? 'show' : ''} ${styles.leftSlideMenu}`} id="navbarLeftMenu">
                <ul className={styles.leftSlideItems}>
                  <li onClick={() => navigate("/discovery")}>
                    <Link to="/discovery" onClick={(e) => e.preventDefault()}>
                        {language === 'en' ? 'DISCOVERY' : '发现我们'}
                    </Link>
                  </li>
                  <li onClick={() => navigate("/academics")}>
                    <Link to="/academics" onClick={(e) => e.preventDefault()}>
                        {language === 'en' ? 'ACADEMICS' : '学术'}
                    </Link>
                  </li>
                  <li onClick={() => navigate("/admission")}>
                    <Link to="/admission" onClick={(e) => e.preventDefault()}>
                        {language === 'en' ? 'ADMISSION' : '入学'}
                    </Link>
                  </li>
                  <li onClick={() => navigate("/support")}>
                    <Link to="/support" onClick={(e) => e.preventDefault()}>
                        {language === 'en' ? 'STUDENT SUPPORT' : '学生支持'}
                    </Link>
                  </li>
                </ul>
            </div>
         )}

            <div className={`collapse navbar-collapse ${isCollapsed ? '' : ''}`}>
                <ul className={`navbar-nav ${styles.customnavbar}`}>
                    <li className={styles.navitem}>
                        <a className={styles.navLink} href="/discovery">{language === 'en' ? 'DISCOVERY' : '发现我们'}</a>
                        <ul className={styles.dropdownMenu}>
                            <li>Meet Our School</li>
                            <li>Our Mission</li>
                            <li>About Our Faculty</li>
                        </ul>
                    </li>
                    <li className={styles.navitem}>
                        <a className={styles.navLink} href="/academics">{language === 'en' ? 'ACADEMICS' : '学术'}</a>
                        <ul className={styles.dropdownMenu}>
                            <li>Learning Style</li>
                            <li>Subjects</li>
                            <li>Curriculum Options</li>
                        </ul>
                    </li>
                    <li className={styles.navitem}>
                        <a className={styles.navLink} href="/admission">{language === 'en' ? 'ADMISSION' : '入学'}</a>
                        <ul className={styles.dropdownMenu}>
                            <li>Apply Now</li>
                            <li>Tuition & Fee</li>
                            <li>FAQ</li>
                        </ul>
                    </li>
                    <li className={styles.navitem}>
                        <a className={styles.navLink} href="/support">{language === 'en' ? 'STUDENT SUPPORT' : '学生支持'}</a>
                        <ul className={styles.dropdownMenu}>
                            <li>Academic Advising</li>
                            <li>Life Counseling</li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  );
}
export default Nav; 
