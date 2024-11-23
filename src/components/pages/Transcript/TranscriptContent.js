import React from 'react';


function TranscriptContent({ language }) {
    const container = {
     textAlign: 'center',
     width: '100%',
    };

    const title = {
     marginTop: '5%',
     fontFamily: 'Inter, sans-serif',
     fontSize: '50px',
     fontWeight: 'bold',
     marginBottom: '20px',
    };

    const columns = {
     width: '100%',
     display: 'flex',
     justifyContent: 'space-between',
     backgroundColor: 'rgba(255, 255, 255, 1)', 
     padding: '10px',
     border: '1px solid #ccc',
   };

    const column = {
     flex: '1',
     textAlign: 'center',
     padding: '10px',
     boxSizing: 'border-box',
   };

    const table = {
     width: '80%',
     margin: '0 auto',
     borderCollapse: 'collapse',
     fontFamily: 'Inter, sans-serif',
    };

   const thTd = {
     border: '1px solid black',
     padding: '10px',
     textAlign: 'left',
     fontSize: '16px',
   };

   const input = {
    width: '90%',
    padding: '5px',
    fontSize: '14px',
    boxSizing: 'border-box',
   };

     return (
        <div style={container}>
         <div style={title}>
          <p>Genesis of Ideas International School</p>
         </div>
         <div style={columns}>
          <div style={column}>
           7901 4th St N STE 300,<br />
           St. Petersburg, FL 33702<br />
          </div>
         <div style={column}>
           Phone: +1 (813) 501-5756<br />
           <a href="https://genesisideas.school/">https://genesisideas.school/</a><br />
         </div>
         <div style={column}>
           School Code: 650<br />
           President: Shiyu Zhang, Ph.D.<br />
         </div>
        </div>

        <table style={table}>
         <tbody>
          <tr>
            <td style={thTd}>
              Name: <input type="text" style={input} placeholder="Enter Name" />
            </td>
            <td style={thTd}>
              Birth Date: <input type="date" style={input} />
            </td>
            <td style={thTd}>
              Gender: 
              <select style={input}>
                <option value="Female">Female</option>
                <option value="Male">Male</option>
              </select>
            </td>
          </tr>
          <tr>
            <td style={thTd}>
              Address: <input type="text" style={input} placeholder="Enter Address" />
            </td>
            <td style={thTd}>
              City: <input type="text" style={input} placeholder="Enter City" />
            </td>
            <td style={thTd}>
              State: <input type="text" style={input} placeholder="Enter State" />
            </td>
          </tr>
          <tr>
            <td style={thTd}>
              Entry Date: <input type="date" style={input} />
            </td>
            <td style={thTd}>
              Withdrawal Date: <input type="date" style={input} />
            </td>
            <td style={thTd}>
              Graduation Date: <input type="date" style={input} />
            </td>
          </tr>
        </tbody>
      </table>
     </div>
     );
}

export default TranscriptContent;
