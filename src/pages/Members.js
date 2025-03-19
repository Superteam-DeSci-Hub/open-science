import React, { useEffect, useState } from "react";
import "../styles/members.css";
import membersData from "../data/members.js";

const Members = () => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    setMembers(membersData);
  }, []);

  return (
    <div className="members-container">
      <h1>Our DeSci Community</h1>
      <div className="members-grid">
        {members.map((member) => (
          <div key={member.id} className="member-card">
            <img src={member.image} alt={member.name} className="member-image" />
            <h2>{member.name}</h2>
            <p>{member.role}</p>
            <a href={member.github} target="_blank" rel="noopener noreferrer">
              GitHub Profile
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Members;