import React from 'react';

function Header() {
  return (
    <header style={{ backgroundColor: '#111827' }} className="text-white py-4 mb-4 shadow-sm">
      <div className="container d-flex justify-content-between align-items-center flex-wrap">
        <div>
          <h2 style={{ margin: '6px', fontWeight: '600', fontSize: '1.5rem' }}>
            Visualizing Prediction Markets
          </h2>
        </div>
        <nav className="mt-3 mt-md-0">
          <a href="#intro" className="btn btn-outline-light btn-sm mx-1 custom-nav-btn">Intro</a>
          <a href="#midterm" className="btn btn-outline-light btn-sm mx-1 custom-nav-btn">Midterm</a>
          <a href="#kandace" className="btn btn-outline-light btn-sm mx-1 custom-nav-btn">Kandace</a>
          <a href="#reaction" className="btn btn-outline-light btn-sm mx-1 custom-nav-btn">Reaction</a>
          <a href="#contact" className="btn btn-outline-light btn-sm mx-1 custom-nav-btn">Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
