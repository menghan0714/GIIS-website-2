import React from 'react';
import Nav from './DiscoveryHeader/Nav.js';
import img from '../../../img/Homepage/homepage3.png';

function DiscoveryMain({ language }) {

    const containerStyle = {
        position: 'relative',
        display: 'flex',
        justifyContent: 'center', // 水平居中
        marginTop: '0' // 與導航欄保持距離
    };

    const imageStyle = {
        width: '100%', // 保持容器的寬度
        height: '400px', // 固定高度
        objectFit: 'cover'
    };

        const textOverlayStyle = {
        position: 'absolute',
        bottom: '-30px', // 固定在圖片底部
        backgroundColor: 'rgba(0, 0, 0, 0.7)', // 半透明黑色背景
        color: 'white',
        width: '35%',
        padding: '10px',
        textAlign: 'center'
    };
   
   return (
    <>
        <div className="row">
            <Nav language={language} />
        </div>
      
        <div style={containerStyle}>
          <img src={img} alt="Discovery" style={imageStyle} />
          <div style={textOverlayStyle}>
            <h3>Discovery</h3>
            <p>Genesis of Ideas International School is dedicated to providing students a dynamic learning environment and empowering them with the critical thinking and problem-solving skills.</p>
          </div>
        </div>
    </>
  );
}

export default DiscoveryMain;

