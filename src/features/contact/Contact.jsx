import React, { useRef, useState, useEffect } from "react";
import { Title, Divider } from "@mantine/core";
import {
  IconMapPin,
  IconMail,
  IconPhone,
  IconBrandLinkedin,
  IconSend,
  IconUser,
  IconAt,
  IconMessageCircle,
} from "@tabler/icons-react";
import { useMediaQuery } from "@mantine/hooks";
import { useTheme } from "../../context/ThemeContext";

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

const Contact = () => {
  const { dark } = useTheme();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [titleRef, titleInView] = useInView(0.1);
  const [panelRef, panelInView] = useInView(0.06);

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [focused, setFocused] = useState({ name: false, email: false, message: false });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });
  const handleFocus = (name) =>
    setFocused((prev) => ({ ...prev, [name]: true }));
  const handleBlur = (name) =>
    setFocused((prev) => ({ ...prev, [name]: false }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Contact from Portfolio: ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );
    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=priyashalini1225@gmail.com&su=${subject}&body=${body}`,
      "_blank"
    );
  };

  const infoItems = [
    {
      icon: IconMapPin,
      label: "Location",
      value: "Krishnagiri, Tamil Nadu, India",
      href: null,
    },
    {
      icon: IconMail,
      label: "Email",
      value: "priyashalini1225@gmail.com",
      href: "mailto:priyashalini1225@gmail.com",
    },
    {
      icon: IconPhone,
      label: "Phone",
      value: "+91 6380228902",
      href: "tel:+916380228902",
    },
  ];

  const inputStyle = (name) => ({
    width: "100%",
    padding: "11px 14px 11px 42px",
    borderRadius: 10,
    border: `1.5px solid ${focused[name] ? "#800080" : "var(--pv-border)"}`,
    fontSize: "0.95rem",
    outline: "none",
    background: focused[name] ? "rgba(128,0,128,0.05)" : "var(--pv-bg)",
    color: "var(--pv-text)",
    boxShadow: focused[name] ? "0 0 0 3px rgba(128,0,128,0.10)" : "none",
    transition: "border 0.22s, box-shadow 0.22s, background 0.22s",
    boxSizing: "border-box",
  });

  return (
    <>
      {/* Section Title */}
      <div
        ref={titleRef}
        style={{
          opacity: titleInView ? 1 : 0,
          transform: titleInView ? "translateY(0)" : "translateY(30px)",
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
          CONTACT ME
          <Divider
            size="sm"
            style={{
              width: isMobile ? 180 : 400,
              margin: "20px auto 0 auto",
              borderTop: "3px solid #800080",
              marginBottom: isMobile ? 24 : 44,
            }}
          />
        </Title>
      </div>

      {/* Main split card */}
      <div
        ref={panelRef}
        style={{
          maxWidth: 1460,
          margin: "0 auto",
          padding: isMobile ? "0 10px 48px" : "0 24px 72px",
          opacity: panelInView ? 1 : 0,
          transform: panelInView ? "translateY(0)" : "translateY(48px)",
          transition: "opacity 0.7s ease 0.1s, transform 0.7s cubic-bezier(0.34,1.1,0.64,1) 0.1s",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            borderRadius: isMobile ? 20 : 28,
            overflow: "hidden",
            boxShadow: "0 24px 64px rgba(128,0,128,0.16)",
            minHeight: isMobile ? "auto" : 560,
          }}
        >
          {/* ── Left dark panel ── */}
          <div
            style={{
              width: isMobile ? "100%" : "38%",
              background: dark ? "#050608" : "linear-gradient(150deg, #2d1b4e 0%, #800080 100%)",
              padding: isMobile ? "32px 24px" : "52px 40px",
              display: "flex",
              flexDirection: "column",
              gap: isMobile ? 24 : 36,
              color: "#fff",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* decorative circles */}
            <div
              style={{
                position: "absolute",
                top: -40,
                right: -40,
                width: 160,
                height: 160,
                borderRadius: "50%",
                background: "rgba(255,255,255,0.06)",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: -60,
                left: -30,
                width: 200,
                height: 200,
                borderRadius: "50%",
                background: "rgba(255,255,255,0.04)",
              }}
            />

            {/* Heading */}
            <div style={{ position: "relative" }}>
              <h2
                style={{
                  margin: 0,
                  fontSize: isMobile ? "1.5rem" : "1.8rem",
                  fontWeight: 800,
                  lineHeight: 1.25,
                }}
              >
                Get In Touch
              </h2>
              <p
                style={{
                  margin: "10px 0 0",
                  color: "rgba(255,255,255,0.7)",
                  fontSize: isMobile ? "0.88rem" : "0.95rem",
                  lineHeight: 1.6,
                }}
              >
                I'm open to new opportunities and collaborations.
                <br />
                Feel free to reach out — I'd love to connect!
              </p>
            </div>

            {/* Info items */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: isMobile ? 18 : 24,
                position: "relative",
              }}
            >
              {infoItems.map((item, i) => (
                <div key={i} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      minWidth: 40,
                      borderRadius: "50%",
                      background: "rgba(255,255,255,0.15)",
                      border: "1.5px solid rgba(255,255,255,0.25)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <item.icon size={18} color="#fff" stroke={1.8} />
                  </div>
                  <div>
                    <div
                      style={{
                        color: "rgba(255,255,255,0.55)",
                        fontSize: 11,
                        fontWeight: 600,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        marginBottom: 3,
                      }}
                    >
                      {item.label}
                    </div>
                    {item.href ? (
                      <a
                        href={item.href}
                        style={{
                          color: "#fff",
                          textDecoration: "none",
                          fontSize: isMobile ? "0.85rem" : "0.92rem",
                          fontWeight: 500,
                        }}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <div
                        style={{
                          color: "#fff",
                          fontSize: isMobile ? "0.85rem" : "0.92rem",
                          fontWeight: 500,
                        }}
                      >
                        {item.value}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* LinkedIn */}
            <div style={{ position: "relative" }}>
              <div
                style={{
                  color: "rgba(255,255,255,0.55)",
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  marginBottom: 12,
                }}
              >
                Social
              </div>
              <a
                href="https://www.linkedin.com/in/priyadarshini-venkatesan1225"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social-btn"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  background: "rgba(255,255,255,0.12)",
                  border: "1.5px solid rgba(255,255,255,0.25)",
                  borderRadius: 999,
                  padding: "8px 20px",
                  color: "#fff",
                  textDecoration: "none",
                  fontSize: "0.88rem",
                  fontWeight: 600,
                  transition: "background 0.22s, transform 0.22s",
                }}
              >
                <IconBrandLinkedin size={20} color="#fff" />
                LinkedIn
              </a>
            </div>
          </div>

          {/* ── Right form panel ── */}
          <div
            style={{
              flex: 1,
              background: "var(--pv-surface)",
              padding: isMobile ? "32px 20px" : "52px 44px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <h2
              style={{
                margin: "0 0 6px",
                fontSize: isMobile ? "1.3rem" : "1.6rem",
                fontWeight: 800,
                color: "var(--pv-text)",
              }}
            >
              Let's Build Something Great!
            </h2>
            <p
              style={{
                margin: "0 0 28px",
                color: "var(--pv-text-soft)",
                fontSize: isMobile ? "0.85rem" : "0.92rem",
              }}
            >
              Send me a message and I'll get back to you shortly.
            </p>

            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              {/* Name */}
              <div style={{ position: "relative" }}>
                <label
                  style={{
                    display: "block",
                    marginBottom: 6,
                    color: "var(--pv-text-muted)",
                    fontWeight: 600,
                    fontSize: "0.88rem",
                  }}
                >
                  Full Name
                </label>
                <div style={{ position: "relative" }}>
                  <IconUser
                    size={16}
                    color={focused.name ? "#800080" : "#aaa"}
                    style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", transition: "color 0.22s" }}
                  />
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your Name"
                    value={form.name}
                    onChange={handleChange}
                    onFocus={() => handleFocus("name")}
                    onBlur={() => handleBlur("name")}
                    style={inputStyle("name")}
                    required
                  />
                </div>
              </div>

              <div style={{ position: "relative" }}>
                <label
                  style={{
                    display: "block",
                    marginBottom: 6,
                    color: "var(--pv-text-muted)",
                    fontWeight: 600,
                    fontSize: "0.88rem",
                  }}
                >
                  Email Address
                </label>
                <div style={{ position: "relative" }}>
                  <IconAt
                    size={16}
                    color={focused.email ? "#800080" : "#aaa"}
                    style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", transition: "color 0.22s" }}
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your Email Id"
                    value={form.email}
                    onChange={handleChange}
                    onFocus={() => handleFocus("email")}
                    onBlur={() => handleBlur("email")}
                    style={inputStyle("email")}
                    required
                  />
                </div>
              </div>

              {/* Message */}
              <div style={{ position: "relative" }}>
                <label
                  style={{
                    display: "block",
                    marginBottom: 6,
                    color: "var(--pv-text-muted)",
                    fontWeight: 600,
                    fontSize: "0.88rem",
                  }}
                >
                  Message
                </label>
                <div style={{ position: "relative" }}>
                  <IconMessageCircle
                    size={16}
                    color={focused.message ? "#800080" : "#aaa"}
                    style={{ position: "absolute", left: 14, top: 13, transition: "color 0.22s" }}
                  />
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Tell me about your suggestions..."
                    value={form.message}
                    onChange={handleChange}
                    onFocus={() => handleFocus("message")}
                    onBlur={() => handleBlur("message")}
                    style={{
                      ...inputStyle("message"),
                      padding: "11px 14px 11px 42px",
                      resize: "vertical",
                      minHeight: 110,
                    }}
                    required
                  />
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="contact-submit-btn"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 10,
                  background: "linear-gradient(135deg, #800080, #6a006a)",
                  color: "#fff",
                  border: "none",
                  borderRadius: 12,
                  padding: isMobile ? "12px 24px" : "14px 28px",
                  fontWeight: 700,
                  fontSize: "1rem",
                  cursor: "pointer",
                  marginTop: 4,
                  boxShadow: "0 6px 24px rgba(128,0,128,0.28)",
                  transition: "transform 0.22s, box-shadow 0.22s",
                }}
              >
                <IconSend size={18} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        .contact-social-btn:hover {
          background: rgba(255,255,255,0.22) !important;
          transform: translateY(-2px);
        }
        .contact-submit-btn:hover {
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 12px 32px rgba(128,0,128,0.38) !important;
        }
        .contact-submit-btn:active {
          transform: translateY(0) scale(0.98);
        }
      `}</style>
    </>
  );
};

export default Contact;
