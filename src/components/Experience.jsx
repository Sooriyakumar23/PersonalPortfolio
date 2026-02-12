import { portfolioData } from '../data/portfolio';

const Experience = () => {
    const { experience } = portfolioData;

    const styles = {
        section: {
            padding: '6rem 2rem',
            backgroundColor: 'var(--bg-secondary)',
        },
        grid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            maxWidth: '1200px',
            margin: '0 auto',
        },
        card: {
            backgroundColor: 'var(--bg-primary)',
            padding: '2rem',
            borderRadius: '16px',
            border: '1px solid var(--bg-accent)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            cursor: 'default',
        },
        role: {
            color: 'var(--accent-color)',
            fontSize: '1.25rem',
            fontWeight: '600',
            marginBottom: '0.5rem',
        },
        company: {
            color: 'var(--text-primary)',
            fontSize: '0.9rem',
            marginBottom: '0.5rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
        period: {
            color: 'var(--text-secondary)',
            fontSize: '0.8rem',
            backgroundColor: 'var(--bg-accent)',
            padding: '0.2rem 0.6rem',
            borderRadius: '20px',
            whiteSpace: 'nowrap',
        },
        description: {
            color: 'var(--text-secondary)',
            lineHeight: '1.6',
        },
    };

    return (
        <section id="experience" style={styles.section}>
            <h2 className="section-title">Experience</h2>
            <div style={styles.grid}>
                {experience.map((exp, index) => (
                    <div
                        key={index}
                        style={styles.card}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-5px)';
                            e.currentTarget.style.boxShadow = '0 10px 30px -10px rgba(0,0,0,0.5)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = 'none';
                        }}
                    >
                        <div style={styles.role}>{exp.role}</div>
                        <div style={styles.company}>
                            {exp.company}
                            <span style={styles.period}>{exp.period}</span>
                        </div>
                        <p style={styles.description}>{exp.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
