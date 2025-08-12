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
} from "@tabler/icons-react";
import { Skill } from "../../assets";
import { useMediaQuery } from "@mantine/hooks";

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
];

const Skills = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <Box
      my={isMobile ? 24 : 50}
      style={{
        paddingLeft: isMobile ? 8 : 40,
        paddingRight: isMobile ? 8 : 40,
        width: "100%",
        maxWidth: "100vw",
      }}
    >
      <Title align="center" order={2} style={{ fontWeight: 700 }}>
        <Divider
          size="sm"
          style={{
            width: isMobile ? 180 : 400,
            margin: "0 auto 20px auto",
            borderTop: "3px solid  #800080",
          }}
        />
        CORE SKILLS
        <Divider
          size="sm"
          style={{
            width: isMobile ? 180 : 400,
            margin: "20px auto 0 auto",
            borderTop: "3px solid  #800080",
            marginBottom: isMobile ? 20 : 40,
          }}
        />
      </Title>
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
        <Box
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
          {skills?.map((skill, idx) => (
            <Card
              key={idx}
              radius="md"
              withBorder
              p="lg"
              style={{
                width: isMobile ? 160 : 260,
                height: 80,
                marginTop: isMobile ? 12 : 24,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 18,
                margin: "0 auto",
                marginBottom: isMobile ? 12 : 24,
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
              <Text weight={600} size={isMobile ? "sm" : "md"} align="left">
                {skill.name}
              </Text>
            </Card>
          ))}
        </Box>

        <Box
          style={{
            width: isMobile ? "100%" : "50%",
            height: "100%",
            display: isMobile ? "none" : "flex",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <img
            src={Skill}
            alt="Skills"
            style={{
              width: isMobile ? "100%" : 640,
              height: "100%",
              objectFit: "contain",
              borderRadius: 24,
              display: isMobile ? "none" : "block",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Skills;
