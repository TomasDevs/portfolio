import React, { useEffect, useState } from "react";
import ProjectCard from "../components/ProjectCard";
import "../styles/Projects.scss";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("api/projects.json") // Get the projects from the API
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error("Error fatching projects:", error));
  }, []);

  return (
    <div className="projects-page">
      <h2 className="projects-page__title">My Projects</h2>
      <ul className="projects-page__grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </ul>
    </div>
  );
};

export default Projects;
