import React from "react";
import { Card, Title, Text, ThemeIcon, Box, Divider } from "@mantine/core";
import {
  IconBrandReact,
  IconBrandJavascript,
  IconBrandCss3,
  IconBrandHtml5,
  IconBrandRedux,
  IconBrandGithub,
  IconBrandMantine,
  IconBrandTailwind,
  IconStack2,
  IconBrandPhp,
  IconBrandAbstract,
  IconBrandFlutter,
} from "@tabler/icons-react";
import { Skill } from "../../assets";
import { useMediaQuery } from "@mantine/hooks";
import { useInView } from "../../hooks/useInView";

const skills = [
  {
    icon: IconBrandReact,
    name: "React JS",
    level: 100,
    color: "#61dafb",
  },
  {
    icon: IconBrandMantine,
    name: "Mantine",
    level: 90,
    color: "#7950f2",
  },
  {
    icon: IconBrandTailwind,
    name: "Tailwind CSS",
    level: 90,
    color: "#38bdf8",
  },
  {
    icon: IconBrandJavascript,
    name: "JavaScript",
    level: 85,
    color: "#f7df1e",
  },
  {
    icon: IconBrandRedux,
    name: "Redux",
    level: 85,
    color: "#764abc",
  },
  {
    icon: IconBrandGithub,
    name: "GitHub",
    level: 85,
    color: "#232b3e",
  },
  {
    icon: IconStack2,
    name: "TanStack Query",
    level: 80,
    color: "#f59e42",
  },
  {
    icon: IconBrandCss3,
    name: "CSS3",
    level: 80,
    color: "#2965f1",
  },
  {
    icon: IconBrandHtml5,
    name: "HTML5",
    level: 80,
    color: "#e34c26",
  },
  {
    icon: IconBrandPhp,
    name: "PHP",
    level: 75,
    color: "#e76f00",
  },
  {
    icon: IconBrandAbstract,
    name: "Java",
    level: 75,
    color: "#f00",
  },
  {
    icon: IconBrandFlutter,
    name: "Flutter",
    level: 75,
    color: "#02569b",
  },
];

const Skills = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [titleRef, titleInView] = useInView(0.1);
  const [gridRef, gridInView] = useInView(0.05);
  const [imgRef, imgInView] = useInView(0.1);

  return (
    <Box
      my={isMobile ? 24 : 50}
      style={{
        paddingLeft: isMobile ? 8 : 40,
        paddingRight: isMobile ? 8 : 40,
        maxWidth: "1450px",
        margin: "0 auto",
        marginBottom: isMobile ? 40 : 80,
      }}
    >
      {/* Animated title */}
      <div
        ref={titleRef}
        style={{
          opacity: titleInView ? 1 : 0,
          transform: titleInView ? "translateY(0)" : "translateY(40px)",
          transition: "opacity 0.7s ease, transform 0.7s ease",
        }}
      >
        <Title align="center" order={2} style={{ fontWeight: 700 }}>
          <Divider
            size="sm"
            style={{
              width: isMobile ? 180 : 400,
              margin: "0 auto 20px auto",
              borderTop: "3px solid #800080",
            }}
          />
          CORE SKILLS
          <Divider
            size="sm"
            style={{
              width: isMobile ? 180 : 400,
              margin: "20px auto 0 auto",
              borderTop: "3px solid #800080",
              marginBottom: isMobile ? 20 : 40,
            }}
          />
        </Title>
      </div>

      <Box
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          gap: isMobile ? 24 : 48,
          paddingTop: isMobile ? 16 : 40,
          alignItems: isMobile ? "center" : "flex-start",
          justifyContent: "center",
          width: "100%",
        }}
      >
        {/* Skill cards with staggered scroll animation */}
        <Box
          ref={gridRef}
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: isMobile ? 20 : 50,
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            width: isMobile ? "100%" : undefined,
          }}
        >
          {skills.map((skill, idx) => (
            <div
              key={idx}
              style={{
                opacity: gridInView ? 1 : 0,
                transform: gridInView
                  ? "translateY(0) scale(1)"
                  : "translateY(50px) scale(0.9)",
                transition: `opacity 0.55s ease ${idx * 0.07}s,
                             transform 0.55s cubic-bezier(0.34,1.2,0.64,1) ${idx * 0.07}s`,
              }}
            >
              <Card
                radius="md"
                withBorder
                p="lg"
                style={{
                  width: isMobile ? 160 : 260,
                  height: 80,
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 18,
                  background: "var(--pv-surface)",
                  borderColor: "var(--pv-border)",
                  transition: "transform 0.25s ease, box-shadow 0.25s ease",
                  cursor: "default",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = "translateY(-6px) scale(1.04)";
                  e.currentTarget.style.boxShadow = `0 12px 32px ${hexToRgba(skill.color, 0.25)}`;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                  e.currentTarget.style.boxShadow = "";
                }}
              >
                <ThemeIcon
                  size={isMobile ? 36 : 48}
                  radius="xl"
                  style={{
                    backgroundColor: skill.color,
                    minWidth: isMobile ? 36 : 48,
                    minHeight: isMobile ? 36 : 48,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {React.createElement(skill.icon, {
                    size: isMobile ? 18 : 24,
                    color: "#fff",
                  })}
                </ThemeIcon>
                <Text fw={700} size={isMobile ? "sm" : "md"} align="left" style={{ color: "var(--pv-text)" }}>
                  {skill.name}
                </Text>
              </Card>
            </div>
          ))}
        </Box>

        {/* Image with slide-in animation */}
        <Box
          ref={imgRef}
          style={{
            width: isMobile ? "100%" : "50%",
            height: "100%",
            display: isMobile ? "none" : "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            opacity: imgInView ? 1 : 0,
            transform: imgInView ? "translateX(0)" : "translateX(60px)",
            transition: "opacity 0.8s ease 0.2s, transform 0.8s cubic-bezier(0.34,1.1,0.64,1) 0.2s",
          }}
        >
          <img
            src={Skill}
            alt="Skills"
            style={{
              width: 680,
              height: "100%",
              borderRadius: 24,
              marginTop: 80,
              display: "block",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

function hexToRgba(hex, alpha) {
  let c = hex.replace("#", "");
  if (c.length === 3)
    c = c
      .split("")
      .map((x) => x + x)
      .join("");
  const num = parseInt(c, 16);
  return `rgba(${(num >> 16) & 255}, ${(num >> 8) & 255}, ${
    num & 255
  }, ${alpha})`;
}

export default Skills;
