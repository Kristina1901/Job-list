import React from 'react';
import './App.css';
import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import JobsList from './JobsList';
import DetailedJob from './DetailedJob'

function App() {
  return (
    <>
     <Routes>
          <Route path="/" element={<JobsList/>} />
          <Route
            path="/detailedJob/:id"
            element={<DetailedJob/>}
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      
    </>
  );
}

export default App;
