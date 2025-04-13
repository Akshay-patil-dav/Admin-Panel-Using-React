import React from 'react';
import {
  CircularProgressbarWithChildren,
  buildStyles
} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const ProjectBalanceCard = () => {
  const percentage = 78;

  return (
    <div className="project-balance-card-container container" id="project-balance-wrapper">
      <h3 className="project-balance-title">Payments</h3>

      <div className="project-balance-arc">
        <CircularProgressbarWithChildren
          value={percentage}
          styles={buildStyles({
            pathColor: "#3b82f6",
            trailColor: "#dbeafe",
            strokeLinecap: "butt"
          })}
          strokeWidth={12}
        >
          <div className="project-balance-status">
            <span className="status-pill">✔ On track</span>
          </div>
        </CircularProgressbarWithChildren>
      </div>

      <div className="project-balance-info">
        <p className="info-label">PROJECT BALANCE</p>
        <h2 className="info-value">$150,238.00</h2>
      </div>

      <div className="project-balance-footer">
        <div className="footer-section">
          <strong>$72.46</strong>
          <p>last transaction</p>
        </div>
        <div className="footer-section">
          <strong className="green-text">↑ 12%</strong>
          <p>since last visit</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectBalanceCard;
