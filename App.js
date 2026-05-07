import { useState, useEffect } from 'react';

function Header({ name, title }) {
  return (
    <div style={{ backgroundColor: '#2c3e50', color: 'white', padding: '30px', textAlign: 'center' }}>
      <h1>{name}</h1>
      <p>{title}</p>
    </div>
  );
}

function Skills({ skills }) {
  return (
    <div style={{ padding: '20px' }}>
      <h2>My Skills</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

function Projects({ projects }) {
  return (
    <div style={{ padding: '20px', backgroundColor: '#f0f8ff' }}>
      <h2>My Projects</h2>
      {projects.map((project, index) => (
        <div key={index} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px', borderRadius: '5px' }}>
          <h3>{project.name}</h3>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  );
}

function Contact() {
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  function handleSend() {
    if (message !== "") {
      setSent(true);
    }
  }

  return (
    <div style={{ padding: '20px' }}>
      <h2>Contact Me</h2>
      {sent ? (
        <p style={{ color: 'green' }}>Message sent! Thank you!</p>
      ) : (
        <div>
          <input
            type="text"
            placeholder="Type your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            style={{ padding: '10px', width: '300px', marginRight: '10px' }}
          />
          <button
            onClick={handleSend}
            style={{ padding: '10px 20px', backgroundColor: '#2980b9', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
          >
            Send
          </button>
        </div>
      )}
    </div>
  );
}

function App() {
  const skills = ["HTML", "CSS", "JavaScript", "React", "Git & GitHub"];

  const projects = [
    { name: "Calculator App", description: "Built with HTML, CSS & JavaScript" },
    { name: "To-Do List", description: "Dynamic DOM manipulation app" },
    { name: "Weather App", description: "Live weather data using API" },
    { name: "React Portfolio", description: "Built with React.js" },
  ];

  useEffect(() => {
    document.title = "Mohanraj Milan | Portfolio";
  }, []);

  return (
    <div>
      <Header name="Mohanraj Milan" title="Project Manager | Web Developer" />
      <Skills skills={skills} />
      <Projects projects={projects} />
      <Contact />
    </div>
  );
}

export default App;
