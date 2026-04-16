import React from "react";
import { useMediaQuery } from "@mantine/hooks";
import { useInView } from "../../hooks/useInView";
import { Divider, Title } from "@mantine/core";
import {
  IconBriefcase,
  IconCube,
  IconDatabase,
  IconDeviceLaptop,
  IconBug,
  IconFileDescription,
  IconChartBar,
  IconWand,
  IconWorldWww,
} from "@tabler/icons-react";

const services = [
  {
    icon: IconBriefcase,
    title: "Unique Design",
    desc: "Visually original designs tailored to your brand — making your site stand out and leave a lasting impression.",
    color: "#c084fc",
    gradient: "linear-gradient(135deg, #c084fc, #818cf8)",
  },
  {
    icon: IconCube,
    title: "Different Layout",
    desc: "Custom layouts built for your goals — intuitive navigation and a seamless experience on every device.",
    color: "#60a5fa",
    gradient: "linear-gradient(135deg, #60a5fa, #34d399)",
  },
  {
    icon: IconDatabase,
    title: "API Integration",
    desc: "Powerful API and database integrations for dynamic content, seamless data flow, and rich functionality.",
    color: "#34d399",
    gradient: "linear-gradient(135deg, #34d399, #22d3ee)",
  },
  {
    icon: IconDeviceLaptop,
    title: "Responsiveness",
    desc: "Pixel-perfect across desktops, tablets, and mobiles — every screen size considered and tested.",
    color: "#fbbf24",
    gradient: "linear-gradient(135deg, #fbbf24, #f97316)",
  },
  {
    icon: IconBug,
    title: "Testing for Perfection",
    desc: "Rigorous testing across every feature to guarantee a bug-free, secure, high-performance result.",
    color: "#f87171",
    gradient: "linear-gradient(135deg, #f87171, #fb923c)",
  },
  {
    icon: IconFileDescription,
    title: "Make it Simple",
    desc: "Clean, simple solutions that are intuitive to use and easy to maintain — clarity over complexity.",
    color: "#22d3ee",
    gradient: "linear-gradient(135deg, #22d3ee, #60a5fa)",
  },
  {
    icon: IconChartBar,
    title: "State Management",
    desc: "Robust state management with Redux and Context API for smooth data flow in complex applications.",
    color: "#a78bfa",
    gradient: "linear-gradient(135deg, #a78bfa, #c084fc)",
  },
  {
    icon: IconWand,
    title: "Animation & Interactivity",
    desc: "Smooth animations and interactive elements that elevate engagement and make the experience memorable.",
    color: "#f472b6",
    gradient: "linear-gradient(135deg, #f472b6, #c084fc)",
  },
  {
    icon: IconWorldWww,
    title: "Cross-Browser Compatibility",
    desc: "Flawless functionality across all major browsers — consistent for every user, everywhere.",
    color: "#4ade80",
    gradient: "linear-gradient(135deg, #4ade80, #22d3ee)",
  },
];

