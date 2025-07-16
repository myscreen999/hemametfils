import React, { useState, useEffect } from 'react';
import { X, Cookie } from 'lucide-react';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-slate-800 text-white p-4 shadow-lg z-50">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0">
        <div className="flex items-center space-x-3">
          <Cookie className="text-cyan-400" size={24} />
          <p className="text-sm">
            Nous utilisons des cookies pour améliorer votre expérience sur notre site web. 
            En continuant à naviguer, vous acceptez notre utilisation des cookies.
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <button
            onClick={declineCookies}
            className="px-4 py-2 text-sm border border-slate-600 rounded-lg hover:bg-slate-700 transition-colors duration-300"
          >
            Refuser
          </button>
          <button
            onClick={acceptCookies}
            className="px-4 py-2 text-sm bg-cyan-600 hover:bg-cyan-700 rounded-lg transition-colors duration-300"
          >
            Accepter
          </button>
          <button
            onClick={declineCookies}
            className="p-2 hover:bg-slate-700 rounded-lg transition-colors duration-300"
          >
            <X size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;