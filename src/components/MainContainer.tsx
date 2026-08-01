"use client";

import { useEffect, useState } from "react";
import About from "./About";
import Career from "./Career";
import Contact from "./Contact";
import Cursor from "./Cursor";
import Landing from "./Landing";
import Navbar from "./Navbar";
import SocialIcons from "./SocialIcons";
import WhatIDo from "./WhatIDo";
import Work from "./Work";
import setSplitText from "./utils/splitText";

import TechStack from "./TechStack";

const MainContainer = () => {
  const [isDesktopView, setIsDesktopView] = useState<boolean>(
    window.innerWidth > 1024
  );

  useEffect(() => {
    const resizeHandler = () => {
      setSplitText();
      setIsDesktopView(window.innerWidth > 1024);
    };
    resizeHandler();
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, [isDesktopView]);

  return (
    <div className="container-main">
      <Cursor />
      <Navbar />
      <SocialIcons />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div className="container-main">
            <Landing />
            <div className="mt-16 lg:mt-0">
              <About />
            </div>
            <div className="mt-6 lg:mt-0">
              <WhatIDo />
            </div>
            <div className="mt-16 lg:mt-0">
              <Career />
            </div>
            <div className="mt-16">
              <Work />
            </div>
            {isDesktopView && (
              <div className="mt-16">
                <TechStack />
              </div>
            )}
            <div className="mt-16">
              <Contact />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
