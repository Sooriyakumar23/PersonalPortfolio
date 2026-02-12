import React from 'react';
import { portfolioData } from '../data/portfolio';

const Education = () => {
    const { education } = portfolioData;

    const styles = {
        section: {
            padding: '6rem 2rem',
            backgroundColor: 'var(--bg-secondary)',
        },
        container: {
            maxWidth: '1000px',
            margin: '0 auto',
        },
        item: {
            marginBottom: '3rem',
            borderLeft: '4px solid var(--accent-color)',
            paddingLeft: '2rem',
            position: 'relative',
        },
        degree: {
            fontSize: '1.5rem',
            color: 'var(--text-primary)',
            marginBottom: '0.5rem',
            fontWeight: '600',
        },
        institution: {
            fontSize: '1.2rem',
            color: 'var(--text-secondary)',
            marginBottom: '0.5rem',
        },
        period: {
            fontSize: '0.9rem',
            color: 'var(--accent-color)',
            marginBottom: '1rem',
            display: 'block',
        },
        description: {
            color: 'var(--text-secondary)',
            lineHeight: '1.6',
        }
    };

    return (
        <section id="education" style={styles.section}>
            <h2 className="section-title">Education</h2>
            <div style={styles.container}>
                {education.map((edu, index) => (
                    <div key={index} style={styles.item}>
                        <div style={styles.degree}>{edu.degree}</div>
                        <div style={styles.institution}>{edu.institution}</div>
                        <span style={styles.period}>{edu.period}</span>
                        <p style={styles.description}>{edu.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Education;
