import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

import Homepage from './components/pages/Homepage/HomepageMain';
import Discovery from './components/pages/Discovery/Discovery';
import Academics from './components/pages/Academics/Academics';

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
    <Router>
      <Header language={language} toggleLanguage={toggleLanguage} />
      <main className="container-fluid">
     
      <Routes>
        <Route path="/" element={<Homepage language={language} />} />
        <Route path="/discovery" element={<Discovery language={language} />} />
        <Route path="/academics" element={<Academics language={language} />} />
        <Route path="/" element={<Academics language={language} />} />
      </Routes>
     </main>
     <Footer />
   </Router>
  );
}

export default App;
