import React from 'react';
import { Routes, Route } from 'react-router-dom'

import { HomePage } from './pages/HomePage/HomePage';
import { AboutPage } from './pages/AboutPage/AboutPage';
import { Nav } from './components/Nav';
import { Footer } from './modules/Footer/Footer';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';
import { DeliveryPage } from './pages/DeliveryPage/DeliveryPage';
import { ShopsPage } from './pages/ShopsPage/ShopsPage';
import { Header } from './modules/Header/Header';
import { ContactsPage } from './pages/ContactsPage/ContactsPage';

export const App: React.FC = () => {
  return(
    <div className="wrapper">
      <Header/>
      <Routes>
        <Route path='/cosinuts/' element={<HomePage/>}/>
        <Route path='/cosinuts/aboutUs' element={<AboutPage/>}/>
        <Route path='/cosinuts/aboutDelivery' element={<DeliveryPage/>}/>
        <Route path='/cosinuts/shops' element={<ShopsPage/>}/>
        <Route path='/cosinuts/contacts' element={<ContactsPage/>}/>
        <Route path='*' element={<NotFoundPage/>}/>
      </Routes>
      <Nav/>
      <Footer/>
    </div>
  )
}