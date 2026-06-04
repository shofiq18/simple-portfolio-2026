import "./styles/About.css";

const DatabaseIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
    <path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
    <path d="M3 12A9 3 0 0 0 21 12"></path>
  </svg>
);

const CpuIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="4" y="4" width="16" height="16" rx="2"></rect>
    <path d="M9 9h6v6H9z"></path>
    <path d="M9 1v3"></path>
    <path d="M15 1v3"></path>
    <path d="M9 20v3"></path>
    <path d="M15 20v3"></path>
    <path d="M20 9h3"></path>
    <path d="M20 15h3"></path>
    <path d="M1 9h3"></path>
    <path d="M1 15h3"></path>
  </svg>
);

const GaugeIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m12 14 4-4"></path>
    <path d="M3.34 19a10 10 0 1 1 17.32 0"></path>
  </svg>
);

const About = () => {
  return (
    <div className="about-section" id="about">
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
          <i>Clean code, great UX, and continuous learning drive everything I do.</i>
        </p>
      </div>

      <div className="about-highlights">
        <div className="about-card">
          <div className="about-card-icon">
            <DatabaseIcon />
          </div>
          <div className="about-card-content">
            <h4>Full-Stack Synergy</h4>
            <p>Bridging seamless React/Next.js frontend experiences with secure, database-backed REST APIs.</p>
          </div>
        </div>

        <div className="about-card">
          <div className="about-card-icon">
            <CpuIcon />
          </div>
          <div className="about-card-content">
            <h4>AI-Powered Interfaces</h4>
            <p>Designing interfaces optimized for AI integrations, dynamic states, and modern API workflows.</p>
          </div>
        </div>

        <div className="about-card">
          <div className="about-card-icon">
            <GaugeIcon />
          </div>
          <div className="about-card-content">
            <h4>Performance & UX</h4>
            <p>Writing responsive, clean, and accessibility-compliant code optimized for speed and fluidity.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

