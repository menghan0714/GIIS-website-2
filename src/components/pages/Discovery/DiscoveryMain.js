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
        bottom: '-70px', // 固定在圖片底部
        backgroundColor: 'rgba(0, 0, 0, 0.8)', // 半透明黑色背景
        color: 'white',
        width: '35%',
        padding: '10px',
        textAlign: 'center',
        zIndex: '20', 
        fontFamily: 'Inter, sans-serif',
        fontWeight: 'bold',
    };

        const cardStyle = {
        position: 'relative', // 需要設置 position 來使 z-index 生效
        zIndex: '10', // 調整層級
        marginTop: '0', // 保持一些間距
    };
   
   return (
    <>
        <div className="row">
            <Nav language={language} />
        </div>
      
        <div style={containerStyle}>
          <img src={img} alt="Discovery" style={imageStyle} />
          <div style={textOverlayStyle}>
            <h2>DISCOVERY</h2>
            <p>Take the opportunity to freely explore new knowledge and discover your potential.Continuous learning fuels personal growth and innovation.</p>
          </div>
        </div>

       <div className="card mt-0" id="introduction" style={cardStyle}>
         <div className="container">
            <div className="card-body">
             <h3>Discovery</h3>
            </div>
         </div>
       </div>
    </>
  );
}

export default DiscoveryMain;

