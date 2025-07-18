import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, Instagram, Facebook } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Merci pour votre message ! Nous vous contacterons rapidement.');
    setFormData({ name: '', email: '', company: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section 
        data-aos="fade-in"
        data-aos-duration="1200"
        className="py-20 bg-cover bg-center relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url('https://i.postimg.cc/1R7gcsk7/IMG-7262.jpg')`
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <h1 
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Contactez-Nous
          </h1>
          <p 
            data-aos="fade-up"
            data-aos-delay="500"
            className="text-xl md:text-2xl max-w-3xl mx-auto text-cyan-100"
          >
            Nous sommes à votre disposition pour répondre à vos questions et discuter de vos projets
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section 
        data-aos="fade-up"
        data-aos-offset="200"
        className="py-20 bg-white"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Details */}
              <div data-aos="fade-right" data-aos-delay="200">
                <h2 className="text-4xl font-bold text-slate-800 mb-8">Informations de Contact</h2>
                
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="bg-cyan-50 p-3 rounded-lg">
                      <Phone className="text-cyan-600" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-800 mb-2">Téléphone</h3>
                      <p className="text-slate-600 mb-1">🇲🇷 +222 20161612 (Mauritania)</p>
                      <p className="text-slate-600 mb-1">🇨🇦 +15143485432 (Canada)</p>
                      <p className="text-sm text-slate-500">Disponible 7j/7 de 6h à 20h</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <Mail className="text-blue-600" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-800 mb-2">Email</h3>
                      <p className="text-slate-600 mb-1">📧 info@hemametfils.com</p>
                      <p className="text-slate-600 mb-1">contact@hemamfils.mr</p>
                      <p className="text-slate-600 mb-1">export@hemamfils.mr (Export)</p>
                      <p className="text-sm text-slate-500">Réponse sous 24h</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-green-50 p-3 rounded-lg">
                      <MessageCircle className="text-green-600" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-800 mb-2">WhatsApp</h3>
                      <p className="text-slate-600 mb-1">📱 +222 20161612</p>
                      <p className="text-sm text-slate-500">Chat instantané disponible</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-orange-50 p-3 rounded-lg">
                      <MapPin className="text-orange-600" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-800 mb-2">Adresse</h3>
                      <p className="text-slate-600 mb-1">NOT MD NO 0048 cité plage</p>
                      <p className="text-slate-600 mb-1">Nouakchott, Mauritanie</p>
                      <p className="text-sm text-slate-500">Visites sur rendez-vous</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-purple-50 p-3 rounded-lg">
                      <Clock className="text-purple-600" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-800 mb-2">Horaires</h3>
                      <p className="text-slate-600 mb-1">Lundi - Vendredi : 6h00 - 18h00</p>
                      <p className="text-slate-600 mb-1">Samedi : 6h00 - 16h00</p>
                      <p className="text-slate-600">Dimanche : 6h00 - 12h00</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-pink-50 p-3 rounded-lg">
                      <Instagram className="text-pink-600" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-800 mb-2">Réseaux Sociaux</h3>
                      <div className="flex space-x-4">
                        <a 
                          href="https://www.instagram.com/hemametfils" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-pink-600 hover:text-pink-700 transition-colors duration-300"
                        >
                          Instagram
                        </a>
                        <a 
                          href="https://www.facebook.com/share/1EVqzxJgio/?mibextid=wwXIfr" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-700 transition-colors duration-300"
                        >
                          Facebook
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div 
                data-aos="fade-left"
                data-aos-delay="400"
                className="bg-slate-50 p-8 rounded-lg"
              >
                <h2 className="text-3xl font-bold text-slate-800 mb-6">Envoyez-nous un Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                        placeholder="Votre nom"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                        placeholder="votre@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">
                      Entreprise
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                      placeholder="Nom de votre entreprise"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
                      Sujet *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Sélectionnez un sujet</option>
                      <option value="info-generales">Informations générales</option>
                      <option value="export">Demande d'export</option>
                      <option value="produits">Nos produits</option>
                      <option value="partenariat">Partenariat</option>
                      <option value="visite">Visite des installations</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                      placeholder="Décrivez votre demande en détail..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
                  >
                    <Send size={20} />
                    <span>Envoyer le Message</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact */}
      <section 
        data-aos="fade-up"
        data-aos-offset="200"
        className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600 text-white"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-4xl font-bold mb-6"
          >
            Besoin d'une Réponse Rapide ?
          </h2>
          <p 
            data-aos="fade-up"
            data-aos-delay="400"
            className="text-xl mb-8 text-cyan-100"
          >
            Pour les demandes urgentes, contactez-nous directement par téléphone ou WhatsApp
          </p>
          <div 
            data-aos="fade-up"
            data-aos-delay="600"
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="tel:+15143485432"
              className="bg-white hover:bg-gray-100 text-cyan-600 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 inline-flex items-center justify-center space-x-2"
            >
              <Phone size={20} />
              <span>+15143485432</span>
            </a>
            <a
              href="https://wa.me/15143485432"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 inline-flex items-center justify-center space-x-2"
            >
              <MessageCircle size={20} />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;