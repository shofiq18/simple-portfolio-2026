"use client";

import { useState, useEffect } from "react";
import "./styles/Landing.css";

// Self-contained SVG icon for the "Welcome" badge
const DotIcon = () => (
  <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="4" cy="4" r="4" fill="currentColor" />
  </svg>
);

// The data for the code snippet
const coderData = {
  name: 'Md Shofiqul Islam',
  role: 'Full Stack Developer',
  location: 'Bangladesh',
  skills: [
    'React', 'Next.js', 'JavaScript', 'TypeScript',
    'Node.js', 'Express', 'MongoDB', 'PostgreSQL',
    'Prisma', 'Git', 'CSS', 'TailwindCSS'
  ],
};

// The styled mock IDE code window component
const CoderProfileCard = () => {
  return (
    <div className="code-editor-window">
      <div className="code-window-border">
        <div className="code-window-border-left"></div>
        <div className="code-window-border-right"></div>
      </div>

      {/* Window Header */}
      <div className="code-header">
        <div className="window-dots">
          <div className="dot dot-red"></div>
          <div className="dot dot-orange"></div>
          <div className="dot dot-green"></div>
        </div>
        <div className="code-filename">profile.js</div>
      </div>

      {/* Code Content Area */}
      <div className="code-body">
        <div className="code-body-blur1"></div>
        <div className="code-body-blur2"></div>

        {/* Line Numbers */}
        <div className="line-numbers">
          {Array.from({ length: 11 }, (_, i) => (
            <div key={i} className="line-no">{i + 1}</div>
          ))}
        </div>

        {/* Code Snippet with custom syntax highlighting */}
        <div className="code-lines">
          <div>
            <span className="code-keyword">const </span>
            <span className="code-variable">coder </span>
            <span className="code-operator">= </span>
            <span className="code-punctuation">{'{'}</span>
          </div>
          <div className="indent-1">
            <span className="code-property">name: </span>
            <span className="code-punctuation">&#39;</span>
            <span className="code-string">{coderData.name}</span>
            <span className="code-punctuation">&#39;,</span>
          </div>
          <div className="indent-1">
            <span className="code-property">role: </span>
            <span className="code-punctuation">&#39;</span>
            <span className="code-string">{coderData.role}</span>
            <span className="code-punctuation">&#39;,</span>
          </div>
          <div className="indent-1">
            <span className="code-property">location: </span>
            <span className="code-punctuation">&#39;</span>
            <span className="code-string">{coderData.location}</span>
            <span className="code-punctuation">&#39;,</span>
          </div>
          <div className="indent-1">
            <span className="code-property">skills: </span>
            <span className="code-punctuation">{'['}</span>
            <div className="indent-2 code-skills-list">
              {coderData.skills.map((skill, index) => (
                <span key={skill} style={{ marginRight: '4px' }}>
                  <span className="code-punctuation">&#39;</span>
                  <span className="code-skill">{skill}</span>
                  <span className="code-punctuation">&#39;</span>
                  {index < coderData.skills.length - 1 && <span className="code-punctuation">,</span>}
                </span>
              ))}
            </div>
            <span className="code-punctuation">{' ]'}</span>
          </div>
          <div>
            <span className="code-punctuation">{'};'}</span>
          </div>
        </div>
      </div>

      {/* Window Footer */}
      <div className="code-footer">
        <span>UTF-8</span>
        <span>JavaScript</span>
        <span>Ln 11, Col 2</span>
      </div>
    </div>
  );
};

const Landing = () => {
  const [isSwapped, setIsSwapped] = useState(false);
  const [animState, setAnimState] = useState<"idle" | "exit" | "enter">("idle");

  useEffect(() => {
    // Wait for initial entrance animation to complete before starting text swap loop
    const initialTimeout = setTimeout(() => {
      const interval = setInterval(() => {
        setAnimState("exit");

        setTimeout(() => {
          setIsSwapped((prev) => !prev);
          setAnimState("enter");

          setTimeout(() => {
            setAnimState("idle");
          }, 700);
        }, 550);
      }, 4200);

      return () => clearInterval(interval);
    }, 2800);

    return () => clearTimeout(initialTimeout);
  }, []);

  return (
    <div className="landing-section" id="home">
      <div className="landing-container">

        {/* Left Column: Text Content & Animation Loops */}
        <div className="landing-left">
          <div className="welcome-badge">
            <DotIcon />
            Welcome to my universe
          </div>

          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              MD SHOFIQUL
              <br />
              <span>ISLAM</span>
            </h1>
          </div>

          <div className="landing-info">
            <h3>A Passionate</h3>
            <h2 className="landing-info-h2">
              <span
                className={`landing-h2-info-1 ${
                  animState === "exit"
                    ? "hero-text-exit-top"
                    : animState === "enter"
                    ? "hero-text-enter-top"
                    : ""
                }`}
              >
                {isSwapped ? "DEVELOPER" : "FULL STACK"}
              </span>
              <span
                className={`landing-h2-2 ${
                  animState === "exit"
                    ? "hero-text-exit-bottom"
                    : animState === "enter"
                    ? "hero-text-enter-bottom"
                    : ""
                }`}
              >
                {isSwapped ? "FULL STACK" : "DEVELOPER"}
              </span>
            </h2>
          </div>

          <div className="skill-badges-container">
            <span className="skill-badge">MERN Stack</span>
            <span className="skill-badge">Clean Code</span>
            <span className="skill-badge">Scalable Architectures</span>
          </div>

          <p className="landing-description">
            JavaScript enthusiast | Creating high-performance products | Architecting scalable backend solutions and coding pixel-perfect frontends
          </p>

          <div className="landing-buttons">
            <button
              className="btn-primary"
              onClick={() => {
                const contactSection = document.getElementById("contact");
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Contact Me
            </button>
            <a
              href="mailto:shafiqulislam25021998@gmail.com"
              className="btn-secondary"
              style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
            >
              Get In Touch
            </a>
          </div>
        </div>

        {/* Right Column: Code Editor Window */}
        <div className="landing-right">
          <CoderProfileCard />
        </div>

      </div>
    </div>
  );
};

export default Landing;
