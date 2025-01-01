import React, { useState, useEffect } from 'react';
import styles from './Nav.module.css'; 
import { Link, useNavigate } from 'react-router-dom';

function Nav({ language }) {
    const [isNavSticky, setIsNavSticky] = useState(false);
    const [isCollapsed, setIsCollapsed] = useState(true); 
    const navigate = useNavigate();
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        document.documentElement.lang = language === 'en' ? 'en' : 'zh';
    }, [language]);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPosition = window.pageYOffset;
            setIsNavSticky(currentScrollPosition > 150);
        };

         const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
       };


        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.addEventListener('resize', handleResize);
        };
    }, []);

    
    const toggleNavbar = () => {
        setIsCollapsed(!isCollapsed);
    };

   return (
    <nav className={`navbar navbar-expand-lg sticky-top ${styles.customBackground}`}>
        <div className={`container-fluid ${styles.navContainer}`}>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarLeftMenu" aria-controls="navbarLeftMenu" aria-expanded={!isCollapsed} aria-label="Toggle navigation" onClick={toggleNavbar}>
                <span className="navbar-toggler-icon"></span>
            </button>

            {isMobile && (
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
                        <ul className={styles.dropdownMenu2}>
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
