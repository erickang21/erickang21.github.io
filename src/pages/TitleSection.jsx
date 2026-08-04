import React from 'react';
import Typewriter from "typewriter-effect";
import SocialEntry from "../components/SocialEntry";
import {FaGithub} from "react-icons/fa";
import {CiLinkedin} from "react-icons/ci";
import {AiOutlineSpotify} from "react-icons/ai";
import '../css/TitleSection.css';

const TitleSection = () => {
  return (
    <div className="title">
      <div className="name-section">
        <div className="name-wrapper">
          <h1 className="terminal-glitch">
            <span className="prompt">&gt;</span> <span className="" data-text="Eric Kang">Eric Kang</span>
          </h1>
        </div>
        <Typewriter
          options={{
            strings: ['Dev for 1M+ users.', 'CS + AI @ UWaterloo \'27', 'Passionate full-stack developer.', '1.5+ years of professional work experience.'],
            autoStart: true,
            loop: true,
            pauseFor: 3000,
          }}
        />
      </div>
      <div className="socials">
        <SocialEntry icon={<FaGithub/>} username="erickang21" link="https://github.com/erickang21"/>
        <SocialEntry icon={<CiLinkedin/>} username="Eric Kang"
                     link="https://www.linkedin.com/in/eric-kang-7052bb121/"/>
        <SocialEntry icon={<AiOutlineSpotify/>} username="bananaboy2121"
                     link="https://open.spotify.com/user/bananaboy2121?si=03367b2a402d4e18"/>
      </div>
      <div className="scroll-formore">
        <span className="scroll-formore-text">↓ Scroll to see projects (surprise at bottom!) ↓</span>
      </div>
    </div>
  );
}

export default TitleSection;
