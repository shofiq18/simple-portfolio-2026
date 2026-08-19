"use client";

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
    title: "Pristto",
    category: "Full-Stack E-Commerce Platform",
    year: "2024",
    tech: ["Next.js", "Prisma", "MongoDB", "Express", "Node.js", "Tailwind CSS"],
    description:
      "A comprehensive full-stack e-commerce shopping experience for fashion, watches, perfumes, and footwear, featuring a dynamic shopping cart, product filtering, and smooth checkouts.",
    color: "#7c3aed",
    liveUrl: "https://pristto.vercel.app/",
    repoUrl: "https://github.com/shofiq18/farhad-365-frontend",
    imageUrl: "/images/project-2.png",
  },
  {
    number: "02",
    title: "ZawajBD",
    category: "Full-Stack Matrimony Platform",
    year: "2024",
    tech: ["Next.js", "Prisma", "MongoDB", "Express", "Node.js", "Tailwind CSS"],
    description:
      "A secure, trusted full-stack matrimony and matchmaking platform with detailed profile discovery, robust verification, and advanced compatibility search features.",
    color: "#0f766e",
    liveUrl: "https://zawajbd.vercel.app/",
    repoUrl: "https://github.com/shofiq18/ghotok-frontend",
    imageUrl: "/images/project-3.png",
  },
  {
    number: "03",
    title: "OrbitX Travel",
    category: "Full-Stack Travel Management Platform",
    year: "2025",
    tech: ["Next.js", "Prisma", "PostgreSQL", "Express", "Node.js", "Tailwind CSS"],
    description:
      "A comprehensive full-stack travel management solution designed to streamline bookings, itinerary planning, and trip organization for travelers and travel agencies.",
    color: "#97b413ff",
    liveUrl: "https://orbitxtravel.vercel.app/",
    repoUrl: "https://github.com/shofiq18/orbitxtravel-frontend",
    imageUrl: "/images/project-4.png",
  },
  {
    number: "04",
    title: "GOFL",
    category: "Full-Stack Online Football Game",
    year: "2025",
    tech: ["Next.js", "Node.js", "Express", "MongoDB", "Prisma", "JWT", "Tailwind CSS"],
    description:
      "An engaging online multiplayer football gaming experience featuring real-time match dynamics, team selection, leaderboards, and live player statistics.",
    color: "#a51010ff",
    liveUrl: "https://www.gofl.pro/",
    repoUrl: "https://github.com/shofiq18",
    imageUrl: "/images/project-1.png",
  },
];


const Work = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1025px)", () => {
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
          // Set initial visibility to hidden for non-first cards
          gsap.set(card, { autoAlpha: 0 });

          tl.fromTo(
            card,
            { yPercent: 105, autoAlpha: 0 },
            { yPercent: 0, autoAlpha: 1, ease: "none", duration: 1 },
            i - 1,
          );
          tl.to(cards[i - 1], { scale: 0.96, ease: "none", duration: 1 }, i - 1);
        });
      });

      return () => {
        mm.revert();
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
                    ? `url(${project.imageUrl}) center/contain no-repeat`
                    : project.color,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
