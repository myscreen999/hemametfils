import React from 'react';
import { Ship, Zap, Leaf, Users, Gauge, Shield } from 'lucide-react';

const Fleet = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section 
        data-aos="fade-in"
        data-aos-duration="1200"
        className="py-20 bg-cover bg-center relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url('https://i.postimg.cc/ry1WSB8v/pecheurs-russie-1.jpg')`
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <h1 
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Notre Flotte
          </h1>
          <p 
            data-aos="fade-up"
            data-aos-delay="500"
            className="text-xl md:text-2xl max-w-3xl mx-auto text-cyan-100"
          >
            65 pirogues modernes équipées de moteurs Tohatsu pour une pêche efficace et respectueuse
          </p>
        </div>
      </section>

      {/* Fleet Overview */}
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
                Technologie & Tradition
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Notre flotte combine l'expertise traditionnelle des pêcheurs mauritaniens avec 
                les technologies modernes pour une pêche optimale et durable.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div data-aos="fade-right" data-aos-delay="300">
                <img
                  src="https://i.postimg.cc/c4d3TFC6/65f86cd3c0c89-1024x576-png.webp"
                  alt="Flotte LEMAM & FILS"
                  className="rounded-lg shadow-xl hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div 
                data-aos="fade-left"
                data-aos-delay="500"
                className="space-y-6"
              >
                <h3 className="text-3xl font-bold text-slate-800">65 Pirogues Professionnelles</h3>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Chaque pirogue de notre flotte est soigneusement entretenue et équipée pour 
                  garantir la sécurité de nos équipages et l'efficacité de nos opérations de pêche. 
                  Nos embarcations allient robustesse traditionnelle et innovations modernes.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-cyan-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-cyan-600">65</div>
                    <div className="text-sm text-slate-600">Pirogues</div>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">100%</div>
                    <div className="text-sm text-slate-600">Motorisées</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tohatsu Motors Section */}
      <section 
        data-aos="fade-up"
        data-aos-offset="200"
        className="py-20 bg-slate-50"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div 
              data-aos="fade-up"
              data-aos-delay="200"
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
                Moteurs Tohatsu
              </h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Fiabilité, économie de carburant et respect de l'environnement : 
                les moteurs Tohatsu équipent toute notre flotte
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div 
                data-aos="flip-up"
                data-aos-delay="300"
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="bg-green-50 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <Leaf className="text-green-600" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-4 text-center">Éco-Responsable</h3>
                <p className="text-slate-600 text-center">
                  Moteurs à faibles émissions respectant les normes environnementales les plus strictes
                </p>
              </div>

              <div 
                data-aos="flip-up"
                data-aos-delay="500"
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="bg-blue-50 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <Zap className="text-blue-600" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-4 text-center">Économique</h3>
                <p className="text-slate-600 text-center">
                  Consommation de carburant optimisée pour réduire les coûts d'exploitation
                </p>
              </div>

              <div 
                data-aos="flip-up"
                data-aos-delay="700"
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="bg-orange-50 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <Shield className="text-orange-600" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-4 text-center">Fiable</h3>
                <p className="text-slate-600 text-center">
                  Technologie éprouvée garantissant une disponibilité maximale en mer
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section 
        data-aos="fade-up"
        data-aos-offset="200"
        className="py-20 bg-white"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div 
              data-aos="fade-up"
              data-aos-delay="200"
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
                Caractéristiques Techniques
              </h2>
              <p className="text-xl text-slate-600">
                Spécifications détaillées de notre flotte pour une performance optimale
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div 
                data-aos="fade-right"
                data-aos-delay="400"
                className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white p-8 rounded-lg shadow-xl"
              >
                <h3 className="text-2xl font-bold mb-6">Pirogues Traditionnelles</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Ship className="text-cyan-200" size={20} />
                    <span>Longueur : 12-15 mètres</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="text-cyan-200" size={20} />
                    <span>Équipage : 6-8 pêcheurs</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Gauge className="text-cyan-200" size={20} />
                    <span>Capacité : 2-3 tonnes</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Leaf className="text-cyan-200" size={20} />
                    <span>Matériaux éco-responsables</span>
                  </div>
                </div>
              </div>

              <div 
                data-aos="fade-left"
                data-aos-delay="600"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 rounded-lg shadow-xl"
              >
                <h3 className="text-2xl font-bold mb-6">Moteurs Tohatsu</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Zap className="text-blue-200" size={20} />
                    <span>Puissance : 40-60 CV</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Leaf className="text-blue-200" size={20} />
                    <span>4 temps, faibles émissions</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Gauge className="text-blue-200" size={20} />
                    <span>Consommation optimisée</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Shield className="text-blue-200" size={20} />
                    <span>Maintenance programmée</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fleet Management */}
      <section 
        data-aos="fade-up"
        data-aos-offset="200"
        className="py-20 bg-cover bg-center relative"
        style={{
          backgroundImage: `linear-gradient(rgba(6, 78, 115, 0.9), rgba(14, 116, 144, 0.8)), url('https://i.postimg.cc/m2KNxP0F/fish-3-25-1-2021.jpg')`
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <div 
            data-aos="fade-up"
            data-aos-delay="200"
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Gestion de Flotte</h2>
            <p className="text-xl mb-12 text-cyan-100">
              Une maintenance rigoureuse et une gestion optimisée pour garantir 
              la disponibilité et la sécurité de nos embarcations
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div 
                data-aos="fade-up"
                data-aos-delay="400"
                className="bg-white/10 backdrop-blur-sm rounded-lg p-8"
              >
                <Shield className="text-yellow-400 mx-auto mb-4" size={48} />
                <h3 className="text-xl font-semibold mb-3">Maintenance Préventive</h3>
                <p className="text-cyan-100">
                  Programme de maintenance régulière pour assurer la fiabilité de chaque pirogue
                </p>
              </div>
              
              <div 
                data-aos="fade-up"
                data-aos-delay="600"
                className="bg-white/10 backdrop-blur-sm rounded-lg p-8"
              >
                <Users className="text-green-400 mx-auto mb-4" size={48} />
                <h3 className="text-xl font-semibold mb-3">Formation Équipages</h3>
                <p className="text-cyan-100">
                  Formation continue de nos pêcheurs aux techniques modernes et à la sécurité
                </p>
              </div>
              
              <div 
                data-aos="fade-up"
                data-aos-delay="800"
                className="bg-white/10 backdrop-blur-sm rounded-lg p-8"
              >
                <Gauge className="text-blue-400 mx-auto mb-4" size={48} />
                <h3 className="text-xl font-semibold mb-3">Suivi Performance</h3>
                <p className="text-cyan-100">
                  Monitoring des performances pour optimiser l'efficacité de chaque sortie
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Fleet;