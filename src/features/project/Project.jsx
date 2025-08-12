import {
  Divider,
  Title,
  Paper,
  Group,
  Text,
  List,
  SimpleGrid,
  Tooltip,
} from "@mantine/core";
import { IconArrowNarrowRight, IconShieldDown } from "@tabler/icons-react";
import React from "react";
import { useMediaQuery } from "@mantine/hooks";

const projects = [
  {
    name: "Healthcare Project",
    description:
      "Designed a patient record management system including appointment booking, prescriptions, and secure data access. Developed an admin portal for managing healthcare staff, appointments, and patient records efficiently.",
    features: ["Admin Portal", "Web Portal"],
  },
  {
    name: "Lawyer Project",
    description:
      "Built specialized dashboards for legal case tracking and admin-level configurations.",
    features: ["Admin Portal", "Web Portal"],
  },
  {
    name: "Survey Project",
    description:
      "Built dynamic interfaces for Super Admin, Employee, and Survey portals used in internal management systems.Implemented authentication, data visualization, and user management modules.Implemented authentication, data visualization, and user management modules.Created a dynamic survey portal where admins can design surveys and employees can respond securely with real-time results visualization.",
    features: [
      "Survey Portal",
      "Web Portal",
      "Admin Portal",
      "Employee Portal",
    ],
  },
  {
    name: "Project Management",
    description:
      "Developed the company website with responsive UI and integrated project highlights, client showcase, and contact forms.Developed project tracking dashboards, team collaboration modules, and task scheduling features.",
    features: ["Admin Portal", "Website"],
  },
  {
    name: "Employee Reward Project",
    description:
      "Developed a role-based admin dashboard for managing employee rewards and recognition. Integrated secure login, rewards approval workflows, and employee performance metrics. Created a responsive employee-facing portal to view rewards, nominate peers, and track achievements.",
    features: ["Admin Portal", "Web Portal"],
  },
  {
    name: "Ecard Project",
    description:
      "Created an interactive web application for sending digital greeting cards. Implemented image upload, custom messages, and a success popup feature.",
    features: ["Web Application"],
  },
  {
    name: "Ambulance Service Project",
    description:
      "Developed a comprehensive ambulance service management system. Implemented real-time tracking, automated dispatching, and a user-friendly interface for both patients and healthcare providers.",
    features: ["Admin Portal", "Web Portal"],
  },
];

const Project = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isTablet = useMediaQuery("(max-width: 1024px)");

  return (
    <>
      <Title
        align="center"
        order={2}
        style={{ fontWeight: 700, marginTop: isMobile ? 24 : 40 }}
      >
        <Divider
          size="sm"
          style={{
            width: isMobile ? 180 : 400,
            margin: "0 auto 20px auto",
            borderTop: "3px solid  #800080",
          }}
        />
        DEVELOPMENT
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

      <SimpleGrid
        cols={isMobile ? 1 : isTablet ? 2 : 3}
        spacing={isMobile ? "md" : "xl"}
        style={{
          maxWidth: "100vw",
          marginTop: isMobile ? 12 : 24,
          marginLeft: isMobile ? 0 : "60px",
          marginRight: isMobile ? 0 : "-30px",
          paddingLeft: isMobile ? 8 : 0,
          paddingRight: isMobile ? 8 : 0,
        }}
      >
        {projects?.map((project, idx) => (
          <Paper
            key={idx}
            shadow="sm"
            radius="lg"
            p={isMobile ? "md" : "lg"}
            style={{
              width: isMobile ? "100%" : 500,
              minHeight: isMobile ? 220 : 300,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Group>
              <IconShieldDown size={isMobile ? 24 : 32} color="#800080" />
              <Text fw={700} size={isMobile ? "md" : "lg"}>
                {project.name}
              </Text>
            </Group>

            <Tooltip
              label={project.description}
              position="bottom"
              color="gray"
              withArrow
              multiline
              w={isMobile ? 220 : 350}
            >
              <Text
                mt="sm"
                mb="md"
                color="dimmed"
                style={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  cursor: "pointer",
                  fontSize: isMobile ? 13 : 16,
                  maxWidth: "100%",
                }}
              >
                {project.description}
              </Text>
            </Tooltip>
            <List
              spacing="md"
              size={isMobile ? "sm" : "md"}
              icon={
                <IconArrowNarrowRight
                  size={isMobile ? 18 : 24}
                  color="#800080"
                />
              }
            >
              {project?.features?.map((feature, i) => (
                <List.Item key={i}>{feature}</List.Item>
              ))}
            </List>
          </Paper>
        ))}
      </SimpleGrid>
    </>
  );
};

export default Project;
