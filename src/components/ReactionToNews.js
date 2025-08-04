import React from 'react';

function ReactionToNews() {
  return (
    <div>
      {/* Left Column: Text */}
      <div className="reaction-text">
        <h1>Reaction To News Dashboard</h1>
        <p>
          The 2024 Presidential Election had a particularly eventful news cycle. Throughout the twelve months leading to the election, former President Donald Trump was found guilty of 34 felonies, a gunman attempted an assassination of former President Trump, the Democratic nominee Joseph Biden stepped out of the race after a particularly damaging debate performance, and incumbent Vice-President Kamala Harris was nominated as the Democratic nominee without a vote being cast.
        </p>
        <p>
          In markets of all kinds, investors react quickly to current events that may have an impact on the market. This is true in commodity markets with investors buying or selling futures based on trade agreements, equity markets with investors buying or selling stocks in a company when particularly significant news about that company breaks. This is also true in prediction markets, where investors buy and sell contracts based upon current events.
        </p>
        <p>
          The visualization below shows 10 significant current events that occurred in the lead-up to the 2024 presidential election, and visualizes how investors bought or sold shares in Trump's victory as a result. An increase in Trump's probability to win is associated with investors buying a Trump Win contract causing the price to increase, and a decrease in Trump's probability to win is associated with investors selling Trump Win contracts, causing the price to fall.
        </p>
      </div>
      <iframe 
        src="/chart.html" 
        width="100%" 
        height="600px"
        title="Presidential Betting Odds Chart"
        style={{ border: '1px' }}
      />
    </div>
  );
}

export default ReactionToNews;
