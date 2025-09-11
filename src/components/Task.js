import React from "react";
import { useNavigate } from "react-router-dom";

const Tasks = () => {
  const tasks = [
    "JavaScript"
  ];
  const navigate = useNavigate();
  const handleClick = (task) => {
    if (task === "JavaScript") {
      navigate("/taskjs");
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
      <h2 style={{ textAlign: "center", marginBottom: "1.5rem" }}>Задачи(можно посмотреть)</h2>
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
        {tasks.map((task, index) => (
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
            onClick={() => handleClick(task)}
          >
            {task}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Tasks;