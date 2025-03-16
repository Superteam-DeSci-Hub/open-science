import React from "react";
import "../styles/home.css";
import News from '../components/News';

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to DeSci Hub</h1>
      <h2>Stay updated with the latest news and upcoming events.</h2>
      <News />
    </div>
  );
};

export default Home;