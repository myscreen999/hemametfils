import React from 'react';
import { Fish, CheckCircle, Thermometer, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Products = () => {
  const products = [
    {
      name: "Dorade Royale",
      description: "Poisson noble aux chairs fines, pêché dans les eaux atlantiques mauritaniennes",
      image: "https://i.postimg.cc/BbKb2nNd/tbl-articles-article-15378-82809426e7e-005c-4312-9d1d-b3bffe3c8057.jpg",
      features: ["Fraîcheur garantie", "Taille premium", "Conditionnement sur glace"]
    },
    {
      name: "Thiof (Mérou Blanc)",
      description: "Spécialité mauritanienne, poisson de référence aux chairs blanches et fermes",
      image: "https://i.postimg.cc/90ZZthBN/Fishes-900x473.jpg",
      features: ["Poisson emblématique", "Chair délicate", "Export premium"]
    },
    {
      name: "Crevettes Roses",
      description: "Crevettes fraîches pêchées quotidiennement dans nos zones privilégiées",
      image: "https://i.postimg.cc/6qvLjRBc/1690460145-0.webp",
      features: ["Calibre sélectionné", "Fraîcheur optimale", "Conditionnement glacé"]
    },
    {
      name: "Sardines Fraîches",
      description: "Sardines de première qualité, riches en oméga-3 et nutrients essentiels",
      image: "https://i.postimg.cc/m2KNxP0F/fish-3-25-1-2021.jpg",
      features: ["Pêche quotidienne", "Richesse nutritionnelle", "Conservation optimale"]
    },
    {
      name: "Langoustes",
      description: "Langoustes vivantes et fraîches, spécialité des côtes mauritaniennes",
      image: "https://i.postimg.cc/TwNPWDxd/2207018.jpg",
      features: ["Produit haut de gamme", "Transport vivant", "Qualité export"]
    },
    {
      name: "Mélange Fruits de Mer",
      description: "Assortiment varié de produits de la mer selon les saisons et disponibilités",
      image: "https://i.postimg.cc/Vkc4h7rC/164067202513355700.jpg",
      features: ["Variété saisonnière", "Sélection quotidienne", "Prix compétitifs"]
    }
  ];

  const qualityFeatures = [
    {
      icon: Thermometer,
      title: "Chaîne du Froid",
      description: "Conservation à température contrôlée de la pêche à la livraison"
    },
    {
      icon: Clock,
      title: "Fraîcheur Garantie",
      description: "Produits pêchés le matin même et conditionnés immédiatement"
    },
    {
      icon: CheckCircle,
      title: "Contrôle Qualité",
      description: "Inspection rigoureuse selon les standards internationaux"
    },
    {
      icon: Fish,
      title: "Traçabilité",
      description: "Suivi complet depuis la zone de pêche jusqu'au client final"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section 
        data-aos="fade-in"
        data-aos-duration="1200"
        className="py-20 bg-cover bg-center relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url('https://i.postimg.cc/YqC9FMqg/c64f08be87cdf35432a6372f2a5cf15f.jpg')`
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <h1 
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Nos Produits
          </h1>
          <p 
            data-aos="fade-up"
            data-aos-delay="500"
            className="text-xl md:text-2xl max-w-3xl mx-auto text-cyan-100"
          >
            Œufs de mulet d'exception pour la production de boutargue, pêchés dans les eaux riches de l'Atlantique mauritanien
          </p>
        </div>
      </section>

      {/* Quality Assurance */}
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
              Garantie de Qualité
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Notre engagement pour la fraîcheur et la qualité à chaque étape du processus
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {qualityFeatures.map((feature, index) => (
              <div 
                key={index}
                data-aos="flip-left"
                data-aos-delay={300 + index * 200}
                className="text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className="bg-cyan-50 group-hover:bg-cyan-100 p-6 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center transition-colors duration-300">
                  <feature.icon className="text-cyan-600" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
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
              Notre Sélection
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Découvrez notre spécialité : les œufs de mulet pour la production de boutargue premium
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div 
              data-aos="fade-up"
              data-aos-delay="300"
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 group"
            >
              <div className="aspect-w-16 aspect-h-12 overflow-hidden">
                <img
                  src="https://i.postimg.cc/9f4fzpb7/Boutargue-Poutargue-Mulet-300x300.jpg"
                  alt="Œufs de Mulet (Boutargue)"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-800 mb-3">Œufs de Mulet (Boutargue)</h3>
                <p className="text-slate-600 mb-4">Œufs de mulet premium soigneusement sélectionnés pour la production de boutargue de qualité exceptionnelle.</p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="text-green-500" size={16} />
                    <span className="text-sm text-slate-600">Qualité premium</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="text-green-500" size={16} />
                    <span className="text-sm text-slate-600">Sélection rigoureuse</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="text-green-500" size={16} />
                    <span className="text-sm text-slate-600">Export international</span>
                  </div>
                </div>
                <Link
                  to="/boutargue"
                  className="inline-block mt-4 bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105"
                >
                  Découvrir la Poutargue
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Products Section */}
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
              Autres Produits de la Mer
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Découvrez notre gamme complète de produits frais pêchés dans les eaux mauritaniennes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div 
              data-aos="fade-up"
              data-aos-delay="300"
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 group"
            >
              <div className="aspect-w-16 aspect-h-12 overflow-hidden">
                <img
                  src="https://i.postimg.cc/hPRFF0NG/c3aca7f5a5d220aef25e34c07ba1faf6.jpg"
                  alt="Dorade Royale"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-800 mb-3">Dorade Royale</h3>
                <p className="text-slate-600 mb-4">Poisson noble aux chairs fines, pêché dans les eaux atlantiques mauritaniennes</p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="text-green-500" size={16} />
                    <span className="text-sm text-slate-600">Fraîcheur garantie</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="text-green-500" size={16} />
                    <span className="text-sm text-slate-600">Taille premium</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="text-green-500" size={16} />
                    <span className="text-sm text-slate-600">Conditionnement sur glace</span>
                  </div>
                </div>
              </div>
            </div>

            <div 
              data-aos="fade-up"
              data-aos-delay="500"
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 group"
            >
              <div className="aspect-w-16 aspect-h-12 overflow-hidden">
                <img
                  src="https://i.postimg.cc/gJw9ptYx/0dbe7d7f6df4d373a5b3390b6618a860.jpg"
                  alt="Thiof (Mérou Blanc)"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-800 mb-3">Thiof (Mérou Blanc)</h3>
                <p className="text-slate-600 mb-4">Spécialité mauritanienne, poisson de référence aux chairs blanches et fermes</p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="text-green-500" size={16} />
                    <span className="text-sm text-slate-600">Poisson emblématique</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="text-green-500" size={16} />
                    <span className="text-sm text-slate-600">Chair délicate</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="text-green-500" size={16} />
                    <span className="text-sm text-slate-600">Export premium</span>
                  </div>
                </div>
              </div>
            </div>

            <div 
              data-aos="fade-up"
              data-aos-delay="700"
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 group"
            >
              <div className="aspect-w-16 aspect-h-12 overflow-hidden">
                <img
                  src="https://i.postimg.cc/dVBcjTHV/2038f7ce08ad547031a37da3d0f8251d.jpg"
                  alt="Crevettes Roses"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-800 mb-3">Crevettes Roses</h3>
                <p className="text-slate-600 mb-4">Crevettes fraîches pêchées quotidiennement dans nos zones privilégiées</p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="text-green-500" size={16} />
                    <span className="text-sm text-slate-600">Calibre sélectionné</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="text-green-500" size={16} />
                    <span className="text-sm text-slate-600">Fraîcheur optimale</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="text-green-500" size={16} />
                    <span className="text-sm text-slate-600">Conditionnement glacé</span>
                  </div>
                </div>
              </div>
            </div>

            <div 
              data-aos="fade-up"
              data-aos-delay="900"
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 group"
            >
              <div className="aspect-w-16 aspect-h-12 overflow-hidden">
                <img
                  src="https://i.postimg.cc/gctHQqPs/IMG-7266.jpg"
                  alt="Sépia"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-800 mb-3">Sépia</h3>
                <p className="text-slate-600 mb-4">Seiches fraîches de qualité premium, pêchées dans nos zones privilégiées</p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="text-green-500" size={16} />
                    <span className="text-sm text-slate-600">Fraîcheur garantie</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="text-green-500" size={16} />
                    <span className="text-sm text-slate-600">Qualité premium</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="text-green-500" size={16} />
                    <span className="text-sm text-slate-600">Conditionnement optimal</span>
                  </div>
                </div>
              </div>
            </div>

            <div 
              data-aos="fade-up"
              data-aos-delay="1100"
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 group"
            >
              <div className="aspect-w-16 aspect-h-12 overflow-hidden">
                <img
                  src="https://i.postimg.cc/fRq3T5Bq/IMG-7274.jpg"
                  alt="Poulpe"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-800 mb-3">Poulpe</h3>
                <p className="text-slate-600 mb-4">Poulpe frais de qualité exceptionnelle, pêché artisanalement</p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="text-green-500" size={16} />
                    <span className="text-sm text-slate-600">Texture parfaite</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="text-green-500" size={16} />
                    <span className="text-sm text-slate-600">Pêche artisanale</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="text-green-500" size={16} />
                    <span className="text-sm text-slate-600">Fraîcheur optimale</span>
                  </div>
                </div>
              </div>
            </div>

            <div 
              data-aos="fade-up"
              data-aos-delay="1300"
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 group"
            >
              <div className="aspect-w-16 aspect-h-12 overflow-hidden">
                <img
                  src="https://i.postimg.cc/DZFxf2Cc/IMG-7268.jpg"
                  alt="Rouget"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-800 mb-3">Rouget</h3>
                <p className="text-slate-600 mb-4">Rouget de roche aux chairs délicates, pêché dans nos eaux privilégiées</p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="text-green-500" size={16} />
                    <span className="text-sm text-slate-600">Chair délicate</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="text-green-500" size={16} />
                    <span className="text-sm text-slate-600">Pêche sélective</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="text-green-500" size={16} />
                    <span className="text-sm text-slate-600">Qualité premium</span>
                  </div>
                </div>
              </div>
            </div>

            <div 
              data-aos="fade-up"
              data-aos-delay="1500"
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 group"
            >
              <div className="aspect-w-16 aspect-h-12 overflow-hidden">
                <img
                  src="https://i.postimg.cc/7Lwp5hkk/ppf-Fresc-Llenguado.jpg"
                  alt="Sole"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-800 mb-3">Sole</h3>
                <p className="text-slate-600 mb-4">Sole fraîche de qualité exceptionnelle, poisson plat aux saveurs raffinées</p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="text-green-500" size={16} />
                    <span className="text-sm text-slate-600">Saveur raffinée</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="text-green-500" size={16} />
                    <span className="text-sm text-slate-600">Texture unique</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="text-green-500" size={16} />
                    <span className="text-sm text-slate-600">Pêche durable</span>
                  </div>
                </div>
              </div>
            </div>

            <div 
              data-aos="fade-up"
              data-aos-delay="1700"
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 group"
            >
              <div className="aspect-w-16 aspect-h-12 overflow-hidden">
                <img
                  src="https://i.postimg.cc/sg3ncSGM/9c33a73a95f92c2a9ca9be6f00d321ce.jpg"
                  alt="Langoustes"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-800 mb-3">Langoustes</h3>
                <p className="text-slate-600 mb-4">Langoustes vivantes et fraîches, spécialité des côtes mauritaniennes</p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="text-green-500" size={16} />
                    <span className="text-sm text-slate-600">Produit haut de gamme</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="text-green-500" size={16} />
                    <span className="text-sm text-slate-600">Transport vivant</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="text-green-500" size={16} />
                    <span className="text-sm text-slate-600">Qualité export</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability */}
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Pêche Responsable</h2>
            <p className="text-xl mb-12 text-cyan-100">
              Notre approche durable garantit la préservation des ressources marines pour les générations futures
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div 
                data-aos="fade-up"
                data-aos-delay="400"
                className="bg-white/10 backdrop-blur-sm rounded-lg p-8"
              >
                <Fish className="text-cyan-300 mx-auto mb-4" size={48} />
                <h3 className="text-xl font-semibold mb-3">Quotas Respectés</h3>
                <p className="text-cyan-100">
                  Respect strict des quotas de pêche pour préserver les stocks
                </p>
              </div>
              
              <div 
                data-aos="fade-up"
                data-aos-delay="600"
                className="bg-white/10 backdrop-blur-sm rounded-lg p-8"
              >
                <CheckCircle className="text-green-300 mx-auto mb-4" size={48} />
                <h3 className="text-xl font-semibold mb-3">Techniques Sélectives</h3>
                <p className="text-cyan-100">
                  Méthodes de pêche préservant les juvéniles et l'écosystème
                </p>
              </div>
              
              <div 
                data-aos="fade-up"
                data-aos-delay="800"
                className="bg-white/10 backdrop-blur-sm rounded-lg p-8"
              >
                <Thermometer className="text-blue-300 mx-auto mb-4" size={48} />
                <h3 className="text-xl font-semibold mb-3">Saisons Optimales</h3>
                <p className="text-cyan-100">
                  Pêche adaptée aux cycles naturels de reproduction
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact for Products */}
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
              Intéressé par nos Produits ?
            </h2>
            <p className="text-xl text-slate-600 mb-8">
              Contactez-nous pour obtenir notre catalogue complet, nos tarifs et nos disponibilités
            </p>
            <div 
              data-aos="fade-up"
              data-aos-delay="400"
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a
                href="tel:+22242666618"
                className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 inline-flex items-center justify-center space-x-2"
              >
                <span>Appeler Maintenant</span>
              </a>
              <a
                href="https://wa.me/22242666618"
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

export default Products;