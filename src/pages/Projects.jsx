import React, { useEffect, useState } from "react";
import ProjectCard from "../components/ProjectCard";
import "../styles/Projects.scss";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/public/api/projects.json") // Get the projects from the API
      .then((response) => response.json())
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fatching projects:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="projects-page">
      <h2 className="projects-page__title">My Projects</h2>
      {loading && (
        <div className="loader">
          <div className="spinner"></div>
        </div>
      )}
      <div className="projects-page__grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
