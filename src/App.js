import React, { useState, useEffect } from 'react';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import Discovery from './components/pages/Discovery/Discovery';

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
    
      <Routes>
        <Route path="/discovery" element={<Discovery language={language} />} />
        <Route path="/admission" element={<Admission language={language} />} />
        <Route path="/academics" element={<Academics language={language} />} />
        <Route path="/support" element={<Support language={language} />} />
        <Route path="/" element={<Main language={language} />} />
      </Routes>

      <Footer language={language} />
    </>
  );
}

export default App;

