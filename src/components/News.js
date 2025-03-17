import React from 'react';
import newsData from '../data/newsData';

const News = () => {
  return (
    <div className="news-container">
      <h1>Latest News</h1>
      {newsData.map((item, index) => (
        <div key={index} className="news-item">
          <h2>{item.title}</h2>
          <h3>{item.date}</h3>
          <p>{item.content}</p>
          {item.image && (
            <img
              src={item.image}
              alt={item.title}
              className="news-image"
            />
          )}
          {item.link && (
            <p><a href={item.link} target="_blank" rel="noopener noreferrer" className="news-link">
              Read More →
            </a></p>
          )}
        </div>
      ))}
    </div>
  );
};

export default News;