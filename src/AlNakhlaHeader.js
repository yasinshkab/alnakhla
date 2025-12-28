import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import logo from './assets/images/Gemini_Generated_Image_qqz4cdqqz4cdqqz4-removebg-preview.png';

const AlNakhlaHeader = ({ isArabic, setIsArabic }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    document.documentElement.dir = isArabic ? 'rtl' : 'ltr';
    document.documentElement.lang = isArabic ? 'ar' : 'en';
  }, [isArabic]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navLinks = {
    en: [
      { href: "#about", text: "About Us" },
      { href: "#contact", text: "Contact Us" },
      { href: "#locations", text: "Locations & Branches" },
      { href: "#currencies", text: "Currencies Basket" }
    ],
    ar: [
      { href: "#about", text: "من نحن" },
      { href: "#contact", text: "اتصل بنا" },
      { href: "#locations", text: "المواقع والفروع" },
      { href: "#currencies", text: "سلة العملات" }
    ]
  };

  const text = {
    en: {
      companyName: "Al Nakhla Exchange",
      contactUs: "Contact Us",
      langCode: "AR"
    },
    ar: {
      companyName: "صرافة النخلة",
      contactUs: "اتصل بنا",
      langCode: "EN"
    }
  };

  const currentLang = isArabic ? 'ar' : 'en';
  const direction = isArabic ? 'rtl' : 'ltr';

  return (
    <header className="w-full transition-all duration-300 bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 max-w-7xl">
        <div className="flex h-12 sm:h-14 lg:h-16 items-center justify-between">
          
          <div className="flex items-center">
            <a href="#" className="flex items-center space-x-1 group">
              <img src={logo} alt="Al Nakhla Exchange" className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 object-contain" />
              <span className="font-bold text-sm sm:text-base lg:text-lg" style={{color: '#013220'}}>{text[currentLang].companyName}</span>
            </a>
          </div>

          <nav className={`hidden md:flex items-center ${isArabic ? 'space-x-6 lg:space-x-8 xl:space-x-10' : 'space-x-4 lg:space-x-6 xl:space-x-6'}`}>
            {navLinks[currentLang].map(link => (
              <a key={link.text} href={link.href} className={`text-sm lg:text-base font-medium text-black hover:text-gray-600 transition-colors relative group ${isArabic ? 'px-6' : ''}`}>
                {link.text}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-6 lg:gap-10">
            <button onClick={() => setIsArabic(!isArabic)} className={`flex items-center ${isArabic ? 'space-x-1' : 'gap-1'} text-sm font-medium transition-all`} style={{color: '#013220'}}>
              <Globe className="h-4 w-4" />
              <span>{text[currentLang].langCode}</span>
            </button>
            <button className="px-6 lg:px-8 py-2.5 lg:py-3 text-sm lg:text-base font-medium text-white rounded-2xl transition-all shadow-sm hover:shadow-lg transform hover:scale-105" style={{backgroundColor: '#006655'}}>
              {text[currentLang].contactUs}
            </button>
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 text-black hover:bg-gray-100 rounded-md transition-colors" aria-label="Toggle menu">
            {isMenuOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
          </button>
        </div>

        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="py-4 border-t border-black">
            <div className="flex flex-col space-y-1">
              {navLinks[currentLang].map(link => (
                <a key={link.text} href={link.href} onClick={() => setIsMenuOpen(false)} className="px-3 py-2.5 text-sm sm:text-base font-medium text-black rounded-md hover:bg-gray-100 transition-colors">
                  {link.text}
                </a>
              ))}
              <div className="pt-4 mt-2 border-t border-black space-y-2">
                <button onClick={() => setIsArabic(!isArabic)} className="w-full flex items-center justify-center space-x-2 px-3 py-2.5 text-sm font-medium transition-colors" style={{color: '#013220'}}>
                  <Globe className="h-4 w-4" />
                  <span>{text[currentLang].langCode}</span>
                </button>
                <button className="w-full px-4 py-3 text-base font-medium text-white rounded-2xl transition-colors" style={{backgroundColor: '#006655'}}>
                  {text[currentLang].contactUs}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AlNakhlaHeader;