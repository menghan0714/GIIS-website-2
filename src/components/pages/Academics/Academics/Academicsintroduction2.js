import React, { useRef, useState,useEffect} from 'react';
import img from '../../../../img/Academics/Math.jpg';

function Academicsintroduction2({ language }) {

    const courses = [
        { title: 'MATH', content: 'Mathematics course details...' },
        { title: 'SCIENCE', content: 'Science course details...' },
        { title: 'HISTORY', content: 'History course details...' },
    ];
    
    const extendedCourses = [...courses, ...courses, ...courses]; // 將課程清單擴展為三倍以實現無限滾動效果
    const scrollRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    
    useEffect(() => {
     const scrollWidth = scrollRef.current.scrollWidth;
     const childWidth = scrollWidth / extendedCourses.length;
     scrollRef.current.scrollLeft = childWidth * courses.length;

        
        // 當滾動超出邊界時跳轉回中間
    const handleScroll = () => {
            if (scrollRef.current.scrollLeft <= 0) {
                scrollRef.current.scrollLeft = childWidth * courses.length;
            } else if (scrollRef.current.scrollLeft >= childWidth * (courses.length * 2)) {
                scrollRef.current.scrollLeft = childWidth * courses.length;
            }
        };

        scrollRef.current.addEventListener('scroll', handleScroll);
        return () => scrollRef.current.removeEventListener('scroll', handleScroll);
    }, [extendedCourses.length, courses.length]);

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - scrollRef.current.offsetLeft);
        setScrollLeft(scrollRef.current.scrollLeft);
        e.preventDefault();
    };

    const handleMouseUp = () => {
        if (isDragging) {
            setIsDragging(false);
        }
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;

        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX) * 1.5;
        scrollRef.current.scrollLeft = scrollLeft - walk;
    };

    const frameStyle = {
        position: 'absolute',
        left: '140%',
        bottom: '-12px',
        display: 'flex',
        overflow: 'hidden', // 隱藏滾動條
        clipPath: 'inset(0)',
        width: '40vh',
        cursor: isDragging ? 'grabbing' : 'grab',
    };

  const courseBoxStyle = {
    minWidth: '100vh', // 水平填充寬度
    height: '570px', // 固定高度
    backgroundColor: 'black',
    color: 'white',
    display: 'flex',
    flexDirection: 'column', // 垂直排列內容
    justifyContent: 'space-between', // 標題與箭頭居上下兩側
    alignItems: 'center',
    padding: '40px', // 增加內邊距
    textAlign: 'center', // 文字居中
};

  const titleStyle = {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '10px',
};

  const contentStyle = {
    fontSize: '1.2rem',
    lineHeight: '1.6',
};

  const arrowStyle = {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginTop: '20px',
    cursor: 'pointer',
};

  
    const headlineStyle = {
        marginTop: '100px',
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
        cursor: 'pointer',
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

const arrowStyle2 = {
    fontSize: '60px',
    color: 'white',            // 设置箭头颜色为黑色
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
};

const handleNavigation = () => {
        window.open('https://moodles.genesisideas.school/', '_blank'); // 新分頁開啟網址
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

         <div
            ref={scrollRef}
            style={frameStyle}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            {extendedCourses.map((course, index) => (
                <div key={index} style={courseBoxStyle}>
                    <h2 style={titleStyle}>{course.title}</h2>
                    <p style={contentStyle}>{course.content}</p>
                    <div style={arrowStyle}>→</div>
                </div>
            ))}
         </div>
        </div>
            
        <div style={headline2Style}>
          <p>SUBJECTS</p>
        </div>
              
        <div style={containerStyle}>
         <img src={img} alt="Math" style={imageStyle} />
         <div style={overlaycontainerStyle}>
           <div style={overlayStyle} onClick={handleNavigation}>
            <span style={overlayTextStyle}>MATH</span>
            <div style={arrowContainerStyle}>
              <span style={arrowStyle2}>→</span>
            </div>
           </div>  
         </div>
        </div>
      </>
   );
}

export default Academicsintroduction2;
