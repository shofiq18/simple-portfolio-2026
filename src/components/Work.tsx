import "./styles/Work.css";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { MdArrowOutward } from "react-icons/md";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const projects = [
  {
    number: "01",
    title: "TestyRide",
    category: "Full-Stack Web App (Team)",
    year: "2024",
    tech: ["React", "Node.js", "Express", "MongoDB", "Firebase", "Tanstack Query", "JWT"],
    description:
      "A comprehensive restaurant visualization and food delivery platform with city-wise grouping, role-based access, and an advanced admin/rider management workflow.",
    color: "#7c3aed",
    liveUrl: "https://testy-ride.web.app",
    repoUrl: "https://github.com/shofiq18",
    imageUrl: "/images/project-3.png",
  },
  {
    number: "02",
    title: "Piece Work",
    category: "Full-Stack Task Management",
    year: "2024",
    tech: ["React", "Node.js", "Express", "MongoDB", "Firebase", "Stripe", "Tanstack Query"],
    description:
      "A robust freelance platform featuring user authentication, role-based dashboards, secure Stripe payment integration, and real-time task management systems.",
    color: "#0f766e",
    liveUrl: "https://piece-work-b72e6.web.app",
    repoUrl: "https://github.com/shofiq18",
    imageUrl: "/images/project-2.png",
  },
  {
    number: "03",
    title: "FoodBridge",
    category: "Full-Stack Food Sharing",
    year: "2024",
    tech: ["React", "Node.js", "Express", "MongoDB", "Firebase", "JWT", "Tailwind CSS"],
    description:
      "A social impact platform for food sharing, featuring interactive food request systems, secure authentication, and a dynamic responsive dashboard.",
    color: "#b45309",
    liveUrl: "https://food-bridge-7ed3c.web.app",
    repoUrl: "https://github.com/shofiq18",
    imageUrl: "/images/project-1.png",
  },
];


const Work = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useGSAP(
    () => {
      const cards = cardsRef.current;
      const total = cards.length;
      const SCROLL_PER_CARD = 400;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${(total - 1) * SCROLL_PER_CARD}`,
          scrub: 1,
          pin: true,
          pinSpacing: true,
          id: "work-stack",
          anticipatePin: 1,
        },
      });

      cards.forEach((card, i) => {
        if (i === 0) return;
        tl.fromTo(
          card,
          { yPercent: 105 },
          { yPercent: 0, ease: "none", duration: 1 },
          i - 1,
        );
        tl.to(cards[i - 1], { scale: 0.96, ease: "none", duration: 1 }, i - 1);
      });

      return () => {
        ScrollTrigger.getById("work-stack")?.kill();
      };
    },
    { scope: sectionRef },
  );

  return (
    <div className="work-section" id="work" ref={sectionRef}>
      <div className="work-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-stack">
          {projects.map((project, index) => (
            <div
              className="work-card"
              key={index}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              style={
                {
                  "--card-color": project.color,
                  zIndex: index + 1,
                } as React.CSSProperties
              }
            >
              {/* Left: Text */}
              <div className="work-card-left">
                <div className="work-card-top">
                  <span className="work-card-num">{project.number}</span>
                  <div className="work-card-meta">
                    <h3>{project.title}</h3>
                    <p className="work-card-category">{project.category}</p>
                  </div>
                  <span className="work-card-year">{project.year}</span>
                </div>
                <p className="work-card-desc">{project.description}</p>
                <div className="work-card-tags">
                  {project.tech.map((t) => (
                    <span key={t} className="work-tag">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="work-card-btns">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="work-btn work-btn-live"
                    data-cursor="disable"
                  >
                    Live Preview <MdArrowOutward />
                  </a>
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="work-btn work-btn-repo"
                    data-cursor="disable"
                  >
                    GitHub Repo <MdArrowOutward />
                  </a>
                </div>
              </div>

              {/* Right: Image / Visual */}
              <div
                className="work-card-right"
                style={{
                  background: project.imageUrl
                    ? `url(${project.imageUrl}) center/cover no-repeat`
                    : project.color,
                }}
              >
                <div className="work-card-visual">
                  <div className="work-visual-window">
                    <div
                      className="work-visual-screen"
                      style={{
                        background: project.imageUrl
                          ? `url(${project.imageUrl}) center/cover no-repeat`
                          : project.color,
                      }}
                    >
                      {/* Placeholder for video or image */}

                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
