import React from 'react';

function ReactionToNews() {
  return (
    <div>
      <h2>Reaction To News</h2>
      <iframe 
        src="/event_study.html" 
        width="100%" 
        height="600px"
        frameBorder="0"
        title="Presidential Betting Odds Chart"
        style={{ border: 'none' }}
      />
    </div>
  );
}

export default ReactionToNews;
