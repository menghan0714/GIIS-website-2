import React from 'react';
import img from '../../../../img/cognia.png';

function discoveryIntroduction2({ language }) {

    const headlineStyle = {
        marginTop: '60px',
        color: 'rgba(0, 0, 0, 1)',
        width: '60%',
        paddingLeft: '12%',
        fontFamily: 'Inter, sans-serif',
        fontWeight: 'bold',
        fontSize: '55px',
    };
 
    const headlineStyle2 = {
        marginTop: '60px',
        color: 'rgba(0, 0, 0, 1)',
        width: '60%',
        paddingLeft: '12%',
        fontFamily: 'Inter, sans-serif',
        fontWeight: 'bold',
        fontSize: '55px',
    };


    const headlineStyle3 = {
        marginTop: 'px',
        color: 'rgba(0, 0, 0, 1)',
        width: '60%',
        paddingLeft: '10%',
        fontFamily: 'Inter, sans-serif',
        fontWeight: 'bold',
        fontSize: '40px',
    };

    const container = {
        color: 'rgba(0, 0, 0, 1)',
        width: 90%',
        height: '50%',
        paddingLeft: '12%',
        fontFamily: 'Inter, sans-serif',
        fontSize: '30px',
        wordWrap: 'break-word',
        lineHeight: '1.25',
    };

    const container2 = {
        marginTop: 'px',
        color: 'rgba(0, 0, 0, 0.8)',
        width: '90%',
        height: '50%',
        paddingLeft: '12%',
        fontFamily: 'Inter, sans-serif',
        fontSize: '25px',
        wordWrap: 'break-word',
    };

    const container3 = {
        marginTop: 'px',
        color: 'rgba(0, 0, 0, 1)',
        width: '%',
        height: '%',
        paddingLeft: '10%',
        fontFamily: 'Inter, sans-serif',
        fontWeight: 'bold',
        fontSize: '35px',
        wordWrap: 'break-word',
    };

    
    return (
      <>
        <div style={headlineStyle}>
          <p>Core values</p>
        </div>

        <div style={container}>
          <p>PERSONALIZED LEARNING</p>  
          <p>COMPREHENSIVE DEVELOPMENT</p>
          <p>INTERNATIONAL PERSPECTIVE</p>
        </div>

        <div style={headlineStyle2}>
          <p>Misiion</p>
        </div>

        <div style={container2}>
          {language === 'zh' ? (
                    <p>
                        GIIS的教育理念是啟發潛能並培養領袖。我們重視學生的個人發展和全面成長，提供多樣化的學習機會。透過提供豐富的資源並鼓勵積極探索，我們營造出一個讓學生茁壯成長的學習環境。
                    </p>
                ) : (
                    <p>
                        GIIS's educational philosophy is to inspire potential and cultivate leaders. We prioritize individual student development and overall growth, offering a diverse range of learning opportunities. By providing abundant resources and encouraging active exploration, we foster a learning environment where students can thrive.
                    </p>
                )}
        </div>

        <div style={headlineStyle3}>
          <p> </p>
        </div>

        <div style={container3}>
          <p> </p>
        </div>

        
      </>
   );
}

export default discoveryIntroduction2;
