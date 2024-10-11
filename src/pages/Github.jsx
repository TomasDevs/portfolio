import React, { useState, useEffect } from "react";
import GithubCard from "../components/GithubCard";
import "../styles/Github.scss";

const Github = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://api.github.com/users/tomasdevs/repos"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setRepos(data);
      } catch (error) {
        console.error("Error fetching repos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
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
            <GithubCard key={repo.id} repo={repo} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default Github;
