import React, { useRef }  from 'react';


function TranscriptContent({ language }) {

    const title = {
     marginTop: '5%',
     fontFamily: 'Inter, sans-serif',
     fontSize: '20px',
     fontWeight: 'bold',
     marginBottom: '20px',
     textAlign: 'center',
    };

    const columns = {
     width: '90%',
     display: 'flex',
     justifyContent: 'space-between',
     backgroundColor: 'rgba(255, 255, 255, 1)', 
     padding: '5px',
     border: '1px solid #ccc',
     margin: '0 auto',
   };

    const column = {
     flex: '1',
     textAlign: 'center',
     padding: '5px',
     boxSizing: 'border-box',
     fontSize: '10px',
   };

    const table = {
     width: '90%',
     borderCollapse: 'collapse',
     fontFamily: 'Inter, sans-serif',
     margin: '0 auto',
     tableLayout: 'fixed', 
    };

   const thTd = {
     padding: '2px',
     border: '1px solid black',
     textAlign: 'left',
     fontSize: '8px',
     width: '30%',
   };

   const labelInputWrapper = {
     display: 'flex', // 水平排列
     alignItems: 'center', // 垂直居中
   };

   const label = {
     marginRight: '8px', // 提示詞與輸入框的間距
     fontSize: '8px', // 提示詞字體大小
   };

   const input = {
     width: '50%',
     fontSize: '8px',
     boxSizing: 'border-box',
     border: 'none', // 移除邊框
     borderBottom: '2px solid black', // 黑色底線
     background: 'none', // 背景透明
     outline: 'none', // 移除點擊時的外框
     overflowWrap: 'break-word',  // 自動斷行
     whiteSpace: 'normal',
     wordWrap: 'break-word', // 強制換行
   };

    const formRef = useRef(null);
    const html2pdf = window.html2pdf;
    
    
    const exportToPDF = () => {
      const element = document.getElementById('content');
    // 複製 DOM 結構以替換輸入框的內容
      const clone = element.cloneNode(true);
      const inputs = clone.querySelectorAll("input, select");
      inputs.forEach((input) => {
        const value = input.value || input.placeholder;
        const textNode = document.createTextNode(value);
        input.replaceWith(textNode);
     });

    // 設置 PDF 選項
    const options = {
        margin: 0,  // 上下左右邊距 (mm)
        filename: "Transcript.pdf",
        html2canvas: {
            scale: 5,
            useCORS: true, 
            allowTaint: true, 
            logging: true,
            letterRendering: true,
            ignoreElements: (element) => element.tagName === "BUTTON",
            backgroundColor: null,
        },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
     };
         window.html2pdf().set(options).from(clone).save();
     };


     return (
       <>
         <div id="content" ref={formRef}  style={{ backgroundColor: "white", border: "none", outline: "none", boxShadow: "none",}}>
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
