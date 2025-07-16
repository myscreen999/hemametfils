import React from 'react';
import { Award, Leaf, Users, Target } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section 
        data-aos="fade-in"
        data-aos-duration="1200"
        className="py-20 bg-cover bg-center relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url('https://i.postimg.cc/0jQsz5dy/a1f6e6093a336fbe1c61ed2c8b68173c.jpg')`
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <h1 
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Notre Histoire
          </h1>
          <p 
            data-aos="fade-up"
            data-aos-delay="500"
            className="text-xl md:text-2xl max-w-3xl mx-auto text-cyan-100"
          >
            Une histoire de passion maritime, d'expertise en œufs de mulet et d'engagement environnemental
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section 
        data-aos="fade-up"
        data-aos-offset="200"
        className="py-20 bg-cover bg-center relative"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.8)), url('https://i.postimg.cc/fLrpycHJ/IMG-7218.jpg')`
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div data-aos="fade-right" data-aos-delay="200">
                <h2 className="text-4xl font-bold text-slate-800 mb-6">Notre Histoire</h2>
                <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                  <p>
                    Fondée il y a plus de 10 ans, HEMAM & FILS est née de la passion d'une famille 
                    mauritanienne pour la mer et ses ressources. Notre entreprise s'est développée 
                    en alliant les méthodes traditionnelles de la pêche artisanale aux exigences du commerce international.
                  </p>
                  <p>
                    Spécialiste de l'exportation d'œufs de mulet destinés à la fabrication de la poutargue, 
                    HEMAM & FILS s'impose comme un acteur de référence dans le secteur des produits de la mer haut de gamme. 
                    Nos œufs de mulet sont rigoureusement sélectionnés pour leur qualité, afin de répondre aux exigences 
                    des transformateurs et des marchés internationaux.
                  </p>
                  <p>
                    Depuis 2003, nous détenons une licence CEE renouvelée annuellement, témoignage 
                    de notre engagement envers l'excellence, la traçabilité et le respect des standards d'exportation. 
                    Cette certification nous ouvre les marchés européens ainsi qu'un large réseau de partenaires internationaux.
                  </p>
                  <p>
                    Notre flotte se compose de 65 pirogues équipées de moteurs Tohatsu, réputés pour leur fiabilité 
                    et leur faible impact environnemental, reflétant notre volonté de pratiquer une pêche durable et responsable.
                  </p>
                </div>
              </div>
              <div 
                data-aos="fade-left"
                data-aos-delay="400"
                className="grid grid-cols-2 gap-4"
              >
                <img
                  src="https://i.postimg.cc/vZvQBK5T/IMG-7222.jpg"
                  alt="Pêche artisanale HEMAM & FILS"
                  className="rounded-lg shadow-xl hover:scale-105 transition-transform duration-500 col-span-2"
                />
                <img
                  src="https://i.postimg.cc/q7MpCGGL/IMG-7220.jpg"
                  alt="Œufs de mulet"
                  className="rounded-lg shadow-xl hover:scale-105 transition-transform duration-500"
                />
                <img
                  src="https://i.postimg.cc/26gYMNNc/IMG-7221.jpg"
                  alt="Traitement des œufs"
                  className="rounded-lg shadow-xl hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
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
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">Nos Valeurs</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Les principes qui guident notre action quotidienne et notre vision de la pêche responsable
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div 
              data-aos="flip-up"
              data-aos-delay="300"
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-center"
            >
              <div className="bg-cyan-50 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Award className="text-cyan-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Excellence</h3>
              <p className="text-slate-600">
                Nous nous engageons à maintenir les plus hauts standards de qualité dans tous nos processus.
              </p>
            </div>

            <div 
              data-aos="flip-up"
              data-aos-delay="500"
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-center"
            >
              <div className="bg-green-50 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Leaf className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Durabilité</h3>
              <p className="text-slate-600">
                Pêche responsable et respect de l'écosystème marin pour les générations futures.
              </p>
            </div>

            <div 
              data-aos="flip-up"
              data-aos-delay="700"
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-center"
            >
              <div className="bg-blue-50 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Users className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Communauté</h3>
              <p className="text-slate-600">
                Soutien aux pêcheurs locaux et développement de l'économie maritime mauritanienne.
              </p>
            </div>

            <div 
              data-aos="flip-up"
              data-aos-delay="900"
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-center"
            >
              <div className="bg-orange-50 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Target className="text-orange-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Innovation</h3>
              <p className="text-slate-600">
                Adoption de technologies modernes tout en préservant les savoir-faire traditionnels.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section 
        data-aos="fade-up"
        data-aos-offset="200"
        className="py-20 bg-white"
      >
        <div className="container mx-auto px-4">
          <div 
            data-aos="fade-up"
            data-aos-delay="200"
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">Certifications & Engagement</h2>
            <p className="text-xl text-slate-600 mb-12">
              Notre engagement envers la qualité et la durabilité est reconnu par des certifications officielles
            </p>

            <div 
              data-aos="zoom-in"
              data-aos-delay="400"
              className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white p-8 rounded-lg shadow-xl"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Licence CEE</h3>
                  <p className="text-cyan-100 mb-4">
                    Renouvelée annuellement depuis 2003, notre licence CEE témoigne de notre 
                    conformité aux standards européens les plus stricts en matière de qualité 
                    et de traçabilité des produits de la mer.
                  </p>
                  <div className="flex items-center space-x-4">
                    <Award className="text-yellow-300" size={24} />
                    <span className="font-semibold">Certification Européenne</span>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-white/20 rounded-lg p-6">
                    <div className="text-4xl font-bold text-yellow-300 mb-2">22</div>
                    <div className="text-cyan-100">Années de Certification Continue</div>
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
          backgroundImage: `linear-gradient(rgba(6, 78, 115, 0.9), rgba(14, 116, 144, 0.8)), url('https://i.postimg.cc/6qvLjRBc/1690460145-0.webp')`
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <div 
            data-aos="fade-up"
            data-aos-delay="200"
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Pêche Éco-Responsable</h2>
            <p className="text-xl mb-8 text-cyan-100">
              Notre approche respectueuse de l'environnement marin garantit la pérennité des ressources halieutiques
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div 
                data-aos="fade-up"
                data-aos-delay="400"
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6"
              >
                <Leaf className="text-green-400 mx-auto mb-4" size={48} />
                <h3 className="text-xl font-semibold mb-3">Matériaux Éco-Responsables</h3>
                <p className="text-cyan-100">Utilisation de matériaux respectueux de l'environnement pour nos équipements de pêche</p>
              </div>
              
              <div 
                data-aos="fade-up"
                data-aos-delay="600"
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6"
              >
                <Target className="text-blue-400 mx-auto mb-4" size={48} />
                <h3 className="text-xl font-semibold mb-3">Pêche Sélective</h3>
                <p className="text-cyan-100">Techniques de pêche préservant les espèces juvéniles et les écosystèmes marins</p>
              </div>
              
              <div 
                data-aos="fade-up"
                data-aos-delay="800"
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6"
              >
                <Users className="text-orange-400 mx-auto mb-4" size={48} />
                <h3 className="text-xl font-semibold mb-3">Formation Continue</h3>
                <p className="text-cyan-100">Formation de nos équipes aux meilleures pratiques de pêche durable</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;