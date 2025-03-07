import React from 'react';

const PortfolioCard = ({ title, description, imageUrl }) => {
  return (
    <div className="portfolio-card">
      <img src={imageUrl} alt={title} className="portfolio-card-image" />
      <div className="portfolio-card-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default PortfolioCard;