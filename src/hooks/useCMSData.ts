import { useState, useEffect } from 'react';

interface CMSData {
  [key: string]: any;
}

export const useCMSData = (dataFile: string): CMSData | null => {
  const [data, setData] = useState<CMSData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetch(`/src/data/${dataFile}.json`);
        if (response.ok) {
          const jsonData = await response.json();
          setData(jsonData);
        } else {
          // Fallback to default data if CMS data not available
          setData(getDefaultData(dataFile));
        }
      } catch (error) {
        console.warn(`Failed to load CMS data for ${dataFile}, using defaults:`, error);
        setData(getDefaultData(dataFile));
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [dataFile]);

  return loading ? null : data;
};

const getDefaultData = (dataFile: string): CMSData => {
  // Return default data structure based on the file requested
  switch (dataFile) {
    case 'home':
      return {
        hero_title: "HEMAM & FILS",
        hero_subtitle: "Excellence en Pêche Artisanale & Export d'Œufs de Mulet",
        hero_description: "Plus de 10 ans d'expérience avec une flotte de 65 pirogues équipées de moteurs Tohatsu éco-responsables",
        hero_image: "https://i.postimg.cc/T2JGj9Bk/img-catalogue.png",
        stats: [
          { value: 10, suffix: "+", label: "Années d'Expérience" },
          { value: 65, suffix: "", label: "Pirogues" },
          { value: 8, suffix: "+", label: "Pays" },
          { value: 100, suffix: " Tonnes", label: "d'Œufs de Mulet/An" }
        ]
      };
    case 'contact':
      return {
        title: "Contactez-Nous",
        subtitle: "Nous sommes à votre disposition pour répondre à vos questions et discuter de vos projets",
        hero_image: "https://i.postimg.cc/1R7gcsk7/IMG-7262.jpg",
        email: "info@hemametfils.com",
        phone_mauritania: "+222 20161612",
        phone_canada: "+15143485432",
        whatsapp: "+222 20161612",
        address: "NOT MD NO 0048 cité plage\nNouakchott, Mauritanie",
        instagram_url: "https://www.instagram.com/hemametfils",
        facebook_url: "https://www.facebook.com/share/1EVqzxJgio"
      };
    case 'site':
      return {
        site_name: "HEMAM & FILS",
        site_description: "Pêche Artisanale & Export d'Œufs de Mulet",
        logo: "https://i.postimg.cc/4d6shF9m/IMG-7224.png",
        favicon: "/vite.svg"
      };
    default:
      return {};
  }
};