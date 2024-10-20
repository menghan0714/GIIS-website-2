import React from 'react';
import Nav from './DiscoveryHeader/Nav.js';
import img from '../../../img/Homepage/homepage3.png';

function DiscoveryMain({ language }) {

    const containerStyle = {
        display: 'flex',
        justifyContent: 'center', // 水平居中
        marginTop: '0' // 與導航欄保持距離
    };

    const imageStyle = {
        width: '100%',
        height: '600px'
    };
   
   return (
    <>
        <div className="row">
            <Nav language={language} />
        </div>
      
        <div style={containerStyle}>
          <img src={img} alt="Discovery" style={imageStyle} />
        </div>
    </>
  );
}

export default DiscoveryMain;

