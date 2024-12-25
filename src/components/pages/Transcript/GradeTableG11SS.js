import React, { useRef , useState }  from 'react';

function GradeTableG11SS({ semesterName, onTotalsUpdate, onSemesterUpdate, isStatic = false}) {
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
    if (row.name !== "Semester Totals" && row.credits) {
      const credits = parseFloat(row.credits) || 0; // 確保轉換為數字
      if (row.weightedGPA !== "-" && row.unweightedGPA !== "-") {
        totalWeightedGPA += row.weightedGPA * credits;
        totalUnweightedGPA += row.unweightedGPA * credits;
      }
      totalCredits += credits;
    }
  });

  const weightedGPA = totalCredits > 0 ? (totalWeightedGPA / totalCredits).toFixed(2) : "-";
  const unweightedGPA = totalCredits > 0 ? (totalUnweightedGPA / totalCredits).toFixed(2) : "-";

  return { totalCredits, weightedGPA, unweightedGPA };
};


const handleGradeChange = (index, field, value) => {
  setRows((prevRows) => {
    const newRows = [...prevRows];

    // 更新欄位值
    newRows[index][field] = value;

    // 如果是成績或課程名稱的變更，更新 GPA
    if (field === "grade" || field === "name") {
      const gpa = gradeToGpa[newRows[index].grade.toUpperCase()] || { weighted: "-", unweighted: "-" };

      newRows[index].unweightedGPA = gpa.unweighted;
      newRows[index].weightedGPA = newRows[index].name.includes("AP") && gpa.unweighted !== "-" 
        ? gpa.unweighted + 1 
        : gpa.weighted;
    }

    // 計算總分、學分與 GPA
    const totals = calculateTotals(newRows);

    // 找到 Semester Totals 的行，更新相關數據
    const totalsIndex = newRows.findIndex((row) => row.name === "Semester Totals");
    if (totalsIndex !== -1) {
      newRows[totalsIndex].credits = totals.totalCredits.toFixed(1); // 確保學分為小數點 1 位
      newRows[totalsIndex].weightedGPA = totals.weightedGPA;
      newRows[totalsIndex].unweightedGPA = totals.unweightedGPA;
    }

    // 傳遞數據到父元件
    if (onTotalsUpdate) {
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
            Grade 11 - Spring Semester
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
                <option value="Elective">Elective</option>
              </select>
             )}
            </td>
                
            <td style={{ border: "1px solid black", fontSize: "6px", width: "10%" }}>
              <select
                value={row.credits}
                onChange={(e) => handleGradeChange(index, "credits", e.target.value)}
                style={{ width: "100%", border: isStatic ? "1px solid black" : "none", borderRadius: "4px" }}
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
                    textAlign: "center",
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

export default GradeTableG11SS;
