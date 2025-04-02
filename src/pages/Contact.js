import React from "react";
import "../styles/contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Join Our Community on Discord</h1>
      <p>We’ve moved our communication to Discord!</p>
      <p>Join us for discussions, updates, and support...</p>
      
      {/* Discord Join Button */}
      <a 
        href="https://discord.gg/4K4rmBsk" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="discord-button"
      >
        Join Our Discord
      </a>

      <p></p>

      {/* Optional: Discord Widget */}
      <iframe 
        src="https://discord.com/widget?id=773160694858121223&theme=dark" 
        title="ST DeSci Community"
        width="350" 
        height="500" 
        allowtransparency="true" 
        frameborder="0" 
        sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts">
      </iframe>
    </div>
  );
};

export default Contact;