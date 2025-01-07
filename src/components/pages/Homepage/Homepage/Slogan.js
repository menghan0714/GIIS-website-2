import React from 'react';
import styles from './Slogan.module.css';

function Slogan() {
    return (
        <div className={`text-white text-center p-4 my-4 rounded ${styles.customCard}`}>
            <p className="lead" style={{ fontFamily: '"Lato", sans-serif' }}>Empowering the next generation of innovators and thinkers</p>
            {/* Replace button text and class based on the action you choose */}
            <button className="btn btn-light mt-3">Learn More</button>
        </div>
    );
}

export default Slogan;
