import React, { useRef , useState }  from 'react';

function GradeTableG11SS({ semesterName, onTotalsUpdate,   onSemesterUpdate}) {
  const [rows, setRows] = useState([
    { name: "AP Calculus AB", type: "Core (AP)", credits: 1.0, grade: "", weightedGPA: "-", unweightedGPA: "-" },
    { name: "Physics - Mechanics", type: "Core", credits: 1.0, grade: "", weightedGPA: "-", unweightedGPA: "-" },
    { name: "World Economics", type: "Core", credits: 0.5, grade: "", weightedGPA: "-", unweightedGPA: "-" },
    { name: "Social Media Marketing", type: "Elective", credits: 0.5, grade: "", weightedGPA: "-", unweightedGPA: "-" },
    { name: "Media Project Development", type: "Elective", credits: 0.5, grade: "", weightedGPA: "-", unweightedGPA: "-" },
    { name: "Semester Totals", type: "", credits: 3.5, grade: "", weightedGPA: "-", unweightedGPA: "-" },
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
        totalWeightedGPA += row.weightedGPA * row.credits;
        totalUnweightedGPA += row.unweightedGPA * row.credits;
        totalCredits += row.credits;
      }
    });

    const weightedGPA = totalCredits > 0 ? (totalWeightedGPA / totalCredits).toFixed(2) : "-";
    const unweightedGPA = totalCredits > 0 ? (totalUnweightedGPA / totalCredits).toFixed(2) : "-";

    return { weightedGPA, unweightedGPA };
  };

const handleGradeChange = (index, value) => {
  setRows((prevRows) => {
    const newRows = [...prevRows];

    const isAPCourse = newRows[index].type.includes("(AP)");

    if (value.trim() === "") {
      newRows[index].grade = ""; 
      newRows[index].weightedGPA = "-"; 
      newRows[index].unweightedGPA = "-"; 
    } else {
      const baseGpa = gradeToGpa[value.toUpperCase()] || { weighted: "-", unweighted: "-" };
      newRows[index].grade = value.toUpperCase(); 

  
      newRows[index].weightedGPA = isAPCourse
        ? baseGpa.weighted + 1 
        : baseGpa.weighted;
      newRows[index].unweightedGPA = baseGpa.unweighted;
    }

    const totals = calculateTotals(newRows);
    const totalsIndex = newRows.findIndex((row) => row.name === "Semester Totals");
    if (totalsIndex !== -1) {
      newRows[totalsIndex].weightedGPA = totals.weightedGPA;
      newRows[totalsIndex].unweightedGPA = totals.unweightedGPA;
    }


    if (onTotalsUpdate) {
      console.log(`Passing Weighted GPA for ${semesterName}:`, totals.weightedGPA);
      console.log(`Passing Unweighted GPA for ${semesterName}:`, totals.unweightedGPA);
      onTotalsUpdate(semesterName, {
        weightedGPA: totals.weightedGPA,
        unweightedGPA: totals.unweightedGPA,
      });
    }

    if (onSemesterUpdate) {
        const courseData = newRows.filter((row) => row.name !== "Semester Totals");
        onSemesterUpdate(semesterName, courseData);
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
            <td style={{ border: "1px solid black", fontSize: "6px", width: "30%" }}>{row.name}</td>
            <td style={{ border: "1px solid black", fontSize: "6px", width: "10%" }}>{row.type}</td>
            <td style={{ border: "1px solid black", fontSize: "6px", width: "10%" }}>{row.credits}</td>
            <td style={{ border: "1px solid black", fontSize: "6px", width: "10%" }}>
              {row.name === "Semester Totals" ? (
                ""
              ) : (
                <input
                  type="text"
                  value={row.grade}
                  onChange={(e) => handleGradeChange(index, e.target.value)}
                  style={{
                    width: "100%",
                    textAlign: "center",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                  }}
                />
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
