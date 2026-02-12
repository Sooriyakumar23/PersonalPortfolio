export const portfolioData = {
    header: {
        logo: {
            text: 'Dev',
            highlight: 'Portfolio',
        },
        navLinks: [
            { name: 'About', href: '#hero' },
            { name: 'Experience', href: '#experience' },
            { name: 'Skills', href: '#skills' },
            { name: 'Education', href: '#education' },
            { name: 'Contact', href: '#contact' },
        ],
    },
    hero: {
        greeting: "Hello, I'm",
        name: "Sooriyakumar Sittampalam",
        title: "AI & Data Science Enthusiast | Backend Developer",
        subtitle: "Transforming data into actionable insights and building robust, scalable backend systems. Dedicated to solving complex problems with AI and modern cloud technologies.",
        cta: {
            primary: { text: "Contact Me", href: "#contact" },
            secondary: { text: "My Work", href: "#experience" },
        },
    },
    experience: [
        {
            role: 'Lead Engineer',
            company: 'Cogntix (Pvt) Ltd',
            period: '2024 December - Present',
            description: 'Backend development, Cloud Infrastructure, System Design and Managing Projects Technically',
        },
        {
            role: 'Senior Software Engineer',
            company: 'Feasto (Pvt) Ltd',
            period: '2024 March - 2024 December',
            description: 'Managing the Backend Development and the Cloud Infrastructure',
        },
        {
            role: 'Software Engineer',
            company: 'Feasto (Pvt) Ltd',
            period: '2023 September - 2024 February',
            description: 'Worked as a Backend developer for the Web platform called Feasto',
        },
        {
            role: 'Software Engineer',
            company: 'Avtrasoft (Pvt) Ltd',
            period: '2022 May - 2023 June',
            description: 'Engaged in Backend development specifically Spring Framework and Report Creations',
        },
        {
            role: 'R & D Engineer Intern',
            company: 'Swiss Ranks (Pvt) Ltd',
            period: '2020 October - 2021 March',
            description: 'Conducted Feasibility Research and Practical Analysis',
        },
    ],
    skills: [
        {
            title: 'AI & Data Science',
            skills: ['Data Analysis', 'Data Preprocessing', 'Data Visualization', 'Feature Engineering', 'ML and DL Algorithms'],
        },
        {
            title: 'Programming Languages',
            skills: ['Python', 'Java', 'JavaScript', 'Node.js', 'React.js', 'HTML5/CSS3'],
        },
        {
            title: 'Databases',
            skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'OracleSQL'],
        },
        {
            title: 'Cloud & Deployment',
            skills: ['Linux', 'Docker', 'AWS', 'Azure', 'Hostinger', 'Git', 'CI/CD'],
        },
    ],
    education: [
        {
            degree: 'Master of Science in Data Science and AI',
            institution: 'University of Moratuwa',
            period: '2026 - Reading',
            description: 'Currently Reading First Trimester...'
        },
        {
            degree: 'Bachelor of Science (Hons.) in Electronic and Telecommunication Engineering',
            institution: 'University of Moratuwa',
            period: '2017 - 2022',
            description: 'Second Upper Class (CGPA = 3.67/4.20)'
        },
        {
            degree: 'High School',
            institution: 'J / Jaffna Hindu College',
            period: '2008 - 2016',
            description: 'O/L Results: 8A,B. A/L Results: 2A,B [District=28th, and Island=272nd].'
        }
    ],
    contact: {
        title: "Get In Touch",
        description: "I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!",
        email: "sisooriyakumar@gmail.com",
        actionText: "Say Hello",
    },
    footer: {
        text: "© 2026 Sooriyakumar Sittampalam. All rights reserved.",
    }
};
