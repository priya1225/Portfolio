import React from "react";
import { Logo } from "../../assets";
import { Link, useNavigate } from "react-router-dom";
import { useMediaQuery } from "@mantine/hooks";
import {
  IconBrandLinkedin,
  IconMail,
  IconPhone,
  IconMapPin,
  IconHeart,
  IconArrowUp,
  IconCode,
} from "@tabler/icons-react";

const navLinks = [
  { name: "Home",       path: "/home" },
  { name: "About Me",   path: "/about" },
  { name: "Service",    path: "/service" },
  { name: "Skill",      path: "/skill" },
  { name: "Experience", path: "/experience" },
  { name: "Project",    path: "/project" },
  { name: "Contact Me", path: "/contact" },
];

const contactItems = [
  { icon: IconMapPin, text: "Krishnagiri, Tamil Nadu, India", href: null },
  { icon: IconMail,   text: "priyashalini1225@gmail.com",     href: "mailto:priyashalini1225@gmail.com" },
  { icon: IconPhone,  text: "+91 6380228902",                  href: "tel:+916380228902" },
];

const Footer = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const navigate  = useNavigate();

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer style={{ background: "#fff", borderTop: "1px solid #f0e8ff" }}>
      <style>{`
        /* CTA button */
        .ft-cta-btn {
          display: inline-flex; align-items: center; gap: 8px;
          background: #800080; color: #fff;
          border: none; border-radius: 999px;
          padding: 14px 36px; font-size: 1rem; font-weight: 700;
          cursor: pointer; text-decoration: none;
          box-shadow: 0 6px 24px rgba(128,0,128,0.28);
          transition: transform 0.22s, box-shadow 0.22s, background 0.22s;
        }
        .ft-cta-btn:hover {
          background: #6a006a;
          transform: translateY(-3px);
          box-shadow: 0 12px 32px rgba(128,0,128,0.38);
        }

        /* Nav links */
        .ft-nav-link {
          color: #555; text-decoration: none;
          font-size: 0.88rem; font-weight: 500;
          display: flex; align-items: center; gap: 6px;
          transition: color 0.2s, transform 0.2s;
        }
        .ft-nav-link::before {
          content: '';
          display: inline-block;
          width: 4px; height: 4px; border-radius: 50%;
          background: #CF9FFF;
          transition: background 0.2s, transform 0.2s;
          flex-shrink: 0;
        }
        .ft-nav-link:hover { color: #800080; transform: translateX(4px); }
        .ft-nav-link:hover::before { background: #800080; transform: scale(1.4); }

        /* Contact link */
        .ft-contact-link {
          color: #555; text-decoration: none; font-size: 0.87rem;
          transition: color 0.2s;
        }
        .ft-contact-link:hover { color: #800080; }

        /* Social */
        .ft-social {
          width: 42px; height: 42px; border-radius: 50%;
          border: 1.5px solid #ede9fe;
          display: flex; align-items: center; justify-content: center;
          color: #800080; text-decoration: none;
          transition: background 0.22s, border-color 0.22s, transform 0.22s, box-shadow 0.22s;
          background: #faf5ff;
        }
        .ft-social:hover {
          background: #800080; border-color: #800080;
          color: #fff; transform: translateY(-4px);
          box-shadow: 0 8px 20px rgba(128,0,128,0.28);
        }

        /* Scroll top */
        .ft-scroll-top {
          width: 44px; height: 44px; border-radius: 50%;
          background: #800080; border: none; cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 4px 14px rgba(128,0,128,0.35);
          transition: transform 0.22s, box-shadow 0.22s;
          flex-shrink: 0;
        }
        .ft-scroll-top:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 22px rgba(128,0,128,0.5);
        }
      `}</style>

      {/* ── CTA Banner ── */}
      <div style={{
        background: "linear-gradient(120deg, #f8f0ff 0%, #fce4ff 50%, #f0e8ff 100%)",
        borderBottom: "1px solid #ede9fe",
        padding: isMobile ? "40px 20px" : "56px 60px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Decorative circles */}
        <div style={{
          position: "absolute", top: -60, left: -60,
          width: 200, height: 200, borderRadius: "50%",
          background: "rgba(128,0,128,0.05)", pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", bottom: -40, right: -40,
          width: 160, height: 160, borderRadius: "50%",
          background: "rgba(207,159,255,0.10)", pointerEvents: "none",
        }} />

        <div style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          background: "rgba(128,0,128,0.08)",
          border: "1px solid rgba(128,0,128,0.20)",
          borderRadius: 999, padding: "5px 16px",
          marginBottom: 16,
        }}>
          <span style={{
            width: 6, height: 6, borderRadius: "50%",
            background: "#800080",
            boxShadow: "0 0 6px rgba(128,0,128,0.6)",
            display: "inline-block",
          }} />
          <span style={{ fontSize: "0.72rem", fontWeight: 700, color: "#800080", letterSpacing: 2 }}>
            AVAILABLE FOR WORK
          </span>
        </div>

        <h2 style={{
          margin: "0 0 12px",
          fontSize: isMobile ? "1.7rem" : "2.4rem",
          fontWeight: 900,
          color: "#1a1a2e",
          lineHeight: 1.2,
        }}>
          Have a project in mind?{" "}
          <span style={{
            background: "linear-gradient(135deg, #800080, #CF9FFF)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>
            Let's talk.
          </span>
        </h2>

        <p style={{
          color: "#6c757d", fontSize: isMobile ? "0.9rem" : "1rem",
          margin: "0 auto 28px", maxWidth: 480, lineHeight: 1.7,
        }}>
          I'm open to freelance projects, full-time roles, and exciting collaborations.
        </p>

        <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
          <button className="ft-cta-btn" onClick={() => navigate("/contact")}>
            <IconMail size={18} />
            Get In Touch
          </button>
          <a
            href="Priyadarshini V-Resume.pdf"
            download="Priyadarshini V-Resume.pdf"
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "#fff", color: "#800080",
              border: "2px solid #800080", borderRadius: 999,
              padding: "12px 32px", fontSize: "1rem", fontWeight: 700,
              textDecoration: "none",
              transition: "background 0.22s, color 0.22s, transform 0.22s",
            }}
            onMouseEnter={e => { e.currentTarget.style.background = "#800080"; e.currentTarget.style.color = "#fff"; e.currentTarget.style.transform = "translateY(-3px)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "#fff"; e.currentTarget.style.color = "#800080"; e.currentTarget.style.transform = "translateY(0)"; }}
          >
            <IconCode size={18} />
            View Resume
          </a>
        </div>
      </div>

      {/* ── Main columns ── */}
      <div style={{
        maxWidth: 1460, margin: "0 auto",
        padding: isMobile ? "40px 20px 28px" : "52px 60px 32px",
      }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "2fr 1fr 1.5fr",
          gap: isMobile ? 36 : 56,
          marginBottom: isMobile ? 32 : 44,
        }}>

          {/* Brand col */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
              <img src={Logo} alt="Logo" style={{ width: 46, height: 46, mixBlendMode: "multiply" }} />
              <div>
                <div style={{ color: "#1a1a2e", fontWeight: 800, fontSize: "1.05rem" }}>Priyadarshini V</div>
                <div style={{ color: "#800080", fontSize: "0.7rem", fontWeight: 700, letterSpacing: 1.5 }}>SOFTWARE ENGINEER</div>
              </div>
            </div>
            <p style={{
              color: "#6c757d", fontSize: "0.87rem",
              lineHeight: 1.75, margin: "0 0 22px", maxWidth: 310,
            }}>
              Front-end developer passionate about building clean, performant, and user-centric digital products.
            </p>
            <div style={{ display: "flex", gap: 10 }}>
              <a href="https://www.linkedin.com/in/priyadarshini-venkatesan1225" target="_blank" rel="noopener noreferrer" className="ft-social" title="LinkedIn">
                <IconBrandLinkedin size={18} />
              </a>
              <a href="mailto:priyashalini1225@gmail.com" className="ft-social" title="Email">
                <IconMail size={18} />
              </a>
              <a href="tel:+916380228902" className="ft-social" title="Phone">
                <IconPhone size={18} />
              </a>
            </div>
          </div>

          {/* Nav col */}
          <div>
            <h4 style={{
              color: "#1a1a2e", fontWeight: 800, fontSize: "0.9rem",
              margin: "0 0 18px", letterSpacing: 1.5, textTransform: "uppercase",
            }}>
              Navigation
            </h4>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 11 }}>
              {navLinks.map((item) => (
                <li key={item.name}>
                  <Link to={item.path} className="ft-nav-link">{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact col */}
          <div>
            <h4 style={{
              color: "#1a1a2e", fontWeight: 800, fontSize: "0.9rem",
              margin: "0 0 18px", letterSpacing: 1.5, textTransform: "uppercase",
            }}>
              Contact Info
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {contactItems.map((item, i) => (
                <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <div style={{
                    width: 34, height: 34, minWidth: 34, borderRadius: 8,
                    background: "#faf5ff", border: "1px solid #ede9fe",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    marginTop: 1,
                  }}>
                    <item.icon size={15} color="#800080" stroke={1.8} />
                  </div>
                  <div>
                    {item.href ? (
                      <a href={item.href} className="ft-contact-link">{item.text}</a>
                    ) : (
                      <span style={{ color: "#6c757d", fontSize: "0.87rem" }}>{item.text}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ borderTop: "1px solid #f0e8ff", marginBottom: 24 }} />

        {/* Bottom bar */}
        <div style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 14,
        }}>
          <p style={{ color: "#aaa", fontSize: "0.8rem", margin: 0, textAlign: isMobile ? "center" : "left" }}>
            © {new Date().getFullYear()} Priyadarshini V. All rights reserved.
          </p>

          <p style={{
            color: "#aaa", fontSize: "0.8rem", margin: 0,
            display: "flex", alignItems: "center", gap: 5,
          }}>
            Designed &amp; built with
            <IconHeart size={12} color="#f472b6" fill="#f472b6" />
            by Priyadarshini V
          </p>

          <button className="ft-scroll-top" onClick={scrollToTop} title="Back to top">
            <IconArrowUp size={18} color="#fff" stroke={2.5} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
