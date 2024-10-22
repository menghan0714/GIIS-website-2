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
        marginTop: '125px',
        color: 'rgba(255, 255, 255, 0.8)',
        width: '100%',
        paddingLeft: '20%',
        fontFamily: 'Inter, sans-serif',
        fontWeight: 'bold',
        fontSize: '35px',
        lineHeight: '1',
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
      </>
   );
}

export default discoveryIntroduction;
