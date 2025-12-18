"use client";

import { useEffect } from "react";

export default function HomePage() {
  useEffect(() => {
    // reserved for future animations / lenis hooks
  }, []);

  return (
    <main className="home-wrapper">

      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            IN <span>Roleplay</span>
          </h1>

          <p className="hero-subtitle">
            Your story begins here. A serious roleplay experience built for realism.
          </p>

          <div className="hero-buttons">
            <a href="#" className="btn primary">Play Now</a>
            <a href="#" className="btn secondary">Download</a>
          </div>
        </div>
      </section>


      {/* HOW TO START */}
      <section className="steps-section">
        <h2 className="section-title">How to Start</h2>

        <div className="steps-grid">
          <div className="step-card">
            <span className="step-number">01</span>
            <h3>Register</h3>
            <p>Create your website & game account.</p>
          </div>

          <div className="step-card">
            <span className="step-number">02</span>
            <h3>Download</h3>
            <p>Install RageMP & required files.</p>
          </div>

          <div className="step-card">
            <span className="step-number">03</span>
            <h3>Join</h3>
            <p>Enter the city and start your story.</p>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="features-section">
        <h2 className="section-title">Why IN Roleplay?</h2>

        <div className="features-grid">
          <div className="feature-card">Serious Roleplay</div>
          <div className="feature-card">Active Administration</div>
          <div className="feature-card">Custom Systems</div>
          <div className="feature-card">Fair Gameplay</div>
          <div className="feature-card">Growing Community</div>
          <div className="feature-card">Optimized Performance</div>
        </div>
      </section>

      {/* COMMUNITY */}
      <section className="community-section">
        <h2>Join Our Community</h2>
        <p>
          Be part of discussions, updates, and announcements.
        </p>
        <a href="https://discord.gg/SAKKJys5jN" target="_blank" rel="noopener noreferrer" className="btn primary">Join Discord</a>
      </section>

    </main>
  );
}
