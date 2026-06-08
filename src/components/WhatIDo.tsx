"use client";

import { useEffect, useRef } from "react";
import "./styles/WhatIDo.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const LayoutIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.25"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
    <line x1="3" y1="9" x2="21" y2="9"></line>
    <line x1="9" y1="21" x2="9" y2="9"></line>
  </svg>
);

const ServerIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.25"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
    <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
    <line x1="6" y1="6" x2="6.01" y2="6"></line>
    <line x1="6" y1="18" x2="6.01" y2="18"></line>
  </svg>
);

const WhatIDo = () => {
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);
  const setRef = (el: HTMLDivElement | null, index: number) => {
    containerRef.current[index] = el;
  };

  useEffect(() => {
    if (ScrollTrigger.isTouch) {
      containerRef.current.forEach((container) => {
        if (container) {
          container.classList.remove("what-noTouch");
          container.addEventListener("click", () => handleClick(container));
        }
      });
    }
    return () => {
      containerRef.current.forEach((container) => {
        if (container) {
          container.removeEventListener("click", () => handleClick(container));
        }
      });
    };
  }, []);

  return (
    <div className="whatIDO" id="services">
      <div className="what-box">
        <h2 className="title">
          W<span className="hat-h2">HAT</span>
          <div>
            I<span className="do-h2"> DO</span>
          </div>
        </h2>
      </div>
      <div className="what-box">
        <div className="what-box-in">
          <div className="what-border2">
            <svg width="100%">
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
              <line
                x1="100%"
                y1="0"
                x2="100%"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
            </svg>
          </div>

          {/* FRONTEND CARD */}
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 0)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="0"
                  x2="100%"
                  y2="0"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>

            <div className="what-content-in">
              <div className="what-card-header">
                <div>
                  <h3>FRONTEND</h3>
                  <h4>UI/UX Engineering</h4>
                </div>
                <div className="what-header-icon">
                  <LayoutIcon />
                </div>
              </div>
              <div className="what-card-body">
                <p>
                  Specializing in creating dynamic, user-friendly web applications
                  using modern React ecosystems and high-performance frontend tooling.
                </p>
                <h5>Skillset &amp; tools</h5>
                <div className="what-content-flex">
                  <div className="what-tags">React</div>
                  <div className="what-tags">Next.js</div>
                  <div className="what-tags">Typescript</div>
                  <div className="what-tags">Tailwind CSS</div>
                  <div className="what-tags">PostgreSQL</div>
                  <div className="what-tags">Node.js</div>
                  <div className="what-tags">Vercel</div>
                  <div className="what-tags">Git / GitHub</div>
                </div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>

          {/* BACKEND CARD */}
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 1)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>

            <div className="what-content-in">
              <div className="what-card-header">
                <div>
                  <h3>BACKEND</h3>
                  <h4>Server &amp; API Engineering</h4>
                </div>
                <div className="what-header-icon">
                  <ServerIcon />
                </div>
              </div>
              <div className="what-card-body">
                <p>
                  Building scalable RESTful APIs and full-stack platforms with
                  robust database management and secure authentication systems.
                </p>
                <h5>Skillset &amp; tools</h5>
                <div className="what-content-flex">
                  <div className="what-tags">Node.js</div>
                  <div className="what-tags">Express.js</div>
                  <div className="what-tags">PostgreSQL</div>
                  <div className="what-tags">MongoDB</div>
                  <div className="what-tags">Mongoose</div>
                  <div className="what-tags">Firebase</div>
                  <div className="what-tags">Next.js</div>
                  <div className="what-tags">REST API</div>
                </div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;

function handleClick(container: HTMLDivElement) {
  container.classList.toggle("what-content-active");
  container.classList.remove("what-sibling");
  if (container.parentElement) {
    const siblings = Array.from(container.parentElement.children);

    siblings.forEach((sibling) => {
      if (sibling !== container) {
        sibling.classList.remove("what-content-active");
        sibling.classList.toggle("what-sibling");
      }
    });
  }
}
