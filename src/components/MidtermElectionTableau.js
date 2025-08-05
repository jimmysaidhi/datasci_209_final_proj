// src/components/TableauEmbed.js
import React, { useEffect, useRef } from 'react';

function MidtermElectionTableau() {
  const vizRef = useRef(null); // container for d3 viz
  const vizInstance = useRef(null); // Tableau Viz object

  useEffect(() => {
    // Only embed once
    if (vizInstance.current) return;

    const vizUrl = "https://observablehq.com/embed/27b3ad7143f37ce0@660?cells=date_selector_title%2Cviewof+currDate%2Cchart%2Cchart2";

    const options = {
      hideTabs: true,
      width: "100%",
      height: "1200px",
      onFirstInteractive: () => {
        console.log("d3 Viz Loaded!");
      },
    };

    vizInstance.current = new window.tableau.Viz(vizRef.current, vizUrl, options);

    // Optional: clean up on unmount
    return () => {
      if (vizInstance.current) {
        vizInstance.current.dispose();
      }
    };
  }, []);

  return (
    <div className="my-5">
      <h1 className="text-left mb-3">Electoral Map Dashboard</h1>
      <p className="text-left">
      The visualization below shows a map of the prediction-market-implied probabilities of Donald Trump winning the 2024 US Presidential Election
      starting in April 2024. This visualization is meant to offer a landing page for users, where they can see a national view of the state-level data. 
      States are colored by the implied probability of Donald Trump winning the 2024 election, with higher probabilities in red, and lower probabilities 
      in blue. Users can manipulate the slider on the top left to scroll through the election timeline. 

      The visualization also includes more state-specific information. Users can select states of interest, by clicking on a state in the larger map.
      In a barplot to the right of the main graph are the implied probabilities for each candidate for the selected date. Below is a line graph showing
      prediction market probabilities for the state throughout the entirety of the election. 
 </p> 
      <p className="text-left"> You can change the date using the slider below or get more state-specific information by clicking any of the 50 states.
      </p>
      <div ref={vizRef} />
    </div>
  );
}

export default MidtermElectionTableau;
