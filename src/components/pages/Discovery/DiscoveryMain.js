import React from 'react';
import Nav from './DiscoveryHeader/Nav.js';
import img from '../../../img/Homepage/homepage3.png';

function DiscoveryMain({ language }) {
   return (
    <>
        <div className="row">
            <Nav language={language} />
        </div>
      
        <div className="card mb-1" id="discovery">
          <div className="container">
            <img />
          </div>
        </div>
    </>
  );
}

export default DiscoveryMain;

