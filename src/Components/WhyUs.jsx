
import React from 'react';
import '../styles/WhyUs.css'; // create this CSS file with styles below

const reasons = [
  {
    title: '🚀 Seamless Product Launch',
    text: 'Launching your AI product on our platform is simple, efficient, and beautifully optimized for maximum impact.',
  },
  {
    title: '🌐 Engaged Community',
    text: 'Tap into a growing network of tech enthusiasts, early adopters, developers, and investors ready to try and support your product.',
  },
  {
    title: '📈 Built for Scalability',
    text: 'Whether you\'re just starting out or already scaling, our platform grows with you — ensuring stability and performance at every stage.',
  },
  {
    title: '🎯 Visibility That Matters',
    text: 'We amplify your reach through spotlight features, newsletters, and curated showcases that connect your product with the right audience.',
  },
  {
    title: '💡 Curated Launch Experience',
    text: 'We make your launch day special — with dedicated support, customized layouts, and positioning that makes your product shine.',
  },
  {
    title: '📊 Real-Time Insights',
    text: 'Get valuable feedback and performance analytics to help you refine, iterate, and evolve your product faster than ever.',
  },
];

const WhyUs = () => {
  return (
    <div className="container">
      <h1>Why Choose Us?</h1>
      {reasons.map((reason, index) => (
        <div className="reason" key={index}>
          <div className="reason-title">{reason.title}</div>
          <div className="reason-text">{reason.text}</div>
        </div>
      ))}

    </div>
  );
};

export default WhyUs;