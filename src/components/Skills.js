import React from "react";
import { useNavigate } from "react-router-dom";

const Skills = () => {
  const skills = [
    "JavaScript",
    "PHP",
    "React",
    "VUE",
    "Angular",
    "Node.js",
    "CSS",
    "HTML",
    "MySQL",
    "Laravel",
    "Docker",
    "GitHub",
    "SEO-копирайтинг",
    "Figma",
  ];
  const navigate = useNavigate();
  const handleClick = (skill) => {
    if (skill === "JavaScript") {
      navigate("/javascript");
    }
    if (skill === "PHP") {
      navigate("/articlephp");
    }
  };
  return (
    <section
      style={{
        background: "#f0f4f8",
        padding: "2rem",
        borderRadius: "8px",
        maxWidth: "800px",
        margin: "2rem auto",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "1.5rem" }}>Навыки</h2>
      <ul
        style={{
          listStyle: "none",
          padding: 0,
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        {skills.map((skill, index) => (
          <li
            key={index}
            style={{
              background: "#4a90e2",
              color: "white",
              padding: "0.5rem 1rem",
              borderRadius: "20px",
              cursor: "pointer",
              transition: "transform 0.2s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            onClick={() => handleClick(skill)}
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;