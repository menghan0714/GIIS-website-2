import React from 'react';
import img from '../../../../img/cognia.png';

function discoveryIntroduction2({ language }) {

    const headlineStyle = {
        marginTop: '53px',
        color: 'rgba(0, 0, 0, 1)',
        width: '60%',
        paddingLeft: '10%',
        fontFamily: 'Inter, sans-serif',
        fontWeight: 'bold',
        fontSize: '40px',
    };

      const headline2 = {
        marginTop: '135px',
        color: 'rgba(0, 0, 0, 1)',
        width: '25%',
        paddingLeft: '10%',
        fontFamily: 'Inter, sans-serif',
        fontWeight: 'bold',
        fontSize: '35px',
    };

      const headlineStyle2 = {
        marginTop: '53px',
        color: 'rgba(0, 0, 0, 1)',
        width: '60%',
        paddingLeft: '10%',
        fontFamily: 'Inter, sans-serif',
        fontWeight: 'bold',
        fontSize: '40px',
    };

   
    return (
      <>
        <div style={headlineStyle}>
          <p>Core values</p>
        </div>

        <div style={headline2}>
          <p>PERSONALIZED LEARNING</p>  
          <p>COMPREHENSIVE DEVELOPMENT</p>
          <p>INTERNATIONAL PERSPECTIVE</p>
        </div>

        <div style={Mission}>
          <p>Core values</p>
        </div>
      </>
   );
}

export default discoveryIntroduction2;
