import React from 'react';
import boltIcon from './assets/images/icons/icon_bolt-removebg-preview.png';
import lockIcon from './assets/images/icons/icon_lock-removebg-preview.png';
import shieldIcon from './assets/images/icons/icon_shield-removebg-preview.png';

const WhyChooseUsSection = ({ isArabic }) => {
  const text = {
    en: {
      subtitle: "WHY CHOOSE US",
      title: "35+ years of trusted experience",
      features: [
        {
          title: "Fast",
          description: "Send money in seconds to your loved ones across the world.",
          icon: boltIcon
        },
        {
          title: "Safe",
          description: "Feel secure knowing we've sent over a billion safe transfers.",
          icon: lockIcon
        },
        {
          title: "Guaranteed",
          description: "Enjoy our no hassle 100% satisfaction guarantee.",
          icon: shieldIcon
        }
      ]
    },
    ar: {
      subtitle: "لماذا تختارنا",
      title: "أكثر من 35 عامًا من الخبرة الموثوقة",
      features: [
        {
          title: "سريع",
          description: "أرسل الأموال في ثوانٍ إلى أحبائك في جميع أنحاء العالم.",
          icon: boltIcon
        },
        {
          title: "آمن",
          description: "اشعر بالأمان مع العلم أننا أرسلنا أكثر من مليار تحويل آمن.",
          icon: lockIcon
        },
        {
          title: "مضمون",
          description: "استمتع بضمان رضا 100% بدون متاعب.",
          icon: shieldIcon
        }
      ]
    }
  };

  const currentLang = isArabic ? 'ar' : 'en';

  return (
    <section className="py-20" style={{backgroundColor: '#E6F5F3'}}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 max-w-7xl">
        {/* Subtitle */}
        <div className="text-center mb-4">
          <p className="text-sm font-semibold tracking-wider uppercase" style={{color: '#006655'}}>
            {text[currentLang].subtitle}
          </p>
        </div>

        {/* Main Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-black leading-tight">
            {text[currentLang].title}
          </h2>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {text[currentLang].features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              {/* Icon */}
              <div className="mb-4 flex justify-center">
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center"
                  style={{backgroundColor: '#F0F9F7'}}
                >
                  <img 
                    src={feature.icon} 
                    alt={feature.title} 
                    className="w-24 h-24 object-contain"
                  />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-black mb-3 text-center">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed text-center">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;

