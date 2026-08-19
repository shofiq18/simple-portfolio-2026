"use client";

import Image from "next/image";
import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-image-wrapper">
        <div className="about-image-card">
          <div className="about-image-inner">
            <Image
              src="/images/profile.jpg"
              alt="Md Shofiqul Islam"
              width={480}
              height={560}
              className="about-profile-img"
              priority
            />
            <div className="about-image-overlay">
              <div className="about-badge">
                <span className="badge-dot">●</span> Open for Hire 🚀
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          I'm <span className="highlight">Md Shofiqul Islam</span>, a passionate{" "}
          <span className="text-white">Full Stack Developer</span> who loves
          building high-performance web applications from the ground up. With
          deep expertise across the entire stack — from crafting{" "}
          <span className="text-white">pixel-perfect UIs</span> with <strong>React & Next.js</strong>{" "}
          to architecting <span className="text-white">robust back-end systems</span> with{" "}
          <strong>Node.js, Express</strong>, and databases like <strong>PostgreSQL & MongoDB</strong> —
          I turn complex ideas into elegant, scalable digital products.
        </p>
        <i>Clean code, great UX, and continuous learning drive <br /> everything I do.</i>
      </div>
    </div>
  );
};

export default About;

