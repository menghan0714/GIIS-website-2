
import React,{ useEffect, useState } from 'react';

function Slogan() {
    const [isMobile, setIsMobile] = useState(window.matchMedia("(max-width: 736px)").matches);

    useEffect(() => {
        // 建立媒體查詢監聽器
        const mediaQuery = window.matchMedia("(max-width: 736px)");
        const handleMediaQueryChange = (e) => setIsMobile(e.matches);

        // 偵測媒體查詢變化
        mediaQuery.addEventListener('change', handleMediaQueryChange);

        // 清理監聽器
        return () => mediaQuery.removeEventListener('change', handleMediaQueryChange);
    }, []);

    const cardStyle = isMobile
        ? {
              position: 'relative',
              width: '100%', // 小於736px時的寬度
              height: '100px', // 高度可以自適應內容
              backgroundColor: 'rgba(213, 168, 54, 1)',
              justifyContent: 'flex-start',
              alignItems: 'center', 
          }
        : {
              width: '100%', // 大於736px時的寬度
              height: 'auto',
              padding: '4rem',
              backgroundColor: 'rgba(213, 168, 54, 1)',
              margin: '0 auto', // 居中
          };

    const paragraphStyle = isMobile
        ? { fontSize: '17px', 
            fontFamily: 'Lato, sans-serif',
            display: 'flex',
            textAlign: 'left',
            lineHeight: '1.3', // 調整行高
        }
        : { fontSize: '1.5rem', fontFamily: '"Lato", sans-serif' };
        

    const buttonStyle = isMobile
        ? { position: 'absolute',
            bottom: '10px', 
            right: '10px', // 距離容器右側 10px
            backgroundColor: 'white', // 按鈕背景顏色
            border: 'none', // 移除邊框
            borderRadius: '4px', // 圓角
            padding: '10px 20px', // 調整按鈕內邊距
            cursor: 'pointer', // 鼠標樣式
            fontSize: '0.9rem', 
          }
        : {
            fontSize: '1rem', 
            marginTop: '1.5rem' 
          };

    return (
        <div className="text-white text-center p-3 my-3 rounded" style={cardStyle} >
            <p className="lead" style={paragraphStyle} >Empowering the next generation of innovators and thinkers</p>
            {/* Replace button text and class based on the action you choose */}
            <button className="btn btn-light mt-3" style={buttonStyle} >Learn More</button>
        </div>
    );
}

export default Slogan;
