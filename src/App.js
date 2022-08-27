import React from 'react';
//Global Style
import GlobalStyle from './components/GlobalStyle';
// Pages
import AboutUs from './pages/AboutUs';
import OurWork from './pages/OurWork';
import Contact from './pages/Contact';
import MovieDetail from './pages/MovieDetail';
// Components
import Nav from './components/Nav';
// Router
import { Routes, Route, useLocation } from 'react-router-dom';
//Animation
import { AnimatePresence } from 'framer-motion';

function App() {
  const location = useLocation();
  return (
    <div className='App'>
      <GlobalStyle />
      <Nav />
      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<AboutUs />} />
          <Route path='/Work' element={<OurWork />} />
          <Route path='/Work/:id' element={<MovieDetail />} />
          <Route path='/Contact' element={<Contact />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
