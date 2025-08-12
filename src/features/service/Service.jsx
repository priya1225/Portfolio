import React from "react";
import {
  Card,
  Text,
  Title,
  ThemeIcon,
  Box,
  Grid,
  Divider,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import {
  IconBriefcase,
  IconCube,
  IconDatabase,
  IconDeviceLaptop,
  IconBug,
  IconFileDescription,
} from "@tabler/icons-react";

const services = [
  {
    icon: IconBriefcase,
    title: "Unique Design",
    desc: "I create visually appealing and original designs tailored to your brand, ensuring your website stands out and leaves a lasting impression.",
  },
  {
    icon: IconCube,
    title: "Different Layout",
    desc: "I build custom layouts that fit your needs, making your site easy to navigate and user-friendly on all devices.",
  },
  {
    icon: IconDatabase,
    title: "Make it with Api Integration",
    desc: "I integrate powerful APIs and databases to enable dynamic content, seamless data flow, and enhanced functionality for your web applications.",
  },
  {
    icon: IconDeviceLaptop,
    title: "Responsiveness",
    desc: "I ensure your website looks and works perfectly on desktops, tablets, and mobiles, providing a smooth experience for every user.",
  },
  {
    icon: IconBug,
    title: "Testing for Perfection",
    desc: "I rigorously test every feature to guarantee your site is bug-free, secure, and performs at its best under all conditions.",
  },
  {
    icon: IconFileDescription,
    title: "Make it Simple",
    desc: "I focus on clean, simple solutions that are easy to use and maintain, making your website efficient and effective for your goals.",
  },
  {
    icon: IconDeviceLaptop,
    title: "State Management",
    desc: "I implement robust state management solutions using tools like Redux and Context API to ensure smooth data flow and maintainable code in complex applications.",
  },
  {
    icon: IconCube,
    title: "Animation & Interactivity",
    desc: "I enhance user engagement by adding smooth animations and interactive elements using libraries like Framer Motion and GSAP.",
  },
  {
    icon: IconBriefcase,
    title: "Cross-Browser Compatibility",
    desc: "I ensure your web applications work flawlessly across all major browsers, providing a consistent experience for every user.",
  },
];

const Service = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isTablet = useMediaQuery("(max-width: 1024px)");

  return (
    <Box
      size="lg"
      my={isMobile ? 24 : 50}
      style={{
        paddingLeft: isMobile ? 8 : isTablet ? 20 : 40,
        paddingRight: isMobile ? 8 : isTablet ? 20 : 40,
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
        AREAS OF FOCUS
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

      <Grid gutter={isMobile ? "md" : "xl"}>
        {services?.map((service, index) => (
          <Grid.Col
            key={index}
            span={isMobile ? 12 : isTablet ? 6 : 4}
            style={{ marginBottom: isMobile ? 16 : 0 }}
          >
            <Card
              radius="md"
              withBorder
              p={isMobile ? "md" : "lg"}
              style={{
                textAlign: "center",
                transition: "0.3s",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                minHeight: 220,
                width: "100%",
                height: "100%",
              }}
            >
              <ThemeIcon
                size={isMobile ? 48 : 70}
                radius="xl"
                style={{
                  backgroundColor: "#800080",
                  clipPath:
                    "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                  margin: "0 auto 18px auto",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {React.createElement(service.icon, {
                  size: isMobile ? 22 : 30,
                  color: "white",
                })}
              </ThemeIcon>
              <Text weight={600} size={isMobile ? "md" : "lg"} mb="sm">
                {service.title}
              </Text>
              <Text size={isMobile ? "xs" : "sm"} color="dimmed">
                {service.desc}
              </Text>
            </Card>
          </Grid.Col>
        ))}
      </Grid>
    </Box>
  );
};

export default Service;
