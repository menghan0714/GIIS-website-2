import React from 'react';
import Nav from './Nav';
import logo from '../../img/logo.png';
import { Link } from 'react-router-dom';
import styles from './Header.module.css'; // Custom styles for specific adjustments

function Header() {
    return (
        <header className={`container-fluid ${styles.header}`}>
            <div className="row align-items-center h-100">
                <div className="col-md-6 d-flex justify-content-center">
                    <Link to="/">
                        <img src={logo} alt='logo' className={`img-fluid ${styles.logoImage}`} />
                    </Link>
                </div>
                <div className="col-md-3 d-flex justify-content-center">
                    <div className={`d-flex flex-column align-items-center ${styles.contactInfo}`}>
                        <a href="tel:765-409-9387">Call Us: 765-409-9387</a>
                        <a href="sms:952-295-3698">Text Us: 952-295-3698</a>
                    </div>
                </div>
                <div className="col-md-3 d-flex justify-content-center">
                    <div className={`${styles.navRight}`}>
                        <Link to="/enroll" className="btn btn-primary m-1">ENROLL NOW</Link>
                        <Link to="/login" className="btn btn-secondary m-1">Student Login</Link>
                    </div>
                </div>
            </div>
            <Nav />
            <h1 className={`text-center my-4 ${styles.title}`}>Genesis of Ideas International School</h1>
        </header>
    );
}

export default Header;
