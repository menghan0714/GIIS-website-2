import React from 'react';
import styles from './discoveryIntroduction.css';


function discoveryIntroduction({ language }) {

    const discoveryintriductionStyle = {
        top: '50px',
        color: 'white',
        width: '100%',
        textAlign: 'center',
        zIndex: '20', 
        fontFamily: 'Inter, sans-serif',
        fontWeight: 'bold',
        fontSize: '35px',
    };
 
    return (
        <div style={discoveryintriductionStyle}>
          <h2>GENESIS OF IDEAS INTERNATIONAL SCHOOL</h2>  
        </div>
   );
}

export default discoveryIntroduction;
