import React from 'react';
import complianceImage from './assets/compliance.png';

const ComplianceSection = ({ isArabic }) => {
  const text = {
    en: {
      title: "Committed to Legal Excellence",
      description: "We operate within the legal frameworks of Libya, ensuring all our services maintain the highest standards of compliance and professional integrity.",
      caution: "We are committed to working within the legal frameworks in force in the State of Libya, and we ensure that all our services are of an informational and advisory nature, based on professionalism and accuracy."
    },
    ar: {
      title: "ملتزمون بالتميز القانوني",
      description: "نعمل ضمن الأطر القانونية في ليبيا، مما يضمن أن جميع خدماتنا تحافظ على أعلى معايير الامتثال والنزاهة المهنية.",
      caution: "نلتزم بالعمل ضمن الأطر القانونية المعمول بها في دولة ليبيا، ونحرص على أن تكون جميع خدماتنا ذات طابع تعريفي واستشاري، قائمة على المهنية والدقة."
    }
  };

  const currentLang = isArabic ? 'ar' : 'en';

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 max-w-6xl">
        <div className="rounded-2xl p-12 " style={{backgroundColor: '#FAE3AC'}}>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="w-full lg:w-3/4">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                {text[currentLang].title}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {text[currentLang].description}
              </p>
            </div>
            <div className="w-full lg:w-1/3 flex justify-center">
              <img 
                src={complianceImage} 
                alt="Compliance" 
                className="w-64 h-48 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComplianceSection;