import React from 'react';
import TranscriptContent from './TranscriptContent.js';


function TranscriptMain({ language }) {

    return (
      <div className="card mt-0" id="content">
         <div className="container">
           <TranscriptContent language={language} />
         </div>
      </div>
    );
}

export default TranscriptMain;
