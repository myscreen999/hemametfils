import React from 'react';
import { Mail, Phone, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        {/* Logo Section */}
        <div className="flex justify-between items-start mb-8">
          <div className="flex-1"></div>
          <div className="text-center">
            <h1 className="text-2xl font-bold text-white">HEMAM & FILS</h1>
            <p className="text-gray-400">Pêche Artisanale & Export d'Œufs de Mulet</p>
          </div>
          <img
            src="https://i.postimg.cc/4d6shF9m/IMG-7224.png"
            alt="HEMAM & FILS"
            className="h-16 w-auto"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Adresse */}
          <div>
            <h2 className="text-lg font-bold mb-4">HEMAM & FILS</h2>
            <p>
              Adresse : NOT MD NO 0048 cité plage<br />
              Nouakchott, Mauritanie
            </p>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-lg font-bold mb-4">Contact</h2>
            <p className="flex items-center gap-2">
              🇲🇷 +222 20161612 <span className="text-sm text-gray-400">(Mauritanie)</span>
            </p>
            <p className="flex items-center gap-2">
              🇨🇦 +15143485432 <span className="text-sm text-gray-400">(Canada)</span>
            </p>
            <p className="flex items-center gap-2 mt-2">
              📱 WhatsApp : +222 20161612
            </p>
            <p className="flex items-center gap-2 mt-2">
              📧 info@hemametfils.com
            </p>
          </div>

          {/* Réseaux sociaux */}
          <div>
            <h2 className="text-lg font-bold mb-4">Réseaux sociaux</h2>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/hemametfils" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center space-x-2 text-pink-400 hover:text-pink-300 transition-colors duration-300"
              >
                <Instagram size={20} />
                <span>Instagram</span>
              </a>
              <a 
                href="https://www.facebook.com/share/1EVqzxJgio" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-300"
              >
                <Facebook size={20} />
                <span>Facebook</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;