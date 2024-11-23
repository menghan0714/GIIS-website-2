import React from 'react';
import TranscriptContent from './TranscriptContetn.js';


function TranscriptMain({ language }) {

    return (
      <div className="card mt-0" id="content">
         <div className="container">
            <div className="card-body">
               <TranscriptContent language={language} />
            </div>
         </div>
       </div>
        
    );
}

export default TranscriptMain;
