import React from 'react';
import Header from './components/Header';
import IntroSection from './components/IntroSection';
import ContactSection from './components/ContactSection';
import MidtermElectionTableau from './components/MidtermElectionTableau';
import KandaceMarketConfidence from './components/KandaceMarketConfidence';
import ReactionToNews from './components/ReactionToNews';

function App() {
  return (
    <div>
      <Header />
      <div className="container my-4">
        <IntroSection />
        <MidtermElectionTableau />
        <KandaceMarketConfidence />
        <ReactionToNews />
      </div>
      <ContactSection />
    </div>
  );
}

export default App;
