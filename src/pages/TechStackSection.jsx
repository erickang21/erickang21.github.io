import React from 'react';
import TechStackEntry from "../components/TechStackEntry";
import { FaJsSquare, FaPython, FaJava, FaNodeJs, FaReact, FaVuejs, FaAws, FaCloudflare, FaDocker } from "react-icons/fa";
import { SiTypescript, SiWebpack, SiExpress, SiGooglecloud, SiOracle, SiNginx, SiPostgresql, SiMysql,
  SiMongodb, SiAmazondynamodb, SiOpenai, SiPytorch, SiFlask, SiTypeorm, SiElectron } from "react-icons/si";
import { PiFileCpp } from "react-icons/pi";
import { VscAzure } from "react-icons/vsc";
import { RiTailwindCssFill, RiNextjsLine } from "react-icons/ri";
import { AiOutlinePython } from "react-icons/ai";
import '../css/TechStackSection.css';
import Card from 'react-bootstrap/Card';
import {motion} from "framer-motion";
const TechStackSection = () => {
  const icons = {
    // programming languages
    "JavaScript": FaJsSquare,
    "Node.js": FaNodeJs,
    "TypeScript": SiTypescript,
    "Python": FaPython,
    "Java": FaJava,
    "C++": null,
    "C": null,
    "C#": null,
    // frontend
    "React": FaReact,
    "Vue": FaVuejs,
    "Webpack": SiWebpack,
    "TailwindCSS": RiTailwindCssFill,
    "Next.js": RiNextjsLine,
    // backend & frameworks
    "Express.js": SiExpress,
    "Flask": SiFlask,
    "Docker": FaDocker,
    "TypeORM": SiTypeorm,
    "Electron": SiElectron,
    // cloud and devops
    "AWS (Lambda, S3, EC2, CloudWatch, API Gateway)": FaAws,
    "Google Cloud": SiGooglecloud,
    "Oracle Cloud": SiOracle,
    "Azure": VscAzure,
    "Cloudflare": FaCloudflare,
    "Nginx": SiNginx,
    // database
    "PostgreSQL": SiPostgresql,
    "AWS DynamoDB": SiAmazondynamodb,
    "MySQL": SiMysql,
    "MongoDB": SiMongodb,
    "Oracle DB": SiOracle,
    // ml
    "OpenAI": SiOpenai,
    "Python for Data Science": AiOutlinePython,
    "PyTorch": SiPytorch,
  }
  const iconURLS = {
    "C++": "https://i.ibb.co/9HrhbcR1/c-plus-plus-programming-language-icon.png",
    "C": "https://i.ibb.co/nMwbGFSK/c-program-icon.png",
    "C#": "https://i.ibb.co/Fb5VVPLL/c-sharp-programming-language-icon.png",

  }
  const techStackCategories = {
    "Programming Languages": ["JavaScript", "Node.js", "TypeScript", "Python", "Java", "C", "C++", "C#"],
    "Frontend": ["React", "Vue", "Webpack", "TailwindCSS", "Next.js"],
    "Backend & Frameworks": ["Express.js", "Flask", "Docker", "TypeORM", "Electron"],
    "Cloud & DevOps": ["AWS (Lambda, S3, EC2, CloudWatch, API Gateway)", "Google Cloud", "Oracle Cloud", "Azure", "Cloudflare", "Nginx"],
    "Database": ["PostgreSQL", "AWS DynamoDB", "MySQL", "MongoDB", "Oracle DB"],
    "Machine Learning": ["OpenAI", "Python for Data Science", "PyTorch"],
  }

  return (
    <div className="tech-stack-section">
      <motion.h2
        initial={{opacity: 0, y: 20}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 1}}
        className="section-title"
      >
        Tech Stack
      </motion.h2>
      {Object.entries(techStackCategories).map(([category, techList], index) => {
        return (
          <motion.div
            key={index}
            className=""
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.5, delay: index * 0.15}}
          >
            <div className="card-container">
              <Card>
                <Card.Body>
                  <Card.Title>{category}</Card.Title>
                  <div className="tech-stack-list-of-items">
                    {techList.map((name) => {
                      if (icons[name]) return <TechStackEntry name={name} Icon={icons[name]}/>
                      else return <TechStackEntry name={name} iconURL={iconURLS[name]}/>
                    })}
                  </div>
                </Card.Body>
              </Card>
            </div>
          </motion.div>
        )
      })}
      <div className="scroll-formore-projects">
        <span className="scroll-formore-text">↓ Scroll for a fun surprise! ↓</span>
      </div>
    </div>
  );
}

export default TechStackSection;
