// src/components/TableauEmbed.js
import React, { useEffect, useRef } from 'react';

function MidtermElectionTableau() {
  const vizRef = useRef(null); // container for d3 viz
  const vizInstance = useRef(null); // Tableau Viz object

  useEffect(() => {
    // Only embed once
    if (vizInstance.current) return;

    const vizUrl = "https://observablehq.com/embed/27b3ad7143f37ce0@617?cells=viewof+currDate%2Cchart%2Cchart2";

    const options = {
      hideTabs: true,
      width: "100%",
      height: "1062px",
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
      <h2 className="text-center mb-3">Midterm Election Dashboard</h2>
      <div ref={vizRef} />
    </div>
  );
}

export default MidtermElectionTableau;
