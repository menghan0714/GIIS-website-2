import React from 'react';


function TranscriptContent({ language }) {
    const container = {
     textAlign: 'center',
     width: '80%',
     margin: '0 auto',
    };

    const title = {
     fontSize: '24px',
     marginBottom: '20px',
    };

    const columns = {
     display: 'flex',
     justifyContent: 'space-between',
     backgroundColor: '#e6f0ff', /* Optional: blue background */
     padding: '10px',
     border: '1px solid #ccc',
   };

    const column = {
     flex: '1',
     textAlign: 'center',
     padding: '10px',
     boxSizing: 'border-box',
   };

     return (
        <div style={container}>
         <div style={title}>
          <p>Genesis of Ideas International School</p>
         </div>
         <div style={columns}>
          <div style={column}>
           <p>7901 4th St N STE 300,<br>St. Petersburg, FL 33702</p>
          </div>
         <div style={column}>
           <p>Phone: +1 (813) 501-5756<br><a href="https://genesisideas.school/">https://genesisideas.school/</a></p>
         </div>
         <div style={column}>
           <p>School Code: 650<br>President: Shiyu Zhang, Ph.D.</p>
         </div>
        </div>
       </div>
