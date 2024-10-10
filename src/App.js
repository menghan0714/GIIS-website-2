import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/pages/Homepage/Homepage';
import Discovery from './components/pages/Discovery/Discovery';
import Academics from './components/pages/Academics/Academics';
import Footer from './components/Footer/Footer';

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
    
      <Routes>
        <Route path="/discovery" element={<Discovery language={language} />} />
        <Route path="/" element={<Main language={language} />} />
      </Routes>

      <Footer language={language} />
   
   <Router>
     <h1>Hello, World!</h1>
   </Router>
  );
}

export default App;
