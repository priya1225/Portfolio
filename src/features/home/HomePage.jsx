import { useRef, useState, useEffect } from "react";
import { Profile } from "../../assets";
import About from "../about/About";
import Service from "../service/Service";
import Skills from "../skills/Skills";
import Experience from "../experience/Experience";
import Project from "../project/Project";
import Contact from "../contact/Contact";
import Footer from "./Footer";
import { useMediaQuery } from "@mantine/hooks";

const ROLES = [
  "Software Engineer",
  "React JS Developer",
  "Frontend Developer",
  "UI/UX Developer",
];

const HomePage = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const contactRef = useRef(null);

  const [roleIdx,   setRoleIdx]   = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing,    setTyping]    = useState(true);

  useEffect(() => {
    const role = ROLES[roleIdx];
    if (typing) {
      if (displayed.length < role.length) {
        const t = setTimeout(
          () => setDisplayed(role.slice(0, displayed.length + 1)),
          80
        );
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 1600);
        return () => clearTimeout(t);
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
        return () => clearTimeout(t);
      } else {
        setRoleIdx((i) => (i + 1) % ROLES.length);
        setTyping(true);
      }
    }
  }, [displayed, typing, roleIdx]);

  const handleConnectClick = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <style>{`
        /* ── Entrance ── */
        @keyframes fadeLeft {
          from { opacity: 0; transform: translateX(-50px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeRight {
          from { opacity: 0; transform: translateX(50px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* ── Continuous ── */
        @keyframes floatY {
          0%, 100% { transform: translateY(0px); }
          50%      { transform: translateY(-18px); }
        }
        @keyframes glowRing {
          0%, 100% { box-shadow: 0 0 0 5px rgba(207,159,255,0.55), 0 8px 40px rgba(207,159,255,0.30); }
          50%      { box-shadow: 0 0 0 5px rgba(128,0,128,0.55),   0 8px 40px rgba(128,0,128,0.30); }
        }
        @keyframes pulseOrb {
          0%, 100% { transform: scale(1);    opacity: 1;   }
          50%      { transform: scale(1.12); opacity: 0.65; }
        }
        @keyframes floatDot1 {
          0%, 100% { transform: translate(0, 0); }
          33%      { transform: translate(18px, -22px); }
          66%      { transform: translate(-12px, 14px); }
        }
        @keyframes floatDot2 {
          0%, 100% { transform: translate(0, 0); }
          33%      { transform: translate(-20px, 16px); }
          66%      { transform: translate(14px, -18px); }
        }
        @keyframes floatDot3 {
          0%, 100% { transform: translate(0, 0); }
          50%      { transform: translate(16px, 20px); }
        }
        @keyframes spinOrbit {
          from { transform: rotate(0deg) translateX(${isMobile ? 100 : 240}px) rotate(0deg); }
          to   { transform: rotate(360deg) translateX(${isMobile ? 100 : 240}px) rotate(-360deg); }
        }
        @keyframes spinOrbitRev {
          from { transform: rotate(0deg) translateX(${isMobile ? 110 : 260}px) rotate(0deg); }
          to   { transform: rotate(-360deg) translateX(${isMobile ? 110 : 260}px) rotate(360deg); }
        }
        @keyframes cursorBlink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }
        @keyframes scrollBounce {
          0%, 100% { transform: translateY(0); opacity: 0.7; }
          50%      { transform: translateY(8px); opacity: 1; }
        }

        /* ── Cursor ── */
        .type-cursor {
          display: inline-block;
          width: 2px;
          height: 1.1em;
          background: #800080;
          margin-left: 3px;
          vertical-align: middle;
          animation: cursorBlink 0.75s step-end infinite;
        }

        /* ── Text stagger ── */
        .hero-greeting { opacity: 0; animation: fadeLeft 0.7s 0.2s ease forwards; }
        .hero-name     { opacity: 0; animation: fadeLeft 0.7s 0.4s ease forwards; }
        .hero-role     { opacity: 0; animation: fadeLeft 0.7s 0.6s ease forwards; }
        .hero-desc     { opacity: 0; animation: fadeUp  0.7s 0.8s ease forwards; }
        .hero-btns     { opacity: 0; animation: fadeUp  0.7s 1.0s ease forwards; }

        /* ── Image ── */
        .hero-img-wrap {
          opacity: 0;
          animation: fadeRight 0.9s 0.3s ease forwards;
        }
        .hero-img-float {
          animation: floatY 4s 1.2s ease-in-out infinite, glowRing 3s 1.2s ease-in-out infinite;
        }

        /* ── Corner circles ── */
        .hero-circle-tl { animation: pulseOrb 5.0s 0.0s ease-in-out infinite; }
        .hero-circle-br { animation: pulseOrb 6.0s 1.0s ease-in-out infinite; }
        .hero-circle-tr { animation: pulseOrb 4.5s 0.5s ease-in-out infinite; }
        .hero-circle-bl { animation: pulseOrb 5.5s 1.5s ease-in-out infinite; }

        /* ── Floating bg dots ── */
        .hero-dot-1 { animation: floatDot1 7s ease-in-out infinite; }
        .hero-dot-2 { animation: floatDot2 9s ease-in-out infinite; }
        .hero-dot-3 { animation: floatDot3 6s ease-in-out infinite; }

        /* ── Orbit dots ── */
        .orbit-dot-1 { animation: spinOrbit    10s linear infinite; }
        .orbit-dot-2 { animation: spinOrbitRev 14s linear infinite; }

        /* ── Button hover ── */
        .hero-btn-primary {
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .hero-btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 28px var(--pv-accent-shadow);
        }
        .hero-btn-secondary {
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .hero-btn-secondary:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 28px rgba(35,43,62,0.38) !important;
        }

        /* ── Scroll hint ── */
        .scroll-hint { animation: scrollBounce 1.6s ease-in-out infinite; }
      `}</style>

      <div
        style={{
          display: "flex",
          flexDirection: isMobile ? "column-reverse" : "row",
          width: "100%",
          minHeight: "100vh",
          alignItems: "center",
          justifyContent: "center",
          background: isMobile
            ? "linear-gradient(120deg, var(--pv-bg) 70%, var(--pv-accent-soft) 100%)"
            : "linear-gradient(120deg, var(--pv-bg) 50%, var(--pv-accent-soft) 50%)",
          overflow: "hidden",
          paddingLeft: isMobile ? 8 : 16,
          paddingRight: isMobile ? 8 : 16,
          paddingTop: isMobile ? 100 : 88,
          paddingBottom: isMobile ? 40 : 0,
          position: "relative",
        }}
      >
        {/* ── Corner circles ── */}
        <div className="hero-circle-tl" style={{
          position: "absolute", top: isMobile ? -40 : -60, left: isMobile ? -40 : -60,
          width: isMobile ? 140 : 220, height: isMobile ? 140 : 220,
          borderRadius: "50%", background: "var(--pv-accent-soft)",
          opacity: 0.1,
          boxShadow: "0 8px 40px 10px rgba(128,0,128,0.13)",
          pointerEvents: "none", zIndex: 0,
        }} />
        <div className="hero-circle-br" style={{
          position: "absolute", bottom: isMobile ? -40 : -60, right: isMobile ? -40 : -60,
          width: isMobile ? 160 : 260, height: isMobile ? 160 : 260,
          borderRadius: "50%", background: "rgba(128,0,128,0.10)",
          boxShadow: "0 8px 40px 10px var(--pv-accent-soft)",
          opacity: 0.15,
          pointerEvents: "none", zIndex: 0,
        }} />
        <div className="hero-circle-tr" style={{
          position: "absolute", top: isMobile ? -20 : -30, right: isMobile ? -20 : -30,
          width: isMobile ? 90 : 140, height: isMobile ? 90 : 140,
          borderRadius: "50%", background: "rgba(255,255,255,0.05)",
          boxShadow: "0 4px 24px 6px var(--pv-accent-soft)",
          opacity: 0.1,
          pointerEvents: "none", zIndex: 0,
        }} />
        <div className="hero-circle-bl" style={{
          position: "absolute", bottom: isMobile ? -20 : -30, left: isMobile ? -20 : -30,
          width: isMobile ? 90 : 140, height: isMobile ? 90 : 140,
          borderRadius: "50%", background: "rgba(207,159,255,0.13)",
          boxShadow: "0 4px 24px 6px rgba(128,0,128,0.10)",
          pointerEvents: "none", zIndex: 0,
        }} />

        {/* ── Floating bg dots ── */}
        <div className="hero-dot-1" style={{
          position: "absolute", top: "20%", left: "18%",
          width: isMobile ? 10 : 14, height: isMobile ? 10 : 14,
          borderRadius: "50%", background: "rgba(128,0,128,0.18)",
          pointerEvents: "none", zIndex: 0,
        }} />
        <div className="hero-dot-2" style={{
          position: "absolute", bottom: "28%", left: "35%",
          width: isMobile ? 8 : 10, height: isMobile ? 8 : 10,
          borderRadius: "50%", background: "var(--pv-accent-soft)",
          opacity: 0.4,
          pointerEvents: "none", zIndex: 0,
        }} />
        <div className="hero-dot-3" style={{
          position: "absolute", top: "55%", right: "12%",
          width: isMobile ? 6 : 8, height: isMobile ? 6 : 8,
          borderRadius: "50%", background: "var(--pv-text-soft)",
          opacity: 0.2,
          pointerEvents: "none", zIndex: 0,
        }} />

        {/* ── Left: text ── */}
        <div
          style={{
            flex: 1,
            paddingLeft: isMobile ? 0 : 60,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: isMobile ? "center" : "flex-start",
            textAlign: isMobile ? "center" : "left",
            position: "relative",
            zIndex: 1,
          }}
        >
          <h2 className="hero-greeting" style={{
            color: "#800080", fontWeight: 700,
            fontSize: isMobile ? "1.3rem" : "2rem", margin: 0,
          }}>
            Hello I'm
          </h2>

          <h1 className="hero-name" style={{
            color: "var(--pv-text)", fontWeight: 900,
            fontSize: isMobile ? "2.2rem" : "3.5rem", margin: "4px 0 8px",
          }}>
            Priyadarshini V
          </h1>

          <div className="hero-role" style={{
            display: "flex", alignItems: "center",
            minHeight: isMobile ? 32 : 42, marginBottom: 16,
          }}>
            <span style={{
              color: "#800080", fontWeight: 700,
              fontSize: isMobile ? "1rem" : "1.3rem",
            }}>
              {displayed}
            </span>
            <span className="type-cursor" />
          </div>

          <p className="hero-desc" style={{
            color: "var(--pv-text-soft)", fontSize: isMobile ? "0.98rem" : "1.1rem",
            maxWidth: isMobile ? 320 : 500, marginBottom: 32,
          }}>
            With 1.8 years of hands-on experience in web development, I
            specialize in front-end technologies and excel at designing
            user-friendly, functional, and API-integrated solutions. I enjoy
            tackling complex problems to deliver efficient, scalable, and
            high-quality software.
          </p>

          <div className="hero-btns" style={{
            display: "flex", gap: 16,
            flexDirection: isMobile ? "column" : "row",
            width: isMobile ? "100%" : "auto",
            alignItems: "center",
            justifyContent: isMobile ? "center" : "flex-start",
          }}>
            <button
              className="hero-btn-primary"
              style={{
                background: "#800080", color: "#fff", border: "none",
                borderRadius: 8, padding: isMobile ? "10px 0" : "12px 36px",
                fontSize: isMobile ? "1rem" : "1.1rem", fontWeight: 600,
                cursor: "pointer", width: isMobile ? "100%" : "fit-content",
                boxShadow: "0 2px 8px rgba(207,159,255,0.15)",
              }}
              onClick={handleConnectClick}
            >
              Let's Connect
            </button>
            <a
              className="hero-btn-secondary"
              href="Priyadarshini V-Resume.pdf"
              download="Priyadarshini V-Resume.pdf"
              style={{
                background: "var(--pv-text)", color: "var(--pv-bg)", border: "none",
                borderRadius: 8, padding: isMobile ? "10px 0" : "12px 36px",
                fontSize: isMobile ? "1rem" : "1.1rem", fontWeight: 600,
                cursor: "pointer", width: isMobile ? "100%" : "fit-content",
                boxShadow: "0 2px 8px rgba(35,43,62,0.15)",
                textDecoration: "none", display: "inline-block", textAlign: "center",
              }}
            >
              Explore Who I Am...
            </a>
          </div>
        </div>

        {/* ── Right: image ── */}
        <div
          style={{
            flex: 1, display: "flex", alignItems: "center",
            justifyContent: "center", marginBottom: isMobile ? 24 : 0,
            position: "relative", zIndex: 1,
          }}
        >
          {/* Orbit dot 1 */}
          <div className="orbit-dot-1" style={{
            position: "absolute",
            width: isMobile ? 10 : 14, height: isMobile ? 10 : 14,
            borderRadius: "50%", background: "#800080",
            boxShadow: "0 0 10px rgba(128,0,128,0.6)",
            pointerEvents: "none",
          }} />
          {/* Orbit dot 2 */}
          <div className="orbit-dot-2" style={{
            position: "absolute",
            width: isMobile ? 7 : 10, height: isMobile ? 7 : 10,
            borderRadius: "50%", background: "var(--pv-accent-soft)",
            boxShadow: "0 0 8px rgba(207,159,255,0.7)",
            pointerEvents: "none",
          }} />

          <div className="hero-img-wrap">
            <img
              src={Profile}
              alt="Profile"
              className="hero-img-float"
              style={{
                width: isMobile ? 180 : 450,
                height: isMobile ? 180 : 450,
                objectFit: "cover",
                borderRadius: "50%",
                border: "5px solid var(--pv-surface)",
                background: "var(--pv-accent-soft)",
              }}
            />
          </div>
        </div>

        {/* ── Scroll hint ── */}
        {!isMobile && (
          <div
            className="scroll-hint"
            style={{
              position: "absolute", bottom: 28, left: "50%",
              transform: "translateX(-50%)",
              display: "flex", flexDirection: "column",
              alignItems: "center", gap: 6,
              opacity: 0.6, zIndex: 1, pointerEvents: "none",
            }}
          >
            <span style={{ fontSize: "0.72rem", color: "#800080", fontWeight: 600, letterSpacing: 2 }}>
              SCROLL
            </span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#800080" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </div>
        )}
      </div>

      <About />
      <Service />
      <Skills />
      <Experience />
      <Project />
      <div ref={contactRef}>
        <Contact />
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
