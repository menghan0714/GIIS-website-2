import React from 'react';
import Nav from './Nav';
import logo_slogan from '../../img/logo_slogan.png';
import { Link } from 'react-router-dom';
import styles from './Header.module.css'; // Custom styles for specific adjustments

function Header() {
    return (
        <header className={`container-fluid ${styles.header}`}>
            <div className="row align-items-center ">
                <div className="col-3 d-flex">
                    <Link to="/">
                        <img src={logo_slogan} alt='logo' className={`img-fluid ${styles.logoImage}`} />
                    </Link>
                </div>
                <div className="col-9 d-flex justify-content-center">
                    <Nav />
                </div>
            </div>
        </header>
    );
}

export default Header;
