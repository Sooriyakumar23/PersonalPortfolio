import React from 'react';
import { portfolioData } from '../data/portfolio';

const Skills = () => {
    const { skills: skillCategories } = portfolioData;

    const styles = {
        section: {
            padding: '6rem 2rem',
            backgroundColor: 'var(--bg-primary)',
        },
        container: {
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '3rem',
        },
        category: {
            marginBottom: '2rem',
        },
        categoryTitle: {
            fontSize: '1.5rem',
            color: 'var(--text-primary)',
            marginBottom: '1.5rem',
            borderLeft: '4px solid var(--accent-color)',
            paddingLeft: '1rem',
        },
        skillList: {
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1rem',
        },
        skillTag: {
            backgroundColor: 'var(--bg-secondary)',
            color: 'var(--text-secondary)',
            padding: '0.5rem 1rem',
            borderRadius: '8px',
            fontSize: '0.95rem',
            border: '1px solid var(--bg-accent)',
            transition: 'all 0.3s ease',
        },
    };

    return (
        <section id="skills" style={styles.section}>
            <h2 className="section-title">Skills</h2>
            <div style={styles.container}>
                {skillCategories.map((category, index) => (
                    <div key={index} style={styles.category}>
                        <h3 style={styles.categoryTitle}>{category.title}</h3>
                        <div style={styles.skillList}>
                            {category.skills.map((skill, idx) => (
                                <span
                                    key={idx}
                                    style={styles.skillTag}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.borderColor = 'var(--accent-color)';
                                        e.currentTarget.style.color = 'var(--text-primary)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.borderColor = 'var(--bg-accent)';
                                        e.currentTarget.style.color = 'var(--text-secondary)';
                                    }}
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
