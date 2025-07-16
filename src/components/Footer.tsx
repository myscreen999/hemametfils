import React from 'react';
import { Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
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
              📞 0022220161612 <span className="text-sm text-gray-400">(Mauritanie)</span>
            </p>
            <p className="flex items-center gap-2">
              📞 +15143485432 <span className="text-sm text-gray-400">(Canada)</span>
            </p>
            <p className="flex items-center gap-2 mt-2">
              📱 WhatsApp : 0022220161612
            </p>
            <p className="flex items-center gap-2 mt-2">
              📧 info@hemametfils.com
            </p>
          </div>

          {/* Réseaux sociaux */}
          <div>
            <h2 className="text-lg font-bold mb-4">Réseaux sociaux</h2>
            <p>
              <a href="https://www.instagram.com/hemametfils" target="_blank" rel="noreferrer">Instagram</a><br />
              <a href="https://www.facebook.com/share/1EVqzxJgio" target="_blank" rel="noreferrer">Facebook</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;