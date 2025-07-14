import React from 'react';
import Header from './components/Header';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import MidtermElectionTableau from './components/MidtermElectionTableau';
import KandaceMarketConfidence from './components/KandaceMarketConfidence';
import ReactionToNews from './components/ReactionToNews';
import SectionWrapper from './components/SectionWrapper';
import BackToTopButton from './components/BackToTopButton';
import './App.css';


function App() {
  return (
    <>
    <Header/>

    <SectionWrapper id="intro">
      <AboutSection />
    </SectionWrapper>

    <SectionWrapper id="midterm">
      <MidtermElectionTableau />
    </SectionWrapper>

    <SectionWrapper id="kandace">
      <KandaceMarketConfidence />
    </SectionWrapper>

    <SectionWrapper id="reaction">
      <ReactionToNews />
    </SectionWrapper>

    <SectionWrapper id="contact">
      <ContactSection />
    </SectionWrapper>

    <BackToTopButton/>
      </>

  );
}

export default App;
