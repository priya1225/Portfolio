import React, { useState, useEffect } from "react";
import { Logo } from "../../assets";
import { Link, useLocation } from "react-router-dom";
import { useMediaQuery } from "@mantine/hooks";
import { useTheme } from "../../context/ThemeContext";

function ThemeToggle() {
  const { dark, toggle } = useTheme();
  return (
    <button
      onClick={toggle}
      aria-label="Toggle dark mode"
      style={{
        position: "relative",
        width: 50,
        height: 26,
        borderRadius: 999,
        background: dark ? "#800080" : "#d1d5db",
        border: "none",
        cursor: "pointer",
        padding: 0,
        flexShrink: 0,
        transition: "background 0.3s ease",
      }}
    >
      <span
        style={{
          position: "absolute",
          top: 3,
          left: dark ? 26 : 3,
          width: 20,
          height: 20,
          borderRadius: "50%",
          background: "#fff",
          transition: "left 0.3s ease",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 12,
          lineHeight: 1,
        }}
      >
        {dark ? "🌙" : "☀️"}
      </span>
    </button>
  );
}

const menuItems = [
  { name: "Home", path: "/home" },
  { name: "About Me", path: "/about" },
  { name: "Service", path: "/service" },
  { name: "Skill", path: "/skill" },
  { name: "Experience", path: "/experience" },
  { name: "Project", path: "/project" },
  { name: "Contact Me", path: "/contact" },
];

const Home = () => {
  const location = useLocation();
  const { dark } = useTheme();
  const isMobile = useMediaQuery("(max-width: 900px)");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleBurgerClick = () => setDrawerOpen((prev) => !prev);
  const handleMenuClick = () => setDrawerOpen(false);

  return (
    <>
      <style>{`
        @keyframes moveX {
          0%   { transform: translateX(0); }
          100% { transform: translateX(18px); }
        }
        .pv-nav-item {
          font-size: 16px;
          font-weight: 500;
          color: var(--pv-text-muted);
          cursor: pointer;
          white-space: nowrap;
          padding-bottom: 3px;
          border-bottom: 2px solid transparent;
          transition: color 0.18s, border-color 0.18s;
          text-decoration: none;
          display: inline-block;
        }
        .pv-nav-item:hover {
          color: #800080;
        }
        .pv-nav-item.active {
          color: #800080;
          font-weight: 700;
          border-bottom: 2.5px solid #800080;
        }
        .pv-btn-primary {
          background: #800080;
          color: #fff;
          border: none;
          border-radius: 999px;
          padding: 9px 22px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          white-space: nowrap;
          transition: background 0.18s, transform 0.15s;
          letter-spacing: 0.01em;
        }
        .pv-btn-primary:hover {
          background: #6a006a;
          transform: translateY(-1px);
        }
        .pv-btn-secondary {
          background: #232b3e;
          color: #fff;
          border: none;
          border-radius: 999px;
          padding: 9px 22px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          white-space: nowrap;
          transition: background 0.18s, transform 0.15s;
          letter-spacing: 0.01em;
          text-decoration: none;
          display: inline-block;
        }
        .pv-btn-secondary:hover {
          background: #111827;
          transform: translateY(-1px);
        }
      `}</style>


      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 1000,
          padding: scrolled || isMobile ? "0" : "18px 160px 4px 160px",
          transition: "padding 0.35s ease",
        }}
      >
        <div
          style={{
            background: "var(--pv-nav-bg)",
            borderRadius: scrolled || isMobile ? 0 : 14,
            boxShadow: scrolled
              ? `0 2px 14px var(--pv-shadow)`
              : `0 4px 24px var(--pv-shadow)`,
            borderBottom: scrolled ? `1px solid var(--pv-border)` : "none",
            transition: "border-radius 0.35s ease, box-shadow 0.35s ease, background 0.35s ease",
          }}
        >
        <div
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            height: 66,
            paddingLeft: isMobile ? 16 : 40,
            paddingRight: isMobile ? 16 : 40,
          }}
        >
          {/* Logo — left */}
          <div style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
            <img
              src={Logo}
              alt="Logo"
              style={{
                height: isMobile ? 38 : 44,
                width: isMobile ? 38 : 44,
                animation: "moveX 4s ease-in-out infinite alternate",
              }}
            />
          </div>

          {/* Nav — absolutely centered in the bar */}
          {!isMobile && (
            <nav
              style={{
                position: "absolute",
                left: "50%",
                transform: "translateX(-50%)",
              }}
            >
              <ul
                style={{
                  display: "flex",
                  listStyle: "none",
                  margin: 0,
                  padding: 0,
                  gap: 32,
                  alignItems: "center",
                }}
              >
                {menuItems?.map((item) => {
                  const isActive =
                    location.pathname === item.path ||
                    (location.pathname === "/" && item.path === "/home");
                  return (
                    <li key={item.name} style={{ listStyle: "none" }}>
                      <Link
                        to={item.path}
                        className={`pv-nav-item${isActive ? " active" : ""}`}
                      >
                        {item.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          )}


          {/* Desktop — Theme toggle */}
          {!isMobile && (
            <div style={{ marginLeft: "auto", flexShrink: 0 }}>
              <ThemeToggle />
            </div>
          )}

          {/* MOBILE — Burger */}
          {isMobile && (
            <>
              <div style={{ flex: 1 }} />
              <ThemeToggle />
              <div style={{ width: 12 }} />
              <button
                onClick={handleBurgerClick}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: 6,
                }}
                aria-label="Open menu"
              >
                <div
                  style={{
                    width: 26,
                    height: 20,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <span style={{ display: "block", height: 3, background: "#800080", borderRadius: 2 }} />
                  <span style={{ display: "block", height: 3, background: "#800080", borderRadius: 2 }} />
                  <span style={{ display: "block", height: 3, background: "#800080", borderRadius: 2 }} />
                </div>
              </button>
            </>
          )}
        </div>
        </div>{/* end inner card */}
      </div>{/* end outer shell */}

      {/* Mobile Drawer */}
      {isMobile && drawerOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "var(--pv-bg)",
            opacity: 0.98,
            zIndex: 1099,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <button
            onClick={handleBurgerClick}
            style={{
              position: "absolute",
              top: 20,
              right: 20,
              background: "none",
              border: "none",
              fontSize: 30,
              color: "#800080",
              cursor: "pointer",
              lineHeight: 1,
            }}
            aria-label="Close menu"
          >
            &times;
          </button>
          <nav>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, textAlign: "center" }}>
              {menuItems.map((item) => {
                const isActive =
                  location.pathname === item.path ||
                  (location.pathname === "/" && item.path === "/home");
                return (
                  <li key={item.name} style={{ marginBottom: 20 }} onClick={handleMenuClick}>
                    <Link
                      to={item.path}
                      style={{
                        fontSize: "1rem",
                        fontWeight: isActive ? 700 : 500,
                        color: isActive ? "#800080" : "var(--pv-text-muted)",
                        borderBottom: isActive ? "2.5px solid #800080" : "2.5px solid transparent",
                        paddingBottom: 3,
                        textDecoration: "none",
                        display: "inline-block",
                        transition: "all 0.2s",
                      }}
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      )}

    </>
  );
};

export default Home;
