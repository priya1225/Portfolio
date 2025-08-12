import React from "react";
import { Card, Group, Text, Badge, Divider, Title } from "@mantine/core";

const experiences = [
  {
    type: "Company",
    name: "Annz Technology",
    year: "August 2024 - Present",
    score: "Junior Software Developer",
    location: "Chennai",
  },
  {
    type: "Internship",
    name: "Primus Global Technologies",
    year: "March 2024 – May 2024",
    score: "Mobile Application Developer Intern",
    location: "Bangalore",
  },
  {
    type: "Internship",
    name: "Vividobots Private Limited",
    year: "January 2024 – February 2024",
    score: "Software Trainee Intern",
    location: "Chennai",
  },
  {
    type: "College",
    name: "Adhiyamaan College of Engineering",
    year: "2022 - 2024",
    score: "MCA (CGPA: 9.6/10)",
    location: "Hosur",
  },
  {
    type: "College",
    name: "Gonzaga College of Arts & Science for Women",
    year: "2019 - 2022",
    score: "BCA (CGPA: 8.2/10)",
    location: "Krishnagiri",
  },
  {
    type: "School",
    name: "Sri Vijay Vidyalaya Matriculation Higher Secondary School",
    year: "2017 - 2019",
    score:
      "Board of Higher Secondary Level Education (Tamil Nadu) (Percentage: 62.2%)",
    location: "Krishnagiri",
  },
];

