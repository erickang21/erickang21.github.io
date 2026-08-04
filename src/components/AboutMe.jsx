// components/AboutMe.js

import React from 'react';
import "../css/aboutme.css"

const AboutMeLine = ({ iconUrl, text }) => {
  return (
    <div className="about-me-line">
      <div className="icon">
        <img src={iconUrl} alt="Icon" />
      </div>
      <div className="text">{text}</div>
    </div>
  );
};

const AboutMe = () => {
  return (
    <section className="about-me">
      <div className="about-me-title">
        <h2>About Me</h2>
        <img src="https://cdn.discordapp.com/attachments/520734295112024064/1200860668878917672/1046905459392663682.webp?ex=65c7b7a6&is=65b542a6&hm=385492dd0769f28d706b035400addf0da0dbfbc9b62c4c5feb7867be50f274e3&" alt="About Me Icon" className="about-me-icon" />
        
      </div>
      <AboutMeLine iconUrl="https://cdn.discordapp.com/attachments/520734295112024064/1200860891256733726/435571154141315074.png?ex=65c7b7db&is=65b542db&hm=ee26d9cffebf67ff3c49f8baafe1033759bba750532c62e9ba713b58767f1343&" text="2B student @ University of Waterloo" />
      <AboutMeLine iconUrl="https://cdn.discordapp.com/attachments/520734295112024064/1200866466313015367/683144191018270770.png?ex=65c7bd0c&is=65b5480c&hm=1a647ce8910b7d8211fcf3a28a24a5a07518fae1d6fb97f6fbe1c1dffb21ce96&" text="2 4-month full-stack programming internships" />
      <AboutMeLine iconUrl="https://media.discordapp.net/attachments/520734295112024064/1200861873038438410/1137094882746449970.webp?ex=65c7b8c5&is=65b543c5&hm=cad038727ab111eb025429c04c1e6da65b7cb7e1e16cffbd9bde9464e2f84577&=&format=webp&width=160&height=160" text="7+ years of programming experience" />
      <AboutMeLine iconUrl="https://cdn.discordapp.com/attachments/520734295112024064/1200866083943485503/854819259138048020.webp?ex=65c7bcb1&is=65b547b1&hm=e3b61a92c5c094ab1cba102fba24e9887dba3031d166fda056cbe54640f73e8f&" text="Multiple hackathon wins, 10+ participations" />
    </section>
  );
};

export default AboutMe;