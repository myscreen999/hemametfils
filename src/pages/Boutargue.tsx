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

      {/* Process Details */}
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
              Processus de Production Artisanale
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Découvrez les 6 étapes essentielles de transformation des œufs de mulet en boutargue d'exception
            </p>
          </div>

          <div className="max-w-7xl mx-auto space-y-16">
            {/* Step 1 */}
            <div 
              data-aos="fade-right"
              data-aos-delay="300"
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
            >
              <div className="space-y-6">
                <h3 
                  className="text-3xl font-bold text-cyan-600 transform hover:scale-105 transition-transform duration-300"
                  style={{ transform: 'perspective(1000px) rotateY(-5deg)' }}
                >
                  1. Récolte des œufs de mulet (mulet femelle)
                </h3>
                <p className="text-lg text-slate-600 leading-relaxed">
                  L'ovaire contenant les œufs est prélevé intact sur le poisson (généralement le mulet noir ou mulet jaune). 
                  Il est crucial de ne pas abîmer la poche d'œufs (la rogue) pendant la récolte.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://i.postimg.cc/YSqVPfcw/IMG-7313.jpg"
                  alt="Récolte des œufs de mulet 1"
                  className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-500"
                />
                <img
                  src="https://i.postimg.cc/bvCMfD8S/IMG-7317.jpg"
                  alt="Récolte des œufs de mulet 2"
                  className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Step 2 */}
            <div 
              data-aos="fade-left"
              data-aos-delay="500"
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
            >
              <div className="grid grid-cols-2 gap-4 lg:order-1">
                <img
                  src="https://i.postimg.cc/pXCJSNPp/39bb1b8f-78d8-4816-9025-d908daef55bd.jpg"
                  alt="Classement et tri 1"
                  className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-500"
                />
                <img
                  src="https://i.postimg.cc/9f6d9CYN/fbd3eb81-b08a-42d2-8646-21b1e0327d06.jpg"
                  alt="Classement et tri 2"
                  className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="space-y-6 lg:order-2">
                <h3 
                  className="text-3xl font-bold text-blue-600 transform hover:scale-105 transition-transform duration-300"
                  style={{ transform: 'perspective(1000px) rotateY(5deg)' }}
                >
                  📦 2. Classement / Tri
                </h3>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Le tri des œufs de mulet par calibre (taille/poids) est une étape essentielle dans la production 
                  de boutargue artisanale de qualité.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div 
              data-aos="fade-right"
              data-aos-delay="700"
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
            >
              <div className="space-y-6">
                <h3 
                  className="text-3xl font-bold text-orange-600 transform hover:scale-105 transition-transform duration-300"
                  style={{ transform: 'perspective(1000px) rotateY(-5deg)' }}
                >
                  🧂 3. Salaison
                </h3>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Les poches d'œufs sont recouvertes de gros sel marin pendant quelques heures... 
                  retournées régulièrement pour une salaison uniforme.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://i.postimg.cc/rFVSxh5c/IMG-7311.jpg"
                  alt="Salaison 1"
                  className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-500"
                />
                <img
                  src="https://i.postimg.cc/vmV9bCw7/IMG-7310.jpg"
                  alt="Salaison 2"
                  className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Step 4 */}
            <div 
              data-aos="fade-left"
              data-aos-delay="900"
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
            >
              <div className="grid grid-cols-2 gap-4 lg:order-1">
                <img
                  src="https://i.postimg.cc/kMfV37t3/IMG-7312.jpg"
                  alt="Désalage et rinçage 1"
                  className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-500"
                />
                <img
                  src="https://i.postimg.cc/Bn1tKD74/2025-07-18-T015544-640.png"
                  alt="Désalage et rinçage 2"
                  className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="space-y-6 lg:order-2">
                <h3 
                  className="text-3xl font-bold text-teal-600 transform hover:scale-105 transition-transform duration-300"
                  style={{ transform: 'perspective(1000px) rotateY(5deg)' }}
                >
                  💧 4. Désalage et rinçage
                </h3>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Après salaison, les œufs sont rincés pour enlever l'excès de sel. 
                  Parfois un léger pressage est appliqué.
                </p>
              </div>
            </div>

            {/* Step 5 */}
            <div 
              data-aos="fade-right"
              data-aos-delay="1100"
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
            >
              <div className="space-y-6">
                <h3 
                  className="text-3xl font-bold text-green-600 transform hover:scale-105 transition-transform duration-300"
                  style={{ transform: 'perspective(1000px) rotateY(-5deg)' }}
                >
                  🌬 5. Séchage
                </h3>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Les rogues sont suspendues ou posées sur des claies... jusqu'à obtention d'une texture ferme et couleur ambrée.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://i.postimg.cc/T1w3YWW8/IMG-7264-1.jpg"
                  alt="Séchage 1"
                  className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-500"
                />
                <img
                  src="https://i.postimg.cc/8z8NxYwg/IMG-7315.jpg"
                  alt="Séchage 2"
                  className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Step 6 */}
            <div 
              data-aos="fade-left"
              data-aos-delay="1300"
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
            >
              <div className="grid grid-cols-2 gap-4 lg:order-1">
                <img
                  src="https://i.postimg.cc/NM0c1vGm/IMG-7212.jpg"
                  alt="Produit final 1"
                  className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-500"
                />
                <img
                  src="https://i.postimg.cc/qRqPNcQG/IMG-7265-1.jpg"
                  alt="Produit final 2"
                  className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="space-y-6 lg:order-2">
                <h3 
                  className="text-3xl font-bold text-purple-600 transform hover:scale-105 transition-transform duration-300"
                  style={{ transform: 'perspective(1000px) rotateY(5deg)' }}
                >
                  🧱 6. Produit final — bottarga prête
                </h3>
                <p className="text-lg text-slate-600 leading-relaxed">
                  La boutargue est sèche, colorée, ferme et prête à être consommée — enrobée de cire ou sous vide.
                </p>
                <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white p-6 rounded-lg shadow-lg">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300 mb-2">Premium</div>
                    <div className="text-cyan-100">Qualité Export</div>
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