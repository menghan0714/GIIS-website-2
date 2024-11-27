import React, { useRef }  from 'react';
import styles from './TranscriptContent.module.css';

function TranscriptContent({ language }) {
    
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

  // 設定固定尺寸並縮放比例
  clone.style.width = "794px"; // 固定為 A4 寬度
  clone.style.height = "1123px"; // 固定為 A4 高度
  clone.style.overflow = "hidden";
  clone.style.position = "absolute";
  clone.style.transform = "scale(1)"; // 強制移除縮放影響
  clone.style.transformOrigin = "top left"; // 縮放原點
  clone.style.zoom = "100%"; // 避免因縮放導致截斷
  document.body.appendChild(clone); // 臨時加入 DOM 樹

  const options = {
    margin: 0,
    filename: "Transcript.pdf",
    html2canvas: {
      scale: 2, // 渲染高分辨率
      useCORS: true,
      allowTaint: true,
      logging: true,
      letterRendering: true,
      scrollY: 0, // 禁止滾動影響
    },
    jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
  };

  // 匯出 PDF
  window.html2pdf()
    .set(options)
    .from(clone)
    .save()
    .then(() => {
      clone.remove(); // 匯出後刪除
    });
};
     return (
        <div className={styles.container}>
         <div id="content" ref={formRef}>
          <div className={styles.title}>
           <p>Genesis of Ideas International School</p>
          </div>
          <div className={styles.columns}>
           <div className={styles.column}>
            7901 4th St N STE 300,<br />
            St. Petersburg, FL 33702<br />
           </div>
           <div className={styles.column}>
            Phone: +1 (813) 501-5756<br />
            <a href="https://genesisideas.school/">https://genesisideas.school/</a><br />
           </div>
           <div className={styles.column}>
            School Code: 650<br />
            President: Shiyu Zhang, Ph.D.<br />
           </div>
          </div>
              
          <table className={styles.table}>
           <tbody>
            <tr>
              <td className={styles.thTd}>
              <div className={styles.labelInputWrapper}>
                <div className={styles.labelInputWrapper}>Name:</div>
                <input type="text" className={styles.input} placeholder="Enter Name" />
              </div>
              </td>
             
              <td className={styles.thTd}>
               Birth Date: <input type="date" className={styles.input} />
              </td>
             
              <td className={styles.thTd}>
               Gender: 
                <select className={styles.input}>
                 <option value="Female">Female</option>
                 <option value="Male">Male</option>
                </select>
              </td>
                  
              <td className={styles.thTd}>
                Parent/Guardian: <input type="text" className={styles.input} placeholder="Enter Name"/>
              </td>  
            </tr>
                  
            <tr>
              <td className={styles.thTd}>
               Address: <input type="text" className={styles.input} placeholder="Enter Address" />
              </td>
                  
              <td className={styles.thTd}>
               <div className={styles.labelInputWrapper}>
                <div className={styles.label}>City:</div> 
                <input type="text" className={styles.input} placeholder="Enter City" />
               </div>
              </td>
                  
              <td className={styles.thTd}>
                State: <input type="text" className={styles.input} placeholder="Enter State" />
              </td>
                  
              <td className={styles.thTd}>
               Zip Code: <input type="text" className={styles.input} placeholder="Enter Zip Code" />
              </td>
          </tr>
                  
          <tr>
            <td className={styles.thTd}>
              Entry Date: <input type="date" className={styles.input} />
            </td>
                  
            <td className={styles.thTd}>
              Withdrawal Date: <input type="date" className={styles.input} />
            </td>
                  
            <td className={styles.thTd}>
              Graduation Date: <input type="date" className={styles.input} />
            </td>
                  
            <td className={styles.thTd}>
              Transcript Date: <input type="date" className={styles.input} />
            </td>
          </tr>
        </tbody>
       </table>
       <table className={styles.table2}>
         <tbody>
           <tr>
             <td className={styles.thTd}>
                <table className={styles.table3}>
                 <thead>
                   <tr>
                    <td colSpan="3" style={{ textAlign: 'left', fontWeight: 'bold', fontSize: '10px' }}>
                     Grade 9 - Fall Semester
                    </td>
                   </tr>
                   <tr>
                    <th className={styles.thTd2}>Course Name</th>
                    <th className={styles.thTd2}>Type</th>
                    <th className={styles.thTd2}>Credits</th>
                    <th className={styles.thTd2}>Grade</th>
                    <th className={styles.thTd2}>Weighted GPA</th>
                    <th className={styles.thTd2}>Unweighted GPA</th>
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
                      <td className={styles.thTd2}>{row.name}</td>
                      <td className={styles.thTd2}>{row.type}</td>
                      <td className={styles.thTd2}>{row.credits}</td>
                      <td className={styles.thTd2}>
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
                       <td className={styles.thTd2}>{row.weighted.toFixed(2)}</td>
                       <td className={styles.thTd2}>{row.unweighted.toFixed(2)}</td>
                      </tr>
                      ))}
                      <tr>
                       <td colSpan="3" style={{ textAlign: 'right', fontWeight: 'bold' }}>
                        Semester Totals
                       </td>
                       <td className={styles.thTd2}></td>
                       <td className={styles.thTd2}>3.85</td>
                       <td className={styles.thTd2}>3.85</td>
                      </tr>
                    </tbody>
                </table>
              </td>

              <td className={styles.thTd}>
               Additional Info 2: <input type="text" className={styles.input} placeholder="Enter Info 2" />
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
