import React, { useRef, useState }  from 'react';
import GradeTableG9FS from './GradeTableG9FS.js';
import GradeTableG9SS from './GradeTableG9SS.js';
import GradeTableG10FS from './GradeTableG10FS.js';
import GradeTableG10SS from './GradeTableG10SS.js';
import GradeTableG11FS from './GradeTableG11FS.js';
import GradeTableG11SS from './GradeTableG11SS.js';
import GradeTableG12FS from './GradeTableG12FS.js';


function TranscriptContent({ language }) {
  
  const [semesterGPAs, setSemesterGPAs] = useState({});
  const [, setIsStaticMode] = useState(false);
  const [cumulativeCredits, setCumulativeCredits] = useState(0);

  const handleTotalsUpdate = (semesterName, gpaData) => {
   const { weightedGPA, unweightedGPA, totalCredits } = gpaData;
   console.log(`Received Weighted GPA for ${semesterName}:`, weightedGPA);
   console.log(`Received Unweighted GPA for ${semesterName}:`, unweightedGPA);
   console.log(`Received Total Credits for ${semesterName}:`, totalCredits);

  setSemesterGPAs((prev) => ({
    ...prev,
    [semesterName]: {
      weightedGPA: parseFloat(weightedGPA) || 0,
      unweightedGPA: parseFloat(unweightedGPA) || 0,
      totalCredits: parseFloat(totalCredits) || 0,
    },
  }));

   setCumulativeCredits((prevCredits) => {
    const updatedCredits = Object.values({
      ...semesterGPAs,
      [semesterName]: { totalCredits: parseFloat(totalCredits) || 0 },
    }).reduce((sum, current) => sum + (current.totalCredits || 0), 0);
    return updatedCredits;
  });
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
     wordWrap: 'break-word',
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


const formRef = useRef();

const exportToPDF = () => {
  setIsStaticMode(true); // 切換到靜態模式

  setTimeout(() => {
    const element = document.getElementById("content");

    // 創建一個隱藏的 DOM 副本
    const clonedElement = element.cloneNode(true);

    // 同步表單的狀態到克隆的節點
    const originalInputs = element.querySelectorAll("input, select, textarea");
    const clonedInputs = clonedElement.querySelectorAll("input, select, textarea");

    originalInputs.forEach((input, index) => {
      const clonedInput = clonedInputs[index];
      if (input.tagName === "INPUT" || input.tagName === "TEXTAREA") {
        clonedInput.value = input.value; // 同步值
      } else if (input.tagName === "SELECT") {
        Array.from(clonedInput.options).forEach((option) => {
          option.selected = option.value === input.value; // 同步選中項目
        });
      }
    });

    // 替換表單節點為靜態文字
    const clonedInputsForReplacement = clonedElement.querySelectorAll("input, select, textarea");
    clonedInputsForReplacement.forEach((input) => {
      const span = document.createElement("span");
      if (input.tagName === "SELECT") {
        // 獲取選中項目的文本
        const selectedOption = input.options[input.selectedIndex];
        span.textContent = selectedOption ? selectedOption.text : "";
      } else {
        // 使用輸入值或預設值
        span.textContent = input.value || input.placeholder || "";
      }
      input.parentNode.replaceChild(span, input); // 替換節點
    });

    // 將副本添加到隱藏區域
    const hiddenContainer = document.createElement("div");
    hiddenContainer.style.position = "absolute";
    hiddenContainer.style.top = "-9999px";
    hiddenContainer.style.left = "-9999px";
    hiddenContainer.appendChild(clonedElement);
    document.body.appendChild(hiddenContainer);

    const options = {
      margin: 0,
      filename: "Transcript.pdf",
      html2canvas: {
        scale: 5, // 高解析度
        ignoreElements: (el) => el.tagName === "BUTTON", // 忽略按鈕
      },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    };

    window.html2pdf()
      .set(options)
      .from(clonedElement)
      .save()
      .finally(() => {
        document.body.removeChild(hiddenContainer); // 移除隱藏的副本
        setIsStaticMode(false); // 恢復到編輯模式
      });
  }, 0);
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
                  <div>
                   <GradeTableG12FS semesterName="Grade 12 - SprFall Semester" onTotalsUpdate={handleTotalsUpdate} />
                 </div>
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
                <strong>Cumulative Credits:</strong>  {cumulativeCredits.toFixed(1)}
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
                <strong>Cumulative Credits:</strong>  {cumulativeCredits.toFixed(1)}
              </td>
          </tr>
        </tbody>
       </table>
       <div style={{ marginTop: "3%", textAlign: "center" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "10px" }}>
         <tbody>
          <tr>
           <td colSpan={3} style={{ textAlign: "right", padding: "10px 0", fontWeight: "bold" }}>
            <span>Official(s) Certifying Transcript:</span>
            <span style={{ display: "inline-block", height: "1px", width: "50%", backgroundColor: "black", marginLeft: "10px" }}></span>
           </td>
          </tr>
          
          <tr>
           <td style={{ width: "50%", textAlign: "center", paddingTop: "20px" }}>
            <div style={{ borderBottom: "1px solid black", width: "80%", margin: "0 auto" }}></div>
            <div>Printed Name</div>
           </td>
           <td style={{ width: "25%", textAlign: "center", paddingTop: "20px" }}>
            <div style={{ borderBottom: "1px solid black", width: "80%", margin: "0 auto" }}></div>
            <div>Title</div>
           </td>
           <td style={{ width: "25%", textAlign: "center", paddingTop: "20px" }}>
            <div style={{ borderBottom: "1px solid black", width: "80%", margin: "0 auto" }}></div>
            <div>Date</div>
           </td>
          </tr>
        </tbody>
       </table>
      </div>

                  
     </div>
    </div>
    );
}

export default TranscriptContent;




