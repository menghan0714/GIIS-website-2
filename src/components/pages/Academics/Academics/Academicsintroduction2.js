import React from 'react';
import ImgSlider from './Academicsimgslider.js';

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

     const imgSliderStyle = {
        width: '300px',  // 固定寬度，以確保卡片大小一致
        length: '500px',
        backgroundColor: 'black',
        color: 'white',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        fontFamily: 'Inter, sans-serif',
        fontSize: '20px',
        position: 'absolute',
        top: '50px', 
        left: '950px',
        margin: '0 25px',  // 卡片之間的間距
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
        <ImgSlider style={imgSliderStyle}/>
      </>
   );
}

export default Academicsintroduction2;
