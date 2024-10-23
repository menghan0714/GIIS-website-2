import React from 'react';
import img from '../../../../img/cognia.png';
import FacultyGraduates from './FacultyGraduates.js';

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
        marginTop: '60px',
        color: 'rgba(0, 0, 0, 1)',
        width: '60%',
        paddingLeft: '12%',
        fontFamily: 'Inter, sans-serif',
        fontWeight: 'bold',
        fontSize: '55px',
    };

    const container = {
        color: 'rgba(0, 0, 0, 1)',
        width: '90%',
        height: '50%',
        paddingLeft: '12%',
        fontFamily: 'Inter, sans-serif',
        fontSize: '30px',
        wordWrap: 'break-word',
        lineHeight: '1.25',
    };

    const container2 = {
        color: 'rgba(0, 0, 0, 0.8)',
        width: '85%',
        height: '50%',
        paddingLeft: '12%',
        fontFamily: 'Inter, sans-serif',
        fontSize: '25px',
        wordWrap: 'break-word',
    };

    const container3 = {
        marginTop: '40px',
        color: 'rgba(0, 0, 0, 0.8)',
        width: '85%',
        height: '50%',
        paddingLeft: '12%',
        fontFamily: 'Inter, sans-serif',
        fontSize: '25px',
        wordWrap: 'break-word',
    };

    const container4 = {
        marginTop: '40px',
        color: 'rgba(0, 0, 0, 0.8)',
        width: '85%',
        height: '60%',
        paddingLeft: '12%',
        fontFamily: 'Inter, sans-serif',
        fontSize: '25px',
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

        <div style={container3}>
          {language === 'zh' ? (
                    <p>
                        透過密切的師生互動，學生們獲得個性化的指導與支持。我們也強調領導力、全球視野和創業精神的培養，以裝備學生應對未來的挑戰。我們相信，在這樣一個充滿關懷的環境中，學生們將成為具備強烈社會責任感的全球公民。
                    </p>
                ) : (
                    <p>
                        Through close teacher-student interactions, students receive personalized guidance and support. We also emphasize the development of leadership, global vision, and entrepreneurial spirit to equip our students for the challenges of the future. We believe that in this nurturing environment, our students will become global citizens with a strong sense of social responsibility.

                    </p>
                )}
        </div>

        <div style={headlineStyle3}>
          <p>Faculty&Graduates</p>
        </div>
                    
        <div className="container-fluid">
          <div className="card-body">
             <FacultyGraduates />
          </div>
        </div>

        <div style={container4}>
           {language === 'zh' ? (
                    <p>
                        透過密切的師生互動，學生們獲得個性化的指導與支持。我們也強調領導力、全球視野和創業精神的培養，以裝備學生應對未來的挑戰。我們相信，在這樣一個充滿關懷的環境中，學生們將成為具備強烈社會責任感的全球公民。
                    </p>
                ) : (
                    <p>
                        Our faculty and graduates come from leading institutions around the world. This connection to world-class universities not only highlights the excellence of our faculty but also reflects the remarkable achievements of our graduates. We are committed to bringing together experts and scholars from these prestigious institutions to provide our students with the highest-quality educational experience.
                    </p>
                )}
        </div>   
      </>
   );
}

export default discoveryIntroduction2;
