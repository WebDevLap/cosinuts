import React from 'react';
import { Header } from './modules/Header/Header';
import { Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/HomePage/HomePage';
import { AboutPage } from './pages/AboutPage/AboutPage';
import { Nav } from './components/Nav';
import { Footer } from './modules/Footer/Footer';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';

export const App: React.FC = () => {
  return(
    <div className="wrapper">
      <Header/>
      <Routes>
        <Route path='/cosinuts/' element={<HomePage/>}/>
        <Route path='/cosinuts/aboutUs' element={<AboutPage/>}/>
        <Route path='*' element={<NotFoundPage/>}/>
      </Routes>
      <Nav/>
      <Footer/>
    </div>
  )
}