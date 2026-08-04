import React, {useState, useRef, useEffect, useMemo, useCallback} from 'react';
import '../css/Terminal.css';
import {motion} from "framer-motion";

const commands = {
  help: [
    'Available commands:',
    'whoami - Info about me',
    'skills - Show skill list',
    'github - My GitHub link',
    'songrec - Get a random song recommendation from my playlists',
    'clear - Clear the terminal',
    'help - Show this help message',
    'And try most Linux commands! Along with some Easter eggs :)'
  ],
  whoami: ['Eric Kang — Full Stack Developer with 8+ years of experience!'],
  skills: [
    'Programming Languages: Python, Java, C++, C, JavaScript, TypeScript',
    'Frameworks and Libraries: React.js, Node.js, Vue, Express.js, Next.js, Webpack, Tailwind CSS, OpenAI, Docker, Electron, Flask, TypeORM',
    'Cloud and DevOps: AWS (Lambda, S3, EC2, CloudWatch, API Gateway), Google Cloud, Oracle Cloud, Azure, Cloudflare, Nginx',
    'Databases: PostgreSQL, MySQL, MongoDB, Oracle, AWS DynamoDB'
  ],
  github: ['https://github.com/erickang21'],
  shutdown: ['Nice try :)'],
  logout: ['Nice try :)'],
  sudo: ['You do not have sudo permissions. This incident has been reported. (jk)'],
  songrec: ['Coming soon...'],
};
//todo: linkedin, spotify, song rec,
// ls, pwd, su, cd
export default function Terminal() {
  const [history, setHistory] = useState([]);
  const [input, setInput] = useState('');
  const [focused, setFocused] = useState(false);
  const inputRef = useRef(null);
  const terminalRef = useRef(null);
  const scrollRef = useRef(null);
  const [currentFolder, setCurrentFolder] = useState('');
  const TERMINAL_START_CHARS = 'user@Eric-Website:';
  const currentTerminalHeader = useMemo(() => `${TERMINAL_START_CHARS}${currentFolder.length ? `${currentFolder}$` : '~$'}`, [currentFolder]);
  // For the sake of my sanity we will not think about nested directories :)
  const dirMap = useMemo(() => ({
    "uwu-bot": ["README.md"],
    "transit-guesser": ["README.md"],
    "bananapi": ["README.md"],
  }), []);
  const readMeMap = useMemo(() => ({
    "uwu-bot": [
      "The most popular anime-themed Discord bot! Send cute GIFs to friends, generate memes, and customize your own profile.",
      "Stats: 1.5M+ total users, 26K+ total servers",
      "When inviting the bot to a server, view commands by typing \"uwu help\"",
      "Tech Stack: Node.js, MongoDB, Google Cloud, Discord.js library"
    ],
    "transit-guesser": [
      "A web game to allow people to guess transit routes in the GTA from landmarks, helping people familiarize themselves with efficient modes of transportation around them and promoting sustainable traveling methods.",
      "",
      "The game can be played at: https://transitguesser.me",
      "Tech Stack: React, MongoDB, Python Flask"
    ],
    "bananapi": [
      "A REST API with key-based authentication, developed for image manipulation.",
      "Tech Stack: Node.js, Express, Canvas (JS library)"
    ]
  }), [])
  useEffect(() => {
    if (history.length) inputRef.current?.focus();
  }, [history]);

  // Individual Command Handlers

  const handlePwd = useCallback(() => {
    return [`/home/eric${currentFolder}`];
  }, [currentFolder]);

  const handleLs = useCallback((args) => {
    if (currentFolder === '') { // Currently in home dir
      // Using ls to peek into a directory
      if (Object.keys(dirMap).includes(args)) {
        return [dirMap[args].join("  ")];
      } else { // Using ls to view folders in home dir
        return [Object.keys(dirMap).join("  ")];
      }
    } else { // Currently in a dir
      return [dirMap[currentFolder.replace('/','')]?.join("  ") || ''];
    }
  },[currentFolder, dirMap]);

  const handleCd = useCallback((args) => {
    if (args === '') { // Go to home dir
      setCurrentFolder('')
      return [''];
    } else if (args === '..') { // Go back one folder
      if (currentFolder.length) {
        setCurrentFolder('');
        return [''];
      }
      else return [`cd: ${args}: No permission to access directory`];
    } else if (!currentFolder.length && Object.keys(dirMap).includes(args)) {
      setCurrentFolder(`/${args}`);
      return [''];
    }
    else { // Assuming folders don't have more folders within!
      return [`cd: ${args}: No such file or directory`];
    }
  }, [currentFolder.length, dirMap]);

  const handleCat = useCallback((args) => {
    if (currentFolder === '') {
      // No files to read.
      if (Object.keys(dirMap).includes(args)) {
        return [`cat: ${args}: Is a directory`];
      } else {
        return [`cat: ${args}: No such file or directory`]
      }
    } else {
      if (args === "README.md") {
        return readMeMap[currentFolder.replace('/','')];
      } else {
        return [`cat: ${args}: No such file or directory`]
      }
    }
  }, [currentFolder, dirMap, readMeMap])

  const handleEcho = useCallback((args) => {
    const inputPipe = args.match(/echo\s+[A-Za-z0-9]*\s+<\s+(.+)/);
    const outputPipe = args.match(/echo\s+[A-Za-z0-9]*\s+(2|)>\s+(.+)/);
    if (inputPipe) {
      return [`${inputPipe[1]}: No such file or directory`];
    } else if (outputPipe) {
      return [];
    } else {
      return [args];
    }
  }, []);

  // Handle all commands that have args

  const handleCustomCommand = useCallback((command, args) => {
    args = args?.join(" ").trim();
    if (command === "pwd") {
      return handlePwd();
    } else if (command === "ls") {
      return handleLs(args);
    } else if (command === "cd") {
      return handleCd(args);
    } else if (command === "cat") {
      return handleCat(args);
    } else if (command === "echo") {
      return handleEcho(args);
    }
  }, [handleCat, handleCd, handleEcho, handleLs, handlePwd])

  // Handle all commands
  const handleCommand = useCallback((e) => {
    e.preventDefault();
    const currentStateOfFolder = currentFolder;
    const customCommands = ["pwd", "ls", "cd", "cat", "echo"];
    let trimmed = { text: input.trim(), command: true };
    const text = trimmed.text;
    const parts = text.split(" ");
    const command = parts[0];
    const args = parts.slice(1);
    let response = '';
    if (!command) return;
    else if (command === "clear") {
      setHistory(prev => []);
    } else if (customCommands.includes(command)) {
      response = handleCustomCommand(command, args);
    } else {
      response = commands[command] || [`Command not found: ${command}`];
    }
    if (response?.length) {
      const responseFormatted = response.map((entry) => ({ text: entry, command: false, folder: currentStateOfFolder }));
      trimmed = { ...trimmed, folder: currentStateOfFolder }
      setHistory(prev => [...prev, trimmed, ...responseFormatted]);
    }
    setInput('');
  }, [currentFolder, handleCustomCommand, input]);

  useEffect(() => {
    const el = scrollRef.current;
    if (terminalRef.current.scrollHeight > terminalRef.current.clientHeight && el) {
      requestAnimationFrame(() => {
        el.scrollIntoView({ behavior: 'smooth', block: 'end' });
      });
    }
  }, [input, history]);

  const handleBlur = (e) => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setFocused(false); // only blur if focus leaves the terminal area
    }
  };

  return (
    <div className="terminal-page">
      <motion.h2
        initial={{opacity: 0, y: 20}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 1}}
        className="section-title"
      >
        Terminal
      </motion.h2>
      <motion.p
        initial={{opacity: 0, y: 20}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 1}}
        className="section-subtext"
      >
        It's your chance to find out more about me. Type 'help' for more info, that's all you will get :).
      </motion.p>
      <div
        className={`terminal-window `}
        tabIndex={0}
        onClick={() => {
          const selection = window.getSelection();
          const isSelectingText = selection && selection.type === "Range";
          if (!isSelectingText) {
            inputRef.current?.focus();
          }
        }}
        ref={terminalRef}
        onBlur={handleBlur}
        onMouseDown={(e) => {
          if (e.target === terminalRef.current) {
            terminalRef.current.focus();
          }
        }}
      >
        {!focused && (
          <div className="terminal-overlay">
            <div className="overlay-text">Click to focus</div>
          </div>
        )}
        <div className={`terminal-output ${!focused ? 'blurred' : ''}`}>
          {history.map((line, idx) => (
            <div key={idx} className="terminal-line">
              {line.command && <span className="typed-indent">{`${TERMINAL_START_CHARS}${`${line.folder || '~'}$`}`}</span>}
              <span className="typed-text">{line.text}</span>
            </div>
          ))}
          <form onSubmit={handleCommand}>
            <div className="terminal-line">
              <span className="typed-indent">{`${currentTerminalHeader}`}</span>
              <span className="typed-text">{input}</span>
              <input
                ref={inputRef}
                className="terminal-input"
                value={input}
                onChange={e => setInput(e.target.value)}
                autoComplete="off"
                onFocus={() => setFocused(true)}
              />
              <span className="cursor"/>
            </div>
          </form>
          <div className="scroll" ref={scrollRef}/>
        </div>
      </div>
    </div>
  );
}