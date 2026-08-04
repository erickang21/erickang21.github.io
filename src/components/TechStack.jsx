import React from 'react';
import "../css/techstack.css"

const TechStackIcon = ({ src, alt }) => {
  return (
    <img className="tech-icon" src={src} alt={alt} />
  );
};

const TechStackSection = ({ title, icons }) => {
  return (
    <div className="tech-stack-section">
      <h3>{title}</h3>
      <div className="icon-list">
        {icons.map((icon, index) => (
          <TechStackIcon alt={index} src={icon} />
        ))}
      </div>
    </div>
  );
};



const TechStack = () => {
  const frontEndIcons = [
    "https://img.shields.io/badge/HTML5-E34F26?style=plastic&logo=html5&logoColor=white",
    "https://img.shields.io/badge/CSS3-1572B6?style=plastic&logo=css3&logoColor=white",
    "https://img.shields.io/badge/JavaScript-F7DF1E?style=plastic&logo=javascript&logoColor=black",
    "https://img.shields.io/badge/React-20232A?style=plastic&logo=react&logoColor=61DAFB",
  ];

  const backEndIcons = [
    "https://img.shields.io/badge/Node.js-43853D?style=plastic&logo=node.js&logoColor=white",
    "https://img.shields.io/badge/Express.js-404D59?style=plastic",
    "https://img.shields.io/badge/Python-3776AB?style=plastic&logo=python&logoColor=white",
    "https://img.shields.io/badge/Java-ED8B00?style=plastic&logo=openjdk&logoColor=white",
    "https://img.shields.io/badge/TypeScript-007ACC?style=plastic&logo=typescript&logoColor=white",
    "https://img.shields.io/badge/C-00599C?style=plastic&logo=c&logoColor=white",
    "https://img.shields.io/badge/-C++-black?style=plastic&logo=c%2B%2B&logoColor=white"
    // Add more back-end icons as needed
  ];

  const databaseIcons = [
    "https://img.shields.io/badge/MongoDB-4EA94B?style=plastic&logo=mongodb&logoColor=white",
    "https://img.shields.io/badge/PostgreSQL-316192?style=plastic&logo=postgresql&logoColor=white",
    // Add more database icons as needed
  ];

  const awsIcons = [
    "https://img.shields.io/badge/API%20Gateway-FF4F8B?style=plastic&logo=amazonapigateway&logoColor=white",
    "https://img.shields.io/badge/Cloudwatch-FF4F8B?style=plastic&logo=amazoncloudwatch&logoColor=white",
    "https://img.shields.io/badge/DynamoDB-4053D6?style=plastic&logo=amazondynamodb&logoColor=white",
    "https://img.shields.io/badge/EC2-FF9900?style=plastic&logo=amazonec2&logoColor=white",
    "https://img.shields.io/badge/S3-569A31?style=plastic&logo=amazons3&logoColor=white",
    "https://img.shields.io/badge/Simple%20Email%20Service-DD344C?style=plastic&logo=amazonsimpleemailservice&logoColor=white",
  ]

  return (
    <section className="tech-stack">
      <div className="tech-stack-title">
        <h2>Tech Stack</h2>
        <img src="https://cdn.discordapp.com/attachments/520734295112024064/1200860668878917672/1046905459392663682.webp?ex=65c7b7a6&is=65b542a6&hm=385492dd0769f28d706b035400addf0da0dbfbc9b62c4c5feb7867be50f274e3&" alt="About Me Icon" className="about-me-icon" />
        
      </div>
      <TechStackSection title="Front End" icons={frontEndIcons} />
      <TechStackSection title="Back End" icons={backEndIcons} />
      <TechStackSection title="Amazon Web Services" icons={awsIcons} />
      <TechStackSection title="Database" icons={databaseIcons} />
    </section>
  );
};

export default TechStack;