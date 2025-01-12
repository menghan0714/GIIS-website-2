import React, { useState,uesEffect} from 'react';
import styles from './Footer.module.css';

function Footer() {
    const [isLandscape, setIsLandscape] = useState(window.matchMedia('(orientation: landscape)').matches);

    useEffect(() => {
        
     const handleOrientationChange = () => {
         setIsLandscape(window.matchMedia('(orientation: landscape)').matches);
        };

     window.addEventListener('resize', handleOrientationChange);

     return () => {
        window.removeEventListener('resize', handleOrientationChange);
      };
   }, []);
    
    return (
        <footer className={`${isLandscape ? styles.leftSlideMenu2 : styles.leftSlideMenu} ${isLandscape ? styles.leftSlideMenu2 : styles.leftSlideMenu}`>
            Copyright&copy; {new Date().getFullYear()} Genesis of Ideas International School. All rights reserved.
        </footer>
    )
}
export default Footer;
