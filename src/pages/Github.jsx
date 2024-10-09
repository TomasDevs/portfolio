import React, { useState, useEffect } from "react";
import "../styles/Github.scss";

const Github = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepos = async () => {
      setLoading(true);
      const response = await fetch(
        "https://api.github.com/users/tomasdevs/repos"
      );
      const data = await response.json();
      setRepos(data);
      setLoading(false);
    };

    fetchRepos().catch((error) => {
      console.error("Error fetching repos:", error);
      setLoading(false);
    });
  }, []);

  return (
    <div className="github-page">
      <h2 className="github-page__title">My GitHub Repositories</h2>

      {loading ? (
        <div className="loader">
          <div className="spinner"></div>
        </div>
      ) : (
        <ul className="github-page__list">
          {repos.map((repo) => (
            <li key={repo.id} className="github-page__item">
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
          ))}
        </ul>
      )}
    </div>
  );
};

export default Github;
