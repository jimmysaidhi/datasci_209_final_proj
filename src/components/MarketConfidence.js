import React, { useEffect, useRef } from 'react';

function MarketConfidence() {
  const vizRefs = [useRef(null), useRef(null)];
  const vizInstances = useRef([]);

  useEffect(() => {
    const vizUrls = [
      "https://public.tableau.com/views/209FinalViz_17539159591960/Dashboard2",
      "https://public.tableau.com/views/209FinalViz2/ConfidenceChangeDashboard"
    ];

    const options = {
      hideTabs: true,
      width: "100%",
      height: "900px",
      onFirstInteractive: () => {
        console.log("Kandace's Tableau Viz Loaded");
      }
    };

    vizUrls.forEach((url, index) => {
      if (!vizInstances.current[index] && vizRefs[index].current) {
        vizInstances.current[index] = new window.tableau.Viz(vizRefs[index].current, url, options);
      }
    });

    return () => {
      vizInstances.current.forEach((viz) => {
        if (viz) viz.dispose();
      });
    };
  }, []);

  return (
    <div className="my-5">
      <h1 className="text-left mb-3">Market Confidence Dashboard</h1>

      <div className="mb-5">
        <div ref={vizRefs[0]} />
      </div>

      <div className="mb-5">
        <div ref={vizRefs[1]} />
      </div>
    </div>
  );
}

export default MarketConfidence;
