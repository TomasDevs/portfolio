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
        const response = await fetch(
          process.env.NODE_ENV === "production"
            ? `https://dev.to/api/articles/me/published?api-key=${
                import.meta.env.VITE_DEV_TO_API_KEY
              }`
            : `/api/fetchArticles`,
          {
            headers: {
              "User-Agent":
                "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch articles");
        }
        const data = await response.json();
        setArticles(data);
      } catch (error) {
        console.error("Error fetching articles:", error);
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
