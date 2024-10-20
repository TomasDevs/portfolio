import React, { useEffect, useState } from "react";
import ProjectCard from "../components/ProjectCard";
import "../styles/Projects.scss";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const isProduction = process.env.NODE_ENV === "production";
        const response = await fetch(
          isProduction ? "/api/projects.json" : "/public/api/projects.json"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch projects");
        }
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="projects-page">
      <h2 className="projects-page__title">My Projects</h2>
      {loading ? (
        <div className="loader">
          <div className="spinner"></div>
        </div>
      ) : (
        <div className="projects-page__grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Projects;
