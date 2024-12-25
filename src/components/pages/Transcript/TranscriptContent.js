import React, { useRef , useState }  from 'react';
import GradeTableG9FS from './GradeTableG9FS.js';
import GradeTableG9SS from './GradeTableG9SS.js';
import GradeTableG10FS from './GradeTableG10FS.js';
import GradeTableG10SS from './GradeTableG10SS.js';
import GradeTableG11FS from './GradeTableG11FS.js';
import GradeTableG11SS from './GradeTableG11SS.js';


function TranscriptContent({ language }) {
  
  const [semesterGPAs, setSemesterGPAs] = useState({});


  const handleTotalsUpdate = (semesterName, gpaData) => {
   const { weightedGPA, unweightedGPA } = gpaData;
   console.log(`Received Weighted GPA for ${semesterName}:`, weightedGPA);
   console.log(`Received Unweighted GPA for ${semesterName}:`, unweightedGPA);

  setSemesterGPAs((prev) => ({
    ...prev,
    [semesterName]: {
      weightedGPA: parseFloat(weightedGPA) || 0,
      unweightedGPA: parseFloat(unweightedGPA) || 0,
    },
  }));
};


const calculateCumulativeGPA = (type = "weightedGPA") => {
  const gpas = Object.values(semesterGPAs)
    .map((gpa) => gpa[type])
    .filter((gpa) => gpa > 0); 
  if (gpas.length === 0) return "-";

  const totalGPA = gpas.reduce((acc, gpa) => acc + gpa, 0);
  return (totalGPA / gpas.length).toFixed(2);
};
  
  const container = {
     border: 'none',
     padding: '10px',
     textAlign: 'center',
     width: '100%',
     backgroundColor: 'white',
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
     width: '100%',
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
  
   const thTd ={
     padding: '2px',
     border: '1px solid black',
     textAlign: 'left',
     fontSize: '8px',
     width: '25%',
   }

   const table ={
     width: '100%',
     borderCollapse: 'collapse',
     fontFamily: 'Inter, sans-serif',
     margin: '0 auto',
     tableLayout: 'fixed', 
     fontSize: '8px',
    }

   const table2 ={
     width: '100%',
     borderCollapse: 'collapse',
     fontFamily: 'Inter, sans-serif',
     margin: '0 auto',
     tableLayout: 'fixed', 
     fontSize: '6px',

    }

   const table3 ={
     flex: '1',
     width: '95%',
     borderCollapse: 'collapse',
     fontFamily: 'Inter, sans-serif',
     margin: '0 auto',
     fontSize: '6px',
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
    

const exportToPDF = () => {
  const element = document.getElementById("content");
  
  // 複製 DOM 結構
  const clone = element.cloneNode(true);

  // 找到所有表單元素，替換成它們的值
  const inputs = clone.querySelectorAll("input, select");
  inputs.forEach((input) => {
    const value = input.value || input.placeholder || ""; // 確保沒有 `undefined`
    const textNode = document.createTextNode(value); // 創建文字節點
    input.replaceWith(textNode); // 用文字節點替換輸入框
  });

  // 設置 PDF 選項
  const options = {
    margin: 0, // 邊距
    filename: "Transcript.pdf", // 檔案名稱
    html2canvas: {
      scale: 5, // 高解析度
      useCORS: true, // 啟用跨域
      allowTaint: true, 
      logging: true,
      letterRendering: true,
      ignoreElements: (element) => element.tagName === "BUTTON", // 忽略按鈕
    },
    jsPDF: { unit: "mm", format: "a4", orientation: "portrait" }, // PDF 格式
  };

  // 生成 PDF
  window.html2pdf().set(options).from(clone).save();
};
     return (   
        <div style={container}>
         <button
          onClick={exportToPDF}
          style={{
            marginTop: "15px",
            padding: "10px 20px",
            backgroundColor: "rgba(43, 61, 109, 0.8)",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
           }}
          >
         Export to PDF
         </button> 
         
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
                 <div>
                  <GradeTableG9FS semesterName="Grade 9 - Fall Semester" onTotalsUpdate={handleTotalsUpdate} />
                 </div>
                </table>

                <table style={table3}>
                 <div>
                   <GradeTableG9SS semesterName="Grade 9 - Spring Semester" onTotalsUpdate={handleTotalsUpdate} />
                 </div>
                </table>
                  
                <table style={table3}>
                 <div>
                   <GradeTableG10FS semesterName="Grade 10 - Fall Semester" onTotalsUpdate={handleTotalsUpdate} />
                 </div>
                </table>

                <table style={table3}>
                 <div>
                   <GradeTableG10SS semesterName="Grade 10 - Spring Semester" onTotalsUpdate={handleTotalsUpdate}/>
                 </div>
                </table>
              </td>

              <td style={{ ...thTd, verticalAlign: "top" }}>
                <table style={table3}>
                  <div>
                   <GradeTableG11FS semesterName="Grade 11 - Fall Semester" onTotalsUpdate={handleTotalsUpdate} />
                 </div>
                </table>

                  
                <table style={table3}>
                  <div>
                   <GradeTableG11SS semesterName="Grade 11 - Spring Semester" onTotalsUpdate={handleTotalsUpdate} />
                 </div>
                </table>

                  
                <table style={table3}>
                 <thead>
                   <tr>
                    <td colSpan="3" style={{ textAlign: 'left', fontWeight: 'bold', fontSize: '10px' }}>
                     Grade 12 - Fall Semester
                    </td>
                   </tr>
                   <tr>
                    <th style={{ ...thTd, width: "30%", fontSize: "8px" }}>Course Name</th>
                    <th style={{ ...thTd, width: "10%", fontSize: "8px" }}>Type</th>
                    <th style={{ ...thTd, width: "10%" , fontSize: "8px"}}>Credits</th>
                    <th style={{ ...thTd, width: "10%", fontSize: "8px" }}>Grade</th>
                    <th style={{ ...thTd, width: "10%", fontSize: "8px" }}>Weighted GPA</th>
                    <th style={{ ...thTd, width: "10%", fontSize: "8px" }}>Unweighted GPA</th>
                    </tr>
                  </thead>
                  <tbody>
                   {[
                    { name: 'AP English Literature', type: 'Core (AP)', credits: 1.0, grade: 'In Progress', weighted: '-' , unweighted: '-' },
                    { name: 'AP Statistics', type: 'Core (AP)', credits: 1.0, grade: 'In Progress', weighted: '-' , unweighted: '-'},
                    { name: 'AP Microeconomics', type: 'Core (AP)', credits: 1.0, grade: 'In Progress', weighted: '-' , unweighted: '-'},
                    { name: 'Advanced Environmental Science', type: 'Core', credits:1.0, grade: 'In Progress', weighted: '-' , unweighted: '-'},
                    { name: 'Advanced Videography', type: 'Elective', credits: 0.5, grade: 'In Progress', weighted: '-' , unweighted: '-'},
                    { name: 'Semester Totals', type: '', credits: 4.5, grade: ''}, 
                    ].map((row, index) => (
                     <tr key={index}>
                      <td style={{ ...thTd, width: "30%", fontSize: "6px" }}>{row.name}</td>
                      <td style={{ ...thTd, width: "10%", fontSize: "6px" }}>{row.type}</td>
                      <td style={{ ...thTd, width: "10%", fontSize: "6px" }}>{row.credits}</td>
                      <td style={{ ...thTd, width: "10%", fontSize: "6px" }}>{row.grade}</td>
                      <td style={{ ...thTd, width: "10%", fontSize: "6px" }}>{row.weightedGPA}</td>
                      <td style={{ ...thTd, width: "10%", fontSize: "6px" }}>{row.unweightedGPA}</td>
                     </tr>
                      ))}
                    </tbody>
                </table>
              </td>
             </tr>
           </tbody>
        </table>

        <table style={table}>
           <tbody>
            <tr>
              <td style={thTd}>
                Weighted
              </td>
             
              <td style={thTd}>
                <strong>Cumulative GPA:</strong>  {calculateCumulativeGPA()}    
              </td>

              <td style={thTd}>
                Cumulative Credits: <input type="text" style={input}  />
              </td>
            </tr>
            <tr>
              <td style={thTd}>
               Unweighted
              </td>
                  
              <td style={thTd}>
                <strong>Cumulative GPA:</strong>  {calculateCumulativeGPA("unweightedGPA")}
              </td>
                  
              <td style={thTd}>
                Cumulative Credits: <input type="text" style={input}  />
              </td>
          </tr>
        </tbody>
       </table>
      </div>
    </div>
    );
}

export default TranscriptContent;


