import { Divider, Title } from "@mantine/core";
import {
  IconHeartbeat,
  IconScale,
  IconClipboardList,
  IconBriefcase,
  IconAward,
  IconCards,
  IconAmbulance,
  IconShieldLock,
  IconRobot,
} from "@tabler/icons-react";
import React from "react";
import { useMediaQuery } from "@mantine/hooks";
import { useInView } from "../../hooks/useInView";

const projects = [
  {
    name: "Healthcare Project",
    description: "Patient record management system with appointment booking, prescriptions, and secure data access. Admin portal for managing healthcare staff and records.",
    features: ["Admin Portal", "Web Portal", "Commercial Website"],
    icon: IconHeartbeat,
    color: "#e11d48",
    bg: "linear-gradient(135deg, #fff1f2, #ffe4e6)",
  },
  {
    name: "Lawyer Project",
    description: "Specialized dashboards for legal case tracking, document management, and admin-level configurations for law firms.",
    features: ["Admin Portal", "Web Portal"],
    icon: IconScale,
    color: "#1d4ed8",
    bg: "linear-gradient(135deg, #eff6ff, #dbeafe)",
  },
  {
    name: "Survey Project",
    description: "Dynamic interfaces for Super Admin, Employee, and Survey portals. Includes authentication, data visualization, and real-time survey results.",
    features: ["Survey Portal", "Website", "Admin Portal", "Employee Portal"],
    icon: IconClipboardList,
    color: "#7c3aed",
    bg: "linear-gradient(135deg, #f5f3ff, #ede9fe)",
  },
  {
    name: "Project Management",
    description: "Company website with responsive UI, project highlights, and client showcase. Tracking dashboards, team collaboration, and task scheduling.",
    features: ["Admin Portal", "Web Portal", "Commercial Website"],
    icon: IconBriefcase,
    color: "#059669",
    bg: "linear-gradient(135deg, #ecfdf5, #d1fae5)",
  },
  {
    name: "Employee Reward Project",
    description: "Role-based admin dashboard for managing rewards and recognition. Secure login, approval workflows, and a responsive employee-facing portal.",
    features: ["Admin Portal", "Website"],
    icon: IconAward,
    color: "#d97706",
    bg: "linear-gradient(135deg, #fffbeb, #fef3c7)",
  },
  {
    name: "Ecard Project",
    description: "Interactive web application for sending digital greeting cards with image upload, custom messages, and animated success popup.",
    features: ["Web Application"],
    icon: IconCards,
    color: "#0891b2",
    bg: "linear-gradient(135deg, #ecfeff, #cffafe)",
  },
  {
    name: "Ambulance Service Project",
    description: "Comprehensive ambulance service management with real-time tracking, automated dispatching, and interfaces for patients and healthcare providers.",
    features: ["Admin Portal", "Web Portal"],
    icon: IconAmbulance,
    color: "#dc2626",
    bg: "linear-gradient(135deg, #fef2f2, #fee2e2)",
  },
  {
    name: "AI Security Application",
    description: "AI-powered security application for real-time threat detection. Integrated machine learning for anomaly detection and automated incident response.",
    features: ["Website"],
    icon: IconShieldLock,
    color: "#374151",
    bg: "linear-gradient(135deg, #f9fafb, #f3f4f6)",
  },
  {
    name: "AI Chatbot",
    description: "AI-powered chatbot for customer support with natural language processing for understanding user queries and providing intelligent responses.",
    features: ["Website"],
    icon: IconRobot,
    color: "#6d28d9",
    bg: "linear-gradient(135deg, #faf5ff, #ede9fe)",
  },
];

