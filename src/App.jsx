import { useState, useRef, useEffect } from "react";
import "./App.css";
import locomotiveScroll from "locomotive-scroll";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

function App() {
  // const scrollRef = useRef();
  // const scrollFixed = useRef();
  // const scrollSection = useRef();
  // const ghost = useRef();
  const container = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.defaults({ ease: "none", duration: 3 });

    const timeline = gsap.timeline();

    timeline.from(".div2", { xPercent: -100 });
    timeline.from(".div3", { yPercent: -100 });
    timeline.from(".div4", { xPercent: -100 });

    ScrollTrigger.create({
      animation: timeline,
      trigger: "#container",
      start: "top top",
      end: "+=100",
      scrub: true,
      pin: true,
      anticipatePin: 1,
    });
  }, []);

  return (
    <div id="container" className="container" ref={container}>
      {/* <section>
        <div ref={ghost} className="sectionInsideDiv">
          <h1>hello world pinnet</h1>
        </div>
        <div ref={scrollSection} className="sectionInsideDiv">
          <h1>hello world section</h1>
        </div>
      </section> */}
      <div className="div1"> hello world</div>
    </div>
  );
}

export default App;
