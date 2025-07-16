import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Star, Award, Leaf, Globe } from 'lucide-react';

const Boutargue = () => {
  const images = [
    'https://i.postimg.cc/x8Zxj91H/IMG-4902.jpg',
    'https://i.postimg.cc/tCLSLRfG/IMG-4932.avif',
    'https://i.postimg.cc/4yjPkwWQ/IMG-4873.avif',
    'https://i.postimg.cc/WbJS6L4W/IMG-4903.avif',
    'https://i.postimg.cc/fRnC82tw/IMG-4802.avif',
    'https://i.postimg.cc/CKwNgRsX/IMG-4693.avif',
    'https://i.postimg.cc/xqrvF8ds/IMG-4343.jpg'
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section 
        data-aos="fade-in"
        data-aos-duration="1200"
        className="py-20 bg-cover bg-center relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url('https://i.postimg.cc/9f4fzpb7/Boutargue-Poutargue-Mulet-300x300.jpg')`
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Link
              to="/products"
              data-aos="fade-right"
              data-aos-delay="200"
              className="inline-flex items-center space-x-2 text-cyan-200 hover:text-white transition-colors duration-300 mb-8"
            >
              <ArrowLeft size={20} />
              <span>Retour aux produits</span>
            </Link>
            
            <h1 
              data-aos="fade-up"
              data-aos-delay="400"
              className="text-5xl md:text-6xl font-bold mb-6"
            >
              La Poutargue
            </h1>
            
            <p 
              data-aos="fade-up"
              data-aos-delay="600"
              className="text-xl md:text-2xl text-cyan-100 max-w-3xl mx-auto"
            >
              Un produit d'exception obtenu à partir d'œufs de mulet soigneusement extraits, salés puis séchés selon un procédé artisanal
            </p>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section 
        data-aos="fade-up"
        data-aos-offset="200"
        className="py-20 bg-white"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div 
              data-aos="flip-left"
              data-aos-delay="200"
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
                Un Met d'Exception
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed">
                La poutargue est un produit d'exception obtenu à partir d'œufs de mulet soigneusement extraits, 
                salés puis séchés selon un procédé artisanal. Ce met délicat se distingue par son goût unique 
                et sa richesse en saveurs marines.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div 
                data-aos="flip-up"
                data-aos-delay="300"
                className="text-center bg-slate-50 p-8 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <div className="bg-cyan-50 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <Star className="text-cyan-600" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-4">Qualité Premium</h3>
                <p className="text-slate-600">Sélection rigoureuse des meilleurs œufs de mulet pour une qualité exceptionnelle</p>
              </div>

              <div 
                data-aos="flip-up"
                data-aos-delay="500"
                className="text-center bg-slate-50 p-8 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <div className="bg-orange-50 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <Award className="text-orange-600" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-4">Savoir-Faire Artisanal</h3>
                <p className="text-slate-600">Procédé traditionnel de salage et séchage transmis de génération en génération</p>
              </div>

              <div 
                data-aos="flip-up"
                data-aos-delay="700"
                className="text-center bg-slate-50 p-8 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <div className="bg-green-50 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <Leaf className="text-green-600" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-4">Pêche Durable</h3>
                <p className="text-slate-600">Respect des cycles naturels et des quotas pour une pêche responsable</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section 
        data-aos="fade-up"
        data-aos-offset="200"
        className="py-20 bg-slate-50"
      >
        <div className="container mx-auto px-4">
          <div 
            data-aos="zoom-in"
            data-aos-delay="200"
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Notre Processus Artisanal
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Découvrez les étapes de transformation de nos œufs de mulet en poutargue d'exception
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <div 
                key={index}
                data-aos="fade-up"
                data-aos-delay={300 + index * 100}
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105"
                style={{
                  transform: `rotate(${(index % 2 === 0 ? 1 : -1) * (index % 3)}deg)`
                }}
              >
                <img
                  src={image}
                  alt={`Processus de fabrication ${index + 1}`}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-semibold">Étape {index + 1}</p>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Additional process images */}
            <div 
              data-aos="fade-up"
              data-aos-delay={300 + 7 * 100}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105"
              style={{
                transform: `rotate(${(7 % 2 === 0 ? 1 : -1) * (7 % 3)}deg)`
              }}
            >
              <img
                src="https://i.postimg.cc/fWHNVbGy/IMG-7264.jpg"
                alt="Processus de fabrication 8"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-semibold">Étape 8</p>
                </div>
              </div>
            </div>

            <div 
              data-aos="fade-up"
              data-aos-delay={300 + 8 * 100}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105"
              style={{
                transform: `rotate(${(8 % 2 === 0 ? 1 : -1) * (8 % 3)}deg)`
              }}
            >
              <img
                src="https://i.postimg.cc/dQ7hQgfb/IMG-7263.jpg"
                alt="Processus de fabrication 9"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-semibold">Étape 9</p>
                </div>
              </div>
            </div>

            <div 
              data-aos="fade-up"
              data-aos-delay={300 + 9 * 100}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105"
              style={{
                transform: `rotate(${(9 % 2 === 0 ? 1 : -1) * (9 % 3)}deg)`
              }}
            >
              <img
                src="https://i.postimg.cc/rm423GhP/IMG-7265.jpg"
                alt="Processus de fabrication 10"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-semibold">Étape 10</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Details */}
      <section 
        data-aos="fade-up"
        data-aos-offset="200"
        className="py-20 bg-white"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div 
                data-aos="fade-right"
                data-aos-delay="300"
                className="space-y-6"
              >
                <h2 className="text-4xl font-bold text-slate-800">De la Mer à Votre Table</h2>
                <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
                  <p>
                    <strong className="text-slate-800">Extraction :</strong> Les œufs de mulet sont délicatement extraits 
                    des poissons fraîchement pêchés dans nos zones privilégiées.
                  </p>
                  <p>
                    <strong className="text-slate-800">Salage :</strong> Un salage minutieux selon des techniques 
                    traditionnelles préserve les saveurs et assure une conservation optimale.
                  </p>
                  <p>
                    <strong className="text-slate-800">Séchage :</strong> Un processus de séchage contrôlé développe 
                    les arômes complexes caractéristiques de la poutargue.
                  </p>
                  <p>
                    <strong className="text-slate-800">Conditionnement :</strong> Emballage soigné pour préserver 
                    la qualité jusqu'à la livraison chez nos clients internationaux.
                  </p>
                </div>
              </div>
              
              <div 
                data-aos="fade-left"
                data-aos-delay="500"
                className="relative"
              >
                <img
                  src="https://i.postimg.cc/x8Zxj91H/IMG-4902.jpg"
                  alt="Poutargue HEMAM & FILS"
                  className="rounded-lg shadow-xl hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute -bottom-6 -right-6 bg-cyan-600 text-white p-6 rounded-lg shadow-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold">Premium</div>
                    <div className="text-sm">Qualité Export</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Export Markets */}
      <section 
        data-aos="fade-up"
        data-aos-offset="200"
        className="py-20 bg-cover bg-center relative"
        style={{
          backgroundImage: `linear-gradient(rgba(6, 78, 115, 0.9), rgba(14, 116, 144, 0.8)), url('https://i.postimg.cc/T3strdV4/IMG-7230.jpg')`
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <div 
            data-aos="zoom-in"
            data-aos-delay="200"
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Export International</h2>
            <p className="text-xl mb-12 text-cyan-100">
              Notre poutargue est exportée vers les marchés les plus exigeants d'Europe et d'Afrique
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div 
                data-aos="fade-up"
                data-aos-delay="400"
                className="bg-white/10 backdrop-blur-sm rounded-lg p-8 hover:scale-105 transition-transform duration-300"
              >
                <Globe className="text-cyan-300 mx-auto mb-4" size={48} />
                <h3 className="text-xl font-semibold mb-3">Marchés Européens</h3>
                <p className="text-cyan-100">
                  Export vers la France, l'Italie, l'Espagne et autres pays européens
                </p>
              </div>
              
              <div 
                data-aos="fade-up"
                data-aos-delay="600"
                className="bg-white/10 backdrop-blur-sm rounded-lg p-8 hover:scale-105 transition-transform duration-300"
              >
                <Award className="text-yellow-300 mx-auto mb-4" size={48} />
                <h3 className="text-xl font-semibold mb-3">Certification CEE</h3>
                <p className="text-cyan-100">
                  Conformité aux standards européens les plus stricts
                </p>
              </div>
              
              <div 
                data-aos="fade-up"
                data-aos-delay="800"
                className="bg-white/10 backdrop-blur-sm rounded-lg p-8 hover:scale-105 transition-transform duration-300"
              >
                <Star className="text-orange-300 mx-auto mb-4" size={48} />
                <h3 className="text-xl font-semibold mb-3">Qualité Premium</h3>
                <p className="text-cyan-100">
                  Produit haut de gamme apprécié des connaisseurs
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section 
        data-aos="fade-up"
        data-aos-offset="200"
        className="py-20 bg-white"
      >
        <div className="container mx-auto px-4 text-center">
          <div 
            data-aos="zoom-in"
            data-aos-delay="200"
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Intéressé par Notre Poutargue ?
            </h2>
            <p className="text-xl text-slate-600 mb-8">
              Contactez-nous pour obtenir plus d'informations sur nos œufs de mulet et notre poutargue d'exception
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
                <span>Nous Contacter</span>
              </Link>
              <a
                href="https://wa.me/15143485432"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Boutargue;