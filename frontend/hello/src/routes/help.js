import React from 'react';

const Help = () => {
  const privacyAndSecuritySection = {
    title: "Privacy and Security Fortress",
    content: [
      "Your safety is our priority!",
      "In the Privacy and Security Fortress, discover robust measures to safeguard your personal information.",
      "Learn about our encryption protocols, account protection tips, and how we're committed to keeping your digital space secure.",
      "Because your privacy matters.",
    ],
    emoji: "🔒",
  };

  const policySection = {
    title: "Policy Playground",
    content: [
      "Welcome to our Policy Playground, the space where rules meet clarity.",
      "Dive into the dos and don'ts of our platform, understanding the guidelines that make our community thrive.",
      "Get insights into our content policies, ensuring your social media journey aligns with a positive and inclusive online atmosphere.",
    ],
    emoji: "📜",
  };

  const communitySection = {
    title: "Community Square",
    content: [
      "Connect, discuss, and share in our Community Square!",
      "This vibrant space is where users converge to exchange ideas, seek advice, and build connections.",
      "Engage with fellow members, get pro-tips, and be part of the conversations shaping our platform.",
      "Your voice matters here!",
    ],
    emoji: "🌐",
  };

  const contactInfo = {
    title: "Contact Information",
    content: [
      "Contact example@gmail.com for more help or support."
    ],
    emoji: "✉️",
  };

  const renderContent = (section) => (
    <ul>
      {section.content.map((point, index) => (
        <li key={index}>{point}</li>
      ))}
    </ul>
  );

  return (
    <div>
      <h2>{`${privacyAndSecuritySection.emoji} ${privacyAndSecuritySection.title}`}</h2>
      {renderContent(privacyAndSecuritySection)}

      <h2>{`${policySection.emoji} ${policySection.title}`}</h2>
      {renderContent(policySection)}

      <h2>{`${communitySection.emoji} ${communitySection.title}`}</h2>
      {renderContent(communitySection)}

      <h2>{`${contactInfo.emoji} ${contactInfo.title}`}</h2>
      {renderContent(contactInfo)}
    </div>
  );
};

export default Help;
