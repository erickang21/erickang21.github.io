import {motion} from 'framer-motion';
import React from 'react';
import '../css/ProjectSection.css';
import Card from 'react-bootstrap/Card';
import ProjectEntry from "../components/ProjectEntry";

const ProjectSection = () => {
  const projectList = [
    {
      name: "uwu bot",
      iconURL: "https://cdn.discordapp.com/avatars/520682706896683009/71d90cffedce0b73a688078bab6b5cef.png?size=4096",
      description: "Founder and developer of the most popular anime-themed Discord bot, with over 1.5M active users from over 26,000 communities.",
      links: [
        { text: "App", link: "https://dsc.gg/uwubot"},
        { text: "App Directory Page", link: "https://top.gg/bot/520682706896683009"},
        { text: "GitHub", link: "https://github.com/erickang21/uwu-bot-v4"}
      ]
    },
    {
      name: "Transit Guesser",
      iconURL: "https://i.ibb.co/jkBRGSXs/transportation-icons-set-flat-style-city-transport-vehicle-icons-bus-tram-truck-van-339976-56609.png",
      description: "Developer of a map-based transit game inspired by GeoGuessr, designed to promote sustainable modes of transportation.",
      links: [
        { text: "App", link: "https://transitguesser.me"},
        { text: "GitHub", link: "https://github.com/erickang21/transit-guesser"}
      ]
    },
    {
      name: "uwu café",
      iconURL: "https://i.ibb.co/gL1nj2Nm/178ed6f1c77c2483f961ad5440c06279.webp",
      description: "Led a mentorship community with over 1,200 members for aspiring Computer Science students.",
      links: [
        { text: "Community", link: "https://discord.gg/vCMEmNJ"},
      ]
    }
  ]
  return (
    <div className="projects">
      <motion.h2
        initial={{opacity: 0, y: 20}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 1}}
        className="section-title"
      >
        Projects
      </motion.h2>
      <div className="project-list">
        {projectList.map(({name, iconURL, description, links}, index) => {
          return (
            <motion.div
              key={index}
              className=""
              initial={{opacity: 0, y: 20}}
              whileInView={{opacity: 1, y: 0}}
              transition={{duration: 0.5, delay: index * 0.15}}
            >
              <ProjectEntry name={name} iconURL={iconURL} description={description} links={links}/>
            </motion.div>
          )
        })}
      </div>
      <div className="scroll-formore-projects">
        <span className="scroll-formore-text">↓ Scroll for tech stack! ↓</span>
      </div>
    </div>
  );
}

export default ProjectSection;