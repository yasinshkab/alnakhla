import React from 'react';

const AboutSection = ({ isArabic }) => {
  const text = {
    en: {
      subtitle: "ABOUT US",
      title: "Who We Are",
      description: "We are a company specialized in providing supportive financial services and digital solutions. We work to empower our clients to make more informed financial decisions through modern tools and simplified advisory services.",
      commitment: "We are committed to working within the legal frameworks in force in the State of Libya, and we ensure that all our services are of an informational and advisory nature, based on professionalism and accuracy."
    },
    ar: {
      subtitle: "من نحن",
      title: "من نحن",
      description: "نحن شركة متخصصة في تقديم الخدمات المالية المساندة والحلول الرقمية، نعمل على تمكين عملائنا من اتخاذ قرارات مالية أكثر وعيًا من خلال أدوات حديثة وخدمات استشارية مبسطة.",
      commitment: "نلتزم بالعمل ضمن الأطر القانونية المعمول بها في دولة ليبيا، ونحرص على أن تكون جميع خدماتنا ذات طابع تعريفي واستشاري، قائمة على المهنية والدقة."
    }
  };

  const currentLang = isArabic ? 'ar' : 'en';

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 max-w-7xl">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-wider mb-4" style={{color: '#006655'}}>
            {text[currentLang].subtitle}
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-8">
            {text[currentLang].title}
          </h2>
        </div>

        <div className="max-w-4xl mx-auto text-center space-y-8">
          <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
            {text[currentLang].description}
          </p>
          
          <div className="bg-gray-50 rounded-2xl p-8">
            <p className="text-base text-gray-700 leading-relaxed">
              {text[currentLang].commitment}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;