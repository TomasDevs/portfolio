import React, { useState, useEffect } from "react";
import "../styles/Articles.scss";
import "../styles/utils/loader.scss";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true);
      const response = await fetch(
        process.env.NODE_ENV === "production"
          ? `https://dev.to/api/articles/me/published?api-key=${process.env.REACT_APP_DEV_TO_API_KEY}`
          : `/api/fetchArticles`
      );

      const data = await response.json();
      setArticles(data);
      setLoading(false);
    };

    fetchArticles().catch((error) => {
      console.error("Error fetching articles:", error);
      setLoading(false);
    });
  }, []);

  return (
    <div className="articles-page">
      <h2 className="articles-page__title">My Articles on dev.to</h2>

      {loading ? (
        <div className="loader">
          <div className="spinner"></div>
        </div>
      ) : (
        <ul className="articles-page__list">
          {articles.map((article) => (
            <li key={article.id} className="articles-page__item">
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="articles-page__link">
                <div className="article-card">
                  <h3 className="article-card__title">{article.title}</h3>
                  <p className="article-card__description">
                    {article.description}
                  </p>
                  <p className="article-card__published">
                    Published on:{" "}
                    {new Date(article.published_timestamp).toLocaleDateString()}
                  </p>
                  <div className="article-card__meta">
                    <span className="article-card__meta__views">
                      {article.page_views_count} views
                    </span>
                    <span className="article-card__meta__reading-time">
                      {article.reading_time_minutes} min read
                    </span>
                    {/* <span className="article-card__meta__reactions">
                    {article.positive_reactions_count} likes
                  </span> */}
                    {/* <span className="article-card__meta__comments">
                    {article.comments_count} comments
                  </span> */}
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Articles;
