import React, { useState, useEffect } from 'react';
import { Linkedin, Mail, MapPin, Phone, ChevronDown, Code, Briefcase, Award, BookOpen, Terminal, Database, Cloud, Shield } from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'experience', 'skills', 'projects', 'education', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const skills = {
    languages: ['C++', 'C#', 'Java', 'Kotlin', 'Python', 'TypeScript', 'JavaScript', 'PHP'],
    databases: ['MySQL', 'PostgreSQL', 'MongoDB', 'Cassandra DB'],
    frameworks: ['.NET Core', 'Spring Boot', 'NestJS', 'Angular', 'React'],
    devops: ['Docker', 'Kubernetes', 'Ansible', 'Terraform', 'GitHub Actions', 'AWS'],
    ai: ['Genetic Programming', 'Hugging Face', 'Fine-tuning Models'],
    security: ['Ethical Hacking', 'Penetration Testing', 'Kali Linux']
  };

  const experience = [
    {
      title: 'Software Engineering Intern',
      company: 'National Lotteries Commission',
      period: 'Jan 2024 - Current',
      achievements: [
        'Led digital modernization project',
        'Built ticketing system and Regulatory & Compliance system',
        'Led software development team and met project deadlines',
        'Deployed systems to organization server'
      ]
    },
    {
      title: 'Software Engineering Contract Worker',
      company: 'Southern Cross Solutions',
      period: 'Dec 2022 - March 2023',
      achievements: [
        'Converted user stories into technical requirements',
        'Designed and developed full-stack software',
        'Conducted software testing and UAT',
        'Managed deployment and delivery timelines'
      ]
    }
  ];

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#09090b', color: '#fafafa', fontFamily: 'system-ui, -apple-system, sans-serif' }}>

    {/* Navigation */}
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 50,
      transition: 'all 0.3s',
      backgroundColor: scrolled ? 'rgba(9, 9, 11, 0.9)' : '#09090b',
      backdropFilter: scrolled ? 'blur(16px)' : 'none',
      borderBottom: scrolled ? '1px solid #27272a' : 'none'
    }}>
      <div style={{
        maxWidth: '80rem',
        margin: '0 auto',
        padding: '1rem 1.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        {/* Update this div - Changed from MM to your custom logo */}
        <div className="font-display gradient-text" style={{ 
          fontSize: '1.5rem', 
          fontWeight: 900,
          letterSpacing: '2px',
          background: 'linear-gradient(135deg, #00ff88 0%, #00d4ff 50%, #7b2ff7 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>
          MM
        </div>
        <div style={{ display: 'flex', gap: '2rem' }}>
          {['Home', 'About', 'Experience', 'Skills', 'Projects', 'Education', 'Contact'].map(item => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className={`nav-link font-mono ${activeSection === item.toLowerCase() ? 'active' : ''}`}
              style={{
                fontSize: '0.875rem',
                letterSpacing: '0.05em',
                color: activeSection === item.toLowerCase() ? '#10b981' : '#a1a1aa'
              }}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </nav>

      {/* Hero Section */}
      <section id="home" className="grid-pattern" style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        paddingTop: '5rem'
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, #09090b, #09090b, #18181b)'
        }}></div>
        
        {/* Animated background elements */}
        <div className="floating" style={{
          position: 'absolute',
          top: '5rem',
          left: '2.5rem',
          width: '18rem',
          height: '18rem',
          background: 'rgba(16, 185, 129, 0.1)',
          borderRadius: '50%',
          filter: 'blur(60px)'
        }}></div>
        <div className="floating" style={{
          position: 'absolute',
          bottom: '5rem',
          right: '2.5rem',
          width: '24rem',
          height: '24rem',
          background: 'rgba(6, 182, 212, 0.1)',
          borderRadius: '50%',
          filter: 'blur(60px)',
          animationDelay: '2s'
        }}></div>
        
        <div style={{
          position: 'relative',
          zIndex: 10,
          maxWidth: '80rem',
          margin: '0 auto',
          padding: '0 1.5rem',
          textAlign: 'center'
        }}>
          <div className="animate-in stagger-1">
            <h1 className="font-display gradient-text" style={{
              fontSize: 'clamp(3rem, 8vw, 6rem)',
              fontWeight: 900,
              marginBottom: '1.5rem'
            }}>
              MATJERE MATSEBA
            </h1>
          </div>
          <div className="animate-in stagger-2">
            <p className="font-mono" style={{
              fontSize: 'clamp(1.25rem, 3vw, 1.5rem)',
              color: '#10b981',
              marginBottom: '1rem'
            }}>
              Full Stack Software Engineer
            </p>
          </div>
          <div className="animate-in stagger-3">
            <p style={{
              fontSize: 'clamp(1rem, 2vw, 1.25rem)',
              color: '#a1a1aa',
              maxWidth: '48rem',
              margin: '0 auto 2rem',
              lineHeight: 1.6
            }}>
              BSc Hons Computer Science graduate specializing in AI, Data Mining, and Cyber Security.
              Building innovative solutions at the intersection of technology and business.
            </p>
          </div>
          <div className="animate-in stagger-4" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="mailto:Matjere274@gmail.com" className="gradient-border glow" style={{ textDecoration: 'none' }}>
              <div className="btn-primary" style={{ color: '#fafafa' }}>
                GET IN TOUCH
              </div>
            </a>
            <button onClick={() => scrollToSection('experience')} className="btn-secondary">
              VIEW WORK
            </button>
          </div>
          
          <button 
            onClick={() => scrollToSection('about')}
            className="bounce"
            style={{
              position: 'absolute',
              bottom: '2.5rem',
              left: '50%',
              transform: 'translateX(-50%)',
              color: '#10b981',
              background: 'none',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" style={{ padding: '8rem 1.5rem', backgroundColor: '#18181b' }}>
        <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
          <h2 className="font-display gradient-text" style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '4rem' }}>ABOUT ME</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
            <div>
              <p style={{ fontSize: '1.125rem', color: '#d4d4d8', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                I am a driven and inquisitive post-graduate alumnus from the University of Pretoria with a passion for solving complex problems through innovative technology solutions.
              </p>
              <p style={{ fontSize: '1.125rem', color: '#d4d4d8', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                My academic journey and professional experience have equipped me with unique problem-solving capabilities, allowing me to assess real-world challenges and develop cutting-edge solutions.
              </p>
              <p style={{ fontSize: '1.125rem', color: '#d4d4d8', lineHeight: 1.6 }}>
                My areas of expertise include <span style={{ color: '#10b981', fontWeight: 700 }}>Artificial Intelligence</span>, <span style={{ color: '#06b6d4', fontWeight: 700 }}>Data Warehousing & Mining</span>, and <span style={{ color: '#a855f7', fontWeight: 700 }}>Cyber Security</span>.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div className="skill-card" style={{ backgroundColor: 'rgba(39, 39, 42, 0.5)', padding: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <Code className="tech-icon" style={{ color: '#10b981', flexShrink: 0 }} size={32} />
                  <div>
                    <h3 className="font-display" style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem' }}>Full Stack Development</h3>
                    <p style={{ color: '#a1a1aa' }}>Expert in building scalable applications with modern frameworks and cloud infrastructure</p>
                  </div>
                </div>
              </div>
              <div className="skill-card" style={{ backgroundColor: 'rgba(39, 39, 42, 0.5)', padding: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <Terminal className="tech-icon" style={{ color: '#06b6d4', flexShrink: 0 }} size={32} />
                  <div>
                    <h3 className="font-display" style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem' }}>AI & Machine Learning</h3>
                    <p style={{ color: '#a1a1aa' }}>Specialized in evolutionary algorithms, model fine-tuning, and intelligent systems</p>
                  </div>
                </div>
              </div>
              <div className="skill-card" style={{ backgroundColor: 'rgba(39, 39, 42, 0.5)', padding: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <Shield className="tech-icon" style={{ color: '#a855f7', flexShrink: 0 }} size={32} />
                  <div>
                    <h3 className="font-display" style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem' }}>Cybersecurity</h3>
                    <p style={{ color: '#a1a1aa' }}>Proficient in ethical hacking, penetration testing, and security best practices</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="grid-pattern" style={{ position: 'relative', padding: '8rem 1.5rem', backgroundColor: '#09090b' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.3 }}></div>
        <div style={{ maxWidth: '72rem', margin: '0 auto', position: 'relative', zIndex: 10 }}>
          <h2 className="font-display gradient-text" style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '4rem' }}>EXPERIENCE</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {experience.map((job, index) => (
              <div key={index} className="gradient-border">
                <div style={{ padding: '2rem', backgroundColor: '#18181b', borderRadius: '0.5rem', transition: 'background-color 0.3s' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1rem' }}>
                    <div>
                      <h3 className="font-display" style={{ fontSize: '1.5rem', fontWeight: 700, color: '#10b981', marginBottom: '0.5rem' }}>{job.title}</h3>
                      <p className="font-mono" style={{ fontSize: '1.125rem', color: '#d4d4d8' }}>{job.company}</p>
                    </div>
                    <p className="font-mono" style={{ color: '#06b6d4' }}>{job.period}</p>
                  </div>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '1.5rem', listStyle: 'none' }}>
                    {job.achievements.map((achievement, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: '#d4d4d8' }}>
                        <div style={{ width: '0.5rem', height: '0.5rem', backgroundColor: '#10b981', borderRadius: '50%', marginTop: '0.5rem', flexShrink: 0 }}></div>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" style={{ padding: '8rem 1.5rem', backgroundColor: '#18181b' }}>
        <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
          <h2 className="font-display gradient-text" style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '4rem' }}>TECH STACK</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            <div className="skill-card" style={{ backgroundColor: 'rgba(39, 39, 42, 0.5)', padding: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <Code className="tech-icon" style={{ color: '#10b981' }} size={28} />
                <h3 className="font-display" style={{ fontSize: '1.25rem', fontWeight: 700 }}>Languages</h3>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {skills.languages.map(skill => (
                  <span key={skill} style={{ padding: '0.25rem 0.75rem', backgroundColor: 'rgba(63, 63, 70, 0.5)', borderRadius: '9999px', fontSize: '0.875rem' }} className="font-mono">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="skill-card" style={{ backgroundColor: 'rgba(39, 39, 42, 0.5)', padding: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <Database className="tech-icon" style={{ color: '#06b6d4' }} size={28} />
                <h3 className="font-display" style={{ fontSize: '1.25rem', fontWeight: 700 }}>Databases</h3>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {skills.databases.map(skill => (
                  <span key={skill} style={{ padding: '0.25rem 0.75rem', backgroundColor: 'rgba(63, 63, 70, 0.5)', borderRadius: '9999px', fontSize: '0.875rem' }} className="font-mono">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="skill-card" style={{ backgroundColor: 'rgba(39, 39, 42, 0.5)', padding: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <Terminal className="tech-icon" style={{ color: '#a855f7' }} size={28} />
                <h3 className="font-display" style={{ fontSize: '1.25rem', fontWeight: 700 }}>Frameworks</h3>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {skills.frameworks.map(skill => (
                  <span key={skill} style={{ padding: '0.25rem 0.75rem', backgroundColor: 'rgba(63, 63, 70, 0.5)', borderRadius: '9999px', fontSize: '0.875rem' }} className="font-mono">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="skill-card" style={{ backgroundColor: 'rgba(39, 39, 42, 0.5)', padding: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <Cloud className="tech-icon" style={{ color: '#3b82f6' }} size={28} />
                <h3 className="font-display" style={{ fontSize: '1.25rem', fontWeight: 700 }}>DevOps & Cloud</h3>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {skills.devops.map(skill => (
                  <span key={skill} style={{ padding: '0.25rem 0.75rem', backgroundColor: 'rgba(63, 63, 70, 0.5)', borderRadius: '9999px', fontSize: '0.875rem' }} className="font-mono">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="skill-card" style={{ backgroundColor: 'rgba(39, 39, 42, 0.5)', padding: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <Briefcase className="tech-icon" style={{ color: '#10b981' }} size={28} />
                <h3 className="font-display" style={{ fontSize: '1.25rem', fontWeight: 700 }}>AI & ML</h3>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {skills.ai.map(skill => (
                  <span key={skill} style={{ padding: '0.25rem 0.75rem', backgroundColor: 'rgba(63, 63, 70, 0.5)', borderRadius: '9999px', fontSize: '0.875rem' }} className="font-mono">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="skill-card" style={{ backgroundColor: 'rgba(39, 39, 42, 0.5)', padding: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <Shield className="tech-icon" style={{ color: '#ef4444' }} size={28} />
                <h3 className="font-display" style={{ fontSize: '1.25rem', fontWeight: 700 }}>Security</h3>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {skills.security.map(skill => (
                  <span key={skill} style={{ padding: '0.25rem 0.75rem', backgroundColor: 'rgba(63, 63, 70, 0.5)', borderRadius: '9999px', fontSize: '0.875rem' }} className="font-mono">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Add this right after the Skills section and before the Education section */}

{/* Projects Section */}
<section id="projects" className="grid-pattern" style={{ position: 'relative', padding: '8rem 1.5rem', backgroundColor: '#09090b' }}>
  <div style={{ position: 'absolute', inset: 0, opacity: 0.3 }}></div>
  <div style={{ maxWidth: '72rem', margin: '0 auto', position: 'relative', zIndex: 10 }}>
    <h2 className="font-display gradient-text" style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '4rem' }}>PROJECTS</h2>
    
    <div className="gradient-border" style={{ marginBottom: '3rem' }}>
      <div style={{ 
        backgroundColor: '#18181b', 
        borderRadius: '0.5rem',
        overflow: 'hidden',
        transition: 'transform 0.3s ease'
      }}>
        {/* Project Header */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(6, 182, 212, 0.1), rgba(168, 85, 247, 0.1))',
          padding: '2rem',
          borderBottom: '1px solid #27272a'
        }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <h3 className="font-display" style={{ fontSize: '1.875rem', fontWeight: 700, color: '#10b981', marginBottom: '0.5rem' }}>
                Phishing Detection System
              </h3>
              <p className="font-mono" style={{ color: '#a1a1aa', fontSize: '1rem' }}>
                AI-Powered Email Security Platform
              </p>
            </div>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <span style={{
                padding: '0.25rem 0.75rem',
                backgroundColor: 'rgba(16, 185, 129, 0.2)',
                color: '#10b981',
                borderRadius: '9999px',
                fontSize: '0.875rem',
                fontWeight: 600
              }}>
                AI/ML
              </span>
              <span style={{
                padding: '0.25rem 0.75rem',
                backgroundColor: 'rgba(6, 182, 212, 0.2)',
                color: '#06b6d4',
                borderRadius: '9999px',
                fontSize: '0.875rem',
                fontWeight: 600
              }}>
                Security
              </span>
              <span style={{
                padding: '0.25rem 0.75rem',
                backgroundColor: 'rgba(168, 85, 247, 0.2)',
                color: '#a855f7',
                borderRadius: '9999px',
                fontSize: '0.875rem',
                fontWeight: 600
              }}>
                Full Stack
              </span>
            </div>
          </div>
        </div>

        {/* Project Content */}
        <div style={{ padding: '2rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
            <div>
              <h4 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fafafa', marginBottom: '1rem' }}>Project Overview</h4>
              <p style={{ color: '#d4d4d8', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                A sophisticated phishing detection system that employs a transparency stack architecture to empower users 
                in identifying and defending against phishing emails. The platform uses machine learning algorithms to 
                analyze email content, headers, and metadata for potential threats.
              </p>
              
              <h4 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fafafa', marginBottom: '1rem' }}>Key Features</h4>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: '#d4d4d8' }}>
                  <div style={{ width: '0.5rem', height: '0.5rem', backgroundColor: '#10b981', borderRadius: '50%', marginTop: '0.5rem', flexShrink: 0 }}></div>
                  <span>Real-time email analysis using NLP and ML models</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: '#d4d4d8' }}>
                  <div style={{ width: '0.5rem', height: '0.5rem', backgroundColor: '#06b6d4', borderRadius: '50%', marginTop: '0.5rem', flexShrink: 0 }}></div>
                  <span>Transparency stack showing detection rationale and confidence scores</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: '#d4d4d8' }}>
                  <div style={{ width: '0.5rem', height: '0.5rem', backgroundColor: '#a855f7', borderRadius: '50%', marginTop: '0.5rem', flexShrink: 0 }}></div>
                  <span>Educational insights explaining why emails are flagged as phishing attempts</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: '#d4d4d8' }}>
                  <div style={{ width: '0.5rem', height: '0.5rem', backgroundColor: '#3b82f6', borderRadius: '50%', marginTop: '0.5rem', flexShrink: 0 }}></div>
                  <span>User-friendly dashboard with detailed threat reports</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fafafa', marginBottom: '1rem' }}>Tech Stack</h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                <span style={{ padding: '0.25rem 0.75rem', backgroundColor: 'rgba(63, 63, 70, 0.5)', borderRadius: '9999px', fontSize: '0.875rem' }} className="font-mono">
                  Python
                </span>
                <span style={{ padding: '0.25rem 0.75rem', backgroundColor: 'rgba(63, 63, 70, 0.5)', borderRadius: '9999px', fontSize: '0.875rem' }} className="font-mono">
                  Flask
                </span>
                <span style={{ padding: '0.25rem 0.75rem', backgroundColor: 'rgba(63, 63, 70, 0.5)', borderRadius: '9999px', fontSize: '0.875rem' }} className="font-mono">
                  Scikit-learn
                </span>
                <span style={{ padding: '0.25rem 0.75rem', backgroundColor: 'rgba(63, 63, 70, 0.5)', borderRadius: '9999px', fontSize: '0.875rem' }} className="font-mono">
                  React
                </span>
                <span style={{ padding: '0.25rem 0.75rem', backgroundColor: 'rgba(63, 63, 70, 0.5)', borderRadius: '9999px', fontSize: '0.875rem' }} className="font-mono">
                  MongoDB
                </span>
                <span style={{ padding: '0.25rem 0.75rem', backgroundColor: 'rgba(63, 63, 70, 0.5)', borderRadius: '9999px', fontSize: '0.875rem' }} className="font-mono">
                  Docker
                </span>
                <span style={{ padding: '0.25rem 0.75rem', backgroundColor: 'rgba(63, 63, 70, 0.5)', borderRadius: '9999px', fontSize: '0.875rem' }} className="font-mono">
                  Render
                </span>
              </div>

              <h4 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fafafa', marginBottom: '1rem' }}>Project Impact</h4>
              <p style={{ color: '#d4d4d8', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                This system bridges the gap between technical threat detection and user understanding by providing 
                transparent explanations of phishing indicators. It educates users on cybersecurity best practices 
                while protecting them from potential attacks.
              </p>
            </div>
          </div>

          <div style={{ 
            display: 'flex', 
            gap: '1rem', 
            flexWrap: 'wrap',
            borderTop: '1px solid #27272a',
            paddingTop: '1.5rem'
          }}>
            <a 
              href="https://phishing-detection-br53.onrender.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="gradient-border glow"
              style={{ 
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              <div className="btn-primary" style={{ color: '#fafafa' }}>
                <Terminal size={20} />
                View Live Demo
              </div>
            </a>
            
            <button 
              className="btn-secondary"
              style={{ 
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
              onClick={() => {
                // You can add GitHub repository link here if available
                alert('GitHub repository coming soon!');
              }}
            >
              <Code size={20} />
              View Source Code
            </button>
          </div>
        </div>
      </div>
    </div>

    {/* Coming Soon Project Placeholder */}
    <div style={{ textAlign: 'center', marginTop: '3rem' }}>
      <p className="font-mono" style={{ color: '#71717a', fontSize: '1.125rem' }}>
        More projects coming soon...
      </p>
    </div>
  </div>
</section>

      {/* Education Section */}
      <section id="education" className="grid-pattern" style={{ position: 'relative', padding: '8rem 1.5rem', backgroundColor: '#09090b' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.3 }}></div>
        <div style={{ maxWidth: '72rem', margin: '0 auto', position: 'relative', zIndex: 10 }}>
          <h2 className="font-display gradient-text" style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '4rem' }}>EDUCATION</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div className="gradient-border">
              <div style={{ padding: '2rem', backgroundColor: '#18181b', borderRadius: '0.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1rem' }}>
                  <BookOpen style={{ color: '#10b981', flexShrink: 0 }} size={32} />
                  <div style={{ flex: 1 }}>
                    <h3 className="font-display" style={{ fontSize: '1.5rem', fontWeight: 700, color: '#10b981', marginBottom: '0.5rem' }}>BSc Honours in Computer Science</h3>
                    <p className="font-mono" style={{ fontSize: '1.125rem', color: '#d4d4d8', marginBottom: '0.5rem' }}>University of Pretoria</p>
                    <p className="font-mono" style={{ color: '#06b6d4', marginBottom: '1rem' }}>Feb 2025 - Nov 2025</p>
                    <p style={{ color: '#d4d4d8' }}>Majors: Research, Artificial Intelligence, Computer Security, Data Mining</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="gradient-border">
              <div style={{ padding: '2rem', backgroundColor: '#18181b', borderRadius: '0.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1rem' }}>
                  <BookOpen style={{ color: '#06b6d4', flexShrink: 0 }} size={32} />
                  <div style={{ flex: 1 }}>
                    <h3 className="font-display" style={{ fontSize: '1.5rem', fontWeight: 700, color: '#06b6d4', marginBottom: '0.5rem' }}>BSc Information and Knowledge Systems</h3>
                    <p className="font-mono" style={{ fontSize: '1.125rem', color: '#d4d4d8', marginBottom: '0.5rem' }}>University of Pretoria</p>
                    <p className="font-mono" style={{ color: '#10b981', marginBottom: '1rem' }}>2021 - June 2024</p>
                    <p style={{ color: '#d4d4d8' }}>Majors: Business Management, Marketing</p>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ marginTop: '3rem' }}>
              <h3 className="font-display" style={{ fontSize: '1.875rem', fontWeight: 700, marginBottom: '1.5rem', color: '#a855f7' }}>ACHIEVEMENTS</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                <div className="skill-card" style={{ backgroundColor: 'rgba(39, 39, 42, 0.5)', padding: '1.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <Award style={{ color: '#10b981', flexShrink: 0 }} size={24} />
                    <div>
                      <p style={{ fontWeight: 700, marginBottom: '0.25rem' }}>Software Development Project Leader</p>
                      <p style={{ fontSize: '0.875rem', color: '#a1a1aa' }}>National Lotteries Commission, 2024</p>
                    </div>
                  </div>
                </div>
                <div className="skill-card" style={{ backgroundColor: 'rgba(39, 39, 42, 0.5)', padding: '1.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <Award style={{ color: '#06b6d4', flexShrink: 0 }} size={24} />
                    <div>
                      <p style={{ fontWeight: 700, marginBottom: '0.25rem' }}>Project Leader - Software Modelling</p>
                      <p style={{ fontSize: '0.875rem', color: '#a1a1aa' }}>University of Pretoria, 2022</p>
                    </div>
                  </div>
                </div>
                <div className="skill-card" style={{ backgroundColor: 'rgba(39, 39, 42, 0.5)', padding: '1.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <Award style={{ color: '#a855f7', flexShrink: 0 }} size={24} />
                    <div>
                      <p style={{ fontWeight: 700, marginBottom: '0.25rem' }}>Subject Winner Award</p>
                      <p style={{ fontSize: '0.875rem', color: '#a1a1aa' }}>Top achiever in Computer Applications Technology, 2020</p>
                    </div>
                  </div>
                </div>
                <div className="skill-card" style={{ backgroundColor: 'rgba(39, 39, 42, 0.5)', padding: '1.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <Award style={{ color: '#eab308', flexShrink: 0 }} size={24} />
                    <div>
                      <p style={{ fontWeight: 700, marginBottom: '0.25rem' }}>Chess Champion Award</p>
                      <p style={{ fontSize: '0.875rem', color: '#a1a1aa' }}>Top 10 player in Limpopo province (U/12), 2013</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{ padding: '8rem 1.5rem', backgroundColor: '#18181b' }}>
        <div style={{ maxWidth: '64rem', margin: '0 auto', textAlign: 'center' }}>
          <h2 className="font-display gradient-text" style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '2rem' }}>LET'S CONNECT</h2>
          <p style={{ fontSize: '1.25rem', color: '#a1a1aa', marginBottom: '3rem', maxWidth: '42rem', margin: '0 auto 3rem' }}>
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
            <a href="mailto:Matjere274@gmail.com" className="skill-card" style={{ backgroundColor: 'rgba(39, 39, 42, 0.5)', padding: '1.5rem', borderRadius: '0.5rem', textDecoration: 'none', color: 'inherit', transition: 'background-color 0.3s' }}>
              <Mail style={{ color: '#10b981', margin: '0 auto 0.75rem' }} size={32} />
              <p className="font-mono" style={{ fontSize: '0.875rem', color: '#a1a1aa' }}>Email</p>
              <p style={{ color: '#e4e4e7', marginTop: '0.25rem', wordBreak: 'break-all' }}>Matjere274@gmail.com</p>
            </a>
            
            <a href="tel:+27813264454" className="skill-card" style={{ backgroundColor: 'rgba(39, 39, 42, 0.5)', padding: '1.5rem', borderRadius: '0.5rem', textDecoration: 'none', color: 'inherit', transition: 'background-color 0.3s' }}>
              <Phone style={{ color: '#06b6d4', margin: '0 auto 0.75rem' }} size={32} />
              <p className="font-mono" style={{ fontSize: '0.875rem', color: '#a1a1aa' }}>Phone</p>
              <p style={{ color: '#e4e4e7', marginTop: '0.25rem' }}>+27 81 326 4454</p>
            </a>
            
            <div className="skill-card" style={{ backgroundColor: 'rgba(39, 39, 42, 0.5)', padding: '1.5rem', borderRadius: '0.5rem' }}>
              <MapPin style={{ color: '#a855f7', margin: '0 auto 0.75rem' }} size={32} />
              <p className="font-mono" style={{ fontSize: '0.875rem', color: '#a1a1aa' }}>Location</p>
              <p style={{ color: '#e4e4e7', marginTop: '0.25rem' }}>Hatfield, Pretoria</p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
            {/* Updated LinkedIn link with correct URL */}
            <a href="https://www.linkedin.com/in/matjere-matseba-071412228" target="_blank" rel="noopener noreferrer" className="gradient-border glow" style={{ textDecoration: 'none' }}>
              <div style={{ padding: '1rem', transition: 'background-color 0.3s', color: '#fafafa' }}>
                <Linkedin size={28} />
              </div>
            </a>
            <a href="mailto:Matjere274@gmail.com" className="gradient-border glow" style={{ textDecoration: 'none' }}>
              <div style={{ padding: '1rem', transition: 'background-color 0.3s', color: '#fafafa' }}>
                <Mail size={28} />
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '2rem 1.5rem', backgroundColor: '#09090b', borderTop: '1px solid #27272a' }}>
        <div style={{ maxWidth: '72rem', margin: '0 auto', textAlign: 'center' }}>
          <p className="font-mono" style={{ color: '#71717a' }}>
            © 2026 Matjere Matseba. Built with React & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}