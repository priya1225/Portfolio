import { useRef, useState, useEffect } from "react";
import { Abouts, Banner } from "../../assets";
import { useMediaQuery } from "@mantine/hooks";
import { Divider, Title } from "@mantine/core";
import {
  IconCode,
  IconBulb,
  IconTrophy,
  IconSchool,
  IconUsers,
  IconHeart,
} from "@tabler/icons-react";

function useInView(threshold = 0.12) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

const whyItems = [
  {
    icon: IconCode,
    title: "Strong Technical Foundation",
    desc: "Proficient in React JS, JavaScript, Tailwind CSS, Redux, and modern web tools.",
    color: "#7c3aed",
  },
  {
    icon: IconBulb,
    title: "Proven Problem-Solving",
    desc: "Break down complex challenges and deliver efficient, scalable solutions.",
    color: "#0891b2",
  },
  {
    icon: IconTrophy,
    title: "Hands-on Experience",
    desc: "1.8 years building full-featured portals, dashboards, and API-integrated apps.",
    color: "#d97706",
  },
  {
    icon: IconSchool,
    title: "Strong Academic Background",
    desc: "MCA 9.6/10 & BCA 8.2/10 — solid theoretical base behind every skill.",
    color: "#059669",
  },
  {
    icon: IconUsers,
    title: "Team & Client Collaboration",
    desc: "Experienced with teams and stakeholders to deliver user-centric solutions.",
    color: "#db2777",
  },
  {
    icon: IconHeart,
    title: "Dedication & Passion",
    desc: "Full commitment to every project — from pixel-perfect UI to seamless UX.",
    color: "#800080",
  },
];

// Duplicate for seamless infinite loop
const whyTrack = [...whyItems, ...whyItems];

