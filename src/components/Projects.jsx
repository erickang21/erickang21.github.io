import "../css/projects.css"

const ProjectEntry = ({ iconUrl, text, url }) => {
    return (
      <div className="projects-line">
        <div className="icon">
          <img src={iconUrl} alt="Icon" />
        </div>
        <div className="text"><a href={url} target="_blank">{text}</a></div>
      </div>
    );
  };
  
  const Project = () => {
    return (
      <section className="projects">
        <div className="projects-title">
          <h2>Projects</h2>
          <img src="https://cdn.discordapp.com/attachments/520734295112024064/1200860668878917672/1046905459392663682.webp?ex=65c7b7a6&is=65b542a6&hm=385492dd0769f28d706b035400addf0da0dbfbc9b62c4c5feb7867be50f274e3&" alt="About Me Icon" className="about-me-icon" />
          
        </div>
        <ProjectEntry iconUrl="https://cdn.discordapp.com/avatars/520682706896683009/6ce77b74e743d457ca4c8c043e94992f.png?size=4096" text="uwu bot" url="https://top.gg/bot/520682706896683009"/>
        <div className="description">
            • A fun, anime-themed Discord bot designed to make communities a lot more fun! 
        </div>
        <div className="description">
            • An extremely popular hit among Discord server owners! Used in 26,300 servers and a collective total of 1.3 million users. 
        </div>
        <div className="description">
            • Tech Stack: Node.js, MongoDB, Google Cloud
        </div>
        <ProjectEntry iconUrl="https://cdn.discordapp.com/attachments/520734295112024064/1200866466313015367/683144191018270770.png?ex=65c7bd0c&is=65b5480c&hm=1a647ce8910b7d8211fcf3a28a24a5a07518fae1d6fb97f6fbe1c1dffb21ce96&" text="banana's hideout" url="https://top.gg/servers/372526440324923393"/>
        <div className="description">
            • A chill, relaxed server designed to bring together aspiring programmers and provide helpful mentorship and resources for them.
        </div>
        <div className="description">
            • An active community with over 1300 members in total!
        </div>
        <ProjectEntry iconUrl="https://media.discordapp.net/attachments/520734295112024064/1200861873038438410/1137094882746449970.webp?ex=65c7b8c5&is=65b543c5&hm=cad038727ab111eb025429c04c1e6da65b7cb7e1e16cffbd9bde9464e2f84577&=&format=webp&width=160&height=160" text="BananAPI" url="https://github.com/erickang21/bananapi"/>
        <div className="description">
            • Allows you to place any text onto a wide variety of meme templates using the Canvas library.
        </div>
        <div className="description">
            • A REST API with key-based authentication built in Node.js and Express.
        </div>
        <div className="description">
            • Tech Stack: Node.js, Express, MongoDB, Canvas
        </div>
        <ProjectEntry iconUrl="https://media.discordapp.net/attachments/520734295112024064/1200861873038438410/1137094882746449970.webp?ex=65c7b8c5&is=65b543c5&hm=cad038727ab111eb025429c04c1e6da65b7cb7e1e16cffbd9bde9464e2f84577&=&format=webp&width=160&height=160" text="SpamPo Bot" url="https://github.com/sleamyz/SpampoBot/blob/main/trainer.py" />
        <div className="description">
            • A Discord bot that automatically bans users that send unsolicited spam or advertisements.
        </div>
        <div className="description">
            • Takes advantage of Machine Learning to give server moderators peace-of-mind.
        </div>
        <div className="description">
            • Tech Stack: Python, PyTorch
        </div>

      </section>
    );
  };
  
  export default Project;