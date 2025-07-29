import React from 'react';
import { Mail, Phone, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        {/* Logo & Title */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-12 text-center md:text-left">
          <div className="mb-4 md:mb-0">
            <img
              src="https://i.postimg.cc/4d6shF9m/IMG-7224.png"
              alt="HEMAM & FILS"
              className="h-16 w-auto mx-auto md:mx-0"
            />
            <h1 className="text-2xl font-bold mt-2">HEMAM & FILS</h1>
            <p className="text-gray-400 text-sm">
              Pêche Artisanale & Export d'Œufs de Mulet
            </p>
          </div>
        </div>

        {/* Sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Adresse */}
          <div>
            <h2 className="text-lg font-bold mb-4">Adresse</h2>
            <p className="text-gray-300">
              NOT MD NO 0048 cité plage<br />
              Nouakchott, Mauritanie
            </p>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-lg font-bold mb-4">Contact</h2>
            <p className="flex items-center gap-2 text-gray-300">
              <Phone size={16} /> 🇲🇷 +222 20161612 <span className="text-sm text-gray-400">(Mauritanie)</span>
            </p>
            <p className="flex items-center gap-2 text-gray-300">
              <Phone size={16} /> 🇨🇦 +1 514 348 5432 <span className="text-sm text-gray-400">(Canada)</span>
            </p>
            <p className="mt-2 flex items-center gap-2 text-gray-300">
              📱 WhatsApp : +222 20161612
            </p>
            <p className="mt-2 flex items-center gap-2 text-gray-300">
              <Mail size={16} />
              <a
                href="mailto:info@hemametfils.com"
                className="hover:text-blue-400 transition-colors"
              >
                info@hemametfils.com
              </a>
            </p>
          </div>

          {/* Social Media */}
          <div>
            <h2 className="text-lg font-bold mb-4">Réseaux sociaux</h2>
            <div className="flex flex-col gap-3">
              <a
                href="https://www.instagram.com/hemametfils"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-pink-400 hover:text-pink-300 transition-colors"
              >
                <Instagram size={20} />
                Instagram
              </a>
              <a
                href="https://www.facebook.com/share/1EVqzxJgio"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
              >
                <Facebook size={20} />
                Facebook
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;