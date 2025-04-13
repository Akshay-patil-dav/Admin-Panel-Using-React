import React from 'react';

const activities = [
  { time: '32 min', color: '#27ae60', text: 'Quia quae rerum', bold: 'explicabo officiis', rest: 'beatae' },
  // { time: '56 min', color: '#c0392b', text: 'Voluptatem blanditiis', bold: 'blanditiis', rest: 'eveniet' },
  { time: '2 hrs', color: '#2980b9', text: 'Voluptates corrupti', bold: 'molestias', rest: 'voluptatem' },
  { time: '1 day', color: '#16a085', text: 'Tempore autem saepe', bold: 'occaecati voluptatem', rest: 'tempore' },
  { time: '2 days', color: '#f39c12', text: 'Est sit eum', bold: 'reiciendis', rest: 'exercitationem' },
  { time: '4 weeks', color: '#7f8c8d', text: 'Dicta dolorem harum', bold: 'nulla eius.', rest: 'Ut quidem quidem sit quas' },
];

const RecentActivityCard = () => {
  return (
    <div className="premium-card" id="recent-activity-card">
      <h2 className="premium-title">Recent Activity <span className="premium-subtitle">| Today</span></h2>
      <div className="timeline-container">
        {activities.map((item, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-time">{item.time}</div>
            <div className="timeline-line"></div>
            <div className="timeline-dot" style={{ backgroundColor: item.color }}></div>
            <div className="timeline-content">
              <p>
                {item.text} <strong>{item.bold}</strong> {item.rest}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivityCard;
