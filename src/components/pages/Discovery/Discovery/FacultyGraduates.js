import React, { useState, useEffect } from 'react';

const SchoolLogos = ({ logos }) => {
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 768);

    // 當窗口尺寸改變時，檢查螢幕寬度
    useEffect(() => {
        const handleResize = () => {
            setIsLargeScreen(window.innerWidth >= 768);
        };
        window.addEventListener("resize", handleResize);

        // 清理事件監聽器
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // 設定內聯樣式物件
    const logoStyle = {
        maxHeight: "100px",
        padding: "5px",
    };

    const colStyle = {
        width: isLargeScreen ? "20%" : "25%",  // 大螢幕 5 個，每個佔 20%；小螢幕 4 個，每個佔 25%
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "8px",  // 等同於 `mb-2`
    };
};

function FacultyGraduates() {
    // Automatically import all files from the logos directory
    const importAll = (r) => {
        let images = {};
        r.keys().forEach((item) => { images[item.replace('./', '')] = r(item); });
        return images;
    };

    const images = importAll(require.context('../../../../img/Homepage/SchoolLogo', false, /\.(png|jpe?g|svg)$/));

    // Convert object to array if needed
    const logos = Object.entries(images).map(([key, value]) => {
        return {
            src: value,
            alt: key.replace(/\..+$/, '')  // Remove file extension from alt text
        };
    });
    return (
        <section className="school-logos">
            <div className="container">
                <div className="row justify-content-center" style={{ gap: "0px" }}> {/* gap 代替 g-0 */}
                    {logos.map((logo, index) => (
                        <div key={index} style={colStyle}> {/* 內聯樣式根據螢幕尺寸變化 */}
                            <img src={logo.src} alt={logo.alt} style={logoStyle} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FacultyGraduates;
