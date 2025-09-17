'use client';

import { useRef, useEffect, useState } from 'react';

export default function Home() {
  const circleRef = useRef(null);
  const [hoveredPanel, setHoveredPanel] = useState(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const circle = circleRef.current;
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      const offsetX = (clientX - centerX) / 20;
      const offsetY = (clientY - centerY) / 20;

      if (circle) {
        circle.style.transform = `translate(-50%, -50%) translate(${offsetX}px, ${offsetY}px)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <main style={styles.page}>
      <div ref={circleRef} style={styles.circle}></div>

      <nav style={styles.nav}>
        <div style={styles.logo}>Try Stuff</div>
        <div style={styles.menuToggle}>☰</div>
        <div style={styles.menuItems}>
          <a href="#home" style={styles.menuLink}>Start</a>
          <a href="#about" style={styles.menuLink}>Über uns</a>
          <a href="#features" style={styles.menuLink}>Leistungen</a>
          <a href="#contact" style={styles.menuLink}>Kontakt</a>
        </div>
      </nav>

      <section id="home" style={styles.hero}>
        <h1 style={styles.title}>Try Stuff</h1>
        <p style={styles.subtitle}>Learning by Doing – ein Projekt der GPB Schule von Daniel M.</p>
        <button style={styles.button} onClick={() => document.getElementById('features').scrollIntoView({ behavior: 'smooth' })}>Mehr erfahren</button>
      </section>

      <section id="about" style={styles.section}>
        <h2 style={styles.sectionTitle}>Über uns / Team</h2>
        <p style={styles.text}>
          Wir sind Try Stuff – eine App, die Lernen durch Ausprobieren fördert. Entwickelt von Daniel M. an der GPB‑Schule.
        </p>
        <img
          src="https://cdn-icons-png.flaticon.com/512/616/616408.png"
          alt="Tier Icon"
          style={{ width: '80px', margin: '1rem auto', display: 'block', opacity: 0.7 }}
        />
      </section>

      <section id="features" style={styles.section}>
        <h2 style={styles.sectionTitle}>Leistungen / Funktionen</h2>
        <div style={styles.panelContainer}>
          <HoverPanel
            title="Lernen durch Ausprobieren"
            content="Die App motiviert Nutzer, Neues aktiv zu erleben – nicht nur Theorie, sondern direkt anwenden."
            id={1}
            hoveredPanel={hoveredPanel}
            setHoveredPanel={setHoveredPanel}
          />
          <HoverPanel
            title="Projekt an der GPB"
            content="Entstanden im Rahmen eines Schülerprojekts an der GPB-Schule. Realisiert von Daniel M."
            id={2}
            hoveredPanel={hoveredPanel}
            setHoveredPanel={setHoveredPanel}
          />
          <HoverPanel
            title="Modern & Vertrauensvoll"
            content="Minimalistisches Design, responsive und mit grundlegenden Datenschutz‑Hinweisen."
            id={3}
            hoveredPanel={hoveredPanel}
            setHoveredPanel={setHoveredPanel}
          />
        </div>
      </section>

      <section id="contact" style={styles.section}>
        <h2 style={styles.sectionTitle}>Kontakt</h2>
        <p style={styles.text}>E‑Mail: daniel@example.com</p>
        <p style={styles.text}>Telefon: 01234‑567890</p>
      </section>

      <footer style={styles.footer}>
        <p>© {new Date().getFullYear()} Try Stuff – Schülerprojekt von Daniel M.</p>
        <p><a href="#">Impressum</a> · <a href="#">Datenschutz</a></p>
      </footer>
    </main>
  );
}

function HoverPanel({ title, content, id, hoveredPanel, setHoveredPanel }) {
  const isHovered = hoveredPanel === id;

  return (
    <div
      style={{
        ...styles.panel,
        backgroundColor: isHovered ? 'rgba(220, 198, 160, 0.8)' : 'rgba(220, 198, 160, 0.5)',
        borderColor: '#BFA98A',
        cursor: 'pointer',
      }}
      onMouseEnter={() => setHoveredPanel(id)}
      onMouseLeave={() => setHoveredPanel(null)}
    >
      <div style={styles.panelTitle}>{title}</div>
      {isHovered && <div style={styles.panelContent}>{content}</div>}
    </div>
  );
}

const styles = {
  page: {
    fontFamily: "'Lato', sans-serif",
    backgroundColor: '#F9F9F9',
    color: '#3B3021',
    minHeight: '100vh',
    overflowX: 'hidden',
    padding: '1rem 2rem',
    position: 'relative',
  },
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 0',
    position: 'sticky',
    top: 0,
    backgroundColor: 'rgba(249, 249, 249, 0.95)',
    zIndex: 10,
  },
  logo: {
    fontFamily: "'Playfair Display', serif",
    fontSize: '2rem',
    color: '#2E4E1E',
  },
  menuToggle: {
    display: 'none',
  },
  menuItems: {
    display: 'flex',
    gap: '1rem',
  },
  menuLink: {
    textDecoration: 'none',
    color: '#3B3021',
    fontWeight: 'bold',
  },
  hero: {
    textAlign: 'center',
    marginTop: '4rem',
    position: 'relative',
    zIndex: 1,
  },
  title: {
    fontFamily: "'Playfair Display', serif",
    fontSize: '4rem',
    marginBottom: '1rem',
    color: '#2E4E1E',
  },
  subtitle: {
    fontSize: '1.3rem',
    marginBottom: '2rem',
    color: '#3B3021',
  },
  button: {
    backgroundColor: '#A8C686',
    color: '#3B3021',
    padding: '0.8rem 1.5rem',
    border: 'none',
    borderRadius: '5px',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
  section: {
    marginTop: '4rem',
    zIndex: 1,
    position: 'relative',
  },
  sectionTitle: {
    fontFamily: "'Playfair Display', serif",
    fontSize: '2.5rem',
    marginBottom: '1.5rem',
    textAlign: 'center',
    color: '#2E4E1E',
  },
  text: {
    maxWidth: '600px',
    margin: '0 auto',
    lineHeight: 1.6,
    color: '#3B3021',
  },
  panelContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '1rem',
    maxWidth: '700px',
    margin: '0 auto',
  },
  panel: {
    border: '1px solid #BFA98A',
    borderRadius: '8px',
    overflow: 'hidden',
    transition: 'background-color 0.3s ease',
    position: 'relative',
    padding: '1rem',
    backgroundColor: 'rgba(220, 198, 160, 0.5)',
  },
  panelTitle: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: '#2E4E1E',
  },
  panelContent: {
    marginTop: '0.5rem',
    fontSize: '1rem',
    color: '#3B3021',
  },
  circle: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    width: '200px',
    height: '200px',
    backgroundColor: '#CFE1B9',
    borderRadius: '50%',
    zIndex: 0,
    transition: 'transform 0.1s ease-out',
    opacity: 0.2,
    pointerEvents: 'none',
  },
  footer: {
    marginTop: '4rem',
    textAlign: 'center',
    fontSize: '0.9rem',
    color: '#777',
    borderTop: '1px solid #eee',
    paddingTop: '1rem',
  },
};
