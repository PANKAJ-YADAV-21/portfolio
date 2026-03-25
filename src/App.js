import React, { useState, useEffect, useRef } from 'react';
import profileImg from './profile.jpg';

/* ─── DATA ─────────────────────────────────────────────────── */
const NAV = ['About', 'Skills', 'Projects', 'Training', 'Certificates', 'Achievements', 'Education', 'Contact'];

const SKILLS = {
  Languages: ['C++', 'JavaScript', 'C', 'PHP'],
  Frameworks: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
  'Tools / Platforms': ['MySQL', 'MongoDB', 'HTML', 'CSS'],
  'Soft Skills': ['Problem-Solving', 'Team Player', 'Adaptability'],
};

const PROJECTS = [
  {
    title: 'Project-Cost-Timeline Predictor',
    date: 'Dec 2025',
    github: 'https://github.com/PANKAJ-YADAV-21/portfolio',
    tech: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js'],
    points: [
      'Engineered a web-based system to predict project cost and timelines, achieving ~20–25% improvement in planning accuracy vs manual estimation.',
      'Implemented an interactive input workflow that reduced estimation errors by ~30% through structured data validation.',
      'Automated cost and timeline calculations, cutting manual effort by ~40% and enabling faster decision-making.',
      'Optimized backend processing and data handling to improve response time by ~25%, enhancing system efficiency.',
    ],
  },
  {
    title: 'Petrofy – Digital Patrolling Billing System',
    date: 'Apr 2025',
    github: 'https://github.com/PANKAJ-YADAV-21/portfolio',
    tech: ['HTML', 'CSS', 'JavaScript', 'MySQL', 'PHP'],
    points: [
      'Designed and implemented a digital billing system with real-time, dynamic data handling using MySQL for instant updates.',
      'Implemented secure and scalable REST APIs supporting CRUD operations, user authentication, and advanced data tasks.',
      'Created a responsive, user-friendly interface with dynamic pagination for large dataset management.',
      'Integrated complete MERN-stack technologies to build and deploy a fully functional end-to-end web application.',
    ],
  },
];

const TRAINING = [
  {
    title: 'C++ Programming: Mastering Data Structures & Algorithms',
    org: 'LPU',
    date: 'Jul 2025',
    points: [
      'Completed intensive training on DS&A fundamentals using C++.',
      'Strengthened problem-solving by practicing LeetCode coding challenges.',
      'Implemented core structures: Arrays, Linked Lists, Stacks, and Queues.',
      'Developed a Hostel Automation System using file handling and OOP.',
    ],
  },
];

const CERTIFICATES = [
  { title: 'Cloud Computing Certificate', issuer: 'NPTEL', date: 'Oct 2025' },
  { title: 'Build Generative AI Apps with No-Code Tools', issuer: 'INFOSYS', date: 'Aug 2025' },
  { title: 'ChatGPT-4 Prompt Engineering: GenerativeAI & LLM', issuer: 'INFOSYS', date: 'Aug 2025' },
  { title: 'Computational Theory: Language Principles & Finite Automata', issuer: 'INFOSYS', date: 'Aug 2025' },
  { title: 'Packet Switching Networks and Algorithms', issuer: 'COURSERA', date: 'Nov 2024' },
];

const ACHIEVEMENTS = [
  'Solved 50+ coding problems on LeetCode, sharpening problem-solving and algorithmic thinking skills.',
  'Recognized for completing training in Generative AI, demonstrating understanding of modern AI concepts and tools.',
  'Gained recognition for completing "Communication in the 21st Century Workplace" from UC Irvine (Coursera).',
  'Secured a Top 2% rank in NPTEL examination, demonstrating strong academic performance.',
];

const EDUCATION = [
  {
    degree: 'B.Tech – Computer Science & Engineering',
    school: 'Lovely Professional University',
    location: 'Phagwara, Punjab',
    period: 'Aug 2023 – Present',
    score: 'CGPA: 6.89',
  },
  {
    degree: 'Intermediate (PCM)',
    school: 'RPS Public School',
    location: 'Rewari, Haryana',
    period: 'Apr 2022 – Mar 2023',
    score: '72.4%',
  },
  {
    degree: 'Matriculation',
    school: 'RPS Public School',
    location: 'Rewari, Haryana',
    period: 'Apr 2020 – Mar 2021',
    score: '79%',
  },
];

