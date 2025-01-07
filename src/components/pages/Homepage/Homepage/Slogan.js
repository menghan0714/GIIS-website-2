
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
              width: '100%', // 小於736px時的寬度
              height: '100px', // 高度可以自適應內容
              backgroundColor: 'rgba(213, 168, 54, 1)',
              margin: '0 auto', // 居中
          }
        : {
              width: '100%', // 大於736px時的寬度
              height: 'auto',
              padding: '4rem',
              backgroundColor: 'rgba(213, 168, 54, 1)',
              margin: '0 auto', // 居中
          };

    const paragraphStyle = isMobile
        ? { fontSize: '1rem', fontFamily: '"Lato", sans-serif' }
        : { fontSize: '1.5rem', fontFamily: '"Lato", sans-serif' };
        

    const buttonStyle = isMobile
        ? { fontSize: '0.9rem', marginTop: '1rem' }
        : { fontSize: '1rem', marginTop: '1.5rem' };

    return (
        <div className="text-white text-center p-4 my-4 rounded" style={cardStyle} >
            <p className="lead" style={paragraphStyle} >Empowering the next generation of innovators and thinkers</p>
            {/* Replace button text and class based on the action you choose */}
            <button className="btn btn-light mt-3" style={buttonStyle} >Learn More</button>
        </div>
    );
}

export default Slogan;
