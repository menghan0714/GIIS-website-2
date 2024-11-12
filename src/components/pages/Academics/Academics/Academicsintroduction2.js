import React, { useState }  from 'react';
import img from '../../../../img/Academics/Math.jpg';
import './Academics.css'; // 如果需要額外分離 CSS

function Academicsintroduction2({ language }) {
    const courses = [
    { id: 1, title: 'A-Level', description: 'Our A-Level courses build on the foundation of IGCSE, providing a rigorous academic experience that sharpens critical thinking, enhances subject mastery, and prepares students for the demands of university-level education. ', bgColor: '#000' },
    { id: 2, title: 'IGCSE', description: 'Challenge yourself with the globally recognized Pearson Edexcel International GCSEs.', bgColor: '#222' },
    { id: 3, title: 'AP', description: 'Empower yourself with the globally recognized Advanced Placement  Program.', bgColor: '#333' },
    ];

    const [currentCourse, setCurrentCourse] = useState(0);
    const [startX, setStartX] = useState(0);
    const [deltaX, setDeltaX] = useState(0);

    const handleMouseDown = (e) => {
        setStartX(e.clientX); // 記錄滑鼠按下時的初始位置
        setDeltaX(0); // 清空移動距離
    };

    const handleMouseMove = (e) => {
        if (startX !== 0) {
            setDeltaX(e.clientX - startX); // 計算滑鼠移動距離
        }
    };

    const handleMouseUp = () => {
        if (deltaX > 100) {
            // 如果向右滑超過 100px，切換到上一個課程
            setCurrentCourse((prev) => (prev - 1 + courses.length) % courses.length);
        } else if (deltaX < -100) {
            // 如果向左滑超過 100px，切換到下一個課程
            setCurrentCourse((prev) => (prev + 1) % courses.length);
        }
        setStartX(0); // 重置初始位置
        setDeltaX(0); // 重置移動距離
    };
    
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
        width: '90%',
        height: '100%',
        paddingLeft: '10%',
    };

    const imageStyle = {
        width: '100%', // 保持容器的寬度
        height: '400px', // 固定高度
        objectFit: 'cover',
        filter: 'blur(6px)',
        zIndex: '100',
    };

     const overlaycontainerStyle = {
        position: 'absolute',
        display: 'flex',
        justifyContent: 'flex-end', 
        bottom: '-10%',
        width: '100%',
        paddingLeft: '15%',
        zIndex: '200',
    };

    const overlayStyle = {
        width: '100%', // 保持容器的寬度
        height: '100px', // 固定高度
        backgroundColor: 'rgba(210, 180, 140, 0.7)', // 半透明棕色
        color: 'white',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    };

    const overlayTextStyle = {
        position: 'absolute',
        fontSize: '150px',
        fontWeight: 'bold',
        fontFamily: 'Inter, sans-serif',
        bottom:'0',
        paddingLeft: '30%',
    };

  const arrowContainerStyle = {
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100px', // 设置圆框的大小
    height: '100px',
    border: '5px solid white', 
    borderRadius: '50%',      
    marginLeft: '70%',
    marginTop: '-10%',
};

const arrowStyle = {
    fontSize: '60px',
    color: 'white',            // 设置箭头颜色为黑色
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
};

    
    return (
      <>
         <div
            className="academics-container"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp} // 防止滑鼠移出視窗時無法正確觸發
        >
            <div
                className="course-box"
                style={{
                    backgroundColor: courses[currentCourse].bgColor,
                    transform: `translateX(${deltaX}px)`, // 讓方塊隨滑鼠移動
                    transition: startX === 0 ? 'transform 0.3s ease' : 'none', // 只有滑鼠鬆開時才啟用動畫
                }}
            >
                <h1>{courses[currentCourse].title}</h1>
                <p>{courses[currentCourse].description}</p>
            </div>
        </div>
    
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
         <div style={overlaycontainerStyle}>
           <div style={overlayStyle}>
            <span style={overlayTextStyle}>MATH</span>
            <div style={arrowContainerStyle}>
              <span style={arrowStyle}>→</span>
            </div>
           </div>  
         </div>
        </div>
      </>
   );
}

export default Academicsintroduction2;
