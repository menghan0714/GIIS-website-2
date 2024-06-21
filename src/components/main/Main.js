import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './Homepage';

function Main({ language }) {
    return (
        <main className="container-fluid">
            <Routes>
                <Route path="/" element={<Homepage language={language} />} />
            </Routes>
        </main>
    );
}

export default Main;
