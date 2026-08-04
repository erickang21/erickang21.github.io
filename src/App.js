import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import TechStack from './components/TechStack';
import Contact from './components/Contact';
import Projects from './components/Projects'
import Footer from './components/Footer';
import MusicPage from './components/Music';
import './App.css';
import './css/LoadingAnimation.css';


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay to showcase the loading animation
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the duration to match the animation duration

    return () => clearTimeout(timer);
  }, []);

  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const HomePage = (<div><AboutMe /><TechStack /></div>);

  return (
    <Router>
      <div className={`app ${darkMode ? 'dark-mode' : ''} ${loading ? 'loading' : ''}`}>
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <div className="components">
        <Routes>
            <Route path="/" element={<React.Fragment>
      <div className="content-container">
        <div className="sections">
          <AboutMe />
          <TechStack />
        </div>
        <div className="sections-project">
        <Projects />
        </div>
      </div></React.Fragment>} />
            <Route path="/music" element={<MusicPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
