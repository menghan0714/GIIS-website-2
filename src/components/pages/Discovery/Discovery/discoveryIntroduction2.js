import React from 'react';
import img from '../../../../img/cognia.png';

function discoveryIntroduction2({ language }) {

    const headlineStyle = {
        marginTop: '0px',
        color: 'rgba(0, 0, 0, 1)',
        width: '60%',
        paddingLeft: '12%',
        fontFamily: 'Inter, sans-serif',
        fontWeight: 'bold',
        fontSize: '55px',
    };

    const headlineStyle2 = {
        marginTop: '100px',
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
        width: '100%',
        height: '50%',
        paddingLeft: '12%',
        fontFamily: 'Inter, sans-serif',
        fontSize: '30px',
        wordWrap: 'break-word',
        lineHeight: '1.25',
    };

    const container2 = {
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
          <p> </p>
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
