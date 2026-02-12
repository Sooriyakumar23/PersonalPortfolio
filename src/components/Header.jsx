import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolio';

const Header = () => {
    const { logo, navLinks } = portfolioData.header;
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const styles = {
        header: {
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            zIndex: 1000,
            transition: 'all 0.3s ease',
            backgroundColor: isScrolled ? 'rgba(10, 10, 10, 0.95)' : 'transparent',
            backdropFilter: isScrolled ? 'blur(10px)' : 'none',
            padding: isScrolled ? '1rem 0' : '2rem 0',
            boxShadow: isScrolled ? '0 2px 20px rgba(0,0,0,0.5)' : 'none',
        },
        container: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 2rem',
        },
        logo: {
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: 'var(--text-primary)',
            letterSpacing: '-0.5px',
        },
        accent: {
            color: 'var(--accent-color)',
        },
        nav: {
            display: 'flex',
            gap: '2rem',
        },
        link: {
            color: 'var(--text-secondary)',
            fontSize: '0.95rem',
            fontWeight: '500',
        },
    };

    return (
        <header style={styles.header}>
            <div style={styles.container}>
                <div style={styles.logo}>
                    {logo.text}<span style={styles.accent}>{logo.highlight}</span>.
                </div>
                <nav style={styles.nav}>
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href} style={styles.link}>
                            {link.name}
                        </a>
                    ))}
                </nav>
            </div>
        </header>
    );
};

export default Header;
