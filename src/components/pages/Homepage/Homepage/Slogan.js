import React from 'react';

function Slogan() {
    return (
        <div className="text-white text-center p-4 my-4 rounded" style={{ backgroundColor: 'rgba(213, 168, 54, 1)' }}>
            <p className="lead" style={{ fontFamily: '"Lato", sans-serif' }}>Empowering the next generation of innovators and thinkers</p>
            {/* Replace button text and class based on the action you choose */}
            <button className="btn btn-light mt-3">Learn More</button>
        </div>
    );
}

export default Slogan;
