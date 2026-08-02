import { SplitText } from "gsap/SplitText";
import gsap from "gsap";

export function initialFX(smootherInstance?: any) {
  document.body.style.overflowY = "auto";
  if (smootherInstance) {
    if (typeof smootherInstance.start === "function") {
      smootherInstance.start();
    } else if (typeof smootherInstance.paused === "function") {
      smootherInstance.paused(false);
    }
  }
  document.getElementsByTagName("main")[0].classList.add("main-active");
  gsap.to("body", {
    backgroundColor: "#0b080c",
    duration: 0.5,
    delay: 1,
  });

  const tl = gsap.timeline({ delay: 0.3 });

  // 1. Intro name section animation
  const introText = new SplitText([".landing-intro h2", ".landing-intro h1"], {
    type: "chars,lines",
    linesClass: "split-line",
  });
  tl.fromTo(
    introText.chars,
    { opacity: 0, y: 80, filter: "blur(5px)" },
    {
      opacity: 1,
      duration: 1.0,
      filter: "blur(0px)",
      ease: "power3.out",
      y: 0,
      stagger: 0.02,
    }
  );

  // 2. Info stack section animation (starts slightly before the name finishes for smooth stagger)
  const infoText = new SplitText([".landing-info h3", ".landing-h2-info-1", ".landing-h2-2"], {
    type: "chars,lines",
    linesClass: "split-line",
  });
  tl.fromTo(
    infoText.chars,
    { opacity: 0, y: 80, filter: "blur(5px)" },
    {
      opacity: 1,
      duration: 1.0,
      filter: "blur(0px)",
      ease: "power3.out",
      y: 0,
      stagger: 0.02,
      onComplete: () => {
        infoText.revert();
      },
    },
    "-=0.4"
  );

  gsap.fromTo(
    [".header", ".icons-section", ".nav-fade"],
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      delay: 0.1,
    }
  );
}
