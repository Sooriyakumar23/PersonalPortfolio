import React from 'react';
import { portfolioData } from '../data/portfolio';

const Contact = () => {
    const { contact } = portfolioData;

    const styles = {
        section: {
            padding: '6rem 2rem',
            backgroundColor: 'var(--bg-primary)',
            textAlign: 'center',
        },
        container: {
            maxWidth: '800px',
            margin: '0 auto',
        },
        text: {
            color: 'var(--text-secondary)',
            fontSize: '1.2rem',
            marginBottom: '3rem',
            lineHeight: '1.6',
        },
        btn: {
            display: 'inline-block',
            padding: '1rem 3rem',
            backgroundColor: 'var(--accent-color)',
            color: '#fff',
            borderRadius: '50px',
            fontSize: '1.2rem',
            fontWeight: '600',
            boxShadow: '0 10px 30px -10px var(--accent-color)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            position: 'relative',
            zIndex: 1,
        },
        socialLinks: {
            marginTop: '4rem',
            display: 'flex',
            justifyContent: 'center',
            gap: '2rem',
        },
        link: {
            color: 'var(--text-secondary)',
            fontSize: '1.5rem',
            transition: 'color 0.3s ease',
        }
    };

    return (
        <section id="contact" style={styles.section}>
            <h2 className="section-title">{contact.title}</h2>
            <div style={styles.container}>
                <p style={styles.text}>
                    {contact.description}
                </p>
                <a href={`mailto:${contact.email}`}
                    style={styles.btn}
                    onClick={(e) => {
                        window.location.href = `mailto:${contact.email}`;
                        const gmailCompose = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(contact.email)}`;
                        setTimeout(() => {
                            window.open(gmailCompose, "_blank", "noopener,noreferrer");
                        }, 300);
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-3px)';
                        e.currentTarget.style.boxShadow = '0 15px 35px -10px var(--accent-color)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 10px 30px -10px var(--accent-color)';
                    }}
                >
                    {contact.actionText}
                </a>
            </div>
        </section>
    );
};

export default Contact;