function WhyChooseMe({ isMobile }) {
  const [titleRef, titleInView] = useInView(0.1);

  return (
    <div style={{ marginTop: isMobile ? 32 : 56 }}>
      {/* Title */}
      <div
        ref={titleRef}
        style={{
          opacity: titleInView ? 1 : 0,
          transform: titleInView ? "translateY(0)" : "translateY(30px)",
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
          WHY CHOOSE ME ?
          <Divider
            size="sm"
            style={{
              width: isMobile ? 180 : 400,
              margin: "20px auto 0 auto",
              borderTop: "3px solid #800080",
              marginBottom: isMobile ? 28 : 48,
            }}
          />
        </Title>
      </div>

      {/* Marquee row — full viewport width */}
      <div
        style={{
          position: "relative",
          overflow: "hidden",
          padding: isMobile ? "8px 0 0" : "10px 0 0",
          width: "100vw",
          marginLeft: "calc(-50vw + 50%)",
        }}
      >
        {/* Left fade */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: isMobile ? 48 : 120,
            background: "linear-gradient(to right, #f8f9fa 10%, transparent 100%)",
            zIndex: 2,
            pointerEvents: "none",
          }}
        />
        {/* Right fade */}
        <div
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            bottom: 0,
            width: isMobile ? 48 : 120,
            background: "linear-gradient(to left, #f8f9fa 10%, transparent 100%)",
            zIndex: 2,
            pointerEvents: "none",
          }}
        />

        {/* Scrolling track */}
        <div className="why-marquee-track">
          {whyTrack.map((item, idx) => (
            <div
              key={idx}
              className="why-marquee-card"
              style={{
                display: "inline-flex",
                flexDirection: "column",
                gap: 12,
                background: "#fff",
                border: `1.5px solid ${item.color}30`,
                borderRadius: 18,
                padding: isMobile ? "18px 16px" : "22px 24px",
                marginRight: isMobile ? 14 : 20,
                boxShadow: `0 3px 14px ${item.color}14`,
                width: isMobile ? 220 : 280,
                minWidth: isMobile ? 220 : 280,
                flexShrink: 0,
                verticalAlign: "top",
                cursor: "default",
                transition: "transform 0.26s ease, box-shadow 0.26s ease",
              }}
            >
              {/* Top bar accent */}
              <div
                style={{
                  height: 3,
                  width: 40,
                  borderRadius: 999,
                  background: item.color,
                  marginBottom: 4,
                }}
              />
              {/* Icon circle */}
              <div
                className="why-icon-circle"
                style={{
                  width: isMobile ? 44 : 52,
                  height: isMobile ? 44 : 52,
                  borderRadius: "50%",
                  background: `${item.color}18`,
                  border: `2px solid ${item.color}40`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "transform 0.32s cubic-bezier(0.34,1.4,0.64,1)",
                }}
              >
                <item.icon size={isMobile ? 22 : 26} color={item.color} stroke={1.6} />
              </div>
              {/* Title */}
              <h3
                style={{
                  margin: 0,
                  fontSize: isMobile ? "0.92rem" : "1rem",
                  fontWeight: 700,
                  color: "#1a1a2e",
                  lineHeight: 1.3,
                }}
              >
                {item.title}
              </h3>
              {/* Desc */}
              <p
                style={{
                  margin: 0,
                  fontSize: isMobile ? "0.78rem" : "0.84rem",
                  color: "#6c757d",
                  lineHeight: 1.6,
                }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes why-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .why-marquee-track {
          display: inline-flex;
          width: max-content;
          animation: why-scroll 28s linear infinite;
        }
        .why-marquee-track:hover {
          animation-play-state: paused;
        }
        .why-marquee-card:hover {
          transform: translateY(-6px) scale(1.03);
          box-shadow: 0 14px 36px rgba(128,0,128,0.14) !important;
        }
        .why-marquee-card:hover .why-icon-circle {
          transform: scale(1.2) rotate(-8deg);
        }
      `}</style>
    </div>
  );
}

const About = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <div
      style={{
        maxWidth: 1460,
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
          <div style={{ color: "#232b3e", fontSize: isMobile ? "1rem" : "1.2rem" }}>
            Hello! I'm <strong>Priyadarshini V</strong>, a Junior Software Developer from
            <strong> Krishnagiri</strong>, currently working at{" "}
            <strong>Annz Technology, Chennai</strong>. I hold a
            <strong> Master of Computer Applications (CGPA: 9.6/10)</strong>{" "}
            from Adhiyamaan College of Engineering and a{" "}
            <strong>Bachelor of Computer Applications (CGPA: 8.2/10)</strong>{" "}
            from Gonzaga College of Arts & Science for Women.
          </div>
          <div style={{ color: "#232b3e", fontSize: isMobile ? "1rem" : "1.2rem" }}>
            With <strong>1.8 years of hands-on experience</strong> in web development, I
            specialize in front-end technologies and excel at designing user-friendly,
            functional, and API-integrated solutions. I enjoy tackling complex problems to
            deliver efficient, scalable, and high-quality software.
          </div>
          <div style={{ color: "#232b3e", fontSize: isMobile ? "1rem" : "1.2rem" }}>
            My professional journey includes internships as a{" "}
            <strong>Mobile Application Developer Intern</strong> at{" "}
            <strong>Primus Global Technologies , Bangalore</strong> (March 2024 – May 2024)
            and a <strong>Software Trainee Intern</strong> at{" "}
            <strong>Vividobots Private Limited, Chennai</strong> (January 2024 – February
            2024). These experiences allowed me to strengthen my skills in real-time project
            development and practical implementation of innovative solutions.
          </div>
          <div style={{ color: "#232b3e", fontSize: isMobile ? "1rem" : "1.2rem" }}>
            I have actively participated in{" "}
            <strong>multiple national-level conferences and symposiums</strong>, earning
            several certifications, and have successfully completed{" "}
            <strong>numerous real-world projects</strong> that showcase my dedication,
            creativity, and technical expertise.
          </div>
          <div style={{ color: "#232b3e", fontSize: isMobile ? "1rem" : "1.2rem" }}>
            Passionate about building impactful software, I aim to contribute to{" "}
            <strong>innovative projects</strong> that deliver meaningful and reliable digital
            experiences.
          </div>
        </div>
      </div>

      <WhyChooseMe isMobile={isMobile} />
    </div>
  );
};

export default About;
