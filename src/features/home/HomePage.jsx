import React, { useRef } from "react";
import { Profile } from "../../assets";
import About from "../about/About";
import Service from "../service/Service";
import Skills from "../skills/Skills";
import Experience from "../experience/Experience";
import Project from "../project/Project";
import Contact from "../contact/Contact";
import { useMediaQuery } from "@mantine/hooks";

const HomePage = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const contactRef = useRef(null);

  const handleConnectClick = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Animation styles */}
      <style>
        {`
          .slide-in {
            opacity: 0;
            transform: translateX(-40px);
            animation: slideIn 1s 0.5s infinite alternate;
          }
          @keyframes slideIn {
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          .card-animate {
            opacity: 0;
            transform: translateY(40px);
            animation: cardFadeUp 1s 1s forwards;
          }
          @keyframes cardFadeUp {
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
      <div
        className="card-animate"
        style={{
          display: "flex",
          flexDirection: isMobile ? "column-reverse" : "row",
          width: "100%",
          height: isMobile ? "auto" : "70vh",
          alignItems: "center",
          justifyContent: "center",
          background: isMobile
            ? "linear-gradient(120deg, #f8f9fa 70%, #CF9FFF 100%)"
            : "linear-gradient(120deg, #f8f9fa 50%, #CF9FFF 50%)",
          overflow: "hidden",
          margin: "0 auto",
          marginTop: isMobile ? 16 : 40,
          paddingLeft: isMobile ? 8 : 16,
          paddingRight: isMobile ? 8 : 16,
          paddingTop: isMobile ? 24 : 0,
          paddingBottom: isMobile ? 24 : 0,
        }}
      >
        <div
          style={{
            flex: 1,
            paddingLeft: isMobile ? 0 : 60,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: isMobile ? "center" : "flex-start",
            textAlign: isMobile ? "center" : "left",
          }}
        >
          <h2
            style={{
              color: "#800080",
              fontWeight: 700,
              fontSize: isMobile ? "1.3rem" : "2rem",
              marginBottom: 1,
            }}
          >
            Hello I'm
          </h2>
          <h1
            style={{
              color: "#232b3e",
              fontWeight: 900,
              fontSize: isMobile ? "2.2rem" : "3.5rem",
              marginBottom: 8,
            }}
          >
            Priyadarshini V
          </h1>
          <h3
            className="slide-in"
            style={{
              color: "#800080",
              fontWeight: 500,
              fontSize: isMobile ? "1rem" : "1.3rem",
              marginBottom: 16,
            }}
          >
            Software Engineer
          </h3>
          <p
            style={{
              color: "#6c757d",
              fontSize: isMobile ? "0.98rem" : "1.1rem",
              maxWidth: isMobile ? 320 : 500,
              marginBottom: 32,
            }}
          >
            Enthusiastic software developer with 1 year of experience in web
            development, including front-end technologies. Proven ability to
            solve complex problems and deliver efficient, scalable solutions.
            Passionate about creating high-quality software and eager to
            contribute to innovative projects.
          </p>
          <div
            style={{
              display: "flex",
              gap: 16,
              flexDirection: isMobile ? "column" : "row",
              width: isMobile ? "100%" : "auto",
              alignItems: "center",
              justifyContent: isMobile ? "center" : "flex-start",
            }}
          >
            <button
              style={{
                background: "#800080",
                color: "#fff",
                border: "none",
                borderRadius: 8,
                padding: isMobile ? "10px 0" : "12px 36px",
                fontSize: isMobile ? "1rem" : "1.1rem",
                fontWeight: 600,
                cursor: "pointer",
                width: isMobile ? "100%" : "fit-content",
                boxShadow: "0 2px 8px rgba(207,159,255,0.15)",
              }}
              onClick={handleConnectClick}
            >
              Let's Connect
            </button>
            <a
              href="Priyadarshini V-Resume.pdf"
              download="Priyadarshini V-Resume.pdf"
              style={{
                background: "#232b3e",
                color: "#fff",
                border: "none",
                borderRadius: 8,
                padding: isMobile ? "10px 0" : "12px 36px",
                fontSize: isMobile ? "1rem" : "1.1rem",
                fontWeight: 600,
                cursor: "pointer",
                width: isMobile ? "100%" : "fit-content",
                boxShadow: "0 2px 8px rgba(35,43,62,0.15)",
                textDecoration: "none",
                display: "inline-block",
                textAlign: "center",
              }}
            >
              Explore Who I Am...
            </a>
          </div>
        </div>
        <div
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: isMobile ? 24 : 0,
          }}
        >
          <img
            src={Profile}
            alt="Profile"
            style={{
              width: isMobile ? 180 : 450,
              height: isMobile ? 180 : 450,
              objectFit: "cover",
              borderRadius: "50%",
              boxShadow: "0 4px 24px rgba(207,159,255,0.18)",
              border: "4px solid #fff",
              background: "#CF9FFF",
            }}
          />
        </div>
      </div>
      <About />
      <Service />
      <Skills />
      <Experience />
      <Project />
      <div ref={contactRef}>
        <Contact />
      </div>
    </>
  );
};

export default HomePage;
