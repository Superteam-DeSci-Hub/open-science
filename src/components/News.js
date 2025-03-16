import React from 'react';
import '../styles/news.css';
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
        </div>
      ))}
    </div>
  );
};

export default News;