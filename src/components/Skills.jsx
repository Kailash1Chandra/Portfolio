import React from "react";

function Skills() {
  return (
    <>
      <section
        className="skills-section"
        id="skills"
        style={skillsSectionStyle}
      >
        <h2 className="section-title" style={sectionTitleStyle}>
          My Skills
        </h2>
        <div className="skills-container" style={skillsContainerStyle}>
          <div className="skill-card" style={skillCardStyle}>
            <div
              className="skill-icon-container"
              style={skillIconContainerStyle}
            >
              <img
                src="Imges/html.jpg"
                alt="HTML Icon"
                style={skillIconStyle}
              />
            </div>
            <p className="skill-name" style={skillNameStyle}>
              HTML
            </p>
          </div>

          <div className="skill-card" style={skillCardStyle}>
            <div
              className="skill-icon-container"
              style={skillIconContainerStyle}
            >
              <img src="Imges/css.jpg" alt="CSS Icon" style={skillIconStyle} />
            </div>
            <p className="skill-name" style={skillNameStyle}>
              CSS
            </p>
          </div>

          <div className="skill-card" style={skillCardStyle}>
            <div
              className="skill-icon-container"
              style={skillIconContainerStyle}
            >
              <img
                src="Imges/js.jpg"
                alt="JavaScript Icon"
                style={skillIconStyle}
              />
            </div>
            <p className="skill-name" style={skillNameStyle}>
              JavaScript
            </p>
          </div>

          <div className="skill-card" style={skillCardStyle}>
            <div
              className="skill-icon-container"
              style={skillIconContainerStyle}
            >
              <img
                src="Imges/react.jpg"
                alt="React Icon"
                style={skillIconStyle}
              />
            </div>
            <p className="skill-name" style={skillNameStyle}>
              React
            </p>
          </div>

          <div className="skill-card" style={skillCardStyle}>
            <div
              className="skill-icon-container"
              style={skillIconContainerStyle}
            >
              <img
                src="Imges/java.jpg"
                alt="Java Icon"
                style={skillIconStyle}
              />
            </div>
            <p className="skill-name" style={skillNameStyle}>
              Java
            </p>
          </div>

          <div className="skill-card" style={skillCardStyle}>
            <div
              className="skill-icon-container"
              style={skillIconContainerStyle}
            >
              <img
                src="Imges/spring boot.jpg"
                alt="Spring Boot Icon"
                style={skillIconStyle}
              />
            </div>
            <p className="skill-name" style={skillNameStyle}>
              Spring Boot
            </p>
          </div>

          <div className="skill-card" style={skillCardStyle}>
            <div
              className="skill-icon-container"
              style={skillIconContainerStyle}
            >
              <img src="Imges/git.jpg" alt="Git Icon" style={skillIconStyle} />
            </div>
            <p className="skill-name" style={skillNameStyle}>
              Git
            </p>
          </div>

          <div className="skill-card" style={skillCardStyle}>
            <div
              className="skill-icon-container"
              style={skillIconContainerStyle}
            >
              <img
                src="Imges/mongo.jpg"
                alt="Docker Icon"
                style={skillIconStyle}
              />
            </div>
            <p className="skill-name" style={skillNameStyle}>
              Mongo DB
            </p>
          </div>

          {/* If you add more skills, they will wrap onto the next row */}
        </div>
      </section>
    </>
  );
}

// Inline CSS styles
const skillsSectionStyle = {
  padding: "40px 20px",
  textAlign: "center",
  backgroundColor: "black",
};

const sectionTitleStyle = {
  fontSize: "2.5em",
  fontWeight: "bold",
  marginBottom: "30px",
  color: "white",
};

const skillsContainerStyle = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: "20px",
};

const skillCardStyle = {
  backgroundColor: "#f0f0f0",
  borderRadius: "8px",
  padding: "20px",
  width: "150px",
  textAlign: "center",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
};

const skillIconContainerStyle = {
  backgroundColor: "black",
  borderRadius: "50%",
  width: "60px",
  height: "60px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: "0 auto 10px",
};

const skillIconStyle = {
  maxWidth: "40px",
  maxHeight: "40px",
};

const skillNameStyle = {
  fontSize: "1.1em",
  color: "#555",
  marginTop: "0",
};

export default Skills;
