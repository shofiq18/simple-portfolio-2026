import "./styles/Career.css";

const Career = () => {
  return (
    <div id="career" className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br />
          experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer (AI Team)</h4>
                <h5>SM Technology · Dhaka</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Advancing into Full Stack development with a focus on Node.js and PostgreSQL.
              Architecting scalable web solutions and building complex application
              features for diverse client requirements.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Frontend Developer (AI Team)</h4>
                <h5>SM Technology · Dhaka</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Specialized in developing AI-driven frontend interfaces.
              Implemented dynamic, high-performance UIs using React.js and Next.js,
              focusing on seamless integration with AI models and user-centric design.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Complete Web Development</h4>
                <h5>Programming Hero (Batch-10)</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Intensive training in modern web technologies including React, Next.js,
              Node.js, and MongoDB. Delivered full-stack projects including TestyRide and piece of work platforms.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Bachelor of Political Science</h4>
                <h5>Govt. Rajendra College · Faridpur</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              Completed Bachelor of Social Science (BSS) with honors,
              developing strong analytical skills and a structured approach to problem-solving.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Career;
