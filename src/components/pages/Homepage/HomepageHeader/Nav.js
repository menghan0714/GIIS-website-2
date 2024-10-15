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

    const Navbar = () => {
  // 定義狀態來管理下拉菜單是否顯示
     const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  // 當滑鼠進入和離開時更改狀態
     const handleMouseEnter = () => {
      setIsDropdownVisible(true);
     };

     const handleMouseLeave = () => {
      setIsDropdownVisible(false);
     };

     return (
    <div className="navitem" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <a href="#" className="navLink">STUDENT SUPPORT</a>
      {/* 下拉式菜單 */}
      <ul
        className="customDropdownMenuStudentSupport"
        style={{
          position: 'absolute',
          top: '75px',
          left: '0',
          minWidth: '315px',
          minHeight: '125px',
          backgroundColor: 'rgba(43, 61, 109, 1)',
          padding: '10px 0',
          boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.2)',
          opacity: isDropdownVisible ? 1 : 0, // 使用狀態控制顯示/隱藏
          visibility: isDropdownVisible ? 'visible' : 'hidden',
          transition: 'opacity 0.3s ease, visibility 0.3s ease',
          borderLeft: '6px solid rgba(213, 168, 54, 1)',
          listStyle: 'none',
          color: '#FFFFFF',
          textAlign: 'left',
          fontSize: '25px',
          paddingLeft: '10px'
        }}
      >
        <li>Academic Advising</li>
        <li>Life Counseling</li>
      </ul>
    </div>
  );
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
                 </ul>
            </div>
         </nav>
    );
}

export default Nav;
 
