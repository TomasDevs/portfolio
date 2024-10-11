const ArticleCard = ({ article }) => {
  return (
    <li className="articles-page__item">
      <a
        href={article.url}
        target="_blank"
        rel="noopener noreferrer"
        className="articles-page__link">
        <div className="article-card">
          <h3 className="article-card__title">{article.title}</h3>
          <p className="article-card__description">{article.description}</p>
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
          </div>
        </div>
      </a>
    </li>
  );
};

export default ArticleCard;
