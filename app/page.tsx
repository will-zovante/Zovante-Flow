"use client";
import { useEffect, useRef, useState } from "react";
 
 
export default function ZovanteFlow() {
  const [scrolled, setScrolled] = useState(false);
  const mockupsRef = useRef<HTMLDivElement>(null);
 
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
 
  const scrollToMockups = () => {
    mockupsRef.current?.scrollIntoView({ behavior: "smooth" });
  };
 
  return (
    <div style={{ fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif", background: "#0c0d0f", color: "#e8e6e1", minHeight: "100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,300&family=Playfair+Display:wght@400;600;700&display=swap');
 
        * { box-sizing: border-box; margin: 0; padding: 0; }
 
        html { scroll-behavior: smooth; }
 
        body { background: #0c0d0f; }
 
        .nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          padding: 1rem 2rem;
          display: flex; align-items: center; justify-content: space-between;
          transition: all 0.4s ease;
        }
        .nav.scrolled {
          background: rgba(12,13,15,0.92);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }
        .nav-logo {
          display: flex; align-items: center; gap: 0.75rem;
        }
        .nav-logo img {
          width: 40px; height: 40px; border-radius: 50%; object-fit: cover;
          border: 1px solid rgba(0,188,212,0.4);
        }
        .nav-wordmark {
          font-family: 'DM Sans', sans-serif;
          font-weight: 700; font-size: 0.95rem; letter-spacing: 0.12em;
          color: #e8e6e1; text-transform: uppercase;
        }
        .nav-cta {
          background: transparent;
          border: 1px solid rgba(0,188,212,0.5);
          color: #00bcd4; font-size: 0.8rem; font-weight: 500;
          padding: 0.5rem 1.2rem; border-radius: 2px; cursor: pointer;
          letter-spacing: 0.08em; text-transform: uppercase;
          transition: all 0.2s;
          text-decoration: none;
        }
        .nav-cta:hover { background: rgba(0,188,212,0.1); border-color: #00bcd4; }
 
        .hero {
          min-height: 100vh;
          display: flex; align-items: center; justify-content: center;
          position: relative; overflow: hidden;
          padding: 6rem 2rem 4rem;
        }
        .hero-bg {
          position: absolute; inset: 0;
          background: radial-gradient(ellipse 70% 60% at 50% 40%, rgba(0,188,212,0.06) 0%, transparent 70%),
                      radial-gradient(ellipse 40% 40% at 80% 80%, rgba(0,100,120,0.04) 0%, transparent 60%);
        }
        .hero-grid {
          position: absolute; inset: 0; opacity: 0.04;
          background-image: linear-gradient(rgba(0,188,212,0.5) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(0,188,212,0.5) 1px, transparent 1px);
          background-size: 60px 60px;
        }
        .hero-inner {
          position: relative; max-width: 780px; text-align: center;
        }
        .hero-logo {
          width: 88px; height: 88px; border-radius: 50%; object-fit: cover;
          border: 2px solid rgba(0,188,212,0.35);
          box-shadow: 0 0 40px rgba(0,188,212,0.15), 0 0 0 8px rgba(0,188,212,0.04);
          margin: 0 auto 2rem;
          display: block;
        }
        .hero-eyebrow {
          font-size: 0.72rem; font-weight: 500; letter-spacing: 0.25em;
          text-transform: uppercase; color: #00bcd4; margin-bottom: 1.25rem;
          display: flex; align-items: center; justify-content: center; gap: 0.75rem;
        }
        .hero-eyebrow::before, .hero-eyebrow::after {
          content: ''; display: block; width: 32px; height: 1px; background: rgba(0,188,212,0.4);
        }
        .hero-title {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(2.4rem, 6vw, 4.2rem);
          font-weight: 700; line-height: 1.1;
          color: #ffffff; margin-bottom: 1.5rem;
          letter-spacing: -0.02em;
        }
        .hero-title span { color: #00bcd4; }
        .hero-sub {
          font-size: clamp(0.95rem, 2vw, 1.1rem);
          line-height: 1.75; color: rgba(232,230,225,0.65);
          max-width: 560px; margin: 0 auto 2.5rem;
          font-weight: 300;
        }
        .btn-primary {
          display: inline-block;
          background: #00bcd4; color: #0c0d0f;
          font-size: 0.85rem; font-weight: 600; letter-spacing: 0.1em;
          text-transform: uppercase; padding: 0.9rem 2.2rem;
          border-radius: 2px; border: none; cursor: pointer;
          transition: all 0.2s; text-decoration: none;
          box-shadow: 0 0 20px rgba(0,188,212,0.25);
        }
        .btn-primary:hover { background: #26c6da; box-shadow: 0 0 32px rgba(0,188,212,0.4); transform: translateY(-1px); }
 
        section { padding: 5rem 2rem; }
        .section-inner { max-width: 900px; margin: 0 auto; }
        .section-label {
          font-size: 0.68rem; letter-spacing: 0.3em; text-transform: uppercase;
          color: #00bcd4; margin-bottom: 0.75rem; font-weight: 500;
        }
        .section-title {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(1.8rem, 4vw, 2.8rem); font-weight: 600;
          color: #fff; line-height: 1.2; margin-bottom: 1rem;
        }
        .divider { width: 40px; height: 2px; background: #00bcd4; margin: 1.5rem 0; }
 
        .problem-grid {
          display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 1.5rem; margin: 2.5rem 0;
        }
        .problem-card {
          background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.07);
          padding: 1.75rem; border-radius: 4px; position: relative; overflow: hidden;
        }
        .problem-card::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px;
          background: linear-gradient(90deg, transparent, rgba(0,188,212,0.4), transparent);
        }
        .problem-icon { font-size: 1.4rem; margin-bottom: 1rem; }
        .problem-card p { font-size: 0.9rem; line-height: 1.65; color: rgba(232,230,225,0.7); }
        .problem-close {
          font-size: 0.95rem; line-height: 1.7; color: rgba(232,230,225,0.6);
          border-left: 2px solid #00bcd4; padding-left: 1.25rem; margin-top: 2rem;
          font-style: italic;
        }
 
        .steps-grid { display: grid; gap: 0; margin-top: 2.5rem; }
        .step {
          display: flex; gap: 1.5rem; padding: 1.75rem 0;
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }
        .step:last-child { border-bottom: none; }
        .step-num {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 2.5rem; font-weight: 700; color: rgba(0,188,212,0.2);
          line-height: 1; min-width: 3rem; padding-top: 0.1rem;
        }
        .step-body h3 { font-size: 0.85rem; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: #fff; margin-bottom: 0.4rem; }
        .step-body p { font-size: 0.9rem; line-height: 1.65; color: rgba(232,230,225,0.6); }
 
        .services-grid {
          display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 1.5rem; margin-top: 2.5rem;
        }
        .service-card {
          padding: 2rem; background: rgba(0,188,212,0.04);
          border: 1px solid rgba(0,188,212,0.15); border-radius: 4px;
        }
        .service-card h3 { font-size: 1rem; font-weight: 600; color: #fff; margin-bottom: 0.6rem; }
        .service-card p { font-size: 0.875rem; line-height: 1.65; color: rgba(232,230,225,0.6); }
 
        .mockups-grid {
          display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 1.5rem; margin-top: 2.5rem;
        }
        .mockup-card {
          background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.08);
          border-radius: 6px; overflow: hidden; transition: all 0.3s;
        }
        .mockup-card:hover { border-color: rgba(0,188,212,0.4); transform: translateY(-3px); box-shadow: 0 12px 40px rgba(0,0,0,0.4); }
        .mockup-thumb {
          height: 160px; display: flex; align-items: center; justify-content: center;
          position: relative; overflow: hidden;
        }
        .mockup-thumb-solar { background: linear-gradient(135deg, #0f2027, #203a43, #2c5364); }
        .mockup-thumb-construction { background: linear-gradient(135deg, #1a1a0f, #2d2d1a, #3d3520); }
        .mockup-thumb-luxury { background: linear-gradient(135deg, #1a0f14, #2d1a20, #3d2028); }
        .mockup-thumb-icon { font-size: 2.5rem; opacity: 0.6; }
        .mockup-body { padding: 1.5rem; }
        .mockup-tag { font-size: 0.65rem; letter-spacing: 0.2em; text-transform: uppercase; color: #00bcd4; margin-bottom: 0.5rem; font-weight: 500; }
        .mockup-body h3 { font-size: 1rem; font-weight: 600; color: #fff; margin-bottom: 0.5rem; }
        .mockup-body p { font-size: 0.82rem; line-height: 1.6; color: rgba(232,230,225,0.55); margin-bottom: 1.25rem; }
        .mockup-link {
          display: inline-flex; align-items: center; gap: 0.4rem;
          color: #00bcd4; font-size: 0.78rem; font-weight: 500; text-decoration: none;
          letter-spacing: 0.05em; border-bottom: 1px solid rgba(0,188,212,0.3);
          padding-bottom: 1px; transition: all 0.2s;
        }
        .mockup-link:hover { border-color: #00bcd4; color: #26c6da; }
 
        .pricing-grid {
          display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 1.5rem; margin-top: 2.5rem; align-items: start;
        }
        .price-card {
          background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08);
          border-radius: 4px; padding: 2rem; position: relative;
          transition: border-color 0.2s;
        }
        .price-card:hover { border-color: rgba(0,188,212,0.3); }
        .price-card.featured {
          background: rgba(0,188,212,0.05); border-color: rgba(0,188,212,0.3);
        }
        .price-card.featured::before {
          content: 'POPULAR'; position: absolute; top: -1px; left: 50%; transform: translateX(-50%);
          background: #00bcd4; color: #0c0d0f; font-size: 0.6rem; font-weight: 700;
          letter-spacing: 0.15em; padding: 0.25rem 0.75rem; border-radius: 0 0 3px 3px;
        }
        .price-amount { font-family: 'Playfair Display', Georgia, serif; font-size: 2.4rem; font-weight: 700; color: #fff; margin: 0.5rem 0 0.25rem; }
        .price-tier { font-size: 0.7rem; letter-spacing: 0.2em; text-transform: uppercase; color: rgba(232,230,225,0.4); }
        .price-divider { height: 1px; background: rgba(255,255,255,0.08); margin: 1.25rem 0; }
        .price-feature { font-size: 0.85rem; color: rgba(232,230,225,0.65); padding: 0.35rem 0; display: flex; gap: 0.5rem; line-height: 1.5; }
        .price-feature::before { content: '—'; color: #00bcd4; flex-shrink: 0; }
 
        .contact-card {
          background: rgba(0,188,212,0.04); border: 1px solid rgba(0,188,212,0.2);
          border-radius: 6px; padding: 3rem; max-width: 640px; margin: 2.5rem auto 0;
          text-align: center;
        }
        .contact-card p { font-size: 0.95rem; color: rgba(232,230,225,0.6); margin-bottom: 2rem; line-height: 1.7; }
        .contact-links { display: flex; flex-direction: column; gap: 0.85rem; align-items: center; }
        .contact-link { display: flex; align-items: center; gap: 0.75rem; font-size: 0.95rem; color: #e8e6e1; text-decoration: none; transition: color 0.2s; }
        .contact-link:hover { color: #00bcd4; }
        .contact-icon { font-size: 1.1rem; }
 
        .privacy { background: rgba(255,255,255,0.01); border-top: 1px solid rgba(255,255,255,0.05); }
        .privacy-text { font-size: 0.875rem; line-height: 1.85; color: rgba(232,230,225,0.5); max-width: 640px; }
        .privacy-text strong { color: rgba(232,230,225,0.75); }
 
        footer {
          border-top: 1px solid rgba(255,255,255,0.06);
          padding: 2rem;
          display: flex; flex-wrap: wrap; gap: 1rem;
          align-items: center; justify-content: space-between;
          max-width: 900px; margin: 0 auto;
        }
        .footer-left { font-size: 0.78rem; color: rgba(232,230,225,0.35); letter-spacing: 0.03em; }
        .footer-right { display: flex; gap: 1.5rem; }
        .footer-right a { font-size: 0.75rem; color: rgba(232,230,225,0.35); text-decoration: none; transition: color 0.2s; }
        .footer-right a:hover { color: #00bcd4; }
 
        @media (max-width: 640px) {
          section { padding: 4rem 1.25rem; }
          .contact-card { padding: 2rem 1.5rem; }
        }
      `}</style>
 
      <nav className={`nav${scrolled ? " scrolled" : ""}`}>
        <div className="nav-logo">
          <div style={{ width: 40, height: 40, borderRadius: "50%", background: "rgba(0,188,212,0.15)", border: "1px solid rgba(0,188,212,0.4)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "0.8rem", color: "#00bcd4", letterSpacing: "0.05em" }}>ZF</div>
          <span className="nav-wordmark">Zovante Flow</span>
        </div>
        <a href="#contact" className="nav-cta">Get a demo</a>
      </nav>
 
      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-grid" />
        <div className="hero-inner">
          <div style={{ width: 88, height: 88, borderRadius: "50%", background: "rgba(0,188,212,0.15)", border: "2px solid rgba(0,188,212,0.35)", boxShadow: "0 0 40px rgba(0,188,212,0.15), 0 0 0 8px rgba(0,188,212,0.04)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "1.4rem", color: "#00bcd4", letterSpacing: "0.05em", margin: "0 auto 2rem" }}>ZF</div>
          <div className="hero-eyebrow">UK Landing Page Studio</div>
          <h1 className="hero-title">
            Focused landing pages<br />that <span>convert</span> for<br />UK businesses.
          </h1>
          <p className="hero-sub">
            Zovante Flow designs clean landing pages to help UK solar, construction, and luxury real‑estate businesses turn visitors into leads on both desktop and mobile.
          </p>
          <button className="btn-primary" onClick={scrollToMockups}>
            See live mockups →
          </button>
        </div>
      </section>
 
      <section style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="section-inner">
          <div className="section-label">The problem</div>
          <h2 className="section-title">Visitors leave fast.</h2>
          <div className="divider" />
          <p style={{ fontSize: "0.95rem", color: "rgba(232,230,225,0.6)", lineHeight: 1.7, marginBottom: "2rem" }}>
            If your site is slow or confusing, people leave.
          </p>
          <div className="problem-grid">
            <div className="problem-card">
              <div className="problem-icon">⚡</div>
              <p>Pages that load too slowly on desktop or mobile, losing visitors before they even see your offer.</p>
            </div>
            <div className="problem-card">
              <div className="problem-icon">🗺</div>
              <p>Confusing layouts that disorient visitors and cause them to bounce without taking any action.</p>
            </div>
            <div className="problem-card">
              <div className="problem-icon">🎯</div>
              <p>Unclear calls to action that people scroll past and ignore, leaving leads on the table.</p>
            </div>
          </div>
          <div className="problem-close">
            Zovante Flow simplifies this with focused, conversion‑driven pages.
          </div>
        </div>
      </section>
 
      <section style={{ background: "rgba(0,188,212,0.02)", borderTop: "1px solid rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="section-inner">
          <div className="section-label">Process</div>
          <h2 className="section-title">How it works.</h2>
          <div className="divider" />
          <div className="steps-grid">
            <div className="step">
              <div className="step-num">01</div>
              <div className="step-body">
                <h3>Share your details</h3>
                <p>You share your business details and current website (if you have one), along with your goals and target audience.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">02</div>
              <div className="step-body">
                <h3>We design your page</h3>
                <p>Zovante Flow designs a clean landing page tailored to your offer, built for performance on every device.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">03</div>
              <div className="step-body">
                <h3>Review and refine</h3>
                <p>You get a live link to review and request tweaks until the page is exactly right for your business.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
 
      <section>
        <div className="section-inner">
          <div className="section-label">Deliverables</div>
          <h2 className="section-title">What you get.</h2>
          <div className="divider" />
          <div className="services-grid">
            <div className="service-card">
              <h3>Focused landing page</h3>
              <p>A page built around your main offer — clear, fast, and stripped of anything that distracts from the goal.</p>
            </div>
            <div className="service-card">
              <h3>Desktop & mobile ready</h3>
              <p>A design that works smoothly on both desktop and mobile, so you never lose a lead to a broken layout.</p>
            </div>
            <div className="service-card">
              <h3>Single clear action</h3>
              <p>Clear sections that guide visitors to one simple action — call, message, or enquire — without confusion.</p>
            </div>
          </div>
        </div>
      </section>
 
      <div ref={mockupsRef} />
      <section id="mockups" style={{ background: "rgba(0,0,0,0.3)", borderTop: "1px solid rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="section-inner">
          <div className="section-label">Portfolio</div>
          <h2 className="section-title">Live mockups for your sector.</h2>
          <div className="divider" />
          <div className="mockups-grid">
            <div className="mockup-card">
              <div className="mockup-thumb mockup-thumb-solar">
                <span className="mockup-thumb-icon">☀️</span>
              </div>
              <div className="mockup-body">
                <div className="mockup-tag">Renewable Energy</div>
                <h3>Solar landing page</h3>
                <p>A conversion-focused page for UK solar installers — built to turn enquiries into booked surveys.</p>
                <a href="/solar.html" target="_blank" rel="noopener noreferrer" className="mockup-link">
                  View live demo →
                </a>
              </div>
            </div>
            <div className="mockup-card">
              <div className="mockup-thumb mockup-thumb-construction">
                <span className="mockup-thumb-icon">🏗</span>
              </div>
              <div className="mockup-body">
                <div className="mockup-tag">Construction</div>
                <h3>Construction landing page</h3>
                <p>A bold, trust-building page for UK builders and contractors designed to generate quote requests.</p>
                <a href="/construction.html" target="_blank" rel="noopener noreferrer" className="mockup-link">
                  View live demo →
                </a>
              </div>
            </div>
            <div className="mockup-card">
              <div className="mockup-thumb mockup-thumb-luxury">
                <span className="mockup-thumb-icon">🏡</span>
              </div>
              <div className="mockup-body">
                <div className="mockup-tag">Luxury Real‑Estate</div>
                <h3>Luxury real‑estate page</h3>
                <p>A refined, high-end landing page for UK property businesses that need to attract serious buyers.</p>
                <a href="/luxury.html" target="_blank" rel="noopener noreferrer" className="mockup-link">
                  View live demo →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
 
      <section>
        <div className="section-inner">
          <div className="section-label">Investment</div>
          <h2 className="section-title">Pricing.</h2>
          <div className="divider" />
          <div className="pricing-grid">
            <div className="price-card">
              <div className="price-tier">Starter</div>
              <div className="price-amount">£500</div>
              <div className="price-divider" />
              <div className="price-feature">1 focused landing page</div>
              <div className="price-feature">1 call‑to‑action section</div>
              <div className="price-feature">1 revision round</div>
            </div>
            <div className="price-card featured">
              <div className="price-tier">Growth</div>
              <div className="price-amount">£1,000</div>
              <div className="price-divider" />
              <div className="price-feature">2 pages (home + landing)</div>
              <div className="price-feature">WhatsApp‑style contact button</div>
              <div className="price-feature">2 revision rounds</div>
            </div>
            <div className="price-card">
              <div className="price-tier">Premium</div>
              <div className="price-amount">£1,500</div>
              <div className="price-divider" />
              <div className="price-feature">3 pages + micro‑interactions</div>
              <div className="price-feature">2–3 revision rounds</div>
              <div className="price-feature">Basic performance optimisation</div>
            </div>
          </div>
        </div>
      </section>
 
      <section id="contact" style={{ background: "rgba(0,188,212,0.02)", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="section-inner" style={{ textAlign: "center" }}>
          <div className="section-label">Contact</div>
          <h2 className="section-title">Get a live demo for your business.</h2>
          <div className="divider" style={{ margin: "1.5rem auto" }} />
          <div className="contact-card">
            <p>Send a message and get a live landing page demo built for your business.</p>
            <div className="contact-links">
              <a href="https://wa.me/447737124388" className="contact-link">
                <span className="contact-icon">📱</span>
                <span>Phone / WhatsApp: +44 7737 124388</span>
              </a>
              <a href="mailto:will.zovante@proton.me" className="contact-link">
                <span className="contact-icon">✉️</span>
                <span>will.zovante@proton.me</span>
              </a>
            </div>
          </div>
        </div>
      </section>
 
      <section className="privacy">
        <div className="section-inner">
          <div className="section-label">Legal</div>
          <h2 className="section-title" style={{ fontSize: "1.6rem" }}>Privacy Policy.</h2>
          <div className="divider" />
          <p className="privacy-text">
            <strong>What we collect.</strong> Zovante Flow collects only the basic contact information you choose to share — your name, email address, phone number, and relevant business details — solely for the purpose of completing your project.
          </p>
          <br />
          <p className="privacy-text">
            <strong>How we use it.</strong> Your data is used exclusively for project communication and delivery. We do not use third‑party tracking, we do not place cookies on any of our pages, and we do not sell, rent, or share your information with any third parties under any circumstances.
          </p>
          <br />
          <p className="privacy-text">
            <strong>Retention.</strong> All personal data is deleted upon project completion unless you explicitly request otherwise in writing.
          </p>
          <br />
          <p className="privacy-text">
            <strong>Your rights.</strong> This policy is fully compliant with the UK General Data Protection Regulation (UK GDPR). You have the right to access, correct, or request deletion of your data at any time. For any privacy‑related queries, contact us at{" "}
            <a href="mailto:will.zovante@proton.me" style={{ color: "#00bcd4", textDecoration: "none" }}>will.zovante@proton.me</a>.
          </p>
        </div>
      </section>
 
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", padding: "2rem" }}>
        <footer>
          <span className="footer-left">© 2026 ZOVANTE FLOW – Focused landing pages for UK businesses.</span>
          <div className="footer-right">
            <a href="#contact">Privacy Policy</a>
            <a href="#contact">Terms of Service</a>
          </div>
        </footer>
      </div>
    </div>
  );
}
 
