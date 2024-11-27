import React, { useRef }  from 'react';

function TranscriptContent({ language }) {
    
  const container = {
    border: '1px solid red',
    padding: '10px',
     textAlign: 'center',
     width: '100%',
     backgroundColor: 'white',
     border: 'none',
     outline: 'none',
     boxShadow: 'none', 
  }

  const title = {
     marginTop: '5%',
     fontFamily: 'Inter, sans-serif',
     fontSize: '20px',
     fontWeight: 'bold',
  }

 const columns ={
     width: '90%',
     display: 'flex',
     justifyContent: 'space-between',
     backgroundColor: 'rgba(255, 255, 255, 1)', 
     padding: '5px',
     border: '1px solid #ccc',
     margin: '0 auto',
   }

  const column ={
     flex: '1',
     textAlign: 'center',
     padding: '5px',
     boxSizing: 'border-box',
     fontSize: '10px',
   }

   const table ={
     width: '90%',
     borderCollapse: 'collapse',
     fontFamily: 'Inter, sans-serif',
     margin: '0 auto',
     tableLayout: 'fixed', 
    }

   const table2 ={
     width: '90%',
     borderCollapse: 'collapse',
     fontFamily: 'Inter, sans-serif',
     margin: '0 auto',
     tableLayout: 'fixed', 
    }

   const table3 ={
     width: '90%',
     borderCollapse: 'collapse',
     fontFamily: 'Inter, sans-serif',
     margin: '0 auto',
     tableLayout: 'fixed', 
    }

   const thTd ={
     padding: '2px',
     border: '1px solid black',
     textAlign: 'left',
     fontSize: '8px',
     width: '25%',
   }

    const thTd2 ={
     padding: '2px',
     border: '1px solid black',
     textAlign: 'left',
     fontSize: '6px',
     width: '25%',
   }

    const labelInputWrapper ={
     display: 'flex',
     alignItems: 'center', 
   }

    const input ={
     width: '50%',
     fontSize: '8px',
     boxSizing: 'border-box',
     border: 'none', 
     borderBottom: '2px solid black',
     background: 'none',
     outline: 'none',
     overflowWrap: 'break-word',
     whiteSpace: 'normal',
     wordWrap: 'break-word',
   }
  const formRef = useRef(null);
    
const exportToPDF = () => {
  const element = document.getElementById("content");

  // 複製 DOM 並清除輸入框
  const clone = element.cloneNode(true);
  const inputs = clone.querySelectorAll("input, select");
  inputs.forEach((input) => {
    const value = input.value || input.placeholder;
    const textNode = document.createTextNode(value);
    input.replaceWith(textNode);
  });

const scale = 1 / window.devicePixelRatio; // 自動獲取縮放比例
html2pdf().set({
  margin: [10, 10, 10, 10],
  filename: 'Transcript.pdf',
  html2canvas: {
    scale: window.devicePixelRatio, // 使用裝置像素比例補償縮放
    useCORS: true,
  },
  jsPDF: {
    unit: 'mm',
    format: 'a4',
    orientation: 'portrait',
  },
}).from(document.getElementById('content')).save();
}

    
     return (
        <div style={container}>
         <div id="content" ref={formRef}>
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
              <div style={labelInputWrapper}>
                Name:<input type="text" style={input} placeholder="Enter Name" />
              </div>
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
                  
              <td style={thTd}>
                Parent/Guardian: <input type="text" style={input} placeholder="Enter Name"/>
              </td>  
            </tr>
                  
            <tr>
              <td style={thTd}>
               Address: <input type="text" style={input} placeholder="Enter Address" />
              </td>
                  
              <td style={thTd}>
               <div style={labelInputWrapper}>
                  City:<input type="text" style={input} placeholder="Enter City" />
               </div>
              </td>
                  
              <td style={thTd}>
                State: <input type="text" style={input} placeholder="Enter State" />
              </td>
                  
              <td style={thTd}>
               Zip Code: <input type="text" style={input} placeholder="Enter Zip Code" />
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
                  
            <td style={thTd}>
              Transcript Date: <input type="date" style={input} />
            </td>
          </tr>
        </tbody>
       </table>
       <table style={table2}>
         <tbody>
           <tr>
             <td style={thTd}>
                <table style={table3}>
                 <thead>
                   <tr>
                    <td colSpan="3" style={{ textAlign: 'left', fontWeight: 'bold', fontSize: '10px' }}>
                     Grade 9 - Fall Semester
                    </td>
                   </tr>
                   <tr>
                    <th style={thTd2}>Course Name</th>
                    <th style={thTd2}>Type</th>
                    <th style={thTd2}>Credits</th>
                    <th style={thTd2}>Grade</th>
                    <th style={thTd2}>Weighted GPA</th>
                    <th style={thTd2}>Unweighted GPA</th>
                    </tr>
                  </thead>
                  <tbody>
                   {[
                    { name: 'English I', type: 'Core', credits: 1.0, grade: 'A', weighted: 4.0, unweighted: 4.0 },
                    { name: 'Algebra I', type: 'Core', credits: 1.0, grade: 'A-', weighted: 3.7, unweighted: 3.7 },
                    { name: 'Biology', type: 'Core', credits: 1.0, grade: 'A-', weighted: 3.7, unweighted: 3.7 },
                    { name: 'World History', type: 'Core', credits: 0.5, grade: 'A', weighted: 4.0, unweighted: 4.0 },
                    { name: 'Physical Education', type: 'Elective', credits: 0.5, grade: 'A', weighted: 4.0, unweighted: 4.0 },
                    ].map((row, index) => (
                     <tr key={index}>
                      <td style={thTd2}>{row.name}</td>
                      <td style={thTd2}>{row.type}</td>
                      <td style={thTd2}>{row.credits}</td>
                      <td style={thTd2}>
                       <input
                        type="text"
                        defaultValue={row.grade}
                        style={{
                         width: '50px',
                         textAlign: 'center',
                         border: '1px solid #ccc',
                         borderRadius: '4px',
                        }}
                        />
                       </td>
                       <td style={thTd2}>{row.weighted.toFixed(2)}</td>
                       <td style={thTd2}>{row.unweighted.toFixed(2)}</td>
                      </tr>
                      ))}
                      <tr>
                       <td colSpan="3" style={{ textAlign: 'right', fontWeight: 'bold' }}>
                        Semester Totals
                       </td>
                       <td style={thTd2}></td>
                       <td style={thTd2}>3.85</td>
                       <td style={thTd2}>3.85</td>
                      </tr>
                    </tbody>
                </table>
              </td>

              <td style={thTd}>
               Additional Info 2: <input type="text" style={input} placeholder="Enter Info 2" />
              </td>
             </tr>
           </tbody>
        </table>       
      </div>
              
      <button
        onClick={exportToPDF}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: "#007BFF",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
       >
        Export to PDF
     </button> 
    </div>
    );
}

export default TranscriptContent;
