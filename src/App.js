import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

import Homepage from './components/pages/Homepage/HomepageMain';
import Discovery from './components/pages/Discovery/DiscoveryMain';
import Academics from './components/pages/Academics/AcademicsMain';
import Admission from './components/pages/Academics/AdmissionMain';
import StudentSupport from './components/pages/Academics/Student SupportMain';

function App() {
   const [language, setLanguage] = useState('en');

  useEffect(() => {
    const browserLanguage = navigator.language || navigator.userLanguage;
    if (browserLanguage.includes('zh')) {
      setLanguage('zh');
    }
  }, []);

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === 'en' ? 'zh' : 'en'));
  };

  return (
     <>
      <Header language={language} toggleLanguage={toggleLanguage} />
      <main className="container-fluid">
       <Routes>
         <Route path="/" element={<Homepage language={language} />} />
         <Route path="/discovery" element={<Discovery language={language} />} />
         <Route path="/academics" element={<Academics language={language} />} />
         <Route path="/admission" element={<Admission language={language} />} />
         <Route path="/student support" element={<Student Support language={language} />} />
       </Routes>
      </main>
      <Footer />
     </>
  );
}

export default App;
