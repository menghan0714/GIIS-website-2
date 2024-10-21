import React from 'react';
import styles from './discoveryIntroduction.css';


function discoveryIntroduction({ language }) {

    const discoveryintriductionStyle = {
        marginTop: '80px',
        color: 'white',
        width: '100%',
        display: 'flex',         // 使用flexbox
        flexDirection: 'column', // 垂直方向排列
        alignItems: 'flex-start', // 元素內部文字靠左對齊
        textAlign: 'center',
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
