import React from 'react';
import contactlessImage from './assets/images/contactless-payment-illustration-svg-download-png-13207596.png';
import designImage from './assets/images/Untitled_design-removebg-preview.png';

const ServicesSection = ({ isArabic }) => {
  const text = {
    en: {
      subtitle: "OUR SERVICES",
      title: "Comprehensive Financial Solutions",
      description: "We offer a range of services designed to meet the needs of the modern market, including:",
      services: [
        {
          title: "General Financial Consulting",
          description: "Professional advisory services to help you make informed financial decisions."
        },
        {
          title: "Non-Cash Electronic Payment Solutions",
          description: "Modern digital payment systems for seamless transactions."
        },
        {
          title: "Financial Transaction Management Systems",
          description: "Comprehensive systems to manage and track your financial operations."
        },
        {
          title: "Financial Reports and Studies Preparation",
          description: "Detailed analysis and reporting for better financial insights."
        },
        {
          title: "Digital Financial Transformation Solutions",
          description: "Helping businesses transition to modern digital financial systems."
        },
        {
          title: "Technical Support for Financial Systems",
          description: "Ongoing support and maintenance for your financial technology needs."
        }
      ]
    },
    ar: {
      subtitle: "خدماتنا",
      title: "حلول مالية شاملة",
      description: "نقدّم مجموعة من الخدمات المصمّمة لتلبية احتياجات السوق الحديثة، وتشمل:",
      services: [
        {
          title: "الاستشارات المالية العامة",
          description: "خدمات استشارية مهنية لمساعدتك في اتخاذ قرارات مالية مدروسة."
        },
        {
          title: "حلول الدفع الإلكتروني غير النقدي",
          description: "أنظمة دفع رقمية حديثة لمعاملات سلسة وآمنة."
        },
        {
          title: "أنظمة إدارة المعاملات المالية",
          description: "أنظمة شاملة لإدارة وتتبع عملياتك المالية."
        },
        {
          title: "إعداد التقارير والدراسات المالية",
          description: "تحليل مفصل وتقارير لرؤى مالية أفضل."
        },
        {
          title: "حلول التحول الرقمي المالي",
          description: "مساعدة الشركات في الانتقال إلى الأنظمة المالية الرقمية الحديثة."
        },
        {
          title: "الدعم الفني للأنظمة المالية",
          description: "دعم مستمر وصيانة لاحتياجاتك التقنية المالية."
        }
      ]
    }
  };

  const currentLang = isArabic ? 'ar' : 'en';

  // Abstract graphic components
  const Graphic1 = () => (
    <div className="relative w-full h-64 overflow-hidden" style={{ backgroundColor: 'transparent' }}>
      {/* Geometric shapes */}
      <div className="absolute top-8 left-8 w-16 h-16 rounded-full opacity-60" style={{ 
        background: 'linear-gradient(135deg, #FF6B9D 0%, #C084FC 50%, #60A5FA 100%)',
        transform: 'translateZ(0)'
      }}></div>
      <div className="absolute top-16 right-12 w-20 h-20 rounded-full opacity-50" style={{
        background: 'linear-gradient(135deg, #FFB6C1 0%, #DDA0DD 100%)',
        transform: 'translateZ(0)'
      }}></div>
      <div className="absolute bottom-12 left-16 w-12 h-24 rounded-full opacity-70" style={{
        background: 'linear-gradient(180deg, #FF9A9E 0%, #FECFEF 50%, #FECFEF 100%)',
        transform: 'translateZ(0)'
      }}></div>
      <div className="absolute bottom-8 right-8 w-14 h-14 opacity-60" style={{
        background: 'linear-gradient(135deg, #A8E6CF 0%, #88D8C0 100%)',
        borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
        transform: 'translateZ(0)'
      }}></div>
      <div className="absolute top-1/2 left-1/2 w-10 h-10 opacity-50" style={{
        background: 'linear-gradient(135deg, #C9A9DD 0%, #F4C2C2 100%)',
        transform: 'translate(-50%, -50%) rotate(45deg)',
        borderRadius: '20%'
      }}></div>
      <div className="absolute bottom-16 right-1/4 w-8 h-32 rounded-full opacity-60" style={{
        background: 'linear-gradient(180deg, #FFB347 0%, #FFCCCB 100%)',
        transform: 'translateZ(0)'
      }}></div>
    </div>
  );

  const Graphic2 = () => (
    <div className="relative w-full h-64 flex items-center justify-center overflow-hidden" style={{ backgroundColor: 'transparent' }}>
      <div className="relative" style={{ fontSize: '72px', fontWeight: 'bold', letterSpacing: '-2px' }}>
        <span style={{ 
          color: '#C084FC',
          textShadow: '2px 2px 4px rgba(192, 132, 252, 0.3)',
          filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.1))'
        }}>
          {currentLang === 'ar' ? 'مالي' : 'FIN'}
        </span>
      </div>
    </div>
  );

  const Graphic3 = () => (
    <div className="relative w-full h-64 overflow-hidden" style={{ backgroundColor: 'transparent' }}>
      {/* Interconnected tubes/pipes */}
      <svg width="100%" height="100%" viewBox="0 0 400 256" preserveAspectRatio="none">
        <defs>
          <linearGradient id="tubeGrad1-3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C084FC" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#E879F9" stopOpacity="0.6" />
          </linearGradient>
          <linearGradient id="tubeGrad2-3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#A78BFA" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#C084FC" stopOpacity="0.5" />
          </linearGradient>
        </defs>
        {/* Tube 1 */}
        <rect x="50" y="80" width="120" height="16" rx="8" fill="url(#tubeGrad1-3)" opacity="0.8" transform="rotate(25 110 88)" />
        {/* Tube 2 */}
        <rect x="180" y="120" width="100" height="16" rx="8" fill="url(#tubeGrad2-3)" opacity="0.7" transform="rotate(-35 230 128)" />
        {/* Tube 3 */}
        <rect x="100" y="160" width="140" height="16" rx="8" fill="url(#tubeGrad1-3)" opacity="0.75" transform="rotate(15 170 168)" />
        {/* Tube 4 */}
        <rect x="250" y="60" width="90" height="16" rx="8" fill="url(#tubeGrad2-3)" opacity="0.65" transform="rotate(45 295 68)" />
        {/* Tube 5 - Vertical */}
        <rect x="150" y="40" width="16" height="100" rx="8" fill="url(#tubeGrad1-3)" opacity="0.7" />
        {/* Connecting nodes */}
        <circle cx="170" cy="88" r="12" fill="#C084FC" opacity="0.9" />
        <circle cx="230" cy="128" r="12" fill="#A78BFA" opacity="0.9" />
        <circle cx="150" cy="168" r="12" fill="#E879F9" opacity="0.9" />
        <circle cx="295" cy="68" r="12" fill="#C084FC" opacity="0.9" />
        <circle cx="150" cy="140" r="12" fill="#A78BFA" opacity="0.9" />
      </svg>
    </div>
  );

  const Graphic4 = () => (
    <div className="relative w-full h-64 overflow-hidden" style={{ backgroundColor: '#FFF5F5' }}>
      {/* Chart/graph pattern */}
      <svg width="100%" height="100%" viewBox="0 0 400 256" preserveAspectRatio="none">
        <defs>
          <linearGradient id="chartGrad1-4" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FCA5A5" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#F87171" stopOpacity="0.5" />
          </linearGradient>
          <linearGradient id="chartGrad2-4" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FBBF24" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.5" />
          </linearGradient>
        </defs>
        {/* Bar chart */}
        <rect x="60" y="180" width="40" height="60" fill="url(#chartGrad1-4)" />
        <rect x="120" y="140" width="40" height="100" fill="url(#chartGrad2-4)" />
        <rect x="180" y="100" width="40" height="140" fill="url(#chartGrad1-4)" />
        <rect x="240" y="160" width="40" height="80" fill="url(#chartGrad2-4)" />
        <rect x="300" y="120" width="40" height="120" fill="url(#chartGrad1-4)" />
      </svg>
    </div>
  );

  const Graphic5 = () => (
    <div className="relative w-full h-64 overflow-hidden" style={{ backgroundColor: '#ECFDF5' }}>
      {/* Digital/tech pattern */}
      <svg width="100%" height="100%" viewBox="0 0 400 256" preserveAspectRatio="none">
        <defs>
          <linearGradient id="techGrad1-5" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#34D399" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#10B981" stopOpacity="0.5" />
          </linearGradient>
        </defs>
        {/* Grid pattern */}
        <g stroke="url(#techGrad1-5)" strokeWidth="2" fill="none" opacity="0.6">
          <line x1="0" y1="64" x2="400" y2="64" />
          <line x1="0" y1="128" x2="400" y2="128" />
          <line x1="0" y1="192" x2="400" y2="192" />
          <line x1="80" y1="0" x2="80" y2="256" />
          <line x1="160" y1="0" x2="160" y2="256" />
          <line x1="240" y1="0" x2="240" y2="256" />
          <line x1="320" y1="0" x2="320" y2="256" />
        </g>
        {/* Circles at intersections */}
        <circle cx="80" cy="64" r="8" fill="#34D399" opacity="0.8" />
        <circle cx="160" cy="128" r="8" fill="#10B981" opacity="0.8" />
        <circle cx="240" cy="192" r="8" fill="#34D399" opacity="0.8" />
        <circle cx="320" cy="64" r="8" fill="#10B981" opacity="0.8" />
      </svg>
    </div>
  );

  const Graphic6 = () => (
    <div className="relative w-full h-64 overflow-hidden" style={{ backgroundColor: '#F0F9FF' }}>
      {/* Support/network pattern */}
      <svg width="100%" height="100%" viewBox="0 0 400 256" preserveAspectRatio="none">
        <defs>
          <linearGradient id="supportGrad1-6" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.6" />
          </linearGradient>
        </defs>
        {/* Network nodes */}
        <circle cx="100" cy="80" r="20" fill="url(#supportGrad1-6)" opacity="0.9" />
        <circle cx="200" cy="60" r="20" fill="url(#supportGrad1-6)" opacity="0.9" />
        <circle cx="300" cy="100" r="20" fill="url(#supportGrad1-6)" opacity="0.9" />
        <circle cx="150" cy="180" r="20" fill="url(#supportGrad1-6)" opacity="0.9" />
        <circle cx="250" cy="200" r="20" fill="url(#supportGrad1-6)" opacity="0.9" />
        {/* Connections */}
        <line x1="100" y1="80" x2="200" y2="60" stroke="url(#supportGrad1-6)" strokeWidth="3" opacity="0.5" />
        <line x1="200" y1="60" x2="300" y2="100" stroke="url(#supportGrad1-6)" strokeWidth="3" opacity="0.5" />
        <line x1="100" y1="80" x2="150" y2="180" stroke="url(#supportGrad1-6)" strokeWidth="3" opacity="0.5" />
        <line x1="300" y1="100" x2="250" y2="200" stroke="url(#supportGrad1-6)" strokeWidth="3" opacity="0.5" />
        <line x1="150" y1="180" x2="250" y2="200" stroke="url(#supportGrad1-6)" strokeWidth="3" opacity="0.5" />
      </svg>
    </div>
  );

  const serviceImages = [contactlessImage, designImage, contactlessImage];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 max-w-6xl">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold tracking-wider mb-3" style={{color: '#006655'}}>
            {text[currentLang].subtitle}
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-black mb-6">
            {text[currentLang].title}
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            {text[currentLang].description}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {text[currentLang].services.slice(0, 3).map((service, index) => {
            const serviceImage = serviceImages[index];
            return (
              <div key={index} className="flex flex-col rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
                {/* Text Content */}
                <div className="p-6 flex-1 bg-gray-50">
                  <div className="flex items-start justify-between mb-4">
                    <button 
                      className="w-10 h-10 rounded-lg flex items-center justify-center text-white flex-shrink-0 hover:scale-110 transition-transform"
                      style={{ backgroundColor: '#006655' }}
                      aria-label="Learn more"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </button>
                  </div>
                  <h3 className="text-xl font-bold text-gray-700 mb-3" style={{ fontSize: '1.25rem', lineHeight: '1.3' }}>
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed" style={{ fontSize: '0.9rem', lineHeight: '1.5' }}>
                    {service.description}
                  </p>
                </div>
                {/* Image Section */}
                <div style={{ backgroundColor: '#E6F5F3', borderTopLeftRadius: 0, borderTopRightRadius: 0 }}>
                  <div className="relative w-full h-64 flex items-center justify-center p-8">
                    <img 
                      src={serviceImage} 
                      alt={service.title}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;