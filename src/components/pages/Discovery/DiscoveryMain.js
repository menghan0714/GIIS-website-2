import React from 'react';
import Nav from './DiscoveryHeader/Nav.js';
import img from '../../../img/Homepage/homepage3.png';

function DiscoveryMain({ language }) {

   const imageStyle = {
      width: '80%',
      height: 'auto',
      margin: '10px auto',
      display: 'block';
      justify-content: center;
    };
   
   return (
    <>
        <div className="row">
            <Nav language={language} />
        </div>
      
        <div className="card mb-1" id="discovery">
          <img src={img} alt="Discovery" style={imageStyle} />
        </div>
    </>
  );
}

export default DiscoveryMain;

