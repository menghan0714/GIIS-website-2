import React from 'react';
import Nav from './Nav';
import logo_slogan from '../../img/logo_slogan.png';
import { Link } from 'react-router-dom';
import styles from './Header.module.css'; // Custom styles for specific adjustments

function Header() {
    return (
        <header className={`${styles.header}`}>
            {/* First row for logo and buttons */}
            <div className="row align-items-center">
                <div className="col-8 d-flex align-items-center">
                    <Link to="/">
                        <img src={logo_slogan} alt='Excel High School Logo' className={`img-fluid ${styles.logoImage}`} />
                    </Link>
                </div>
                <div className="col-2 d-flex justify-content-center">
                    {/* You can put something here or leave it empty */}
                    <Link to="/contact" className="btn btn-link px-2">Contact Us</Link>
                </div>
                <div className="col-2 d-flex justify-content-end">
                    <Link to="/request-info" className={`btn btn-primary ${styles.requestInfoButton}`}>REQUEST INFO</Link>
                </div>
            </div>

            {/* Second row exclusively for Nav */}
            <div className="row">
                <Nav />
            </div>
        </header>
    );
}

export default Header;