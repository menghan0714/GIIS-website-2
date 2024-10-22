import React from 'react';
import styles from './discoveryIntroduction.css';


function discoveryIntroduction({ language }) {

    const headlineStyle = {
        marginTop: '115px',
        color: 'white',
        width: '100%',
        paddingLeft: '20%',
        fontFamily: 'Inter, sans-serif',
        fontWeight: 'bold',
        fontSize: '60px',
        lineHeight: '1',
    };

    const introductionStyle = {
        marginTop: '80px',
        color: 'rgba(255, 255, 255, 0.8)',
        width: '100%',
        paddingLeft: '20%',
        fontFamily: 'Inter, sans-serif',
        fontWeight: 'bold',
        fontSize: '35px',
        lineHeight: '1',
    };

    const textBox = {
     marginTop: '100px',
     width: '400px',  /* 設置固定寬度 */
     height: '300px', /* 設置固定高度 */
     padding: '10px',
     border: '1px solid #ccc',
     overflowY: 'auto', /* 當文字超出範圍時顯示滾動條 */
     wordWrap: 'break-word', /* 自動換行過長的字詞 */
     color: 'rgba(255, 255, 255, 0.8)', /* 可選：文字顏色 */
     fontFamily: 'Arial, sans-serif', /* 可選：字體樣式 */
    };


    
 
    return (
      <>
        <div style={headlineStyle}>
     
          <p>GENESIS OF IDEAS</p>
          <p>INTERNATIONAL SCHOOL</p>
     
        </div>

        <div style={introductionStyle}>
          <p>9-12 Online School</p>     
        </div>
        
        <div style={textBox}> 
            {language === 'zh' ? (
                    <p>
                        GIIS 是一所完全線上的全球化現代教育機構，致力於提供世界一流的教育，吸引來自世界各地的優秀學生。我們的教育模式打破了傳統教育的地理限制，讓學生能夠隨時隨地獲取頂尖的教育資源。
                    </p>
                ) : (
                    <p>
                        GIIS is a fully online, globalized modern institution dedicated to providing world-class education, attracting elite students from around the world. Our educational model breaks the geographical constraints of traditional education, allowing students to access top-notch educational resources anytime, anywhere.
                    </p>
                )}
      </>
   );
}

export default discoveryIntroduction;