/* ─── HOOKS ─────────────────────────────────────────────────── */
function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

/* ─── COMPONENTS ─────────────────────────────────────────────── */

function Navbar({ active }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);
  const s = {
    nav: {
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      padding: '0 2rem',
      background: scrolled ? 'rgba(8,8,16,0.92)' : 'transparent',
      backdropFilter: scrolled ? 'blur(16px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
      transition: 'all 0.3s ease',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      height: '64px',
    },
    logo: {
      fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.3rem',
      background: 'linear-gradient(135deg, #6c63ff, #43e8b0)',
      WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
      cursor: 'pointer', textDecoration: 'none',
    },
    links: {
      display: 'flex', gap: '0.2rem', listStyle: 'none',
      '@media(max-width:768px)': { display: 'none' },
    },
    link: (name) => ({
      padding: '0.4rem 0.75rem',
      borderRadius: '6px',
      fontSize: '0.82rem', fontWeight: 500, letterSpacing: '0.02em',
      color: active === name.toLowerCase() ? '#fff' : 'var(--muted)',
      background: active === name.toLowerCase() ? 'rgba(108,99,255,0.18)' : 'transparent',
      cursor: 'pointer', textDecoration: 'none',
      transition: 'all 0.2s',
    }),
    burger: {
      display: 'none', flexDirection: 'column', gap: '5px', cursor: 'pointer',
      padding: '4px',
    },
    bar: { width: '22px', height: '2px', background: 'var(--text)', borderRadius: '2px' },
  };
  return (
    <nav style={s.nav}>
      <a href="#hero" style={s.logo}>PY</a>
      <ul style={{ display: 'flex', gap: '0.2rem', listStyle: 'none' }}>
        {NAV.map(n => (
          <li key={n} style={{ display: window.innerWidth < 768 ? 'none' : 'block' }}>
            <a href={`#${n.toLowerCase()}`} style={s.link(n)}>{n}</a>
          </li>
        ))}
      </ul>
      <a href="mailto:raopankajyadav21@gmail.com" style={{
        padding: '0.45rem 1.1rem', borderRadius: '8px', fontSize: '0.82rem', fontWeight: 600,
        background: 'linear-gradient(135deg, #6c63ff, #43e8b0)',
        color: '#fff', textDecoration: 'none', letterSpacing: '0.03em',
      }}>Hire Me</a>
    </nav>
  );
}

