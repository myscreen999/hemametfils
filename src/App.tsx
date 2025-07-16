import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import CookieConsent from './components/CookieConsent';
import Home from './pages/Home';
import About from './pages/About';
import Fleet from './pages/Fleet';
import Products from './pages/Products';
import Boutargue from './pages/Boutargue';
import Export from './pages/Export';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/fleet" element={<Fleet />} />
            <Route path="/products" element={<Products />} />
            <Route path="/boutargue" element={<Boutargue />} />
            <Route path="/export" element={<Export />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
        <CookieConsent />
      </div>
    </Router>
  );
}

export default App;