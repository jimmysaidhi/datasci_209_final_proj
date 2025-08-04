import React from 'react';

function AboutSection() {
  return (
    <section
      id="about"
      style={{ backgroundColor: '#1f2937', color: '#f8fafc', padding: '1rem 0.5rem' }}
    >
      <div style={{ maxWidth: '960px', margin: '0 auto' }}>
        <h2 style={{ fontWeight: '600' }}>About</h2>
        <p className="lead mt-3">
          Have you ever wondered how close prediction markets were to forecasting the outcome
          of the 2024 U.S. Presidential Election?
        </p>
        <p>
          <strong>Polymarket</strong> is a decentralized prediction market platform where users can trade
          on the outcomes of real-world events — like elections, geopolitical developments, and major news stories.
          Prices on Polymarket reflect collective beliefs about the likelihood of events, often updating faster
          than traditional media or polling.
        </p>
        <p>
          In this dashboard, we explore how prediction market confidence changed throughout the campaign season,
          especially in response to key news moments.
        </p>
      </div>
    </section>
  );
}

export default AboutSection;