const Experience = () => {
  return (
    <>
      <Title
        align="center"
        order={2}
        style={{ fontWeight: 700, marginTop: 40 }}
      >
        <Divider
          size="sm"
          style={{
            width: 400,
            maxWidth: "90vw",
            margin: "0 auto 20px auto",
            borderTop: "3px solid  #800080",
          }}
        />
        JOURNEY
        <Divider
          size="sm"
          style={{
            width: 400,
            maxWidth: "90vw",
            margin: "20px auto 0 auto",
            borderTop: "3px solid  #800080",
            marginBottom: 40,
          }}
        />
      </Title>
      <div
        className="timeline-container"
        style={{
          position: "relative",
          width: "100%",
          minHeight: 600,
          padding: "0 20px",
        }}
      >
        <div
          className="timeline-line"
          style={{
            position: "absolute",
            left: "50%",
            top: 0,
            bottom: 0,
            width: 4,
            background: "#800080",
            marginLeft: -2,
            zIndex: 0,
          }}
        />
        <div style={{ position: "relative", zIndex: 1 }}>
          {experiences?.map((exp, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <div
                key={idx}
                className="timeline-row"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  position: "relative",
                  minHeight: 160,
                  marginBottom: 24,
                }}
              >
                <div
                  className="timeline-side timeline-left"
                  style={{
                    width: "50%",
                    display: "flex",
                    justifyContent: "flex-end",
                    position: "relative",
                  }}
                >
                  {isLeft && (
                    <>
                      <div
                        className="timeline-connector"
                        style={{
                          position: "absolute",
                          right: "calc(32px - 20px)",
                          top: "50%",
                          width: "52px",
                          height: "4px",
                          background: "#800080",
                          transform: "translateY(-50%)",
                          zIndex: 1,
                        }}
                      />
                      <Card
                        padding="md"
                        radius="xl"
                        withBorder
                        className="timeline-card"
                        style={{
                          width: 720,
                          maxWidth: "95vw",
                          height: 200,
                          textAlign: "center",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                          background: "#fff",
                          position: "relative",
                          zIndex: 2,
                          marginRight: 32,
                        }}
                      >
                        <Group
                          position="apart"
                          style={{ justifyContent: "center" }}
                        >
                          <Text
                            fw={500}
                            align="center"
                            style={{ fontSize: "1.3rem", color: "#800080" }}
                          >
                            {exp.name}
                          </Text>
                          <Badge
                            color={
                              exp.type === "Company"
                                ? "red"
                                : exp.type === "Internship"
                                ? "blue"
                                : exp.type === "College"
                                ? "yellow"
                                : "green"
                            }
                            style={{
                              minWidth: 100,
                              textAlign: "center",
                              paddingLeft: 12,
                              paddingRight: 12,
                            }}
                          >
                            {exp.type}
                          </Badge>
                        </Group>
                        <Text
                          mt="sm"
                          fw={500}
                          align="center"
                          style={{ fontSize: "1.1rem" }}
                        >
                          {exp.score}
                        </Text>
                        <Text size="sm" color="dimmed" align="center" mt={10}>
                          {exp.year} {exp.location && `| ${exp.location}`}
                        </Text>
                      </Card>
                    </>
                  )}
                </div>
                <div
                  className="timeline-circle"
                  style={{
                    position: "relative",
                    width: 0,
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      left: "50%",
                      top: "50%",
                      transform: "translate(-50%, -50%)",
                      zIndex: 2,
                      width: 40,
                      height: 40,
                      background: "#fff",
                      borderRadius: "50%",
                      border: "4px solid #800080",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 700,
                      color: "#800080",
                      fontSize: "1.1rem",
                    }}
                  >
                    {experiences.length - idx}
                  </div>
                  <div
                    className="timeline-line-vertical"
                    style={{
                      position: "absolute",
                      left: "50%",
                      top: 0,
                      bottom: 0,
                      width: 4,
                      background: "#800080",
                      marginLeft: -2,
                      zIndex: 0,
                    }}
                  />
                </div>
                <div
                  className="timeline-side timeline-right"
                  style={{
                    width: "50%",
                    display: "flex",
                    justifyContent: "flex-start",
                    position: "relative",
                  }}
                >
                  {!isLeft && (
                    <>
                      <div
                        className="timeline-connector"
                        style={{
                          position: "absolute",
                          left: "calc(32px - 40px)",
                          top: "50%",
                          width: "52px",
                          height: "4px",
                          background: "#800080",
                          transform: "translateY(-50%)",
                          zIndex: 1,
                        }}
                      />
                      <Card
                        padding="md"
                        radius="xl"
                        withBorder
                        className="timeline-card"
                        style={{
                          width: 720,
                          maxWidth: "95vw",
                          height: 200,
                          textAlign: "center",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                          background: "#fff",
                          position: "relative",
                          zIndex: 2,
                          marginLeft: 32,
                        }}
                      >
                        <Group
                          position="apart"
                          style={{ justifyContent: "center" }}
                        >
                          <Text
                            fw={500}
                            align="center"
                            style={{ fontSize: "1.3rem", color: "#800080" }}
                          >
                            {exp.name}
                          </Text>
                          <Badge
                            color={
                              exp.type === "Company"
                                ? "red"
                                : exp.type === "Internship"
                                ? "blue"
                                : exp.type === "College"
                                ? "yellow"
                                : "green"
                            }
                            style={{
                              minWidth: 100,
                              textAlign: "center",
                              paddingLeft: 12,
                              paddingRight: 12,
                            }}
                          >
                            {exp.type}
                          </Badge>
                        </Group>
                        <Text
                          mt="sm"
                          fw={500}
                          align="center"
                          style={{ fontSize: "1.1rem" }}
                        >
                          {exp.score}
                        </Text>
                        <Text size="sm" color="dimmed" align="center" mt={10}>
                          {exp.year} {exp.location && `| ${exp.location}`}
                        </Text>
                      </Card>
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>
        {`
        @media (max-width: 900px) {
          .timeline-card {
            width: 98vw !important;
            min-width: 0 !important;
            margin-left: 0 !important;
            margin-right: 0 !important;
            height: auto !important;
            padding: 16px 8px !important;
          }
          .timeline-row {
            flex-direction: column !important;
            min-height: unset !important;
            align-items: stretch !important;
            margin-bottom: 32px !important;
          }
          .timeline-side {
            width: 100% !important;
            justify-content: center !important;
            margin-bottom: 0 !important;
          }
          .timeline-left, .timeline-right {
            margin: 0 !important;
          }
          .timeline-connector {
            display: none !important;
          }
          .timeline-line {
            display: none !important;
          }
          .timeline-circle {
            display: none !important;
          }
          .timeline-line-vertical {
            display: none !important;
          }
          .mantine-Title-root {
            font-size: 1.3rem !important;
          }
          .mantine-Text-root {
            font-size: 1rem !important;
          }
        }
        `}
      </style>
    </>
  );
};

export default Experience;
