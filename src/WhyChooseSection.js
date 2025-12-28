import React from 'react';
import agreementIcon from './assets/images/icons/agreement.png';
import analyticsIcon from './assets/images/icons/analytics.png';
import bankIcon from './assets/images/icons/bank.png';
import businessmanImage from './assets/images/vecteezy_businessman-isolated-illustration_24558280.png';

const WhyChooseSection = ({ isArabic }) => {
  const text = {
    en: {
      subtitle: "WHY CHOOSE US?",
      title: "Why choose us as your financial consultant?",
      features: [
        {
          title: "Modern Vision",
          description: "We combine modern vision with practical experience to deliver innovative financial solutions.",
          icon: analyticsIcon
        },
        {
          title: "Transparency & Standards", 
          description: "Commitment to transparency and professional standards in all our services.",
          icon: agreementIcon
        },
        {
          title: "Flexible Solutions",
          description: "Flexible and scalable solutions that grow with your business needs.",
          icon: bankIcon
        },
        {
          title: "Local Market Understanding",
          description: "Deep understanding of local market needs and requirements.",
          icon: analyticsIcon
        }
      ]
    },
    ar: {
      subtitle: "لماذا تختارنا؟",
      title: "لماذا تختارنا كمستشارك المالي؟",
      features: [
        {
          title: "رؤية حديثة",
          description: "نجمع بين الرؤية الحديثة والخبرة العملية لتقديم حلول مالية مبتكرة.",
          icon: analyticsIcon
        },
        {
          title: "الشفافية والمعايير",
          description: "الالتزام بالشفافية والمعايير المهنية في جميع خدماتنا.",
          icon: agreementIcon
        },
        {
          title: "حلول مرنة",
          description: "حلول مرنة وقابلة للتطوير تنمو مع احتياجات عملك.",
          icon: bankIcon
        },
        {
          title: "فهم السوق المحلي",
          description: "فهم عميق لاحتياجات ومتطلبات السوق المحلي.",
          icon: analyticsIcon
        }
      ]
    }
  };

  const currentLang = isArabic ? 'ar' : 'en';

  return (
    <section className="py-10 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
          {/* Left side - Image */}
          <div className="w-full lg:w-[50%]">
            <div className="relative flex items-end justify-center h-[550px]">
              {/* Vertical container background - centered and aligned to bottom */}
              <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-full max-w-sm h-[550px] rounded-3xl opacity-15" style={{backgroundColor: '#006655'}}></div>
              <img 
                src={businessmanImage} 
                alt="Financial Consultant" 
                className="relative z-10 w-full h-[500px] object-contain"
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div className="w-full lg:w-[50%]">
            <div className="mb-5">
              <p className="text-xs font-semibold tracking-wider uppercase mb-2" style={{color: '#006655'}}>
                {text[currentLang].subtitle}
              </p>
              <h2 className="text-2xl lg:text-3xl font-bold text-black leading-tight mb-5">
                {text[currentLang].title}
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
              {text[currentLang].features.map((feature, index) => (
                <div key={index} className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="w-12 h-12 mb-3 flex items-center justify-center rounded-lg" style={{backgroundColor: '#F0F9F7'}}>
                    <img 
                      src={feature.icon} 
                      alt={feature.title}
                      className="w-7 h-7 object-contain"
                    />
                  </div>
                  <h3 className="text-base font-bold text-black mb-1.5">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-xs">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="mt-5">
              <div className="rounded-xl p-4" style={{backgroundColor: '#006655'}}>
                <h3 className="text-white text-base font-bold mb-2">
                  {isArabic ? 'استكشف جميع خبراتنا التي نقدمها' : 'Explore All The Expertise We Offer'}
                </h3>
                <button className="bg-white hover:bg-gray-100 font-bold py-2 px-5 rounded-full transition-colors duration-200 flex items-center text-xs" style={{color: '#006655'}}>
                  {isArabic ? 'عرض جميع الخدمات' : 'View All Services'}
                  {!isArabic && (
                    <svg className="w-3.5 h-3.5 ml-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/>
                    </svg>
                  )}
                  {isArabic && (
                    <svg className="w-3.5 h-3.5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M15.41,7.41L10.83,12L15.41,16.59L14,18L8,12L14,6L15.41,7.41Z"/>
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;