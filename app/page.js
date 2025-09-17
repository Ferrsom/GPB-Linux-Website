'use client';

import { useEffect, useRef } from 'react';

export default function Home() {
  const circleRef = useRef(null);

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
    <main style={styles.main}>
      <div style={styles.header}>
        <h1>GPB Schülerprojekt</h1>
        <p>Dies ist eine einfache interaktive Webseite als Teil eines Studentenprojekts der GPB-Schule.</p>
      </div>
      <div ref={circleRef} style={styles.circle}></div>
    </main>
  );
}

const styles = {
  main: {
    backgroundColor: '#0d1b2a',
    color: '#ffffff',
    width: '100vw',
    height: '100vh',
    position: 'relative',
    overflow: 'hidden',
    fontFamily: 'Arial, sans-serif',
    padding: '2rem',
  },
  header: {
    position: 'absolute',
    top: '2rem',
    left: '2rem',
    zIndex: 2,
  },
  circle: {
    width: '150px',
    height: '150px',
    backgroundColor: '#1b263b',
    borderRadius: '50%',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    transition: 'transform 0.1s ease-out',
    boxShadow: '0 0 30px rgba(255, 255, 255, 0.1)',
  },
};