const Project = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isTablet = useMediaQuery("(max-width: 1024px)");
  const [titleRef, titleInView] = useInView(0.1);
  const [gridRef,  gridInView]  = useInView(0.04);

  const cols = isMobile ? 1 : isTablet ? 2 : 3;

  return (
    <>
      <style>{`
        .proj-card {
          background: #fff;
          border-radius: 16px;
          border: 1px solid #ede9f0;
          box-shadow: 0 2px 12px rgba(0,0,0,0.06);
          overflow: hidden;
          transition: transform 0.28s cubic-bezier(0.34,1.2,0.64,1),
                      box-shadow 0.28s ease;
          cursor: default;
          display: flex;
          flex-direction: column;
          height: 100%;
        }
        .proj-card:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 20px 48px rgba(0,0,0,0.13);
        }
        .proj-card:hover .proj-icon-wrap {
          transform: scale(1.15) rotate(-8deg);
        }
        .proj-icon-wrap {
          transition: transform 0.3s cubic-bezier(0.34,1.4,0.64,1);
          display: inline-flex;
        }
        .proj-tag {
          display: inline-block;
          padding: 3px 10px;
          border-radius: 999px;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.02em;
        }
      `}</style>

      {/* Title */}
      <div
        ref={titleRef}
        style={{
          opacity: titleInView ? 1 : 0,
          transform: titleInView ? "translateY(0)" : "translateY(40px)",
          transition: "opacity 0.7s ease, transform 0.7s ease",
        }}
      >
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
              borderTop: "3px solid #800080",
            }}
          />
          DEVELOPMENT
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

      {/* Grid */}
      <div
        ref={gridRef}
        style={{
          maxWidth: 1440,
          margin: "0 auto",
          width: "100%",
          display: "grid",
          gridTemplateColumns: `repeat(${cols}, 1fr)`,
          gap: isMobile ? 16 : 24,
          paddingLeft: isMobile ? 8 : 0,
          paddingRight: isMobile ? 8 : 0,
          paddingBottom: isMobile ? 32 : 56,
        }}
      >
        {projects.map((project, idx) => (
          <div
            key={idx}
            style={{
              opacity: gridInView ? 1 : 0,
              transform: gridInView
                ? "translateY(0) scale(1)"
                : "translateY(50px) scale(0.94)",
              transition: `opacity 0.6s ease ${idx * 0.07}s,
                           transform 0.6s cubic-bezier(0.34,1.1,0.64,1) ${idx * 0.07}s`,
            }}
          >
            <div className="proj-card">
              {/* Gradient header */}
              <div
                style={{
                  background: project.bg,
                  padding: isMobile ? "18px 16px 14px" : "22px 24px 16px",
                  borderBottom: `1px solid ${project.color}22`,
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  gap: 12,
                }}
              >
                <div>
                  {/* Number badge */}
                  <div
                    style={{
                      display: "inline-block",
                      background: project.color,
                      color: "#fff",
                      fontSize: 11,
                      fontWeight: 700,
                      padding: "2px 8px",
                      borderRadius: 999,
                      marginBottom: 8,
                      letterSpacing: "0.05em",
                    }}
                  >
                    #{String(idx + 1).padStart(2, "0")}
                  </div>
                  <div
                    style={{
                      fontWeight: 800,
                      fontSize: isMobile ? "1rem" : "1.1rem",
                      color: "#1a1a2e",
                      lineHeight: 1.3,
                    }}
                  >
                    {project.name}
                  </div>
                </div>
                {/* Icon */}
                <div
                  className="proj-icon-wrap"
                  style={{
                    width: isMobile ? 44 : 52,
                    height: isMobile ? 44 : 52,
                    borderRadius: "50%",
                    background: `${project.color}18`,
                    border: `2px solid ${project.color}40`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <project.icon size={isMobile ? 22 : 26} color={project.color} stroke={1.6} />
                </div>
              </div>

              {/* Body */}
              <div style={{ padding: isMobile ? "14px 16px 18px" : "18px 24px 22px", flex: 1, display: "flex", flexDirection: "column", gap: 12 }}>
                {/* Description */}
                <p
                  style={{
                    color: "#555",
                    fontSize: isMobile ? "0.85rem" : "0.92rem",
                    lineHeight: 1.65,
                    margin: 0,
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {project.description}
                </p>

                {/* Feature tags */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: "auto" }}>
                  {project.features.map((f, i) => (
                    <span
                      key={i}
                      className="proj-tag"
                      style={{
                        background: `${project.color}14`,
                        color: project.color,
                        border: `1px solid ${project.color}30`,
                      }}
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Project;
