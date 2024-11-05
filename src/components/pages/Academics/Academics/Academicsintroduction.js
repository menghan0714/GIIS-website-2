import React from 'react';

function Academicsintroduction({ language }) {

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
        color: 'rgba(255, 255, 255, 0.7)',
        width: '100%',
        paddingLeft: '15%',
        fontFamily: 'Inter, sans-serif',
        fontWeight: 'bold',
        fontSize: '35px',
        lineHeight: '1',
    };


    const textStyle = {
    position: 'relative',
    paddingLeft: '25px',  // 調整小點點和文字的間距
    };
    
     const containerheading = {
        marginTop: '70px',
        color: 'rgba(255, 255, 255, 0.8)',
        width: '100%',
        paddingLeft: '15%',
        fontFamily: 'Inter, sans-serif',
        fontWeight: 'normal',
        fontSize: '30px',
        lineHeight: '1',
    };

    const container = {
      marginTop: '30px',
      width: '80%',
      paddingLeft: '16%',
      height: '30%',  
      wordWrap: 'break-word',
      color: 'rgba(255, 255, 255, 0.7)',
      fontFamily: 'Arial, sans-serif', 
      fontSize: '25px',
    };

    return (
      <>
        <div style={headlineStyle}>
          <p>WHAT MAKES GIIS</p>
          <p>DIFFERENT? </p>
        </div>

        <div style={introductionStyle}>
          <p>The GIIS Differnce</p>     
        </div>

        <div style={containerheading}>
            {language === 'zh' ? (
                    <p style={textStyle}>
                        <span style={{ position: 'absolute', left: '0' }}>•</span> 双学位与跨领域学习
                    </p>
                ) : (
                    <p style={textStyle}>
                        <span style={{ position: 'absolute', left: '0' }}>•</span> Dual Degrees and Interdisciplinary Learning
                    </p>
                )}
        </div>

         <div style={container}>
             {language === 'zh' ? (
                    <p>
                        我们提供双学位课程，让学生可以从不同的学院获得学位，提升他们的学术和职业竞争力。跨领域学习同时有助于学生建立广泛的知识基础和跨学科的思维能力
                    </p>
                ) : (
                    <p>
                        We offer dual degree programs, allowing students to earn degrees from different institutions, enhancing their academic and career competitiveness. Interdisciplinary learning also helps students develop a broad knowledge base and cross-disciplinary thinking.
                    </p>
                )}
         </div>

        <div style={containerheading}>
            {language === 'zh' ? (
                    <p style={textStyle}>
                        <span style={{ position: 'absolute', left: '0' }}>•</span> 人工智慧与先进技术的沉浸式学习
                    </p>
                ) : (
                    <p style={textStyle}>
                        <span style={{ position: 'absolute', left: '0' }}>•</span> Immersive Learning with AI and Advanced Technologies
                    </p>
                )}
        </div>
      </>
   );
}

export default Academicsintroduction;
