import React from 'react';

const Skills = () => {
  const skills = ['JavaScript', 'PHP', 'React', 'VUE', 'Angular', 'Node.js', 'CSS', 'HTML', 'MySQL', 'Laravel', 'Docker', 'GitHub', 'SEO-копирайтинг', 'Figma'];

  const sectionStyle = {
    background: '#f0f4f8',
    padding: '2rem',
    borderRadius: '8px',
    maxWidth: '1000px',
    margin: '2rem auto',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  };

  const titleStyle = {
    textAlign: 'center',
    color: '#333',
    marginBottom: '1.5rem',
    fontSize: '1.8rem',
    fontWeight: '600',
  };

  const listStyle = {
    listStyle: 'none',
    padding: 0,
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    gap: '1rem',
  };

  const itemStyle = {
    background: '#4a90e2',
    color: 'white',
    padding: '0.5rem 1rem',
    borderRadius: '20px',
    fontWeight: '500',
    boxShadow: '0 2px 6px rgba(74, 144, 226, 0.4)',
    transition: 'transform 0.2s ease',
    cursor: 'default',
  };

  return (
    <section id="skills" style={sectionStyle}>
      <h2 style={titleStyle}>Навыки!</h2>
      <ul style={listStyle}>
        {skills.map((skill, index) => (
          <li
            key={index}
            style={itemStyle}
            onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.1)')}
            onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;