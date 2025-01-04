import React, { useState, useEffect } from 'react';
import { Routes, Route} from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

import Homepage from './components/pages/Homepage/HomepageMain';
import Discovery from './components/pages/Discovery/DiscoveryMain';
import Academics from './components/pages/Academics/AcademicsMain';
import Admission from './components/pages/Admission/AdmissionMain';
import Support from './components/pages/Support/SupportMain';
import Transcript from './components/pages/Transcript/TranscriptMain';

function App() {

  const location = useLocation();
  const isTranscript = location.pathname === '/transcript';

  return (
     <>
      {!isTranscript && <Header language={language} toggleLanguage={toggleLanguage} />}
      <main className="container-fluid">
       <Routes>
         <Route path="/" element={<Homepage language={language} />} />
         <Route path="/discovery" element={<Discovery language={language} />} />
         <Route path="/academics" element={<Academics language={language} />} />
         <Route path="/admission" element={<Admission language={language} />} />
         <Route path="/support" element={<Support language={language} />} />
         <Route path="/transcript" element={<Transcript language={language} />} />
       </Routes>
      </main>
      {!isTranscript && <Footer />}
     </>
  );
}

export default App;
