import React from 'react';

const transactions = [
  {
    name: 'Bob Dean',
    desc: 'Transfer to bank account',
    amount: '-$290.00 USD',
    date: '15 May, 2020',
    status: 'Pending',
    icon: 'B',
    color: '#fcd34d'
  },
  {
    name: 'Slack',
    desc: 'Subscription payment',
    amount: '-$11.00 USD',
    date: '12 May, 2020',
    status: 'Completed',
    icon: '/slack.svg',
    color: '#6ee7b7'
  },
  {
    name: 'Bank of America',
    desc: 'Withdrawal to bank account',
    amount: '$3500.00 USD',
    date: '10 May, 2020',
    status: 'Completed',
    icon: '/bank.svg',
    color: '#6ee7b7'
  },
  {
    name: 'Spotify',
    desc: 'Subscription payment',
    amount: '-$10.00 USD',
    date: '12 May, 2020',
    status: 'Failed',
    icon: '/spotify.svg',
    color: '#fca5a5'
  },
  {
    name: 'Rachel Doe',
    desc: 'Transfer to bank account',
    amount: '$290.00 USD',
    date: '28 April, 2020',
    status: 'Completed',
    icon: 'R',
    color: '#6ee7b7'
  }
];

const TransactionListCard = () => {
  return (
    <div className="tl-card" id="transaction-list-card">
      <h3 className="tl-header">Latest transactions</h3>
      <ul className="tl-list">
        {transactions.map((t, index) => (
          <li className="tl-item" key={index}>
            <div className="tl-avatar">
              {t.icon.includes('/') ? (
                <img src={t.icon} alt="icon" />
              ) : (
                <span>{t.icon}</span>
              )}
            </div>
            <div className="tl-info">
              <div className="tl-name">{t.name}</div>
              <div className="tl-desc">{t.desc}</div>
            </div>
            <div className="tl-meta">
              <div className="tl-status" style={{ backgroundColor: t.color + '33', color: t.color }}>
                {t.status}
              </div>
              <div className="tl-amount">{t.amount}</div>
              <div className="tl-date">{t.date}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionListCard;
