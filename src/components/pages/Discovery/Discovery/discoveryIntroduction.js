import React from 'react';
import styles from './discoveryIntroduction.css';


function discoveryIntroduction({ language }) {

    const discoveryintriductionStyle = {
        marginTop: '80px',
        color: 'white',
        width: '100%',
        textAlign: 'left',
        fontFamily: 'Inter, sans-serif',
        fontWeight: 'bold',
        fontSize: '50px',
        lineHeight: '1',
    };
 
    return (
        <div style={discoveryintriductionStyle}>
          <p>GENESIS OF IDEAS</p>
          <p>INTERNATIONAL SCHOOL</p>
        </div>
   );
}

export default discoveryIntroduction;
