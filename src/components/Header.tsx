import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'Accueil' },
    { path: '/about', label: 'Notre Histoire' },
    { path: '/fleet', label: 'Notre Flotte' },
    { path: '/products', label: 'Nos Produits' },
    { path: '/boutargue', label: 'Œufs de mulet (Boutargue)' },
    { path: '/export', label: 'Export & Logistique' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 hover:scale-105 transition-transform duration-300">
            <img
              src="https://i.postimg.cc/4d6shF9m/IMG-7224.png"
              alt="HEMAM & FILS"
              className="h-12 w-auto"
            />
            <div className={`${isScrolled ? 'text-slate-800' : 'text-white'} transition-colors duration-300`}>
              <h1 className="text-xl font-bold">HEMAM & FILS</h1>
              <p className="text-sm opacity-80">Pêche Artisanale</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`${
                  isScrolled ? 'text-slate-700 hover:text-cyan-600' : 'text-white hover:text-cyan-200'
                } font-medium transition-all duration-300 hover:scale-105 ${
                  location.pathname === item.path ? 'border-b-2 border-cyan-500' : ''
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-all duration-300 hover:scale-105 ${
              isScrolled 
                ? 'text-slate-700 hover:bg-slate-100' 
                : 'text-white hover:bg-white/20'
            }`}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-white/95 backdrop-blur-md rounded-lg shadow-lg">
            <nav className="flex flex-col space-y-2 p-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-slate-700 hover:text-cyan-600 font-medium py-2 px-3 rounded-lg transition-all duration-300 hover:bg-slate-50 ${
                    location.pathname === item.path ? 'bg-cyan-50 text-cyan-600' : ''
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;