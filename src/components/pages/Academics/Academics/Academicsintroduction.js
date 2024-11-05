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
        fontWeight: 'regular',
        fontSize: '30px',
        lineHeight: '1',
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
      </>
   );
}

export default Academicsintroduction;
