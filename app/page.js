'use client';

import { useRef, useEffect, useState } from 'react';

export default function Home() {
  const circleRef = useRef(null);
  const [activePanel, setActivePanel] = useState(null);

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

  const togglePanel = (panel) => {
    setActivePanel(activePanel === panel ? null : panel);
  };

  return (
    <main style={styles.page}>
      <div ref={circleRef} style={styles.circle}></div>

      <header style={styles.hero}>
        <h1 style={styles.title}>Try Stuff</h1>
        <p style={styles.subtitle}>Learning by Doing – ein Projekt der GPB Schule von Daniel M.</p>
        <button style={styles.button} onClick={() => document.getElementById('info').scrollIntoView({ behavior: 'smooth' })}>
          Mehr erfahren
        </button>
      </header>

      <section id="info" style={styles.section}>
        <h2 style={styles.sectionTitle}>Was ist Try Stuff?</h2>

        <div style={styles.panelContainer}>
          <Panel
            title="Lernen durch Ausprobieren"
            content="Die App motiviert Nutzer, Neues aktiv zu erleben – nicht nur Theorie, sondern direkt anwenden."
            isOpen={activePanel === 1}
            onClick={() => togglePanel(1)}
          />
          <Panel
            title="Projekt an der GPB"
            content="Entstanden im Rahmen eines Schülerprojekts an der GPB-Schule. Realisiert von Daniel M."
            isOpen={activePanel === 2}
            onClick={() => togglePanel(2)}
          />
          <Panel
            title="Modern & DSGVO-konform"
            content="Die Seite ist minimalistisch, responsive und erfüllt grundlegende Datenschutzanforderungen."
            isOpen={activePanel === 3}
            onClick={() => togglePanel(3)}
          />
        </div>
      </section>

      <footer style={styles.footer}>
        <p>© {new Date().getFullYear()} Try Stuff – Schülerprojekt von Daniel M.</p>
        <p><a href="#">Impressum</a> · <a href="#">Datenschutz</a></p>
      </footer>
    </main>
  );
}

function Panel({ title, content, isOpen, onClick }) {
  return (
    <div style={styles.panel}>
      <button onClick={onClick} style={styles.panelButton}>
        {title}
      </button>
      {isOpen && <div style={styles.panelContent}>{content}</div>}
    </div>
  );
}

const styles = {
  page: {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#F9F9F9',
    color: '#3B3021',
    minHeight: '100vh',
    overflowX: 'hidden',
    padding: '2rem',
    position: 'relative',
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
  hero: {
    textAlign: 'center',
    marginTop: '4rem',
    zIndex: 1,
    position: 'relative',
  },
  title: {
    fontSize: '3rem',
    marginBottom: '1rem',
    color: '#2E4E1E',
  },
  subtitle: {
    fontSize: '1.2rem',
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
    fontSize: '2rem',
    marginBottom: '1.5rem',
    textAlign: 'center',
    color: '#2E4E1E',
  },
  panelContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    maxWidth: '600px',
    margin: '0 auto',
  },
  panel: {
    border: '1px solid #DCC6A0',
    borderRadius: '8px',
    backgroundColor: '#FFFFFF',
    overflow: 'hidden',
  },
  panelButton: {
    width: '100%',
    textAlign: 'left',
    padding: '1rem',
    fontSize: '1rem',
    backgroundColor: '#DCC6A0',
    border: 'none',
    cursor: 'pointer',
    fontWeight: 'bold',
    color: '#3B3021',
  },
  panelContent: {
    padding: '1rem',
    backgroundColor: '#FAF8F3',
    color: '#3B3021',
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
