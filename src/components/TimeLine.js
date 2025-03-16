import React from "react";
import { timelineData } from "../data/timeLineData";
import "../styles/timeline.css";

const Timeline = () => {
  return (
    <div className="timeline-container">
      {timelineData.map((period, index) => (
        <div key={index} className="timeline-period">
          <div className="timeline-month">{period.month}</div>
          {period.events.map((event, idx) => (
            <div key={idx} className="timeline-event">
              <div className="timeline-status">{event.status}
              <div className="timeline-details">
                <div className="timeline-title">{event.title}</div>
                <div className="timeline-date">{event.date}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Timeline;