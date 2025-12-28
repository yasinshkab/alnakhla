import React, { useState, useEffect } from 'react';
import AlNakhlaHeader from './AlNakhlaHeader';
import HeroSection from './HeroSection';
import WhyChooseUsSection from './WhyChooseUsSection';
import AboutSection from './AboutSection';
import VisionMissionSection from './VisionMissionSection';
import ServicesSection from './ServicesSection';
import StatisticsSection from './StatisticsSection';
import WhyChooseSection from './WhyChooseSection';
import ComplianceSection from './ComplianceSection';
import GetInTouchSection from './GetInTouchSection';
import BranchLocatorSection from './BranchLocatorSection';
import Footer from './Footer';
import './App.css';

function App() {
  const [isArabic, setIsArabic] = useState(false);

  return (
    <div className="App">
      <AlNakhlaHeader isArabic={isArabic} setIsArabic={setIsArabic} />
      <HeroSection isArabic={isArabic} />
      <WhyChooseUsSection isArabic={isArabic} />
      <AboutSection isArabic={isArabic} />
      <VisionMissionSection isArabic={isArabic} />
      <StatisticsSection isArabic={isArabic} />
      <ServicesSection isArabic={isArabic} />
      <WhyChooseSection isArabic={isArabic} />
      <ComplianceSection isArabic={isArabic} />
      <GetInTouchSection isArabic={isArabic} />
      <BranchLocatorSection isArabic={isArabic} />
      <Footer isArabic={isArabic} />
    </div>
  );
}

export default App;