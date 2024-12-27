import React from 'react';
import TranscriptContent from './TranscriptContent.js';


function TranscriptMain({ language }) {

    return (
      <div id="content">
         <div className="container">
           <TranscriptContent language={language} />
         </div>
      </div>
    );
}

export default TranscriptMain;
