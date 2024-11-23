import React from 'react';
import styles from './TranscriptMain.css';


function TranscriptMain({ language }) {

    return (
      <div className={styles.container}>
       <div className={styles.title}>
        <p>Genesis of Ideas International School</p>
       </div>
       <div className={styles.columns}>
        <div className={styles.column}>
         <p>
           7901 4th St N STE 300,<br />
           St. Petersburg, FL 33702<br />
         </p>
        </div>
        <div className={styles.column}>
         <p>
          Phone: +1 (813) 501-5756,<br />
          <a href="https://genesisideas.school/">https://genesisideas.school/</a><br />
         </p>
        </div>
        <div className={styles.column}>
         <p>
          School Code: 650<br />
          President: Shiyu Zhang, Ph.D.<br />
         </p>
        </div>
       </div>
     </div>
   );
}


export default TranscriptMain;
