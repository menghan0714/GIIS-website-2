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

             <div className={`collapse navbar-collapse ${isCollapsed ? 'show' : ''}`} id="navbarLeftMenu">
              <ul className={`navbar-nav ${styles.leftSlideMenu}`}>
               <li className={styles.leftMenuItems}>
                 <Link className={styles.menuLink} to="/discovery">{language === 'en' ? 'DISCOVERY' : '发现我们'}</Link>
                 <Link className={styles.menuLink} to="/academics">{language === 'en' ? 'ACADEMICS' : '学术'}</Link>
                <Link className={styles.menuLink} to="/admission">{language === 'en' ? 'ADMISSION' : '入学'}</Link>
                <Link className={styles.menuLink} to="/support">{language === 'en' ? 'STUDENT SUPPORT' : '学生支持'}</Link>
               </li>
              </ul>
             </div>
                  
             <div className={`collapse navbar-collapse ${isCollapsed ? 'show' : ''}`} id="navbarSupportedContents">
               <ul className={`navbar-nav ${styles.customnavbar}`}>
                <li className={styles.navitem}>
                  <Link className={styles.navLink} to="/discovery">{language === 'en' ? 'DISCOVERY' : '发现我们'}</Link>
                  <ul className={styles.dropdownMenu}>
                    <li>Meet Our School</li>
                    <li>Our Mission</li>
                    <li>About Our Faculty</li>
                  </ul>
                </li>
                <li className={styles.navitem}>
                  <Link className={styles.navLink} to="/academics">{language === 'en' ? 'ACADEMICS' : '学术'}</Link>
                  <ul className={styles.dropdownMenu}>
                    <li>Learning Style</li>
                    <li>Subjects</li>
                    <li>Curriculum Options</li>
                  </ul>
                 </li>
                 <li className={styles.navitem}>
                   <Link className={styles.navLink} to="/admission">{language === 'en' ? 'ADMISSION' : '入学'}</Link>
                   <ul className={styles.dropdownMenu}>
                    <li>Apply Now</li>
                    <li>Tuition & Fee</li>
                    <li>FAQ</li>
                   </ul>
                 </li>
                 <li className={styles.navitem}>
                   <Link className={styles.navLink} to="/support">{language === 'en' ? 'STUDENT SUPPORT' : '学生支持'}</Link>
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
