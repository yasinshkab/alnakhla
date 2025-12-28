import React from 'react';
import businessmanImage from './assets/images/vecteezy_businessman-isolated-illustration_24558280.png';

const VisionMissionSection = ({ isArabic }) => {
  const text = {
    en: {
      vision: {
        heading: "OUR VISION",
        title: "To be among the leading entities in developing digital financial solutions",
        description: "Contributing to building a more aware and organized financial environment in Libya and beyond.",
        cta: "Learn more →"
      },
      mission: {
        heading: "OUR MISSION",
        title: "Providing supportive financial services and innovative digital solutions",
        description: "Helping simplify financial concepts, support digital transformation, and build long-term relationships based on trust and credibility.",
        cta: "Discover more →"
      }
    },
    ar: {
      vision: {
        heading: "رؤيتنا",
        title: "أن نكون من الجهات الرائدة في تطوير الحلول المالية الرقمية",
        description: "المساهمة في بناء بيئة مالية أكثر وعيًا وتنظيمًا في ليبيا وما بعدها.",
        cta: "اعرف المزيد ←"
      },
      mission: {
        heading: "رسالتنا",
        title: "تقديم خدمات مالية مساندة وحلول رقمية مبتكرة",
        description: "مساعدة على تبسيط المفاهيم المالية، ودعم التحول الرقمي، وبناء علاقات طويلة الأمد قائمة على الثقة والمصداقية.",
        cta: "اكتشف المزيد ←"
      }
    }
  };

  const currentLang = isArabic ? 'ar' : 'en';

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Vision - Left Column */}
          <div className="p-12 lg:p-16 flex flex-col justify-between rounded-2xl" style={{backgroundColor: '#E6F5F3'}}>
            {/* Heading */}
            <p className="text-sm font-semibold tracking-wider uppercase mb-4" style={{color: '#006655'}}>
              {text[currentLang].vision.heading}
            </p>

            {/* Main Text */}
            <div className="mb-8">
              <h2 className="text-3xl lg:text-4xl font-bold text-black leading-tight mb-4">
                {text[currentLang].vision.title}
              </h2>
              <p className="text-lg text-gray-700">
                {text[currentLang].vision.description}
              </p>
            </div>

            {/* Circular Image */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                {/* Lighter background container */}
                <div 
                  className="absolute inset-0 w-72 h-72 rounded-full -z-10"
                  style={{backgroundColor: '#F0F9F7', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}
                ></div>
                <div 
                  className="w-64 h-64 rounded-full overflow-hidden flex items-center justify-center relative z-10"
                  style={{backgroundColor: '#006655'}}
                >
                  <img 
                    src={businessmanImage} 
                    alt="Vision" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <button 
              className="w-full lg:w-auto px-8 py-4 rounded-full text-white font-semibold text-lg transition-all hover:opacity-90 hover:shadow-lg"
              style={{backgroundColor: '#006655'}}
            >
              {text[currentLang].vision.cta}
            </button>
          </div>

          {/* Mission - Right Column */}
          <div className="p-12 lg:p-16 flex flex-col justify-between bg-gray-50 rounded-2xl">
            {/* Rectangular Container - Horizontal Image */}
            <div className="flex justify-center mb-8">
              <div className="relative transform rotate-3">
                <div 
                  className="w-80 h-56 rounded-3xl overflow-hidden shadow-2xl"
                  style={{backgroundColor: '#1a1a1a'}}
                >
                  <img 
                    src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=600&fit=crop" 
                    alt="Mission - Digital Solutions" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Heading */}
            <p className="text-sm font-semibold tracking-wider uppercase mb-4" style={{color: '#006655'}}>
              {text[currentLang].mission.heading}
            </p>

            {/* Main Text */}
            <div className="mb-8">
              <h2 className="text-3xl lg:text-4xl font-bold text-black leading-tight mb-4">
                {text[currentLang].mission.title}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {text[currentLang].mission.description}
              </p>
            </div>

            {/* CTA Link */}
            <a 
              href="#services" 
              className="text-black font-semibold text-lg hover:opacity-70 transition-opacity inline-flex items-center"
            >
              {text[currentLang].mission.cta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMissionSection;