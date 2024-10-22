import React from 'react';

function discoveryIntroduction({ language }) {

    const headlineStyle = {
        marginTop: '115px',
        color: 'white',
        width: '100%',
        paddingLeft: '15%',
        fontFamily: 'Inter, sans-serif',
        fontWeight: 'bold',
        fontSize: '70px',
        lineHeight: '1',
    };

    const introductionStyle = {
        marginTop: '70px',
        color: 'rgba(255, 255, 255, 0.8)',
        width: '100%',
        paddingLeft: '15%',
        fontFamily: 'Inter, sans-serif',
        fontWeight: 'bold',
        fontSize: '35px',
        lineHeight: '1',
    };

    const container = {
      position: 'relative',
      width: '80%',
      paddingLeft: '15%',
      height: '400px',  
      wordWrap: 'break-word',// 父元素高度
      color: 'rgba(255, 255, 255, 0.8)',
      fontFamily: 'Arial, sans-serif', /* 可選：字體樣式 */
      fontSize: '25px',
    };

    const lineStyle = {
        position: 'absolute',
        top: '250px',
        width: '30%', // Adjust width according to your needs
        height: '2px',
        backgroundColor: 'rgba(255, 255, 255, 0.85)',
        margin: '30px 0', // Adds space around the line
        paddingLeft: '15%',
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

        <div style={container}>
            {language === 'zh' ? (
                    <p>
                        GIIS 是一所完全線上的全球化現代教育機構，致力於提供世界一流的教育，吸引來自世界各地的優秀學生。我們的教育模式打破了傳統教育的地理限制，讓學生能夠隨時隨地獲取頂尖的教育資源。
                    </p>
                ) : (
                    <p>
                        GIIS is a fully online, globalized modern institution dedicated to providing world-class education, attracting elite students from around the world. Our educational model breaks the geographical constraints of traditional education, allowing students to access top-notch educational resources anytime, anywhere.
                    </p>
                )}
         <div style={lineStyle}></div>
         </div>
        </div>

      </>
   );
}

export default discoveryIntroduction;
