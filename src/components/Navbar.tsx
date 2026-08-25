"use client";

import { useState, useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import "./styles/Navbar.css";
import { MdArrowOutward } from "react-icons/md";
import { initialFX } from "./utils/initialFX";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Navbar = () => {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 80) {
        setHidden(false);
      } else if (currentScrollY > lastScrollY + 8) {
        setHidden(true);
      } else if (currentScrollY < lastScrollY - 8) {
        setHidden(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    const lenis = (window as any).lenis;
    if (lenis) {
      lenis.on("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (lenis) {
        lenis.off("scroll", handleScroll);
      }
    };
  }, []);

  useGSAP(() => {
    // Wait for Lenis to be initialized in window
    const lenis = (window as any).lenis;
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
      lenis.stop();
      initialFX(lenis);
    } else {
      initialFX();
    }

    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 200);

    let links = document.querySelectorAll(".header ul a");
    links.forEach((elem) => {
      let element = elem as HTMLAnchorElement;
      element.addEventListener("click", (e) => {
        if (window.innerWidth > 1024) {
          e.preventDefault();
          let elem = e.currentTarget as HTMLAnchorElement;
          let section = elem.getAttribute("data-href");
          if (section) {
            (window as any).lenis?.scrollTo(section, {
              duration: 1.2,
              easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            });
          }
        }
      });
    });
  }, []);
  return (
    <>
      <div className={`header ${hidden ? "nav-hidden" : ""}`}>
        <ul>
          <li>
            <a data-href="#home" href="#home">
              <HoverLinks text="Home" />
            </a>
          </li>
          <li>
            <a data-href="#work" href="#work">
              <HoverLinks text="Works" />
            </a>
          </li>
          <li>
            <a data-href="#about" href="#about">
              <HoverLinks text="About" />
            </a>
          </li>
          <li>
            <a data-href="#career" href="#career">
              <HoverLinks text="Career" />
            </a>
          </li>
        </ul>
        <a
          href="#contact"
          className="navbar-btn"
          data-cursor="disable"
          onClick={(e) => {
            e.preventDefault();
            const contactSection = document.getElementById("contact");
            if (contactSection) {
              const lenis = (window as any).lenis;
              if (lenis) {
                lenis.scrollTo(contactSection, { duration: 1.2 });
              } else {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }
          }}
        >
          Contact Me <MdArrowOutward />
        </a>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
