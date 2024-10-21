import React from 'react';
import styles from './discoveryIntroduction.css';


function discoveryIntroduction({ language }) {

    const discoveryintriductionStyle = {
        marginTop: '100px',
        color: 'white',
        width: '100%',
        textAlign: 'center',
        zIndex: '20', 
        fontFamily: 'Inter, sans-serif',
        fontWeight: 'bold',
        fontSize: '10px',
    };
 
    return (
        <div style={discoveryintriductionStyle}>
          <h2>GENESIS OF IDEAS</h2>
          <h2>INTERNATIONAL SCHOOL</h2>
        </div>
   );
}

export default discoveryIntroduction;
