import React from 'react';
import { BackgroundPaths } from './components/ui/background-paths';
import centralBank from './assets/images/banks/bank-central-of-libya-logo-png_seeklogo-563651.png';
import idaqBank from './assets/images/banks/idaqWQzYGf_logos.png';
import nuranBank from './assets/images/banks/Nuran Bank_idI4jO14Q0_0.png';

const HeroSection = ({ isArabic }) => {
  const text = {
    en: {
      title: "Smart Financial Solutions",
      subtitle: "Digital financial solutions for individuals and companies.",
      belief: "Trust built from transparency.",
      cta: "Discover Our Services"
    },
    ar: {
      title: "حلول مالية ذكية",
      subtitle: "حلول مالية رقمية للأفراد والشركات.",
      belief: "الثقة تُبنى من الشفافية.",
      cta: "اكتشف خدماتنا"
    }
  };

  const currentLang = isArabic ? 'ar' : 'en';

  return (
    <BackgroundPaths className="min-h-screen pt-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          
          {/* Left side - Text content */}
          <div className="space-y-8">
            <h1 className="text-4xl lg:text-6xl font-bold text-black leading-tight">
              {text[currentLang].title}
            </h1>
            
            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
              {text[currentLang].subtitle}
            </p>

            <p className="text-base lg:text-lg text-gray-700 leading-relaxed font-medium">
              {text[currentLang].belief}
            </p>

            <div className="space-y-4">
              <p className="text-sm text-gray-500 font-medium">
                {isArabic ? 'شركاؤنا في ليبيا' : 'Our partners in Libya'}
              </p>
              
              {/* Libyan bank logos */}
              <div className="flex items-center space-x-6">
                <div className="w-48 h-40 flex items-center justify-center p-2">
                  <img src={centralBank} alt="Central Bank of Libya" className="max-w-full max-h-full object-contain" />
                </div>
                <div className="w-40 h-20 flex items-center justify-center p-2">
                  <img src={idaqBank} alt="Idaq Bank" className="max-w-full max-h-full object-contain" />
                </div>
                <div className="w-40 h-20 flex items-center justify-center p-2">
                  <img src={nuranBank} alt="Nuran Bank" className="max-w-full max-h-full object-contain" />
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Currency exchanger */}
          <div className="lg:justify-self-end">
            <div className="bg-white rounded-3xl shadow-lg p-6 w-full max-w-lg">
              <div className="space-y-6">
                {/* Promo banner */}
                <div className="bg-gradient-to-r from-green-200 to-blue-200 rounded-xl p-4 flex items-center">
                  <div className="bg-green-600 rounded-full p-1 mr-3" style={{backgroundColor: '#006655'}}>
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-800">Promo rate on your first transfer!</div>
                    <div className="text-sm text-gray-600">
                      1 USD = <span className="line-through text-gray-400">17.67</span> <span className="font-bold">18.072300</span> MXN
                    </div>
                  </div>
                </div>

                {/* You send */}
                <div>
                  <div className="text-sm text-gray-500 mb-3 font-medium">You send</div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">🇺🇸</span>
                      <span className="text-lg font-semibold">USD</span>
                    </div>
                    <span className="text-3xl font-bold">1000</span>
                  </div>
                </div>

                {/* They receive */}
                <div>
                  <div className="text-sm text-gray-500 mb-3 font-medium">They receive</div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">🇲🇽</span>
                      <span className="text-lg font-semibold">MXN</span>
                      <svg className="w-4 h-4 text-gray-400 ml-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-3xl font-bold">18,072.3</span>
                  </div>
                </div>

                <hr className="border-gray-200" />

                {/* Fee and Total */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500">Fee</span>
                    <div className="flex items-center">
                      <span className="line-through mr-2 text-sm" style={{color: '#006655'}}>1.99 USD</span>
                      <span className="font-medium">0 USD transfer fee</span>
                      <svg className="w-4 h-4 text-gray-400 ml-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex justify-between items-center font-bold text-lg">
                    <span>Total to pay</span>
                    <span>1,000 USD</span>
                  </div>
                </div>

                {/* Get started button */}
                <button className="w-full text-white font-bold py-4 rounded-full transition-colors text-lg" style={{backgroundColor: '#006655'}}>
                  Get started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BackgroundPaths>
  );
};

export default HeroSection;