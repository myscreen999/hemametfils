import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Anchor, Ship, Award, Globe } from 'lucide-react';
import AnimatedCounter from '../components/AnimatedCounter';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section 
        data-aos="fade-in"
        data-aos-duration="1200"
        className="relative h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), url('https://i.postimg.cc/T2JGj9Bk/img-catalogue.png')`
        }}
      >
        <style jsx>{`
          @keyframes float3d {
            0%, 100% { transform: translateY(0px) rotateX(0deg) rotateY(0deg); }
            25% { transform: translateY(-10px) rotateX(2deg) rotateY(1deg); }
            50% { transform: translateY(-5px) rotateX(-1deg) rotateY(-2deg); }
            75% { transform: translateY(-15px) rotateX(1deg) rotateY(1deg); }
          }
          .hero-bg {
            animation: float3d 8s ease-in-out infinite;
          }
        `}</style>
        <div className="container mx-auto px-4 text-center text-white">
          <div className="max-w-4xl mx-auto space-y-6">
            <img
              data-aos="zoom-in"
              data-aos-delay="300"
              src="https://i.postimg.cc/4d6shF9m/IMG-7224.png"
              alt="HEMAM & FILS"
              className="h-20 w-auto mx-auto mb-6 hover:scale-110 transition-transform duration-300"
            />
            <h1 
              data-aos="fade-up"
              data-aos-delay="500"
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            >
              HEMAM & FILS
            </h1>
            <p 
              data-aos="fade-up"
              data-aos-delay="700"
              className="text-xl md:text-2xl mb-8 text-cyan-100"
            >
              Excellence en Pêche Artisanale & Export d'Œufs de Mulet
            </p>
            <p 
              data-aos="fade-up"
              data-aos-delay="900"
              className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90"
            >
              Plus de 10 ans d'expérience avec une flotte de 65 pirogues équipées de moteurs Tohatsu éco-responsables
            </p>
            <div 
              data-aos="fade-up"
              data-aos-delay="1100"
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/products"
                className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2"
              >
                <span>Nos Produits</span>
                <ArrowRight size={20} />
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white hover:bg-white hover:text-slate-900 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                Nous Contacter
              </Link>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Company Introduction */}
      <section 
        data-aos="fade-up"
        data-aos-offset="200"
        className="py-20 bg-white"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div 
              data-aos="fade-up"
              data-aos-delay="200"
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
                Tradition Maritime & Innovation
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                HEMAM & FILS combine l'expertise traditionnelle de la pêche artisanale mauritanienne 
                avec les standards internationaux d'export pour offrir des œufs de mulet de qualité premium.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div 
                data-aos="flip-left"
                data-aos-delay="300"
                className="text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className="bg-cyan-50 p-6 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center group-hover:bg-cyan-100 transition-colors duration-300">
                  <Anchor className="text-cyan-600" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">Tradition</h3>
                <p className="text-slate-600">Techniques de pêche artisanale transmises de génération en génération</p>
              </div>

              <div 
                data-aos="flip-left"
                data-aos-delay="500"
                className="text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className="bg-blue-50 p-6 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center group-hover:bg-blue-100 transition-colors duration-300">
                  <Ship className="text-blue-600" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">Flotte Moderne</h3>
                <p className="text-slate-600">65 pirogues équipées de moteurs Tohatsu économiques et écologiques</p>
              </div>

              <div 
                data-aos="flip-left"
                data-aos-delay="700"
                className="text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className="bg-green-50 p-6 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center group-hover:bg-green-100 transition-colors duration-300">
                  <Award className="text-green-600" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">Certification</h3>
                <p className="text-slate-600">Licence CEE renouvelée annuellement depuis 2003</p>
              </div>

              <div 
                data-aos="flip-left"
                data-aos-delay="900"
                className="text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className="bg-orange-50 p-6 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center group-hover:bg-orange-100 transition-colors duration-300">
                  <Globe className="text-orange-600" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">Export International</h3>
                <p className="text-slate-600">Marché local et international avec logistique optimisée</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Animated Statistics */}
      <section 
        data-aos="fade-up"
        data-aos-offset="200"
        className="py-20 bg-cover bg-center relative"
        style={{
          backgroundImage: `linear-gradient(rgba(6, 78, 115, 0.9), rgba(14, 116, 144, 0.8)), url('https://i.postimg.cc/m2KNxP0F/fish-3-25-1-2021.jpg')`
        }}
      >
        <div className="container mx-auto px-4">
          <div 
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Nos Réalisations
            </h2>
            <p className="text-xl text-cyan-100 max-w-2xl mx-auto">
              Des chiffres qui témoignent de notre expertise et de notre engagement
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div 
              data-aos="zoom-in"
              data-aos-delay="300"
              className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-8 hover:scale-105 transition-transform duration-300 text-white"
            >
              <AnimatedCounter target={10} suffix="+" />
              <p className="text-white text-lg font-medium mt-2">Années d'Expérience</p>
            </div>

            <div 
              data-aos="zoom-in"
              data-aos-delay="500"
              className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-8 hover:scale-105 transition-transform duration-300 text-white"
            >
              <AnimatedCounter target={65} />
              <p className="text-white text-lg font-medium mt-2">Pirogues</p>
            </div>

            <div 
              data-aos="zoom-in"
              data-aos-delay="700"
              className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-8 hover:scale-105 transition-transform duration-300 text-white"
            >
              <AnimatedCounter target={8} suffix="+" />
              <p className="text-white text-lg font-medium mt-2">Pays</p>
            </div>

            <div 
              data-aos="zoom-in"
              data-aos-delay="900"
              className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-8 hover:scale-105 transition-transform duration-300 text-white"
            >
              <AnimatedCounter target={100} suffix=" Tonnes" />
              <p className="text-white text-lg font-medium mt-2">d'Œufs de Mulet/An</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section 
        data-aos="fade-up"
        data-aos-offset="200"
        className="py-20 bg-slate-50"
      >
        <div className="container mx-auto px-4">
          <div 
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Nos Produits de la Mer
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Œufs de mulet de première qualité pour la production de boutargue, pêchés dans les eaux riches de la Mauritanie
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div 
              data-aos="fade-up"
              data-aos-delay="300"
              className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="aspect-w-16 aspect-h-12 overflow-hidden">
                <img
                  src="https://i.postimg.cc/9f4fzpb7/Boutargue-Poutargue-Mulet-300x300.jpg"
                  alt="Œufs de mulet (boutargue)"
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-800 mb-3">Œufs de Mulet (Boutargue)</h3>
                <p className="text-slate-600">Œufs de mulet soigneusement sélectionnés et traités selon les méthodes artisanales pour la production de boutargue premium.</p>
                <Link
                  to="/boutargue"
                  className="inline-block mt-4 bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105"
                >
                  En savoir plus
                </Link>
              </div>
            </div>

            <div 
              data-aos="fade-up"
              data-aos-delay="500"
              className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="aspect-w-16 aspect-h-12 overflow-hidden">
                <img
                  src="https://i.postimg.cc/90ZZthBN/Fishes-900x473.jpg"
                  alt="Fruits de mer"
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-800 mb-3">Fruits de Mer</h3>
                <p className="text-slate-600">Crevettes, langoustes et mollusques fraîchement pêchés selon les méthodes artisanales respectueuses.</p>
              </div>
            </div>

            <div 
              data-aos="fade-up"
              data-aos-delay="700"
              className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="aspect-w-16 aspect-h-12 overflow-hidden">
                <img
                  src="https://i.postimg.cc/6qvLjRBc/1690460145-0.webp"
                  alt="Export qualité"
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-800 mb-3">Qualité Export</h3>
                <p className="text-slate-600">Produits conditionnés selon les standards internationaux pour l'export vers l'Europe et l'Afrique.</p>
              </div>
            </div>
          </div>

          <div 
            data-aos="fade-up"
            data-aos-delay="900"
            className="text-center mt-12"
          >
            <Link
              to="/products"
              className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 inline-flex items-center space-x-2"
            >
              <span>Voir Tous Nos Produits</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section 
        data-aos="fade-up"
        data-aos-offset="200"
        className="py-20 bg-cover bg-center relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url('https://i.postimg.cc/Vkc4h7rC/164067202513355700.jpg')`
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <div 
            data-aos="fade-up"
            data-aos-delay="200"
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Partenaire de Confiance
            </h2>
            <p className="text-xl mb-8 text-cyan-100 max-w-2xl mx-auto">
              Rejoignez nos nombreux clients satisfaits et découvrez la qualité exceptionnelle 
              de nos produits de la mer mauritaniens.
            </p>
            <div 
              data-aos="fade-up"
              data-aos-delay="400"
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/contact"
                className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 inline-flex items-center justify-center space-x-2"
              >
                <span>Demander un Devis</span>
                <ArrowRight size={20} />
              </Link>
              <Link
                to="/about"
                className="border-2 border-white hover:bg-white hover:text-slate-900 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                En Savoir Plus
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;