function Hero() {
  return (
    <section id="hero" style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
      position: 'relative', overflow: 'hidden', padding: '6rem 2rem 4rem',
    }}>
      {/* Background blobs */}
      <div style={{
        position: 'absolute', top: '15%', left: '5%', width: '420px', height: '420px',
        borderRadius: '50%', background: 'radial-gradient(circle, rgba(108,99,255,0.18) 0%, transparent 70%)',
        filter: 'blur(40px)', animation: 'float 7s ease-in-out infinite',
      }} />
      <div style={{
        position: 'absolute', bottom: '10%', right: '8%', width: '300px', height: '300px',
        borderRadius: '50%', background: 'radial-gradient(circle, rgba(67,232,176,0.15) 0%, transparent 70%)',
        filter: 'blur(40px)', animation: 'float 9s ease-in-out infinite reverse',
      }} />
      <div style={{
        position: 'absolute', top: '40%', right: '20%', width: '200px', height: '200px',
        borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,101,132,0.12) 0%, transparent 70%)',
        filter: 'blur(30px)', animation: 'float 6s ease-in-out infinite',
      }} />

      {/* Grid overlay */}
      <div style={{
        position: 'absolute', inset: 0, opacity: 0.03,
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }} />

      <div style={{ maxWidth: '800px', width: '100%', textAlign: 'center', position: 'relative', zIndex: 1 }}>
        {/* Avatar with profile image */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2.5rem' }}>
          <div style={{ position: 'relative' }}>
            <div style={{
              position: 'absolute', inset: '-8px', borderRadius: '50%',
              background: 'linear-gradient(135deg, #6c63ff, #43e8b0, #ff6584)',
              animation: 'spin-slow 6s linear infinite',
            }} />
            <img 
              src={profileImg} 
              alt="Pankaj Yadav"
              style={{
                position: 'relative', width: '110px', height: '110px', borderRadius: '50%',
                border: '4px solid var(--bg)',
                objectFit: 'cover',
                display: 'block',
              }}
            />
          </div>
        </div>

        <div style={{ animation: 'fadeUp 0.7s ease both' }}>
          <p style={{ color: 'var(--accent3)', fontSize: '0.9rem', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1rem' }}>
            Full Stack Developer
          </p>
          <h1 style={{
            fontFamily: 'var(--font-display)', fontWeight: 800,
            fontSize: 'clamp(2.8rem, 7vw, 5.5rem)', lineHeight: 1.08,
            marginBottom: '1.5rem',
          }}>
            Hi, I'm{' '}
            <span style={{
              background: 'linear-gradient(135deg, #6c63ff 0%, #43e8b0 50%, #ff6584 100%)',
              backgroundSize: '200% 200%',
              animation: 'gradient-shift 4s ease infinite',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            }}>Pankaj Yadav</span>
          </h1>
          <p style={{
            color: 'var(--muted)', fontSize: '1.1rem', maxWidth: '560px', margin: '0 auto 2.5rem',
            lineHeight: 1.7,
          }}>
            Crafting scalable web applications with modern technologies. Passionate about clean code,
            problem-solving, and building impactful digital experiences.
          </p>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3rem' }}>
            <a href="#projects" style={{
              padding: '0.75rem 2rem', borderRadius: '10px', fontWeight: 600, fontSize: '0.95rem',
              background: 'linear-gradient(135deg, #6c63ff, #43e8b0)',
              color: '#fff', textDecoration: 'none', letterSpacing: '0.02em',
              boxShadow: '0 8px 24px rgba(108,99,255,0.35)',
              transition: 'transform 0.2s, box-shadow 0.2s',
            }}
              onMouseEnter={e => { e.target.style.transform = 'translateY(-2px)'; e.target.style.boxShadow = '0 12px 32px rgba(108,99,255,0.5)'; }}
              onMouseLeave={e => { e.target.style.transform = ''; e.target.style.boxShadow = '0 8px 24px rgba(108,99,255,0.35)'; }}
            >View Projects</a>
            <a href="mailto:raopankajyadav21@gmail.com" style={{
              padding: '0.75rem 2rem', borderRadius: '10px', fontWeight: 600, fontSize: '0.95rem',
              border: '1px solid rgba(255,255,255,0.12)', color: 'var(--text)', textDecoration: 'none',
              transition: 'border-color 0.2s, background 0.2s',
            }}
              onMouseEnter={e => { e.target.style.borderColor = 'rgba(108,99,255,0.5)'; e.target.style.background = 'rgba(108,99,255,0.08)'; }}
              onMouseLeave={e => { e.target.style.borderColor = 'rgba(255,255,255,0.12)'; e.target.style.background = ''; }}
            >Get In Touch</a>
          </div>

          {/* Social links */}
          <div style={{ display: 'flex', gap: '1.2rem', justifyContent: 'center' }}>
            {[
              { label: 'GitHub', href: 'https://github.com/PANKAJ-YADAV-21/portfolio', icon: 'GH' },
              { label: 'LinkedIn', href: 'https://www.linkedin.com/in/pankaj-yadav-py21', icon: 'LI' },
              { label: 'LeetCode', href: 'https://leetcode.com', icon: 'LC' },
            ].map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer" style={{
                width: '42px', height: '42px', borderRadius: '10px',
                border: '1px solid rgba(255,255,255,0.1)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--muted)', textDecoration: 'none', fontSize: '0.7rem', fontWeight: 700,
                transition: 'all 0.2s',
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)'; e.currentTarget.style.background = 'rgba(108,99,255,0.1)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = 'var(--muted)'; e.currentTarget.style.background = ''; }}
              >{s.icon}</a>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px',
        color: 'var(--muted)', fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase',
        animation: 'fadeIn 1.5s ease 1s both',
      }}>
        <span>Scroll</span>
        <div style={{
          width: '1px', height: '40px',
          background: 'linear-gradient(to bottom, var(--muted), transparent)',
        }} />
      </div>
    </section>
  );
}

