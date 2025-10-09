import React, { useState } from "react";
import { Logo } from "../../assets";
import { Link, useLocation } from "react-router-dom";
import { useMediaQuery } from "@mantine/hooks";

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
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleBurgerClick = () => setDrawerOpen((prev) => !prev);
  const handleMenuClick = () => setDrawerOpen(false);

  return (
    <>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 1000,
          background: "#fff",
          padding: isMobile ? "10px 0" : "14px 0",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: isMobile ? "row" : "row",
            alignItems: "center",
            justifyContent: isMobile ? "space-between" : "space-between",
            paddingTop: isMobile ? 10 : 14,
            paddingLeft: isMobile ? 8 : 190,
            paddingRight: isMobile ? 8 : 190,
            paddingBottom: isMobile ? 8 : 0,
            gap: isMobile ? 12 : 0,
          }}
        >
          <img
            src={Logo}
            alt="Logo"
            style={{
              height: isMobile ? 48 : 70,
              width: isMobile ? 48 : 70,
              marginRight: isMobile ? 0 : 16,
              marginBottom: isMobile ? 8 : 0,
              paddingTop: isMobile ? 0 : 10,
              animation: "moveX 4s ease-in-out infinite alternate",
            }}
          />
          <style>
            {`
        @keyframes moveX {
          0% { transform: translateX(0); }
          100% { transform: translateX(30px); }
        }
        `}
          </style>
          {/* Burger icon for mobile */}
          {isMobile ? (
            <button
              onClick={handleBurgerClick}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 8,
                zIndex: 1100,
              }}
              aria-label="Open menu"
            >
              <div
                style={{
                  width: 30,
                  height: 22,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <span
                  style={{
                    display: "block",
                    height: 4,
                    background: "#800080",
                    borderRadius: 2,
                  }}
                />
                <span
                  style={{
                    display: "block",
                    height: 4,
                    background: "#800080",
                    borderRadius: 2,
                  }}
                />
                <span
                  style={{
                    display: "block",
                    height: 4,
                    background: "#800080",
                    borderRadius: 2,
                  }}
                />
              </div>
            </button>
          ) : (
            // Desktop nav
            <nav>
              <ul
                style={{
                  display: "flex",
                  listStyle: "none",
                  margin: 0,
                  paddingTop: 16,
                  paddingLeft: 0,
                  textAlign: "left",
                }}
              >
                {menuItems?.map((item, idx) => {
                  const isActive =
                    location.pathname === item.path ||
                    (location.pathname === "/" && item.path === "/home");
                  return (
                    <li
                      key={item.name}
                      style={{
                        marginLeft: idx === 0 ? 0 : 48,
                        marginBottom: 0,
                        fontWeight: isActive ? 700 : 500,
                        fontSize: "1.80rem",
                        cursor: "pointer",
                        color: isActive ? "#fff" : "#800080",
                        background: isActive ? "#CF9FFF" : "transparent",
                        borderRadius: isActive ? 12 : 0,
                        padding: isActive ? "4px 16px" : 0,
                        transition: "all 0.2s",
                        display: "inline-block",
                      }}
                    >
                      <Link
                        to={item.path}
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        {item.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          )}
        </div>
        {/* Mobile Drawer */}
        {isMobile && drawerOpen && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              background: "rgba(255,255,255,0.98)",
              zIndex: 1099,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.3s",
            }}
          >
            <button
              onClick={handleBurgerClick}
              style={{
                position: "absolute",
                top: 24,
                right: 24,
                background: "none",
                border: "none",
                fontSize: 32,
                color: "#800080",
                cursor: "pointer",
              }}
              aria-label="Close menu"
            >
              &times;
            </button>
            <nav>
              <ul
                style={{
                  listStyle: "none",
                  margin: 0,
                  padding: 0,
                  textAlign: "center",
                }}
              >
                {menuItems?.map((item) => {
                  const isActive =
                    location.pathname === item.path ||
                    (location.pathname === "/" && item.path === "/home");
                  return (
                    <li
                      key={item.name}
                      style={{
                        marginBottom: 24,
                        fontWeight: isActive ? 700 : 500,
                        fontSize: "1.5rem",
                        cursor: "pointer",
                        color: isActive ? "#fff" : "#800080",
                        background: isActive ? "#CF9FFF" : "transparent",
                        borderRadius: isActive ? 12 : 0,
                        padding: isActive ? "8px 24px" : "8px 24px",
                        transition: "all 0.2s",
                        display: "block",
                      }}
                      onClick={handleMenuClick}
                    >
                      <Link
                        to={item.path}
                        style={{ textDecoration: "none", color: "inherit" }}
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
      </div>
      {/* Spacer to prevent content from being hidden behind the fixed header */}
      <div style={{ height: isMobile ? 110 : 110 }} />
      {/* ...rest of your page content... */}
    </>
  );
};

export default Home;
