import React, { useState, useEffect } from "react";
import ArticleCard from "../components/ArticleCard";
import "../styles/Articles.scss";
import "../styles/utils/loader.scss";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setLoading(true);
        const apiUrl =
          import.meta.env.MODE === "production"
            ? "/.netlify/functions/fetchArticles"
            : "http://localhost:5000/api/fetchArticles";

        const response = await fetch(apiUrl, {
          headers: {
            "api-key": import.meta.env.VITE_DEV_TO_API_KEY,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch articles");
        }

        const data = await response.json();

        setArticles(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Error fetching articles:", error);
        setArticles([]);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  return (
    <div className="articles-page">
      <h2 className="articles-page__title">
        My Articles on{" "}
        <a
          href="https://dev.to/tomasdevs"
          target="_blank"
          rel="noopener"
          className="articles-page__link--dev">
          dev.to
        </a>
      </h2>

      {loading ? (
        <div className="loader">
          <div className="spinner"></div>
        </div>
      ) : (
        <ul className="articles-page__list">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default Articles;
