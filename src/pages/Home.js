import React from "react";
import "../styles/home.css";
import News from '../components/News';
import Timeline from "../components/TimeLine";

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to DeSci Hub</h1>
      <h2>Stay updated with the latest news and upcoming events.</h2>
        <News />
        <Timeline />
    </div>
  );
};

export default Home;