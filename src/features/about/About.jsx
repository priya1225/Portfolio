import React from "react";
import { Abouts, Banner } from "../../assets";
import { useMediaQuery } from "@mantine/hooks";

const About = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <div
      style={{
        maxWidth: 1700,
        margin: isMobile ? "20px auto" : "40px auto",
        padding: isMobile ? "6px" : "12px",
        width: "100%",
        borderRadius: isMobile ? 12 : 24,
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          marginBottom: isMobile ? 12 : 24,
        }}
      >
        <img
          src={Banner}
          alt="Banner"
          style={{
            width: "100%",
            maxHeight: isMobile ? 180 : 330,
            objectFit: "cover",
            borderRadius: isMobile ? 20 : 40,
          }}
        />
        <h2
          style={{
            position: "absolute",
            top: "50%",
            left: isMobile ? "50%" : "5%",
            transform: isMobile ? "translate(-50%, -50%)" : "translateY(-50%)",
            color: "white",
            fontWeight: 900,
            margin: 0,
            fontSize: isMobile ? "2.0rem" : "4.0rem",
            padding: isMobile ? "6px 12px" : "12px 32px",
            borderRadius: isMobile ? 8 : 16,
            background: isMobile ? "rgba(35,43,62,0.7)" : "none",
            textAlign: isMobile ? "center" : "left",
            width: isMobile ? "80%" : "auto",
          }}
        >
          Who I Am?
        </h2>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          gap: isMobile ? "18px" : "32px",
          alignItems: "center",
          marginBottom: isMobile ? 18 : 32,
        }}
      >
        <div
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            marginBottom: isMobile ? 18 : 0,
          }}
        >
          <img
            src={Abouts}
            alt="About"
            style={{
              width: isMobile ? 220 : 500,
              height: isMobile ? 220 : 520,
              objectFit: "cover",
              borderRadius: isMobile ? 12 : 24,
            }}
          />
        </div>
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: isMobile ? "12px" : "18px",
          }}
        >
          <div
            style={{ color: "#232b3e", fontSize: isMobile ? "1rem" : "1.2rem" }}
          >
            Hello! I’m <strong>Priyadarshini V</strong>, a Junior Software
            Developer from
            <strong> Krishnagiri</strong>, currently working at{" "}
            <strong>Annz Technology, Chennai</strong>. I hold a
            <strong> Master of Computer Applications (CGPA: 9.6/10)</strong>{" "}
            from Adhiyamaan College of Engineering and a{" "}
            <strong>Bachelor of Computer Applications (CGPA: 8.2/10)</strong>{" "}
            from Gonzaga College of Arts & Science for Women.
          </div>
          <div
            style={{ color: "#232b3e", fontSize: isMobile ? "1rem" : "1.2rem" }}
          >
            With <strong>1 year of hands-on experience</strong> in web
            development, I specialize in front-end technologies and excel at
            designing user-friendly, functional, and API-integrated solutions. I
            enjoy tackling complex problems to deliver efficient, scalable, and
            high-quality software.
          </div>
          <div
            style={{ color: "#232b3e", fontSize: isMobile ? "1rem" : "1.2rem" }}
          >
            My professional journey includes internships as a{" "}
            <strong>Mobile Application Developer Intern</strong> at{" "}
            <strong>Primus Global Technologies , Bangalore</strong> (March 2024
            – May 2024) and a <strong>Software Trainee Intern</strong> at{" "}
            <strong>Vividobots Private Limited, Chennai</strong> (January 2024 –
            February 2024). These experiences allowed me to strengthen my skills
            in real-time project development and practical implementation of
            innovative solutions.
          </div>
          <div
            style={{ color: "#232b3e", fontSize: isMobile ? "1rem" : "1.2rem" }}
          >
            I have actively participated in{" "}
            <strong>multiple national-level conferences and symposiums</strong>,
            earning several certifications, and have successfully completed{" "}
            <strong>numerous real-world projects</strong> that showcase my
            dedication, creativity, and technical expertise.
          </div>
          <div
            style={{ color: "#232b3e", fontSize: isMobile ? "1rem" : "1.2rem" }}
          >
            Passionate about building impactful software, I aim to contribute to{" "}
            <strong>innovative projects</strong> that deliver meaningful and
            reliable digital experiences.
          </div>
        </div>
      </div>
      <div
        style={{
          marginTop: isMobile ? 6 : 10,
          padding: isMobile ? "1px 0" : "1px 0",
        }}
      >
        <h2
          style={{
            color: "#800080",
            fontWeight: 700,
            fontSize: isMobile ? "1.2rem" : "2rem",
            marginBottom: isMobile ? 10 : 16,
            textAlign: "center",
          }}
        >
          Why Choose Me?
        </h2>
        <ul
          style={{
            color: "#232b3e",
            fontSize: isMobile ? "0.98rem" : "1.15rem",
            paddingLeft: 0,
            lineHeight: 1.7,
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            gap: isMobile ? "18px" : "90px",
            listStyle: "none",
            justifyContent: isMobile ? "center" : "flex-start",
            alignItems: isMobile ? "center" : "flex-start",
            flexWrap: "wrap",
          }}
        >
          <li
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginRight: isMobile ? 0 : "8px",
            }}
          >
            <span
              style={{
                fontSize: isMobile ? "1.5rem" : "2.5rem",
                marginBottom: 10,
              }}
            >
              💻
            </span>
            <strong>Strong Technical Foundation</strong>
          </li>
          <li
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginRight: isMobile ? 0 : "8px",
            }}
          >
            <span
              style={{
                fontSize: isMobile ? "1.5rem" : "2.5rem",
                marginBottom: 10,
              }}
            >
              🧠
            </span>
            <strong>Proven Problem-solving Skills</strong>
          </li>
          <li
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginRight: isMobile ? 0 : "8px",
            }}
          >
            <span
              style={{
                fontSize: isMobile ? "1.5rem" : "2.5rem",
                marginBottom: 10,
              }}
            >
              🏆
            </span>
            <strong>Hands-on Internship Experience</strong>
          </li>
          <li
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginRight: isMobile ? 0 : "8px",
            }}
          >
            <span
              style={{
                fontSize: isMobile ? "1.5rem" : "2.5rem",
                marginBottom: 10,
              }}
            >
              🎓
            </span>
            <strong>Active Participation</strong>
          </li>
          <li
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginRight: isMobile ? 0 : "8px",
            }}
          >
            <span
              style={{
                fontSize: isMobile ? "1.5rem" : "2.5rem",
                marginBottom: 10,
              }}
            >
              ✨
            </span>
            <strong>Dedication, Creativity, and Passion</strong>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
