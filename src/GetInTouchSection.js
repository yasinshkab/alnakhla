import React, { useState } from 'react';

const GetInTouchSection = ({ isArabic }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const text = {
    en: {
      meetUs: "Meet us",
      phone: "+218 21 1234567",
      email: "contact@companyname.ly",
      address: "Main Office, Business Center, Financial District, Tripoli, Libya",
      pitchUs: "Pitch us",
      formPlaceholder: "hello,\nmy name is your name and my e-mail address is\nyour e-mail and I would like to discuss about\nthis project.",
      send: "send",
      terms: "Terms & Conditions"
    },
    ar: {
      meetUs: "تواصل معنا",
      phone: "+218 21 1234567",
      email: "contact@companyname.ly",
      address: "المكتب الرئيسي، المركز التجاري، المنطقة المالية، طرابلس، ليبيا",
      pitchUs: "أرسل لنا",
      formPlaceholder: "مرحباً،\nاسمي هو اسمك وعنوان بريدي الإلكتروني هو\nبريدك الإلكتروني وأود مناقشة\nهذا المشروع.",
      send: "إرسال",
      terms: "الشروط والأحكام"
    }
  };

  const currentLang = isArabic ? 'ar' : 'en';

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 max-w-7xl">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left Section - Map */}
          <div className="lg:col-span-1">
            <div className="h-full rounded-2xl overflow-hidden bg-gray-900 relative">
              <div className="h-full min-h-[500px] w-full">
                <iframe
                  src="https://www.google.com/maps?q=Ben+Ashour,+Tripoli,+Libya&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '500px' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ben Ashour, Tripoli, Libya"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Middle Section - Meet us */}
          <div className="lg:col-span-1 bg-white rounded-2xl p-8 flex flex-col">
            <h2 className="text-4xl lg:text-5xl font-bold text-black mb-8">
              {text[currentLang].meetUs}
            </h2>
            
            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mr-4" style={{backgroundColor: '#E6F5F3'}}>
                  <svg className="w-5 h-5" style={{color: '#006655'}} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-lg text-gray-700">{text[currentLang].phone}</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mr-4" style={{backgroundColor: '#E6F5F3'}}>
                  <svg className="w-5 h-5" style={{color: '#006655'}} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-lg text-gray-700 break-all">{text[currentLang].email}</p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mr-4" style={{backgroundColor: '#E6F5F3'}}>
                  <svg className="w-5 h-5" style={{color: '#006655'}} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-lg text-gray-700 leading-relaxed">{text[currentLang].address}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Pitch us */}
          <div className="lg:col-span-1 bg-gray-50 rounded-2xl p-8 flex flex-col">
            <h2 className="text-4xl lg:text-5xl font-bold text-black mb-8">
              {text[currentLang].pitchUs}
            </h2>
            
            <form onSubmit={handleSubmit} className="flex-1 flex flex-col">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder={text[currentLang].formPlaceholder}
                className="flex-1 w-full p-4 rounded-xl border-2 border-gray-200 focus:border-gray-300 focus:outline-none resize-none text-gray-700 placeholder-gray-400 bg-white mb-6"
                rows="8"
              />
              
              <button
                type="submit"
                className="w-full py-4 px-6 rounded-full text-white font-bold text-lg transition-all hover:opacity-90 shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
                style={{
                  backgroundColor: '#006655'
                }}
              >
                {text[currentLang].send}
              </button>

              <div className="mt-4 text-right">
                <p className="text-xs text-gray-500">
                  {text[currentLang].terms}
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouchSection;

