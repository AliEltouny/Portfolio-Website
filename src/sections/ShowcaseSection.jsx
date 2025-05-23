import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const mlRef = useRef(null);
  const kitchenRef = useRef(null);
  const chessRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [mlRef.current, kitchenRef.current, chessRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div ref={mlRef} className="first-project-wrapper">
            <div className="image-wrapper">
              <img src="/images/ml1.png" alt="ML App Interface" />
            </div>
            <div className="text-content">
              <h2>
                Automated Nutrition Detection from Food Images
              </h2>
              <p className="text-white-50 md:text-xl">
                A Python-powered project using YOLO for accurate food detection and a mapped nutrition dataset to deliver real-time dietary insights from food images.
              </p>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={kitchenRef}>
              <div className="image-wrapper bg-[#ffe0bc] flex justify-center items-center">
                <img
                  src="/images/kitchen2.png"
                  alt="Kitchen Simulation Game"
                  style={{ width: "80%", height: "80%", maxWidth: "100%", maxHeight: "100%" }} // Allow resizing without affecting the wrapper
                />
              </div>
              <h2>Kitchen Simulation Game - Using Unity</h2>
            </div>

            <div className="project" ref={chessRef}>
              <div className="image-wrapper bg-[#ced9b4] flex justify-center items-center">
                <img
                  src="/images/chess3.png"
                  alt="Chess App"
                  style={{ width: "90%", height: "90%", maxWidth: "100%", maxHeight: "100%" }} // Allow resizing without affecting the wrapper
                />
              </div>
              <h2>Chess App - An Android Studio App</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;