import React from 'react';
import './App.css';
import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import JobsList from './JobsList';

function App() {
  return (
    <>
     <Routes>
          <Route path="/" element={<JobsList/>} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      
    </>
  );
}

export default App;
