import React, { useState, useEffect, useRef } from "react";
import "../css/HeroSection.css";
import hero from "../assets/heroimg.jpg";

function HeroSection({ darkMode, setDarkMode }) {
  const titles = ["Web Developer", "Full Stack Developer"];
  const [text, setText] = useState("");
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  // const cycle = useRef(0);

  useEffect(() => {
    const currentTitle = titles[titleIndex];
    let timeout;

    // if(cycle.current == 6) return;

    if (!isDeleting && charIndex < currentTitle.length) {
      timeout = setTimeout(() => {
        setText(currentTitle.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 120);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setText(currentTitle.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, 80);
    } else if (!isDeleting && charIndex === currentTitle.length) {
      // cycle.current +=1;
      timeout = setTimeout(() => setIsDeleting(true), 1200); // pause before delete
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, titleIndex, titles]);

  return (
    <>
      <section
        className={`profile-hero ${
          darkMode ? "bg-dark text-light" : "bg-light text-dark"
        }`}
      >
        <div className="profile-image-wrapper">
          <div className="profile-ring">
            <img src={hero} alt="Sainitheesh Reddy" className="profile-image" />
          </div>
        </div>

        <div className="profile-content">
          <h1 className="profile-name">Sainitheesh Reddy</h1>
          <span className="profile-role">I'm a {text}|</span>

          <p className="profile-description">
            Software Engineer experienced in building and enhancing full‑stack
            solutions using React, Java, Spring Boot, and modern API practices.
            Contributed to enterprise systems at Intel with improvements in
            speed, code quality, and monitoring. Skilled in tools like messaging
            queues, Elasticsearch, and unit testing. Actively learning advanced
            engineering concepts to grow into a senior role
          </p>

          <div className="profile-actions">
            <button className="btn btn-primary">Download CV</button>
            <button className="btn btn-secondary">Contact</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroSection;
