import React, { useRef }  from 'react';
import html2pdf from "html2pdf.js";


function TranscriptContent({ language }) {
    const container = {
     textAlign: 'center',
     width: '100%',
    };

    const title = {
     marginTop: '5%',
     fontFamily: 'Inter, sans-serif',
     fontSize: '30px',
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
     fontSize: '10px',
   };

    const table = {
     width: '100%',
     borderCollapse: 'collapse',
     fontFamily: 'Inter, sans-serif',
    };

   const thTd = {
     padding: '2px',
     border: '1px solid black',
     textAlign: 'left',
     fontSize: '10px',
   };

   const labelInputWrapper = {
     display: 'flex', // 水平排列
     alignItems: 'center', // 垂直居中
   };

   const label = {
     marginRight: '10px', // 提示詞與輸入框的間距
     fontSize: '10px', // 提示詞字體大小
   };

   const input = {
     width: '70%',
     fontSize: '10px',
     boxSizing: 'border-box',
     border: 'none', // 移除邊框
     borderBottom: '2px solid black', // 黑色底線
     background: 'none', // 背景透明
     outline: 'none', // 移除點擊時的外框
     lineHeight: '1.5',
     minHeight: '20%', // 設置最小高度
   };

   const formRef = useRef(null); // Ref 用於匯出內容

   const exportToPDF = () => {
    const element = formRef.current; // 引用表格的 DOM 節點
    const options = {
      margin: 10,
      filename: "Transcript.pdf",
      html2canvas: { scale: 2 },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    };
    html2pdf().set(options).from(element).save();
   };


     return (
     <>
      <div ref={formRef}>
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
             <div style={labelInputWrapper}>
              <div style={label}>Name:</div>
              <input type="text" style={input} placeholder="Enter Name" />
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
              <div style={label}>City:</div> 
              <input type="text" style={input} placeholder="Enter City" />
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
     </div>
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
    </>
    );
}

export default TranscriptContent;
