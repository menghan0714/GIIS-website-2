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
                   <ul className="customDropdownMenuStudentSupport" style={{ 
                     position: 'absolute', 
                     top: '75px', 
                     left: '0', 
                     minWidth: '315px',  // 這裡可以定義自定義的寬度
                     minHeight: '150px',  // 這裡可以定義自定義的高度
                     backgroundColor: 'rgba(43, 61, 109, 1)', 
                     padding: '10px 0', 
                     boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.2)', 
                     opacity: '0', 
                     visibility: 'hidden', 
                     transition: 'opacity 0.3s ease, visibility 0.3s ease', 
                     borderLeft: '6px solid rgba(213, 168, 54, 1)',
                     listStyle: 'none', 
                     color: '#FFFFFF', 
                     textAlign: 'left', 
                     fontSize: '25px', 
                     paddingLeft: '10px',
                     display: 'flex',
                     flexDirection: 'column',  
                     justifyContent: 'space-between', 
                     height: '100%'
                     }}>
                    <li>Academic Advising</li>
                    <li>Life Counseling</li>
                   </ul>
                  </li>
                 </ul>
            </div>
         </nav>
    );
}

export default Nav;
 
