import React from 'react';
import calendarGif from './assets/gifs/calendar.gif';
import buildingGif from './assets/gifs/building.gif';
import emergingIndustriesGif from './assets/gifs/emerging-industries.gif';

const StatisticsSection = ({ isArabic }) => {
  const text = {
    en: {
      title: "Al Nakhla Exchange in Numbers",
      subtitle: "Our Impact",
      stats: [
        { number: "15+", label: "Years in business", icon: calendarGif },
        { number: "8", label: "Branches in Libya", icon: buildingGif },
        { number: "50+", label: "Countries served", icon: emergingIndustriesGif }
      ]
    },
    ar: {
      title: "النخلة للصرافة بالأرقام",
      subtitle: "تأثيرنا",
      stats: [
        { number: "15+", label: "سنة في العمل", icon: calendarGif },
        { number: "8", label: "فروع في ليبيا", icon: buildingGif },
        { number: "50+", label: "دولة نخدمها", icon: emergingIndustriesGif }
      ]
    }
  };

  const currentLang = isArabic ? 'ar' : 'en';

  return (
    <section 
      className="py-12 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #006655 0%, #004d44 50%, #003d35 100%)'
      }}
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-white blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-white blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-xs font-semibold tracking-wider uppercase mb-2 text-white/80">
            {text[currentLang].subtitle}
          </p>
          <h2 className="text-2xl lg:text-3xl font-bold text-white leading-tight">
            {text[currentLang].title}
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {text[currentLang].stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 transform"
            >
              {/* Icon */}
              <div className="mb-3 text-center flex justify-center">
                <img 
                  src={stat.icon} 
                  alt={stat.label}
                  className="w-20 h-20 object-contain"
                />
              </div>
              
              {/* Number */}
              <div 
                className="text-3xl lg:text-4xl font-bold mb-2 text-center"
                style={{color: '#006655'}}
              >
                {stat.number}
              </div>
              
              {/* Label */}
              <div className="text-base text-gray-700 text-center font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;