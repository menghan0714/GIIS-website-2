import React from 'react';
import Nav from './AcademicsHeader/Nav.js';

function AcademicsMain({ language }) {
   return (
    <>
        <div className="row">
            <Nav language={language} />
        </div>
    </>
  );
}

export default AcademicsMain;
