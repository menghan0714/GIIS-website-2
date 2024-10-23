import React from 'react';
import img from '../../../../img/cognia.png';

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
      marginTop: '65px',
      width: '80%',
      paddingLeft: '15%',
      height: '30%',  
      wordWrap: 'break-word',
      color: 'rgba(255, 255, 255, 0.8)',
      fontFamily: 'Arial, sans-serif', 
      fontSize: '25px',
    };

    const lineStyle = {
        position: 'absolute',
        width: '30%', // Adjust width according to your needs
        height: '2px',
        backgroundColor: 'rgba(255, 255, 255, 0.85)', 
        paddingLeft: '15%',
        marginTop: '35px',
        margin: '30px 0',
    };

   const container2 = {
      position: 'relative',
      marginTop: '100px',
      width: '80%',
      paddingLeft: '15%',  
      height: '30%',
      wordWrap: 'break-word',// 父元素高度
      color: 'rgba(255, 255, 255, 0.8)',
      fontFamily: 'Arial, sans-serif', /* 可選：字體樣式 */
      fontSize: '25px',
    };

    const container3 = {
      marginTop: '50px',
      width: '80%',
      paddingLeft: '15%',
      height: '300px',  
      wordWrap: 'break-word',// 父元素高度
      color: 'rgba(255, 255, 255, 0.8)',
      fontFamily: 'Arial, sans-serif', /* 可選：字體樣式 */
      fontSize: '25px',
    };


  const containerStyle = {
        display: 'flex',
        justifyContent: 'center', // 水平居中
        width: '100%',
        marginBottom: '50px',
    };

    const imageStyle = {
        width: '13%', // 保持容器的寬度
        height: '13%', // 固定高度
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

        <div style={container2}>
           {language === 'zh' ? (
                    <p>
                        我們的學校目前正在申請 Cognia 認證，Cognia 是一個全球知名的非營利組織，致力於通過嚴格的標準提升教育品質。這項認證工作反映了我們對實現教育卓越的不懈承諾。
                    </p>
                ) : (
                    <p>
                        Our school is currently in the process of applying for accreditation from Cognia, a globally recognized nonprofit organization dedicated to enhancing educational quality through rigorous standards. This accreditation effort reflects our unwavering commitment to achieving educational excellence.

                    </p>
                )}
         </div>
        <div style={container3}>
           {language === 'zh' ? (
                    <p>
                        通過參與 Cognia 全面的評估過程，我們旨在不斷改進並確保我們的教育實踐符合國際標準，從而提升學生的學習環境和成果。
                    </p>
                ) : (
                    <p>
                        By engaging with Cognia's comprehensive evaluation process, we aim to continuously improve and ensure that our educational practices align with international standards, thereby enhancing the learning environment and outcomes for our students.

                    </p>
                )}
         </div>

        <div style={containerStyle}>
          <img src={img} alt="Cognia" style={imageStyle} />
        </div>
      </>
   );
}

export default discoveryIntroduction;
