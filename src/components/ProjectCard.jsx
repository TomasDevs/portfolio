import "../styles/Projects.scss";

const ProjectCard = ({ project }) => {
  return (
    <li className="project-card">
      <picture className="project-card__picture">
        {project.images?.avif && (
          <source
            srcSet={`${project.images.avif[0]} 480w, ${project.images.avif[1]} 720w`}
            sizes="(max-width: 600px) 480px, (max-width: 1200px) 720px"
            type="image/avif"
          />
        )}
        {project.images?.webp && (
          <source
            srcSet={`${project.images.webp[0]} 480w, ${project.images.webp[1]} 720w`}
            sizes="(max-width: 600px) 480px, (max-width: 1200px) 720px"
            type="image/webp"
          />
        )}
        {project.images?.jpg && (
          <img
            src={project.images.jpg[1]}
            srcSet={`${project.images.jpg[0]} 480w, ${project.images.jpg[1]} 720w`}
            sizes="(max-width: 600px) 480px, (max-width: 1200px) 720px"
            alt={project.name}
            className="project-card__img"
          />
        )}
      </picture>
      <div className="project-card__content">
        <h3 className="project-card__title">{project.name}</h3>
        <p className="project-card__description">{project.description}</p>
        <div className="project-card__tags">
          {project.tags.map((tag, index) => (
            <span key={index} className="project-card__tags__tag">
              {tag}
            </span>
          ))}
        </div>
        <div className="project-card__links">
          <a
            href={project.code}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card__links__link">
            Source Code
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card__links__link">
            Live Demo
          </a>
        </div>
      </div>
    </li>
  );
};
export default ProjectCard;
