import React from "react";
import { Logo } from "../../assets";
import { Link, useLocation } from "react-router-dom";
import { useMediaQuery } from "@mantine/hooks";
import { Helmet } from "react-helmet";

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

  return (
    <>
      {/* <Helmet>
        <title>Priyadarshini V Portfolio</title>
        <meta
          name="description"
          content="Welcome to Priyadarshini V's Portfolio. Explore my work, skills, and experiences in web development and design."
        />
      </Helmet> */}
      <div
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          alignItems: isMobile ? "center" : "flex-start",
          justifyContent: isMobile ? "center" : "space-between",
          paddingTop: isMobile ? 10 : 14,
          paddingLeft: isMobile ? 8 : 42,
          paddingRight: isMobile ? 8 : 42,
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
        <nav>
          <ul
            style={{
              display: isMobile ? "block" : "flex",
              listStyle: "none",
              margin: 0,
              paddingTop: isMobile ? 0 : 16,
              paddingLeft: 0,
              textAlign: isMobile ? "center" : "left",
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
                    marginLeft: isMobile ? 0 : idx === 0 ? 0 : 48,
                    marginBottom: isMobile ? 10 : 0,
                    fontWeight: isActive ? 700 : 500,
                    fontSize: isMobile ? "1.1rem" : "1.80rem",
                    cursor: "pointer",
                    color: isActive ? "#fff" : "#800080",
                    background: isActive ? "#800080" : "transparent",
                    borderRadius: isActive ? 12 : 0,
                    padding: isActive
                      ? isMobile
                        ? "4px 12px"
                        : "4px 16px"
                      : 0,
                    transition: "all 0.2s",
                    display: isMobile ? "block" : "inline-block",
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
      </div>
    </>
  );
};

export default Home;
