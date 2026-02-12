import React from 'react';
import { portfolioData } from '../data/portfolio';

const Footer = () => {
    const { footer } = portfolioData;

    const styles = {
        footer: {
            backgroundColor: 'var(--bg-secondary)',
            padding: '2rem',
            textAlign: 'center',
            color: 'var(--text-secondary)',
            fontSize: '0.9rem',
            borderTop: '1px solid var(--bg-accent)',
        }
    };

    return (
        <footer style={styles.footer}>
            <p>{footer.text}</p>
        </footer>
    );
};

export default Footer;
