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


// {
//   "name": "cosinuts",
//   "version": "0.1.0",
//   "private": true,
//   "homepage": "https://WebDevLap.github.io/cosinuts/",
//   "dependencies": {
//     "@reduxjs/toolkit": "^1.9.2",
//     "@testing-library/jest-dom": "^5.16.5",
//     "@testing-library/react": "^13.4.0",
//     "@testing-library/user-event": "^13.5.0",
//     "@types/jest": "^27.5.2",
//     "@types/node": "^16.18.11",
//     "@types/react": "^18.0.27",
//     "@types/react-dom": "^18.0.10",
//     "axios": "^1.3.2",
//     "qs": "^6.11.0",
//     "react": "^18.2.0",
//     "react-content-loader": "^6.2.0",
//     "react-dom": "^18.2.0",
//     "react-redux": "^8.0.5",
//     "react-router-dom": "^6.8.0",
//     "react-scripts": "5.0.1",
//     "sass": "^1.58.0",
//     "typescript": "^4.9.5",
//     "web-vitals": "^2.1.4"
//   },
//   "scripts": {
//     "predeploy": "npm run build",
//     "deploy": "gh-pages -d build",
//     "start": "react-scripts start",
//     "build": "react-scripts build",
//     "test": "react-scripts test",
//     "eject": "react-scripts eject"
//   },
//   "eslintConfig": {
//     "extends": [
//       "react-app",
//       "react-app/jest"
//     ]
//   },
//   "browserslist": {
//     "production": [
//       ">0.2%",
//       "not dead",
//       "not op_mini all"
//     ],
//     "development": [
//       "last 1 chrome version",
//       "last 1 firefox version",
//       "last 1 safari version"
//     ]
//   },
//   "devDependencies": {
//     "gh-pages": "^5.0.0"
//   }
// }
