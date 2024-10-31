import React, { useState, useEffect } from 'react';
import styles from './Nav.module.css'; 
import { Link, useNavigate } from 'react-router-dom';

function Nav({ language }) {
    const [isNavSticky, setIsNavSticky] = useState(false);
    const [isCollapsed, setIsCollapsed] = useState(true); 
    const navigate = useNavigate();

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
                <p>{language === 'en' ? 'DISCOVERY' : '发现我们'}</p>
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
                
              <div className={`collapse navbar-collapse ${isCollapsed ? '' : ''}`}>
               <ul className={`navbar-nav ${styles.customnavbar}`}>
                <p className={`${styles.navitem2} ${styles.navText}`}>{language === 'en' ? 'DISCOVERY' : '发现我们'}</p>
    
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
