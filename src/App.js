import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingFAQ from './components/FloatingFAQ';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Team from './pages/Team';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className='py-4'>
        <Container>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/menu' element={<Menu />} />
            <Route path='/about' element={<About />} />
            <Route path='/team' element={<Team />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </Container>
      </main>
      <Footer />
      <FloatingFAQ />
    </BrowserRouter>
  );
}

export default App;