// src/components/KandaceMarketConfidence.js
import React, { useEffect, useRef } from 'react';

function KandaceMarketConfidence() {
  const vizRef = useRef(null);
  const vizInstance = useRef(null);

  useEffect(() => {
    if (vizInstance.current) return;

    const vizUrl = "https://public.tableau.com/views/209MidtermPresentation_17519905983820/Dashboard1";

    const options = {
      hideTabs: true,
      width: "100%",
      height: "800px",
      onFirstInteractive: () => {
        console.log("Kandace's Tableau Viz Loaded");
      }
    };

    vizInstance.current = new window.tableau.Viz(vizRef.current, vizUrl, options);

    return () => {
      if (vizInstance.current) {
        vizInstance.current.dispose();
      }
    };
  }, []);

  return (
    <div className="my-5">
      <h2 className="text-center mb-3">Midterm Analysis by Kandace Webber</h2>
      <div ref={vizRef} />
    </div>
  );
}

export default KandaceMarketConfidence;
