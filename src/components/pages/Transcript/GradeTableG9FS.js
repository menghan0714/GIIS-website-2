import React, {useState}  from 'react';

function GradeTableG9FS({ semesterName, onTotalsUpdate, onSemesterUpdate, isStatic = false}) {
  const [rows, setRows] = useState([
    { name: "", type: "", credits:"" , grade: "", weightedGPA: "-", unweightedGPA: "-" },
    { name: "", type: "", credits:"" , grade: "", weightedGPA: "-", unweightedGPA: "-" },
    { name: "", type: "", credits:"" , grade: "", weightedGPA: "-", unweightedGPA: "-" },
    { name: "", type: "", credits:"" , grade: "", weightedGPA: "-", unweightedGPA: "-" },
    { name: "", type: "", credits:"" , grade: "", weightedGPA: "-", unweightedGPA: "-" },
    { name: "Semester Totals", type: "", credits:"" , grade: "", weightedGPA: "-", unweightedGPA: "-" },
  ]);


  const gradeToGpa = {
    'A+': { weighted: 4.0, unweighted: 4.0 },
    'A': { weighted: 4.0, unweighted: 4.0 },
    'A-': { weighted: 3.7, unweighted: 3.7 },
    'B+': { weighted: 3.3, unweighted: 3.3 },
    'B': { weighted: 3.0, unweighted: 3.0 },
    'B-': { weighted: 2.7, unweighted: 2.7 },
    'C+': { weighted: 2.3, unweighted: 2.3 },
    'C': { weighted: 2.0, unweighted: 2.0 },
    'C-': { weighted: 1.7, unweighted: 1.7 },
    'D+': { weighted: 1.3, unweighted: 1.3 },
    'D': { weighted: 1.0, unweighted: 1.0 },
    'F': { weighted: 0.0, unweighted: 0.0 },
  };
  
const calculateTotals = (updatedRows) => {
    let totalWeightedGPA = 0;
    let totalUnweightedGPA = 0;
    let totalCredits = 0;

    updatedRows.forEach((row) => {
     if (row.name !== "Semester Totals" && row.weightedGPA !== "-" && row.unweightedGPA !== "-") {
      const credits = parseFloat(row.credits); // 在此處轉換為數字
      totalWeightedGPA += row.weightedGPA * credits;
      totalUnweightedGPA += row.unweightedGPA * credits;
      totalCredits += credits;
    }
    });

    const weightedGPA = totalCredits > 0 ? (totalWeightedGPA / totalCredits).toFixed(2) : "-";
    const unweightedGPA = totalCredits > 0 ? (totalUnweightedGPA / totalCredits).toFixed(2) : "-";

    return { weightedGPA, unweightedGPA };
  }; 



 const handleGradeChange = (index, field, value) => {
  setRows((prevRows) => {
    const newRows = [...prevRows];
    
    // 更新欄位值
    newRows[index][field] = value; 
    
    // 如果欄位是成績或課程名稱，重新計算 GPA
    if (field === "grade" || field === "name") {
      const gpa = gradeToGpa[newRows[index].grade.toUpperCase()] || { weighted: "-", unweighted: "-" };

      // 計算 unweighted GPA
      newRows[index].unweightedGPA = gpa.unweighted;

      // 判斷課程名稱是否包含 "AP" 並計算 weighted GPA
      if (newRows[index].type.includes("AP")) {
        newRows[index].weightedGPA = gpa.unweighted !== "-" ? gpa.unweighted + 1 : "-";
      } else {
        newRows[index].weightedGPA = gpa.weighted;
      }
    }
    // 計算學期總 GPA
    const totals = calculateTotals(newRows);
    const totalsIndex = newRows.findIndex((row) => row.name === "Semester Totals");
    if (totalsIndex !== -1) {
      newRows[totalsIndex].weightedGPA = totals.weightedGPA;
      newRows[totalsIndex].unweightedGPA = totals.unweightedGPA;
    }
    
    // 將兩個 GPA 傳遞給父元件
   if (onTotalsUpdate) {
      console.log(`Passing Weighted GPA for ${semesterName}:`, totals.weightedGPA);
      console.log(`Passing Unweighted GPA for ${semesterName}:`, totals.unweightedGPA);
      onTotalsUpdate(semesterName, {
        weightedGPA: totals.weightedGPA,
        unweightedGPA: totals.unweightedGPA,
      });
    }
    
      return newRows;
    });
  };  


  return (
    <table style={{ width: "100%", borderCollapse: "collapse" }}>
      <thead>
        <tr>
          <td colSpan="6" style={{ textAlign: "left", fontWeight: "bold", fontSize: "10px" }}>
            Grade 9 - Fall Semester
          </td>
        </tr>
        <tr>
          <th style={{ border: "1px solid black", fontSize: "8px" }}>Course Name</th>
          <th style={{ border: "1px solid black", fontSize: "8px" }}>Type</th>
          <th style={{ border: "1px solid black", fontSize: "8px" }}>Credits</th>
          <th style={{ border: "1px solid black", fontSize: "8px" }}>Grade</th>
          <th style={{ border: "1px solid black", fontSize: "8px" }}>Weighted GPA</th>
          <th style={{ border: "1px solid black", fontSize: "8px" }}>Unweighted GPA</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => (
        <tr key={index}>
            <td style={{ border: "1px solid black", fontSize: "6px", width: "30%" }}>
             {row.name === "Semester Totals" ? (
              <span>Semester Totals</span>
              ) : (
              <input
                type="text"
                value={row.name}
                onChange={(e) => handleGradeChange(index, "name", e.target.value)}
                style={{ width: "100%", border: isStatic ? "1px solid black" : "none", borderRadius: "4px" }}
                disabled={row.name === "Semester Totals"}
              />
             )}
            </td>
                  
            <td style={{ border: "1px solid black", fontSize: "6px", width: "10%" }}>
             {row.name === "Semester Totals" ? (
               ""
              ) : (
              <select
                value={row.type}
                onChange={(e) => handleGradeChange(index, "type", e.target.value)}
                style={{ width: "100%", border: isStatic ? "1px solid black" : "none", borderRadius: "4px" }}
                disabled={row.name === "Semester Totals"}
              >
                <option value="">-</option>
                <option value="Core">Core</option>
                <option value="Core (AP)">Core (AP)</option>
                <option value="Elective">Elective</option>
              </select>
             )}
            </td>
                
            <td style={{ border: "1px solid black", fontSize: "6px", width: "10%" }}>
             {row.name === "Semester Totals" ? (
              row.credits // 顯示加總結果
              ) : (
                <select
                 value={row.credits}
                 onChange={(e) => handleGradeChange(index, "credits", e.target.value)}
                 style={{
                  width: "100%",
                  border: isStatic ? "1px solid black" : "none",
                  borderRadius: "4px",
                  }}
                  disabled={row.name === "Semester Totals"}
                  >
                   <option value="">-</option>
                   <option value="0.5">0.5</option>
                   <option value="1.0">1.0</option>
                 </select>
              )}
            </td>
                
            <td style={{ border: "1px solid black", fontSize: "6px", width: "10%" }}>
              {row.name === "Semester Totals" ? (
                ""
              ) : (
                <select
                  value={row.grade}
                  onChange={(e) => handleGradeChange(index, "grade", e.target.value)}
                  style={{
                    width: "100%",
                    border: isStatic ? "1px solid black" : "none",
                    borderRadius: "4px",
                  }}
                >
                  <option value="">-</option>
                  <option value="A+">A+</option>
                  <option value="A">A</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B">B</option>
                  <option value="B-">B-</option>
                  <option value="C+">C+</option>
                  <option value="C">C</option>
                  <option value="C-">C-</option>
                  <option value="D+">D+</option>
                  <option value="D">D</option>
                  <option value="F">F</option>
                </select>
              )}
            </td>
            <td style={{ border: "1px solid black", fontSize: "6px", width: "10%" }}>{row.weightedGPA}</td>
            <td style={{ border: "1px solid black", fontSize: "6px", width: "10%" }}>{row.unweightedGPA}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default GradeTableG9FS;
