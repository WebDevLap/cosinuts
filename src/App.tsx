import React from 'react';
import { Header } from './modules/Header/Header';
import { Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/HomePage/HomePage';

export const App: React.FC = () => {
  return(
    <div className="wrapper">
      <Header/>
      <Routes>
        <Route path='/cosinuts/' element={<HomePage/>}/>
      </Routes>
    </div>
  )
}