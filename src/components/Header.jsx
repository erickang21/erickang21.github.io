// components/Header.js

import React from 'react';
import "../css/headers.css"


const Header = ({ darkMode, toggleDarkMode }) => {
  return (
    <section className="hero-section">
      <div className="blur-background"></div>
      <div className="content">
        <h1>eric kang</h1>
        <p className="subtitle">an aspiring full-stack developer :)</p>
        <div className="social-links">
          <a href="https://github.com/erickang21" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn.discordapp.com/attachments/520734295112024064/1201740979921756241/icons8-github-50.png?ex=65caeb80&is=65b87680&hm=58d0081d8852432da814c7e0ce13577100354798e03ed517b3aea12169eb43d8&" alt="erickang21" />
            <span>GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/eric-kang-7052bb121/" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn.discordapp.com/attachments/520734295112024064/1201740980169232455/icons8-linkedin-50.png?ex=65caeb80&is=65b87680&hm=eb57342b376e26fcbd6e6b4128e9a5b0226a6e154151f9c152d5062a734feee9&" alt="eric kang" />
            <span>LinkedIn</span>
          </a>
          <a href="mailto:eric.kang@uwaterloo.ca" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn.discordapp.com/attachments/520734295112024064/1201741663245189160/icons8-email-64_1.png?ex=65caec23&is=65b87723&hm=bd441fbdb4d86fac7c20ada7e7e7d7784fadb5da719707c7cabd836609220bf5&" alt="erickang69" />
            <span>Email</span>
          </a>
          <a href="https://open.spotify.com/user/bananaboy2121?si=f37233d1741a47c6" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn.discordapp.com/attachments/520734295112024064/1201743157088485376/icons8-spotify-50_1.png?ex=65caed87&is=65b87887&hm=080509f77ea60dd651f7379f5864fe4b4bc173ccc798fc0c43818fb24eda3c45&" alt="erickang69" />
            <span>Spotify</span>
          </a>
          <a href="https://discord.gg/vCMEmNJ" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn.discordapp.com/attachments/520734295112024064/1201742968772644915/icons8-discord-50.png?ex=65caed5b&is=65b8785b&hm=1fd670197188b3d04589562d42473a4061a6a5497a36a513ab4e5f38c506dfff&" alt="banana69" />
            <span>Discord</span>
          </a>
          {/* Add more social links as needed */}
        </div>
      </div>
    </section>
  );
};

export default Header;