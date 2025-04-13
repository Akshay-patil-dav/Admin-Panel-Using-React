import React from 'react';

const ContactSourceCard = () => {
  const data = [
    { label: 'Organic', value: 80, color: '#3b82f6' },
    { label: 'Paid Search', value: 65, color: '#22c55e' },
    { label: 'Direct', value: 40, color: '#0ea5e9' },
    { label: 'Social', value: 220, color: '#60a5fa' },
    { label: 'Referrals', value: 120, color: '#fca5a5' },
    { label: 'Others', value: 35, color: '#facc15' },
  ];

  return (
    <div className="cs-card-container" id="contact-source-card">
      <h3 className="cs-title">New Contacts by Source</h3>
      <p className="cs-subtitle">Payment received across all channels</p>

      <div className="cs-grid">
        {data.map((item, index) => (
          <div className="cs-grid-item" key={index}>
            <span className="cs-dot" style={{ backgroundColor: item.color }}></span>
            <span className="cs-label">{item.label}</span>
            <h2 className="cs-value">{item.value}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactSourceCard;