function SectionTitle({ label, title }) {
  return (
    <div style={{ marginBottom: '3rem' }}>
      <p style={{ color: 'var(--accent3)', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>{label}</p>
      <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', lineHeight: 1.1 }}>{title}</h2>
    </div>
  );
}

function About() {
  const [ref, visible] = useInView();
  return (
    <section id="about" ref={ref} style={{ padding: '6rem 2rem', maxWidth: '1100px', margin: '0 auto' }}>
      <div style={{ opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(30px)', transition: 'all 0.7s ease' }}>
        <SectionTitle label="Who I Am" title="About Me" />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', alignItems: 'center' }}>
          <div style={{ lineHeight: 1.9, color: 'var(--muted)', fontSize: '1rem' }}>
            <p style={{ marginBottom: '1.2rem' }}>
              I'm <strong style={{ color: 'var(--text)' }}>Pankaj Yadav</strong>, a Computer Science & Engineering student at Lovely Professional University, building full-stack web applications with modern tools and a strong focus on clean, efficient code.
            </p>
            <p style={{ marginBottom: '1.2rem' }}>
              I have hands-on experience with the MERN stack and enjoy designing systems that are both performant and user-friendly. My background spans front-end interfaces, back-end APIs, and relational databases.
            </p>
            <p>
              Beyond coding, I'm an active problem-solver on LeetCode and hold certifications from NPTEL, Infosys, and Coursera — always learning, always growing.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              { label: 'Email', value: 'raopankajyadav21@gmail.com' },
              { label: 'Phone', value: '+91 89017 05642' },
              { label: 'University', value: 'LPU, Phagwara' },
              { label: 'CGPA', value: '6.89 / 10' },
              { label: 'LeetCode', value: '50+ Problems Solved' },
              { label: 'NPTEL Rank', value: 'Top 2%' },
            ].map(item => (
              <div key={item.label} style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '0.7rem 1rem', borderRadius: '10px',
                background: 'var(--surface)', border: '1px solid var(--border)',
              }}>
                <span style={{ color: 'var(--muted)', fontSize: '0.85rem' }}>{item.label}</span>
                <span style={{ color: 'var(--text)', fontSize: '0.9rem', fontWeight: 500 }}>{item.value}</span>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ position: 'relative' }}>
              <div style={{
                position: 'absolute', inset: '-8px', borderRadius: '20px',
                background: 'linear-gradient(135deg, #6c63ff, #43e8b0, #ff6584)',
                opacity: 0.8,
              }} />
              <img 
                src={profileImg} 
                alt="Pankaj Yadav"
                style={{
                  position: 'relative', width: '100%', maxWidth: '300px', borderRadius: '16px',
                  border: '4px solid var(--bg)',
                  objectFit: 'cover',
                  display: 'block',
                  boxShadow: '0 20px 60px rgba(108,99,255,0.2)',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  const [ref, visible] = useInView();
  const colors = ['#6c63ff', '#43e8b0', '#ff6584', '#ffa94d'];
  return (
    <section id="skills" ref={ref} style={{ padding: '6rem 2rem', background: 'var(--bg2)' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(30px)', transition: 'all 0.7s ease' }}>
        <SectionTitle label="What I Know" title="Skills & Technologies" />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
          {Object.entries(SKILLS).map(([cat, items], ci) => (
            <div key={cat} style={{
              padding: '1.8rem', borderRadius: '16px',
              background: 'var(--surface)', border: '1px solid var(--border)',
              position: 'relative', overflow: 'hidden',
            }}>
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: '3px',
                background: `linear-gradient(90deg, ${colors[ci]}, transparent)`,
              }} />
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1rem', marginBottom: '1.2rem', color: colors[ci] }}>{cat}</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {items.map(skill => (
                  <span key={skill} style={{
                    padding: '0.3rem 0.8rem', borderRadius: '6px', fontSize: '0.82rem', fontWeight: 500,
                    background: `${colors[ci]}18`, color: colors[ci],
                    border: `1px solid ${colors[ci]}30`,
                  }}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const [ref, visible] = useInView();
  return (
    <section id="projects" ref={ref} style={{ padding: '6rem 2rem', maxWidth: '1100px', margin: '0 auto' }}>
      <div style={{ opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(30px)', transition: 'all 0.7s ease' }}>
        <SectionTitle label="What I've Built" title="Projects" />
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {PROJECTS.map((p, i) => (
            <div key={p.title} style={{
              padding: '2rem', borderRadius: '20px',
              background: 'var(--surface)', border: '1px solid var(--border)',
              position: 'relative', overflow: 'hidden',
              transition: 'border-color 0.3s, transform 0.3s',
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(108,99,255,0.4)'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = ''; }}
            >
              <div style={{
                position: 'absolute', top: 0, left: 0, width: '4px', height: '100%',
                background: i === 0 ? 'linear-gradient(to bottom, #6c63ff, #43e8b0)' : 'linear-gradient(to bottom, #ff6584, #ffa94d)',
              }} />
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.2rem' }}>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.2rem', marginBottom: '0.3rem' }}>{p.title}</h3>
                  <span style={{ color: 'var(--muted)', fontSize: '0.82rem' }}>{p.date}</span>
                </div>
                <a href={p.github} target="_blank" rel="noreferrer" style={{
                  padding: '0.4rem 1rem', borderRadius: '8px', fontSize: '0.8rem', fontWeight: 600,
                  border: '1px solid rgba(255,255,255,0.12)', color: 'var(--text)', textDecoration: 'none',
                  display: 'flex', alignItems: 'center', gap: '0.4rem',
                  transition: 'all 0.2s',
                }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(108,99,255,0.1)'; e.currentTarget.style.borderColor = 'var(--accent)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = ''; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; }}
                >↗ GitHub</a>
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '1.5rem' }}>
                {p.points.map((pt, j) => (
                  <li key={j} style={{ display: 'flex', gap: '0.6rem', color: 'var(--muted)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                    <span style={{ color: i === 0 ? '#6c63ff' : '#ff6584', marginTop: '0.2rem', flexShrink: 0 }}>▸</span>
                    {pt}
                  </li>
                ))}
              </ul>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {p.tech.map(t => (
                  <span key={t} style={{
                    padding: '0.25rem 0.7rem', borderRadius: '5px', fontSize: '0.75rem', fontWeight: 600,
                    background: 'rgba(255,255,255,0.05)', color: 'var(--muted)', letterSpacing: '0.03em',
                  }}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Training() {
  const [ref, visible] = useInView();
  return (
    <section id="training" ref={ref} style={{ padding: '6rem 2rem', background: 'var(--bg2)' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(30px)', transition: 'all 0.7s ease' }}>
        <SectionTitle label="Hands-on Learning" title="Training" />
        {TRAINING.map(t => (
          <div key={t.title} style={{
            padding: '2rem', borderRadius: '20px',
            background: 'var(--surface)', border: '1px solid var(--border)',
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.2rem' }}>
              <div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.2rem' }}>{t.title}</h3>
                <span style={{ color: 'var(--accent)', fontSize: '0.85rem', fontWeight: 500 }}>{t.org}</span>
              </div>
              <span style={{
                padding: '0.3rem 0.8rem', borderRadius: '8px', fontSize: '0.8rem',
                background: 'rgba(108,99,255,0.12)', color: 'var(--accent)',
                alignSelf: 'flex-start',
              }}>{t.date}</span>
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {t.points.map((p, i) => (
                <li key={i} style={{ display: 'flex', gap: '0.6rem', color: 'var(--muted)', fontSize: '0.9rem' }}>
                  <span style={{ color: 'var(--accent3)', flexShrink: 0 }}>▸</span>{p}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

function Certificates() {
  const [ref, visible] = useInView();
  const issuerColors = { NPTEL: '#f97316', INFOSYS: '#3b82f6', COURSERA: '#6366f1' };
  return (
    <section id="certificates" ref={ref} style={{ padding: '6rem 2rem', maxWidth: '1100px', margin: '0 auto' }}>
      <div style={{ opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(30px)', transition: 'all 0.7s ease' }}>
        <SectionTitle label="Credentials" title="Certificates" />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1rem' }}>
          {CERTIFICATES.map((c, i) => (
            <div key={i} style={{
              padding: '1.4rem', borderRadius: '14px',
              background: 'var(--surface)', border: '1px solid var(--border)',
              display: 'flex', flexDirection: 'column', gap: '0.8rem',
              transition: 'border-color 0.2s, transform 0.2s',
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = `${issuerColors[c.issuer] || '#6c63ff'}60`; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = ''; }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <span style={{
                  padding: '0.2rem 0.6rem', borderRadius: '5px', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.08em',
                  background: `${issuerColors[c.issuer] || '#6c63ff'}20`,
                  color: issuerColors[c.issuer] || '#6c63ff',
                }}>{c.issuer}</span>
                <span style={{ color: 'var(--muted)', fontSize: '0.78rem', marginLeft: 'auto' }}>{c.date}</span>
              </div>
              <p style={{ color: 'var(--text)', fontSize: '0.9rem', fontWeight: 500, lineHeight: 1.5 }}>{c.title}</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <span style={{ fontSize: '0.8rem' }}>🏆</span>
                <span style={{ color: 'var(--muted)', fontSize: '0.78rem' }}>Certified</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Achievements() {
  const [ref, visible] = useInView();
  return (
    <section id="achievements" ref={ref} style={{ padding: '6rem 2rem', background: 'var(--bg2)' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(30px)', transition: 'all 0.7s ease' }}>
        <SectionTitle label="Milestones" title="Achievements" />
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {ACHIEVEMENTS.map((a, i) => (
            <div key={i} style={{
              padding: '1.4rem 1.6rem', borderRadius: '14px',
              background: 'var(--surface)', border: '1px solid var(--border)',
              display: 'flex', gap: '1rem', alignItems: 'flex-start',
              transition: 'border-color 0.2s',
            }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(67,232,176,0.3)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
            >
              <span style={{
                width: '32px', height: '32px', borderRadius: '8px', flexShrink: 0,
                background: 'rgba(67,232,176,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1rem',
              }}>{['💻', '🤖', '🎓', '🥇'][i]}</span>
              <p style={{ color: 'var(--muted)', lineHeight: 1.7, fontSize: '0.95rem' }}>{a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Education() {
  const [ref, visible] = useInView();
  return (
    <section id="education" ref={ref} style={{ padding: '6rem 2rem', maxWidth: '1100px', margin: '0 auto' }}>
      <div style={{ opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(30px)', transition: 'all 0.7s ease' }}>
        <SectionTitle label="Academic Background" title="Education" />
        <div style={{ position: 'relative', paddingLeft: '2rem' }}>
          <div style={{ position: 'absolute', left: 0, top: '12px', bottom: '12px', width: '2px', background: 'linear-gradient(to bottom, #6c63ff, #43e8b0, rgba(67,232,176,0))' }} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {EDUCATION.map((e, i) => (
              <div key={i} style={{ position: 'relative' }}>
                <div style={{
                  position: 'absolute', left: '-2.45rem', top: '1.1rem', width: '12px', height: '12px',
                  borderRadius: '50%', background: i === 0 ? '#6c63ff' : 'var(--muted)',
                  border: '2px solid var(--bg2)',
                  boxShadow: i === 0 ? '0 0 12px rgba(108,99,255,0.5)' : 'none',
                }} />
                <div style={{
                  padding: '1.5rem', borderRadius: '16px',
                  background: 'var(--surface)', border: '1px solid var(--border)',
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.5rem' }}>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1rem' }}>{e.degree}</h3>
                    <span style={{
                      padding: '0.2rem 0.7rem', borderRadius: '6px', fontSize: '0.78rem', fontWeight: 600,
                      background: 'rgba(108,99,255,0.12)', color: 'var(--accent)',
                    }}>{e.score}</span>
                  </div>
                  <p style={{ color: 'var(--accent3)', fontWeight: 500, fontSize: '0.9rem', marginBottom: '0.3rem' }}>{e.school}</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--muted)', fontSize: '0.82rem' }}>
                    <span>{e.location}</span>
                    <span>{e.period}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [ref, visible] = useInView();
  return (
    <section id="contact" ref={ref} style={{ padding: '6rem 2rem', background: 'var(--bg2)' }}>
      <div style={{
        maxWidth: '640px', margin: '0 auto', textAlign: 'center',
        opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(30px)', transition: 'all 0.7s ease',
      }}>
        <SectionTitle label="Let's Talk" title="Get In Touch" />
        <p style={{ color: 'var(--muted)', lineHeight: 1.8, marginBottom: '2.5rem', fontSize: '1rem' }}>
          Whether you have a project idea, job opportunity, or just want to say hi — my inbox is always open!
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '2.5rem' }}>
          {[
            { icon: '✉️', label: 'Email', value: 'raopankajyadav21@gmail.com', href: 'mailto:raopankajyadav21@gmail.com' },
            { icon: '📱', label: 'Phone', value: '+91 89017 05642', href: 'tel:+918901705642' },
            { icon: '💼', label: 'LinkedIn', value: 'pankaj-yadav-py21', href: 'https://www.linkedin.com/in/pankaj-yadav-py21' },
            { icon: '🐙', label: 'GitHub', value: 'PANKAJ-YADAV-21', href: 'https://github.com/PANKAJ-YADAV-21/portfolio' },
          ].map(item => (
            <a key={item.label} href={item.href} target="_blank" rel="noreferrer" style={{
              padding: '1.2rem', borderRadius: '14px',
              background: 'var(--surface)', border: '1px solid var(--border)',
              textDecoration: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem',
              transition: 'all 0.2s',
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(108,99,255,0.4)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = ''; }}
            >
              <span style={{ fontSize: '1.4rem' }}>{item.icon}</span>
              <span style={{ color: 'var(--muted)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{item.label}</span>
              <span style={{ color: 'var(--text)', fontSize: '0.82rem', fontWeight: 500, wordBreak: 'break-all' }}>{item.value}</span>
            </a>
          ))}
        </div>
        <a href="mailto:raopankajyadav21@gmail.com" style={{
          display: 'inline-block', padding: '0.85rem 2.5rem', borderRadius: '12px',
          background: 'linear-gradient(135deg, #6c63ff, #43e8b0)',
          color: '#fff', fontWeight: 600, fontSize: '1rem', textDecoration: 'none',
          boxShadow: '0 8px 24px rgba(108,99,255,0.35)',
          transition: 'transform 0.2s, box-shadow 0.2s',
        }}
          onMouseEnter={e => { e.target.style.transform = 'translateY(-2px)'; e.target.style.boxShadow = '0 12px 32px rgba(108,99,255,0.5)'; }}
          onMouseLeave={e => { e.target.style.transform = ''; e.target.style.boxShadow = '0 8px 24px rgba(108,99,255,0.35)'; }}
        >Say Hello 👋</a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{
      padding: '2rem', textAlign: 'center',
      borderTop: '1px solid var(--border)', color: 'var(--muted)', fontSize: '0.85rem',
    }}>
      <p>Designed & Built by <strong style={{ color: 'var(--text)' }}>Pankaj Yadav</strong> · {new Date().getFullYear()}</p>
    </footer>
  );
}

/* ─── APP ─────────────────────────────────────────────────────── */
export default function App() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) setActiveSection(e.target.id); });
    }, { threshold: 0.4 });
    sections.forEach(s => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  return (
    <div>
      <Navbar active={activeSection} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Training />
      <Certificates />
      <Achievements />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}
