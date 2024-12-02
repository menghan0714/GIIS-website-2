import React, { useRef , useState }  from 'react';


function GradeTableG9FS({ onGPAUpdate }) {
  const [rows, setRows] = useState([
    { name: "English I", type: "Core", credits: 1.0, grade: "", weightedGPA: "-", unweightedGPA: "-" },
    { name: "Algebra I", type: "Core", credits: 1.0, grade: "", weightedGPA: "-", unweightedGPA: "-" },
    { name: "Biology", type: "Core", credits: 1.0, grade: "", weightedGPA: "-", unweightedGPA: "-" },
    { name: "World History", type: "Core", credits: 1.0, grade: "", weightedGPA: "-", unweightedGPA: "-" },
    { name: "Introduction to Media Studies", type: "Elective", credits: 0.5, grade: "", weightedGPA: "-", unweightedGPA: "-" },
    { name: "Semester Totals", type: "", credits: 4.5, grade: "", weightedGPA: "-", unweightedGPA: "-" },
  ]);


  const gradeToGpa = {
    'A+': { weighted: 5.3, unweighted: 4.3 },
    'A': { weighted: 5.0, unweighted: 4.0 },
    'A-': { weighted: 4.7, unweighted: 3.7 },
    'B+': { weighted: 4.3, unweighted: 3.3 },
    'B': { weighted: 4.0, unweighted: 3.0 },
    'B-': { weighted: 3.7, unweighted: 2.7 },
    'C+': { weighted: 3.3, unweighted: 2.3 },
    'C': { weighted: 3.0, unweighted: 2.0 },
    'C-': { weighted: 2.7, unweighted: 1.7 },
    'D+': { weighted: 2.3, unweighted: 1.3 },
    'D': { weighted: 2.0, unweighted: 1.0 },
    'D-': { weighted: 1.7, unweighted: 0.7 },
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
      const gpa = gradeToGpa[value.toUpperCase()] || { weighted: "-", unweighted: "-" };
      newRows[index].grade = value.toUpperCase();
      newRows[index].weightedGPA = gpa.weighted;
      newRows[index].unweightedGPA = gpa.unweighted;

      // 更新 Semester Totals 的 GPA
      const totals = calculateTotals(newRows);
      const totalsIndex = newRows.findIndex((row) => row.name === "Semester Totals");
      if (totalsIndex !== -1) {
        newRows[totalsIndex].weightedGPA = totals.weightedGPA;
        newRows[totalsIndex].unweightedGPA = totals.unweightedGPA;
      }

      // 通知父組件計算完成的 Cumulative GPA
      if (onCumulativeGPACalculated) {
        const cumulativeGPA = totals.weightedGPA; // 假設這裡以 Weighted GPA 作為累計
        onCumulativeGPACalculated(cumulativeGPA);
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

function GradeTableG9SS() {
  const [rows, setRows] = useState([
    { name: "English I - Writing Focus", type: "Core", credits: 1.0, grade: "", weightedGPA: "-", unweightedGPA: "-" },
    { name: "Geometry", type: "Core", credits: 1.0, grade: "", weightedGPA: "-", unweightedGPA: "-" },
    { name: "Environmental Science", type: "Core", credits: 1.0, grade: "", weightedGPA: "-", unweightedGPA: "-" },
    { name: "Geography", type: "Core", credits: 0.5, grade: "", weightedGPA: "-", unweightedGPA: "-" },
    { name: "Art Fundamentals", type: "Elective", credits: 0.5, grade: "", weightedGPA: "-", unweightedGPA: "-" },
    { name: "Semester Totals", type: "", credits: 4.0, grade: "", weightedGPA: "-", unweightedGPA: "-" },
  ]);

  const gradeToGpa = {
    'A+': { weighted: 5.3, unweighted: 4.3 },
    'A': { weighted: 5.0, unweighted: 4.0 },
    'A-': { weighted: 4.7, unweighted: 3.7 },
    'B+': { weighted: 4.3, unweighted: 3.3 },
    'B': { weighted: 4.0, unweighted: 3.0 },
    'B-': { weighted: 3.7, unweighted: 2.7 },
    'C+': { weighted: 3.3, unweighted: 2.3 },
    'C': { weighted: 3.0, unweighted: 2.0 },
    'C-': { weighted: 2.7, unweighted: 1.7 },
    'D+': { weighted: 2.3, unweighted: 1.3 },
    'D': { weighted: 2.0, unweighted: 1.0 },
    'D-': { weighted: 1.7, unweighted: 0.7 },
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
      const gpa = gradeToGpa[value.toUpperCase()] || { weighted: "-", unweighted: "-" };
      newRows[index].grade = value.toUpperCase();
      newRows[index].weightedGPA = gpa.weighted;
      newRows[index].unweightedGPA = gpa.unweighted;

      // 更新 Semester Totals 的 GPA
      const totals = calculateTotals(newRows);
      const totalsIndex = newRows.findIndex((row) => row.name === "Semester Totals");
      if (totalsIndex !== -1) {
        newRows[totalsIndex].weightedGPA = totals.weightedGPA;
        newRows[totalsIndex].unweightedGPA = totals.unweightedGPA;
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


function GradeTableG10FS() {
  const [rows, setRows] = useState([
    { name: "English II", type: "Core", credits: 1.0, grade: "", weightedGPA: "-", unweightedGPA: "-" },
    { name: "Algebra II", type: "Core", credits: 1.0, grade: "", weightedGPA: "-", unweightedGPA: "-" },
    { name: "Chemistry", type: "Core", credits: 1.0, grade: "", weightedGPA: "-", unweightedGPA: "-" },
    { name: "U.S. History", type: "Core", credits: 1.0, grade: "", weightedGPA: "-", unweightedGPA: "-" },
    { name: "Digital Photography", type: "Elective", credits: 0.5, grade: "", weightedGPA: "-", unweightedGPA: "-" },
    { name: "Semester Totals", type: "", credits: 4.5, grade: "", weightedGPA: "-", unweightedGPA: "-" },
  ]);

  const gradeToGpa = {
    'A+': { weighted: 5.3, unweighted: 4.3 },
    'A': { weighted: 5.0, unweighted: 4.0 },
    'A-': { weighted: 4.7, unweighted: 3.7 },
    'B+': { weighted: 4.3, unweighted: 3.3 },
    'B': { weighted: 4.0, unweighted: 3.0 },
    'B-': { weighted: 3.7, unweighted: 2.7 },
    'C+': { weighted: 3.3, unweighted: 2.3 },
    'C': { weighted: 3.0, unweighted: 2.0 },
    'C-': { weighted: 2.7, unweighted: 1.7 },
    'D+': { weighted: 2.3, unweighted: 1.3 },
    'D': { weighted: 2.0, unweighted: 1.0 },
    'D-': { weighted: 1.7, unweighted: 0.7 },
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
      const gpa = gradeToGpa[value.toUpperCase()] || { weighted: "-", unweighted: "-" };
      newRows[index].grade = value.toUpperCase();
      newRows[index].weightedGPA = gpa.weighted;
      newRows[index].unweightedGPA = gpa.unweighted;

      // 更新 Semester Totals 的 GPA
      const totals = calculateTotals(newRows);
      const totalsIndex = newRows.findIndex((row) => row.name === "Semester Totals");
      if (totalsIndex !== -1) {
        newRows[totalsIndex].weightedGPA = totals.weightedGPA;
        newRows[totalsIndex].unweightedGPA = totals.unweightedGPA;
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


function GradeTableG10SS() {
  const [rows, setRows] = useState([
    { name: "English II - Writing Focus", type: "Core", credits: 1.0, grade: "", weightedGPA: "-", unweightedGPA: "-" },
    { name: "Geometry", type: "Core", credits: 1.0, grade: "", weightedGPA: "-", unweightedGPA: "-" },
    { name: "Physics", type: "Core", credits: 1.0, grade: "", weightedGPA: "-", unweightedGPA: "-" },
    { name: "Film Studies", type: "Elective", credits: 0.5, grade: "", weightedGPA: "-", unweightedGPA: "-" },
    { name: "Web Design", type: "Elective", credits: 0.5, grade: "", weightedGPA: "-", unweightedGPA: "-" },
    { name: "Semester Totals", type: "", credits: 4.0, grade: "", weightedGPA: "-", unweightedGPA: "-" },
  ]);

  const gradeToGpa = {
    'A+': { weighted: 5.3, unweighted: 4.3 },
    'A': { weighted: 5.0, unweighted: 4.0 },
    'A-': { weighted: 4.7, unweighted: 3.7 },
    'B+': { weighted: 4.3, unweighted: 3.3 },
    'B': { weighted: 4.0, unweighted: 3.0 },
    'B-': { weighted: 3.7, unweighted: 2.7 },
    'C+': { weighted: 3.3, unweighted: 2.3 },
    'C': { weighted: 3.0, unweighted: 2.0 },
    'C-': { weighted: 2.7, unweighted: 1.7 },
    'D+': { weighted: 2.3, unweighted: 1.3 },
    'D': { weighted: 2.0, unweighted: 1.0 },
    'D-': { weighted: 1.7, unweighted: 0.7 },
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
      const gpa = gradeToGpa[value.toUpperCase()] || { weighted: "-", unweighted: "-" };
      newRows[index].grade = value.toUpperCase();
      newRows[index].weightedGPA = gpa.weighted;
      newRows[index].unweightedGPA = gpa.unweighted;

      // 更新 Semester Totals 的 GPA
      const totals = calculateTotals(newRows);
      const totalsIndex = newRows.findIndex((row) => row.name === "Semester Totals");
      if (totalsIndex !== -1) {
        newRows[totalsIndex].weightedGPA = totals.weightedGPA;
        newRows[totalsIndex].unweightedGPA = totals.unweightedGPA;
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


function GradeTableG11FS() {
  const [rows, setRows] = useState([
    { name: "AP English Language", type: "Core (AP)", credits: 1.0, grade: "", weightedGPA: "-", unweightedGPA: "-" },
    { name: "Pre-Calculus", type: "Core", credits: 1.0, grade: "", weightedGPA: "-", unweightedGPA: "-" },
    { name: "Chemistry Advanced", type: "Core", credits: 1.0, grade: "", weightedGPA: "-", unweightedGPA: "-" },
    { name: "U.S. Government", type: "Core", credits: 1.0, grade: "", weightedGPA: "-", unweightedGPA: "-" },
    { name: "Creative Media Design", type: "Elective", credits: 0.5, grade: "", weightedGPA: "-", unweightedGPA: "-" },
    { name: "Semester Totals", type: "", credits: 4.5, grade: "", weightedGPA: "-", unweightedGPA: "-" },
  ]);

  const gradeToGpa = {
    'A+': { weighted: 5.3, unweighted: 4.3 },
    'A': { weighted: 5.0, unweighted: 4.0 },
    'A-': { weighted: 4.7, unweighted: 3.7 },
    'B+': { weighted: 4.3, unweighted: 3.3 },
    'B': { weighted: 4.0, unweighted: 3.0 },
    'B-': { weighted: 3.7, unweighted: 2.7 },
    'C+': { weighted: 3.3, unweighted: 2.3 },
    'C': { weighted: 3.0, unweighted: 2.0 },
    'C-': { weighted: 2.7, unweighted: 1.7 },
    'D+': { weighted: 2.3, unweighted: 1.3 },
    'D': { weighted: 2.0, unweighted: 1.0 },
    'D-': { weighted: 1.7, unweighted: 0.7 },
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
      const gpa = gradeToGpa[value.toUpperCase()] || { weighted: "-", unweighted: "-" };
      newRows[index].grade = value.toUpperCase();
      newRows[index].weightedGPA = gpa.weighted;
      newRows[index].unweightedGPA = gpa.unweighted;

      // 更新 Semester Totals 的 GPA
      const totals = calculateTotals(newRows);
      const totalsIndex = newRows.findIndex((row) => row.name === "Semester Totals");
      if (totalsIndex !== -1) {
        newRows[totalsIndex].weightedGPA = totals.weightedGPA;
        newRows[totalsIndex].unweightedGPA = totals.unweightedGPA;
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


function GradeTableG11SS() {
  const [rows, setRows] = useState([
    { name: "AP Calculus AB", type: "Core (AP)", credits: 1.0, grade: "", weightedGPA: "-", unweightedGPA: "-" },
    { name: "Physics - Mechanics", type: "Core", credits: 1.0, grade: "", weightedGPA: "-", unweightedGPA: "-" },
    { name: "World Economics", type: "Core", credits: 0.5, grade: "", weightedGPA: "-", unweightedGPA: "-" },
    { name: "Social Media Marketing", type: "Elective", credits: 0.5, grade: "", weightedGPA: "-", unweightedGPA: "-" },
    { name: "Media Project Development", type: "Elective", credits: 0.5, grade: "", weightedGPA: "-", unweightedGPA: "-" },
    { name: "Semester Totals", type: "", credits: 3.5, grade: "", weightedGPA: "-", unweightedGPA: "-" },
  ]);

  const gradeToGpa = {
    'A+': { weighted: 5.3, unweighted: 4.3 },
    'A': { weighted: 5.0, unweighted: 4.0 },
    'A-': { weighted: 4.7, unweighted: 3.7 },
    'B+': { weighted: 4.3, unweighted: 3.3 },
    'B': { weighted: 4.0, unweighted: 3.0 },
    'B-': { weighted: 3.7, unweighted: 2.7 },
    'C+': { weighted: 3.3, unweighted: 2.3 },
    'C': { weighted: 3.0, unweighted: 2.0 },
    'C-': { weighted: 2.7, unweighted: 1.7 },
    'D+': { weighted: 2.3, unweighted: 1.3 },
    'D': { weighted: 2.0, unweighted: 1.0 },
    'D-': { weighted: 1.7, unweighted: 0.7 },
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
      const gpa = gradeToGpa[value.toUpperCase()] || { weighted: "-", unweighted: "-" };
      newRows[index].grade = value.toUpperCase();
      newRows[index].weightedGPA = gpa.weighted;
      newRows[index].unweightedGPA = gpa.unweighted;

      // 更新 Semester Totals 的 GPA
      const totals = calculateTotals(newRows);
      const totalsIndex = newRows.findIndex((row) => row.name === "Semester Totals");
      if (totalsIndex !== -1) {
        newRows[totalsIndex].weightedGPA = totals.weightedGPA;
        newRows[totalsIndex].unweightedGPA = totals.unweightedGPA;
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

function TranscriptContent({ language }) {

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
    

  const formRef = useRef(null);

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
        },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
     };
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
                  <GradeTableG9FS />
                 </div>
                </table>

                <table style={table3}>
                 <div>
                   <GradeTableG9SS />
                 </div>
                </table>
                  
                <table style={table3}>
                 <div>
                   <GradeTableG10FS />
                 </div>
                </table>

                <table style={table3}>
                 <div>
                   <GradeTableG10SS />
                 </div>
                </table>
              </td>

              <td style={{ ...thTd, verticalAlign: "top" }}>
                <table style={table3}>
                  <div>
                   <GradeTableG11FS />
                 </div>
                </table>

                  
                <table style={table3}>
                  <div>
                   <GradeTableG11SS />
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
                Cumulative GPA:       
                  <GradeTableG9FS onCumulativeGPACalculated={handleCumulativeGPAChange} />
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
                  Cumulative GPA: <input type="text" style={input}/>
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

