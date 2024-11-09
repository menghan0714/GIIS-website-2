import React from 'react';


function Academicsintroduction2({ language }) {

    const headlineStyle = {
        marginTop: '115px',
        color: 'rgba(0, 0, 0, 1)',
        width: '100%',
        paddingLeft: '10%',
        fontFamily: 'Inter, sans-serif',
        fontWeight: 'bold',
        fontSize: '70px',
        lineHeight: '1',
    };

    const containerStyle= {
        marginTop: '50px',
        width: '90%',
        height: '30%',
        paddingLeft: '10%',
    };

    const courseintroductionStyle = {
        position: 'relative',
        color: 'rgba(0, 0, 0, 1)',
        width: '50%',
        fontFamily: 'Inter, sans-serif',
        fontWeight: 'normal',
        fontSize: '30px',
        lineHeight: '1.5',
    };

    const lineStyle = {
        width: '35%', // Adjust width according to your needs
        height: '4px',
        backgroundColor: 'rgba(0, 0, 0, 1)', 
        marginTop: '35px',
    };

    const yellowSquareStyle = {
        position: 'absolute',
        width: '300px',  // Adjust size as needed
        height: '300px', // Adjust size as needed
        backgroundColor: 'rgba(213, 168, 54, 1)', // Set to yellow color    
        marginLeft: '600px', 
    };

    const headline2Style = {
        marginTop: '80px',
        color: 'rgba(0, 0, 0, 1)',
        width: '100%',
        paddingLeft: '10%',
        fontFamily: 'Inter, sans-serif',
        fontWeight: 'bold',
        fontSize: '70px',
        lineHeight: '1',
    };

    
    return (
      <>
        <div style={headlineStyle}>
          <p>COURSE</p>
          <p>CATALOG</p>
        </div>

        <div style={containerStyle}>
          <div style={courseintroductionStyle}>
           {language === 'zh' ? (
                    <p>
                       我们的学校提供多元化的国际课程，包括英国IGCSE、A-Level和美国AP课程，满足学生的学术需求。这些课程为提升学生进入世界顶尖大学的机会奠定了坚实基础。通过深化知识和培养批判性思维能力，我们的学生为在全球学术舞台上取得优异成绩做好了充分准备。
                    </p>
                ) : (
                    <p>
                       Our school offers a diverse range of international programs, including the British IGCSE, A-level, and American AP courses, meeting students' academic needs. These programs provide a strong foundation for boosting university admissions chances to top institutions worldwide. By deepening their knowledge and developing critical thinking skills, our students are well-prepared to excel on the global academic stage.
                    </p>
                )}  
           <div style={yellowSquareStyle}></div>
           <div style={lineStyle}></div>
          </div>
        </div>
        <div style={headline2Style}>
          <p>SUBJECTS</p>
        </div>
      </>
   );
}

export default Academicsintroduction2;