const Service = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isTablet = useMediaQuery("(max-width: 1024px)");
  const [titleRef, titleInView] = useInView(0.1);
  const [gridRef, gridInView] = useInView(0.04);

  const cols = isMobile ? 1 : isTablet ? 2 : 3;

  return (
    <div
      style={{
        background: "var(--pv-bg)",
        paddingTop: isMobile ? 48 : 72,
        paddingBottom: isMobile ? 48 : 80,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <style>{`
        @keyframes svcBlobFloat {
          0%, 100% { transform: scale(1) translate(0, 0); }
          50%       { transform: scale(1.08) translate(12px, -16px); }
        }
        .svc2-card {
          position: relative;
          background: var(--pv-surface);
          border: 1px solid var(--pv-border);
          border-radius: 20px;
          padding: ${isMobile ? "24px 20px" : "30px 26px"};
          cursor: default;
          overflow: hidden;
          height: 100%;
          box-sizing: border-box;
          box-shadow: 0 2px 12px rgba(0,0,0,0.05);
          transition: transform 0.3s cubic-bezier(0.34,1.2,0.64,1),
                      box-shadow 0.3s ease,
                      border-color 0.3s ease;
        }
        .svc2-card:hover {
          transform: translateY(-10px);
          background: var(--pv-surface);
        }
        .svc2-num {
          position: absolute;
          top: -10px;
          right: 14px;
          font-size: ${isMobile ? "4.5rem" : "5.5rem"};
          font-weight: 900;
          line-height: 1;
          color: var(--pv-text);
          opacity: 0.05;
          user-select: none;
          pointer-events: none;
          transition: color 0.3s ease;
          font-family: 'Arial Black', sans-serif;
          letter-spacing: -4px;
        }
        .svc2-card:hover .svc2-num { color: rgba(0,0,0,0.07); }
        .svc2-top-bar {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          border-radius: 20px 20px 0 0;
          opacity: 0.7;
          transition: opacity 0.3s ease;
        }
        .svc2-card:hover .svc2-top-bar { opacity: 1; }
        .svc2-icon-wrap {
          transition: transform 0.35s cubic-bezier(0.34,1.4,0.64,1);
        }
        .svc2-card:hover .svc2-icon-wrap {
          transform: scale(1.18) rotate(-8deg);
        }
        .svc2-title {
          color: var(--pv-text);
          margin: 0 0 10px;
          font-size: ${isMobile ? "0.98rem" : "1.08rem"};
          font-weight: 700;
          line-height: 1.3;
        }
        .svc2-desc {
          color: var(--pv-text-soft);
          margin: 0;
          font-size: ${isMobile ? "0.8rem" : "0.84rem"};
          line-height: 1.72;
          transition: color 0.3s ease;
        }
        .svc2-card:hover .svc2-desc { color: var(--pv-text); }
      `}</style>

      {/* Background blobs */}
      <div style={{
        position: "absolute", top: -160, left: -160,
        width: 500, height: 500, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(192,132,252,0.10) 0%, transparent 70%)",
        animation: "svcBlobFloat 8s ease-in-out infinite",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: -140, right: -140,
        width: 460, height: 460, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(96,165,250,0.08) 0%, transparent 70%)",
        animation: "svcBlobFloat 10s 2s ease-in-out infinite",
        pointerEvents: "none",
      }} />

      <div style={{
        maxWidth: 1460,
        margin: "0 auto",
        paddingLeft: isMobile ? 14 : 40,
        paddingRight: isMobile ? 14 : 40,
      }}>

        {/* Section header */}
        <div
          ref={titleRef}
          style={{
            opacity: titleInView ? 1 : 0,
            transform: titleInView ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          <Title align="center" order={2} style={{ fontWeight: 700, marginTop: isMobile ? 24 : 40, marginBottom: isMobile ? 36 : 56 }}>
            <Divider
              size="sm"
              style={{
                width: isMobile ? 180 : 400,
                margin: "0 auto 20px auto",
                borderTop: "3px solid #800080",
              }}
            />
            AREAS OF FOCUS
            <Divider
              size="sm"
              style={{
                width: isMobile ? 180 : 400,
                margin: "20px auto 0 auto",
                borderTop: "3px solid #800080",
              }}
            />
          </Title>
        </div>

        {/* Card grid */}
        <div
          ref={gridRef}
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${cols}, 1fr)`,
            gap: isMobile ? 14 : 20,
          }}
        >
          {services.map((service, idx) => (
            <div
              key={idx}
              style={{
                opacity: gridInView ? 1 : 0,
                transform: gridInView ? "translateY(0) scale(1)" : "translateY(40px) scale(0.95)",
                transition: `opacity 0.55s ease ${idx * 0.07}s, transform 0.55s cubic-bezier(0.34,1.1,0.64,1) ${idx * 0.07}s`,
              }}
            >
              <div
                className="svc2-card"
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = `${service.color}55`;
                  e.currentTarget.style.boxShadow = `0 20px 50px ${service.color}22, 0 0 0 1px ${service.color}33`;
                }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--pv-border)";
                    e.currentTarget.style.boxShadow = "0 2px 12px rgba(0,0,0,0.05)";
                  }}
              >
                <div className="svc2-top-bar" style={{ background: service.gradient }} />
                <div className="svc2-num">{String(idx + 1).padStart(2, "0")}</div>

                <div
                  className="svc2-icon-wrap"
                  style={{
                    width: isMobile ? 48 : 56,
                    height: isMobile ? 48 : 56,
                    borderRadius: 14,
                    background: `${service.color}18`,
                    border: `1.5px solid ${service.color}40`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 18,
                    boxShadow: `0 4px 20px ${service.color}25`,
                  }}
                >
                  <service.icon size={isMobile ? 22 : 26} color={service.color} stroke={1.6} />
                </div>

                <h3 className="svc2-title">{service.title}</h3>
                <p className="svc2-desc">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
