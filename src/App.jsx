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

    timeline
      .from(".div2", { xPercent: -100 })
      .from(".div3", { yPercent: -100 })
      .from(".div4", { xPercent: -100 });

    ScrollTrigger.create({
      animation: timeline,
      trigger: "#container",
      start: "top top",
      end: "+=4000",
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
      <div
        className="div1"
        style={{
          height: "100vh",
          background: "#000",
          color: "white",
        }}
      >
        <div
          className="div2"
          style={{
            height: "100vh",
            background: "blue",
            color: "white",
          }}
        >
          <div
            className="div3"
            style={{
              height: "100vh",
              background: "green",
              color: "white",
            }}
          >
            <div
              className="div4"
              style={{
                height: "100vh",
                background: "gray",
                color: "white",
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
