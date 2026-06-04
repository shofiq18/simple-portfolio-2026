
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import "./styles/Navbar.css";
import { MdArrowOutward } from "react-icons/md";
import { initialFX } from "./utils/initialFX";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger, useGSAP);
export let smoother: ScrollSmoother;

const Navbar = () => {
  useGSAP(() => {
    smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.7,
      speed: 1.7,
      effects: true,
      autoResize: true,
      ignoreMobileResize: true,
    });

    smoother.scrollTop(0);
    smoother.paused(true);
    initialFX(smoother);

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
          smoother.scrollTo(section, true, "top top");
        }
      });
    });
    window.addEventListener("resize", () => {
      ScrollSmoother.refresh(true);
    });
  }, []);
  return (
    <>
      <div className="header">
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
          href="mailto:shafiqulislam25021998@gmail.com"
          className="navbar-btn"
          data-cursor="disable"
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
