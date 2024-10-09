import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Discovery from './components/pages/Discovery/Discovery';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';

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
