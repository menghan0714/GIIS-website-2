import React from 'react';
import img from '../../../../img/Academics/Math.jpg';


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

    const courseintroductionStyle = {
        position: 'relative',
        color: 'rgba(0, 0, 0, 1)',
        width: '48%',
        paddingLeft: '10%',
        fontFamily: 'Inter, sans-serif',
        fontWeight: 'normal',
        fontSize: '30px',
        lineHeight: '1.5',
        marginTop: '35px',
    };

    const lineStyle = {
        position: 'absolute',
        width: '35%', // Adjust width according to your needs
        height: '4px',
        paddingLeft: '10%',
        backgroundColor: 'rgba(0, 0, 0, 1)', 
        marginTop: '35px',
    };

    const yellowSquareStyle = {
        position: 'absolute',
        width: '300px',  // Adjust size as needed
        height: '300px', // Adjust size as needed
        backgroundColor: 'rgba(213, 168, 54, 1)',   
        paddingLeft: '10%',
        top: '20%', 
        left: '100%', 
        marginLeft: language === 'zh' ? '5%' : '5%',
        top: language === 'zh' ? '20%' : '50%',
    };

    const headline2Style = {
        marginTop: '150px',
        color: 'rgba(0, 0, 0, 1)',
        width: '100%',
        paddingLeft: '10%',
        fontFamily: 'Inter, sans-serif',
        fontWeight: 'bold',
        fontSize: '70px',
        lineHeight: '1',
    };

    const containerStyle = {
        position: 'relative',
        display: 'flex',
        justifyContent: 'center', // 水平居中
        marginTop: '5%', // 與導航欄保持距離
        width: '100%',
        paddingLeft: '5%',
    };

    const imageStyle = {
        width: '100%', // 保持容器的寬度
        height: '400px', // 固定高度
        objectFit: 'cover',
        filter: 'blur(4px)',
        zIndex: '100',
    };

    const overlayStyle = {
        position: 'absolute',
        bottom: '0',
        width: '100%',
        backgroundColor: 'rgba(210, 180, 140, 0.8)', // 半透明棕色
        color: 'white',
        padding: '20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: '200',
    };

    const overlayTextStyle = {
        fontSize: '30px',
        fontWeight: 'bold',
    };

    const arrowStyle = {
        fontSize: '30px',
        fontWeight: 'bold',
        border: '2px solid white',
        borderRadius: '50%',
        padding: '10px',
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
         <div style={headline2Style}>
          <p>SUBJECTS</p>
         </div>
         <div style={containerStyle}>
           <img src={img} alt="Math" style={imageStyle} />
           <div style={overlayStyle}>
            <span style={overlayTextStyle}>MATH</span>
            <span style={arrowStyle}>→</span>
           </div>
         </div>
      </>
   );
}

export default Academicsintroduction2;
