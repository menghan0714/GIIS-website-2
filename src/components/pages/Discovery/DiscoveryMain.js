import React from 'react';
import Nav from './DiscoveryHeader/Nav.js';
import ImgSlider from '/Homepage/ImgSlider.js';

function DiscoveryMain({ language }) {
   return (
    <>
        <div className="row">
            <Nav language={language} />
        </div>

        <div className="card mb-1" id="homepage">
            <div className="container">
                <ImgSlider />
            </div>
        </div>

    </>
  );
}

export default DiscoveryMain;

