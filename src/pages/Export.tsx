import React from 'react';
import { Truck, Ship, Package, Clock, Globe, CheckCircle, Thermometer, FileText } from 'lucide-react';

const Export = () => {
  const exportProcess = [
    {
      step: 1,
      title: "Pêche & Sélection",
      description: "Pêche matinale et sélection rigoureuse des produits selon les standards export",
      icon: CheckCircle
    },
    {
      step: 2,
      title: "Conditionnement",
      description: "Conditionnement immédiat sur glace avec respect de la chaîne du froid",
      icon: Package
    },
    {
      step: 3,
      title: "Contrôle Qualité",
      description: "Inspection vétérinaire et certification selon les normes CEE",
      icon: FileText
    },
    {
      step: 4,
      title: "Transport Frigorifique",
      description: "Acheminement par camions frigorifiques vers les ports d'embarquement",
      icon: Truck
    },
    {
      step: 5,
      title: "Export Maritime",
      description: "Expédition par cargo frigorifique vers les destinations internationales",
      icon: Ship
    },
    {
      step: 6,
      title: "Livraison Client",
      description: "Réception par le client final avec traçabilité complète",
      icon: Globe
    }
  ];

  const destinations = [
    { country: "Espagne", city: "Madrid, Barcelone", frequency: "3x/semaine" },
    { country: "France", city: "Paris, Marseille", frequency: "2x/semaine" },
    { country: "Italie", city: "Rome, Milan", frequency: "2x/semaine" },
    { country: "Allemagne", city: "Berlin, Hambourg", frequency: "1x/semaine" },
    { country: "Belgique", city: "Bruxelles, Anvers", frequency: "1x/semaine" },
    { country: "Pays-Bas", city: "Amsterdam, Rotterdam", frequency: "1x/semaine" },
    { country: "Sénégal", city: "Dakar", frequency: "Quotidien" },
    { country: "Mali", city: "Bamako", frequency: "2x/semaine" }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section 
        data-aos="fade-in"
        data-aos-duration="1200"
        className="py-20 bg-cover bg-center relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url('https://i.postimg.cc/T3strdV4/IMG-7230.jpg')`
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <h1 
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Export & Logistique
          </h1>
          <p 
            data-aos="fade-up"
            data-aos-delay="500"
            className="text-xl md:text-2xl max-w-3xl mx-auto text-cyan-100"
          >
            L'exportation de produits de la mer vers le monde entier
          </p>
        </div>
      </section>

      {/* Export Process */}
      <section 
        data-aos="fade-up"
        data-aos-offset="200"
        className="py-20 bg-white"
      >
        <div className="container mx-auto px-4">
          <div 
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Processus d'Export
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              De la pêche à la livraison : un processus maîtrisé garantissant fraîcheur et qualité
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {exportProcess.map((step, index) => (
                <div 
                  key={index}
                  data-aos="fade-right"
                  data-aos-delay={300 + index * 150}
                  className="flex items-start space-x-6 group"
                >
                  <div className="flex-shrink-0">
                    <div className="bg-cyan-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg group-hover:scale-110 transition-transform duration-300">
                      {step.step}
                    </div>
                  </div>
                  <div className="flex-1 bg-slate-50 p-6 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105">
                    <div className="flex items-start space-x-4">
                      <step.icon className="text-cyan-600 mt-1" size={24} />
                      <div>
                        <h3 className="text-xl font-semibold text-slate-800 mb-2">{step.title}</h3>
                        <p className="text-slate-600">{step.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Standards */}
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
              Standards & Certifications
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Conformité aux plus hauts standards internationaux de sécurité alimentaire
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div 
              data-aos="flip-up"
              data-aos-delay="300"
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-center"
            >
              <div className="bg-blue-50 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <FileText className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Licence CEE</h3>
              <p className="text-slate-600">Certification européenne renouvelée annuellement depuis 2003</p>
            </div>

            <div 
              data-aos="flip-up"
              data-aos-delay="500"
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-center"
            >
              <div className="bg-green-50 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Thermometer className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">HACCP</h3>
              <p className="text-slate-600">Système d'analyse des dangers et points critiques de contrôle</p>
            </div>

            <div 
              data-aos="flip-up"
              data-aos-delay="700"
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-center"
            >
              <div className="bg-cyan-50 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <CheckCircle className="text-cyan-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">ISO 22000</h3>
              <p className="text-slate-600">Management de la sécurité des denrées alimentaires</p>
            </div>

            <div 
              data-aos="flip-up"
              data-aos-delay="900"
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-center"
            >
              <div className="bg-orange-50 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Globe className="text-orange-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Traçabilité</h3>
              <p className="text-slate-600">Suivi complet du produit de la mer au consommateur</p>
            </div>
          </div>
        </div>
      </section>

      {/* Destinations */}
      <section 
        data-aos="fade-up"
        data-aos-offset="200"
        className="py-20 bg-white"
      >
        <div className="container mx-auto px-4">
          <div 
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Nos Destinations
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Livraisons régulières vers l'Europe et l'Afrique avec des fréquences adaptées
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {destinations.map((destination, index) => (
                <div 
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={300 + index * 100}
                  className="bg-slate-50 p-6 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-center space-x-3 mb-3">
                    <Globe className="text-cyan-600" size={20} />
                    <h3 className="font-semibold text-slate-800">{destination.country}</h3>
                  </div>
                  <p className="text-slate-600 text-sm mb-2">{destination.city}</p>
                  <div className="flex items-center space-x-2">
                    <Clock className="text-green-600" size={16} />
                    <span className="text-green-600 font-medium text-sm">{destination.frequency}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Logistics Advantages */}
      <section 
        data-aos="fade-up"
        data-aos-offset="200"
        className="py-20 bg-cover bg-center relative"
        style={{
          backgroundImage: `linear-gradient(rgba(6, 78, 115, 0.9), rgba(14, 116, 144, 0.8)), url('https://i.postimg.cc/Vkc4h7rC/164067202513355700.jpg')`
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <div 
            data-aos="fade-up"
            data-aos-delay="200"
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Avantages Logistiques</h2>
            <p className="text-xl mb-12 text-cyan-100">
              Une expertise logistique développée pour garantir la satisfaction de nos clients internationaux
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div 
                data-aos="fade-up"
                data-aos-delay="400"
                className="bg-white/10 backdrop-blur-sm rounded-lg p-8"
              >
                <Truck className="text-cyan-300 mx-auto mb-4" size={48} />
                <h3 className="text-xl font-semibold mb-3">Transport Rapide</h3>
                <p className="text-cyan-100">
                  Livraisons express avec respect de la chaîne du froid
                </p>
              </div>
              
              <div 
                data-aos="fade-up"
                data-aos-delay="600"
                className="bg-white/10 backdrop-blur-sm rounded-lg p-8"
              >
                <Package className="text-green-300 mx-auto mb-4" size={48} />
                <h3 className="text-xl font-semibold mb-3">Conditionnement Optimal</h3>
                <p className="text-cyan-100">
                  Emballages adaptés pour préserver fraîcheur et qualité
                </p>
              </div>
              
              <div 
                data-aos="fade-up"
                data-aos-delay="800"
                className="bg-white/10 backdrop-blur-sm rounded-lg p-8"
              >
                <Clock className="text-orange-300 mx-auto mb-4" size={48} />
                <h3 className="text-xl font-semibold mb-3">Délais Garantis</h3>
                <p className="text-cyan-100">
                  Respect des délais de livraison avec suivi en temps réel
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Export */}
      <section 
        data-aos="fade-up"
        data-aos-offset="200"
        className="py-20 bg-white"
      >
        <div className="container mx-auto px-4 text-center">
          <div 
            data-aos="fade-up"
            data-aos-delay="200"
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Export Partnership
            </h2>
            <p className="text-xl text-slate-600 mb-8">
              Intéressé par une collaboration export ? Contactez notre équipe spécialisée pour discuter de vos besoins
            </p>
            <div 
              data-aos="fade-up"
              data-aos-delay="400"
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a
                href="tel:+22220161612"
                className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 inline-flex items-center justify-center space-x-2"
              >
                <span>+222 20 16 16 12</span>
              </a>
              <a
                href="mailto:info@hemametfils.com"
                className="border-2 border-cyan-600 hover:bg-cyan-600 hover:text-white text-cyan-600 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                Email Export
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Export;