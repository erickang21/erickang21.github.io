import React from 'react';
import Typewriter from 'typewriter-effect';
import '../css/HomePage.css';
import SocialEntry from "../components/SocialEntry";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { AiOutlineSpotify } from "react-icons/ai";
import { motion } from 'framer-motion';
import Card from 'react-bootstrap/Card';
import TitleSection from "./TitleSection";
import ProjectSection from "./ProjectSection";
import Terminal from "./Terminal";
import TechStackSection from "./TechStackSection";

const HomePage = () => {
  return (
    <div className="scroll-container">
      <section className="section">
        <TitleSection />
      </section>
      <section className="section projects-section">
        <ProjectSection />
      </section>
      <section className="section tech-stack-section">
        <TechStackSection />
      </section>
      <section className="section terminal-section">
        <Terminal />
      </section>
    </div>
  );
}

export default HomePage;
