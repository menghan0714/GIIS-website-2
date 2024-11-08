import React from 'react';
import './AcademicsIntroduction2.css';

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

    const courses = [
        {
            title: 'IGCSE',
            description: language === 'zh' ? '' : 'Challenge yourself with the globally recognized Pearson Edexcel International GCSEs.',
            description2: language === 'zh' ? '' : 'These courses provide a comprehensive curriculum, designed to develop students' analytical skills, creativity, and problem-solving abilities across various subjects, preparing them for future academic success.',
        },
        {
            title: 'A-Level',
            description: language === 'zh' ? '' : 'Our A-Level courses build on the foundation of IGCSE, providing a rigorous academic experience that sharpens critical thinking, enhances subject mastery, and prepares students for the demands of university-level education. ',
            description2: language === 'zh' ? '' : 'With a broad range of subjects to choose from, students can tailor their studies to suit their academic and career aspirations. ',    
        },
        
    ];

    
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
                    
        <div className="course-scroll-container">
            {courses.map((course, index) => (
                <div key={index} className="course-box">
                    <h2>{course.title}</h2>
                    <p>{course.description}</p>
                    <p>{course.description2}</p>
                </div>
                ))}
            </div>
              
        <div style={headlineStyle}>
          <p>SUBJECTS</p>
        </div>
      </>
   );
}

export default Academicsintroduction2;
