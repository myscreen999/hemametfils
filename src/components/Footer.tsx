import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Fish, Waves, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img
                src="https://i.postimg.cc/4d6shF9m/IMG-7224.png"
                alt="HEMAM & FILS"
                className="h-10 w-auto"
              />
              <div>
                <h3 className="text-xl font-bold">HEMAM & FILS</h3>
                <p className="text-sm text-slate-300">Pêche Artisanale</p>
              </div>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              Plus de 10 ans d'expérience dans la pêche artisanale et l'export d'œufs de mulet (boutargue) en Mauritanie.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Navigation</h4>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-slate-300 hover:text-cyan-400 transition-colors duration-300">
                Accueil
              </Link>
              <Link to="/about" className="text-slate-300 hover:text-cyan-400 transition-colors duration-300">
                À Propos
              </Link>
              <Link to="/fleet" className="text-slate-300 hover:text-cyan-400 transition-colors duration-300">
                Notre Flotte
              </Link>
              <Link to="/products" className="text-slate-300 hover:text-cyan-400 transition-colors duration-300">
                Produits
              </Link>
              <Link to="/export" className="text-slate-300 hover:text-cyan-400 transition-colors duration-300">
                Export & Logistique
              </Link>
              <Link to="/contact" className="text-slate-300 hover:text-cyan-400 transition-colors duration-300">
                Contact
              </Link>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Nos Services</h4>
            <div className="space-y-2 text-slate-300 text-sm">
              <div className="flex items-center space-x-2">
                <Fish size={16} className="text-cyan-400" />
                <span>Pêche Artisanale</span>
              </div>
              <div className="flex items-center space-x-2">
                <Waves size={16} className="text-cyan-400" />
                <span>Export International</span>
              </div>
              <div className="flex items-center space-x-2">
                <Fish size={16} className="text-cyan-400" />
                <span>Œufs de Mulet</span>
              </div>
              <div className="flex items-center space-x-2">
                <Waves size={16} className="text-cyan-400" />
                <span>Boutargue Premium</span>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact</h4>
            <div className="space-y-3 text-slate-300 text-sm">
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-cyan-400" />
                <div>
                  <div>📞 0022220161612 (Mauritanie)</div>
                  <div>📞 +15143485432 (Canada)</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-cyan-400" />
                <div>
                  <div>📧 info@hemametfils.com</div>
                  <div>contact@hemamfils.mr</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-cyan-400" />
                <span>NOT MD NO 0048 cité plage, Nouakchott, Mauritanie</span>
              </div>
              <div className="flex items-center space-x-4 mt-4">
                <a 
                  href="https://www.instagram.com/hemametfils" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                >
                  <Instagram size={20} />
                </a>
                <a 
                  href="https://www.facebook.com/share/1EVqzxJgio/?mibextid=wwXIfr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                >
                  <Facebook size={20} />
                </a>
              </div>
            </div>
          </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center">
          <p className="text-slate-400 text-sm">
            © 2025 HEMAM & FILS. Tous droits réservés. | Licence CEE renouvelée annuellement depuis 2003.
          </p>
          <p className="text-slate-500 text-xs mt-2">
            RNC : 116753/1490 | NIF : 01240241
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;