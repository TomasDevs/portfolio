import React from "react";

const GithubCard = ({ repo }) => {
  return (
    <li className="github-page__item">
      <a
        href={repo.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="github-page__link">
        <div className="repo-card">
          <h3 className="repo-card__title">{repo.name}</h3>
          <p className="repo-card__description">{repo.description}</p>
        </div>
      </a>
    </li>
  );
};

export default GithubCard;
