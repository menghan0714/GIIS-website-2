import React from 'react';

function Academicsintroduction2({ language }) {

    const headlineStyle = {
        marginTop: '115px',
        color: 'rgba(0, 0, 0, 1)',
        width: '100%',
        paddingLeft: '5%',
        fontFamily: 'Inter, sans-serif',
        fontWeight: 'bold',
        fontSize: '70px',
        lineHeight: '1',
    };

    const courseintroductionStyle = {
        position: 'relative',
        marginTop: '70px',
        color: 'rgba(0, 0, 0, 1)',
        width: '50%',
        paddingLeft: '5%',
        fontFamily: 'Inter, sans-serif',
        fontWeight: 'normal',
        fontSize: '30px',
        lineHeight: '1.5',
    };

    const lineStyle = {
        position: 'absolute',
        width: '35%', // Adjust width according to your needs
        height: '4px',
        backgroundColor: 'rgba(0, 0, 0, 1)', 
        paddingLeft: '5%',
        marginTop: '35px',
    };

    const yellowSquareStyle = {
        width: '300px',  // Adjust size as needed
        height: '300px', // Adjust size as needed
        backgroundColor: 'rgba(213, 168, 54, 1)', // Set to yellow color
        position: 'absolute',
        top: '190px',     
        left: '700px', 
    };

    const scrollContainerStyle = {
        display: 'flex',
        overflowX: 'scroll',
        padding: '20px 5%',
        gap: '20px',
        marginTop: '50px',
    };

    const courseCardStyle = {
        minWidth: '300px', // 固定寬度
        backgroundColor: 'black',
        color: 'white',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        fontFamily: 'Inter, sans-serif',
        fontSize: '20px',
        position: 'relative',
    };

    const arrowStyle = {
        position: 'absolute',
        bottom: '20px',
        right: '20px',
        width: '30px',
        height: '30px',
        border: '2px solid white',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '18px',
        cursor: 'pointer',
    };
    
    return (
      <>
        <div style={headlineStyle}>
          <p>COURSE</p>
          <p>CATALOG</p>
        </div>

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
          <div style={lineStyle}></div>
          <div style={yellowSquareStyle}></div>       
        </div>
              
        <div style={scrollContainerStyle}>
          <div style={courseCardStyle}>
            <h2>IGCSE</h2>
            <hr />
            <p>Challenge yourself with the globally recognized Pearson Edexcel International GCSEs.</p>
            <p>These courses provide a comprehensive curriculum, designed to develop students' analytical skills, creativity, and problem-solving abilities across various subjects, preparing them for future academic success.</p>
            <div style={arrowStyle}>→</div>
          </div>
          {/* 可以重複添加其他課程區塊 */}
          <div style={courseCardStyle}>
            <h2>A-Level</h2>
            <hr />
            <p>Our A-Level courses build on the foundation of IGCSE, providing a rigorous academic experience that sharpens critical thinking, enhances subject mastery, and prepares students for the demands of university-level education. </p>
            <p>With a broad range of subjects to choose from, students can tailor their studies to suit their academic and career aspirations.</p>
            <div style={arrowStyle}>→</div>
          </div>
          <div style={courseCardStyle}>
            <h2>AP</h2>
            <hr />
            <p>Empower yourself with the globally recognized Advanced Placement  Program. </p>
            <p>Our AP courses are designed to provide students with the opportunity to pursue college-level studies while still in high school. These courses not only prepare students for the AP exams but also foster a deeper understanding of subjects, equipping them with the skills necessary for success in university and beyond.</p>
            <div style={arrowStyle}>→</div>
          </div>
        </div>
      </>
   );
}

export default Academicsintroduction2;
