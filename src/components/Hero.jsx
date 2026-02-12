import React from 'react';
import { portfolioData } from '../data/portfolio';
import profileImg from '../assets/profile.png';

const Hero = () => {
    const { greeting, name, title, subtitle, cta } = portfolioData.hero;

    const styles = {
        section: {
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden',
            padding: '8rem 2rem 4rem',
        },
        container: {
            maxWidth: '1200px',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '4rem',
            zIndex: 1,
            flexDirection: 'column-reverse', // Default to column-reverse for mobile
        },
        content: {
            flex: 1,
            textAlign: 'center', // Center text on mobile by default
            '@media (min-width: 768px)': {
                textAlign: 'left',
                alignItems: 'flex-start',
            }
        },
        imageContainer: {
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
        profileImg: {
            width: '280px',
            height: '280px',
            objectFit: 'cover',
            borderRadius: '50%',
            border: '4px solid var(--accent-color)',
            boxShadow: '0 0 40px rgba(100, 108, 255, 0.4)',
        },
        greeting: {
            color: 'var(--accent-color)',
            fontSize: '1.2rem',
            marginBottom: '1rem',
            fontWeight: '600',
            letterSpacing: '2px',
            textTransform: 'uppercase',
        },
        title: {
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
            fontWeight: '800',
            marginBottom: '1.5rem',
            lineHeight: '1.1',
            background: 'linear-gradient(to right, #fff, #a5a5a5)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
        },
        subtitle: {
            fontSize: 'clamp(1rem, 3vw, 1.25rem)',
            color: 'var(--text-secondary)',
            marginBottom: '3rem',
            maxWidth: '600px',
            margin: '0 auto 3rem', // Center on mobile
        },
        buttonGroup: {
            display: 'flex',
            gap: '1.5rem',
            justifyContent: 'center', // Center on mobile
        },
        primaryBtn: {
            padding: '1rem 2.5rem',
            backgroundColor: 'var(--accent-color)',
            color: '#fff',
            borderRadius: '50px',
            fontSize: '1rem',
            fontWeight: '600',
            transition: 'all 0.3s ease',
            boxShadow: '0 10px 30px -10px var(--accent-color)',
        },
        secondaryBtn: {
            padding: '1rem 2.5rem',
            backgroundColor: 'transparent',
            border: '2px solid var(--text-secondary)',
            color: 'var(--text-primary)',
            borderRadius: '50px',
            fontSize: '1rem',
            fontWeight: '600',
            transition: 'all 0.3s ease',
        },
        background: {
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            zIndex: 0,
            background: 'radial-gradient(circle at 70% 30%, rgba(100, 108, 255, 0.1) 0%, transparent 60%)',
        },
    };

    // Inline media query styles wrapper (simple approach for this setup)
    // Ideally, use a CSS-in-JS library or CSS modules, but logic here works for inline logic if we had a hook. 
    // For now, we'll rely on the structure and some base styles. Responsiveness logic needs CSS file or window width hook.
    // Converting to standard CSS class implementation would be cleaner given the complexity.
    // Let's stick to inline but simplify.

    return (
        <section id="hero" className="hero-section">
            <style>{`
        .hero-section {
           min-height: 100vh;
           display: flex;
           align-items: center;
           justify-content: center;
           position: relative;
           overflow: hidden;
           padding: 8rem 2rem 4rem;
        }
        .hero-container {
           max-width: 1200px;
           width: 100%;
           display: flex;
           align-items: center;
           justify-content: space-between;
           gap: 4rem;
           z-index: 1;
           flex-direction: column-reverse;
        }
        .hero-content {
           flex: 1;
           text-align: center;
        }
        .hero-image-container {
           flex: 1;
           display: flex;
           justify-content: center;
           align-items: center;
        }
        .profile-img {
           width: 280px;
           height: 280px;
           object-fit: cover;
           object-position: top;
           border-radius: 50%;
           border: 4px solid var(--accent-color);
           box-shadow: 0 0 40px rgba(100, 108, 255, 0.4);
           transition: transform 0.3s ease;
        }
        .profile-img:hover {
           transform: scale(1.05);
        }
        .hero-name {
           font-size: clamp(2.5rem, 5vw, 4rem);
           font-weight: 800;
           color: #ffffff;
           margin-bottom: 1rem;
           line-height: 1.1;
           letter-spacing: -1px;
        }
        .hero-title {
           font-size: clamp(1.5rem, 3vw, 2.5rem);
           font-weight: 700;
           margin-bottom: 2rem;
           line-height: 1.2;
           background: linear-gradient(135deg, #a78bfa 0%, #2dd4bf 100%);
           -webkit-background-clip: text;
           -webkit-text-fill-color: transparent;
           filter: drop-shadow(0 0 2em rgba(167, 139, 250, 0.2));
        }
        .hero-subtitle {
           font-size: clamp(1rem, 3vw, 1.25rem);
           color: var(--text-secondary);
           margin-bottom: 3rem;
           max-width: 600px;
           margin-left: auto;
           margin-right: auto;
        }
        .button-group {
           display: flex;
           gap: 1.5rem;
           justify-content: center;
        }
        
        @media (min-width: 900px) {
           .hero-container {
              flex-direction: row;
              text-align: left;
           }
           .hero-content {
              text-align: left;
           }
           .hero-subtitle {
              margin-left: 0;
           }
           .button-group {
              justify-content: flex-start;
           }
           .profile-img {
              width: 400px;
              height: 400px;
           }
        }
      `}</style>
            <div style={styles.background}></div>
            <div className="hero-container">
                <div className="hero-content">
                    <div style={styles.greeting}>{greeting}</div>
                    <h1 className="hero-name">{name}</h1>
                    <h2 className="hero-title">{title}</h2>
                    <p className="hero-subtitle">
                        {subtitle}
                    </p>
                    <div className="button-group">
                        <a href={cta.primary.href} style={styles.primaryBtn}>{cta.primary.text}</a>
                        <a href={cta.secondary.href} style={styles.secondaryBtn}>{cta.secondary.text}</a>
                    </div>
                </div>
                <div className="hero-image-container">
                    <img src={profileImg} alt={name} className="profile-img" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
