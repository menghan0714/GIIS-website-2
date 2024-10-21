import React from 'react';
import styles from './discoveryIntroduction.css';


function discoveryIntroduction({ language }) {

    const discoveryintriductionStyle = {
        marginTop: '80px',
        color: 'white',
        width: '100%',
        textAlign: 'center',
        zIndex: '20', 
        fontFamily: 'Inter, sans-serif',
        fontWeight: 'bold',
        fontSize: '50px',
    };
 
    return (
        <div style={discoveryintriductionStyle}>
          <p>GENESIS OF IDEAS</p>
          <p>INTERNATIONAL SCHOOL</p>
        </div>
   );
}

export default discoveryIntroduction;
