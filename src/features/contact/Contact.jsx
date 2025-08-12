import React from "react";
import { Title, Divider, Box } from "@mantine/core";
import { IconBrandLinkedin, IconBrandInstagram } from "@tabler/icons-react";
import { ContactBg } from "../../assets";
import { useMediaQuery } from "@mantine/hooks";

const cardStyle = (isMobile) => ({
  border: "1px solid #ddd",
  borderRadius: "8px",
  padding: isMobile ? "12px" : "16px",
  marginBottom: "16px",
  background: "#fff",
  minWidth: isMobile ? "auto" : "350px",
  marginTop: "16px",
  maxWidth: isMobile ? "100%" : "450px",
  flex: 1,
  color: "#800080",
});

const Contact = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  const [form, setForm] = React.useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Contact from Portfolio: ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=priyashalini1225@gmail.com&su=${subject}&body=${body}`;
    window.open(gmailUrl, "_blank");
  };

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
        CONTACT ME
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
        my={isMobile ? 24 : 50}
        style={{
          paddingLeft: isMobile ? 8 : 50,
          paddingRight: isMobile ? 8 : 40,
          marginLeft: isMobile ? 0 : 24,
          marginRight: isMobile ? 0 : 24,
          width: "auto",
          maxWidth: "100vw",
          backgroundImage: `url(${ContactBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: isMobile ? "auto" : "70vh",
          borderRadius: isMobile ? 20 : 40,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            width: "100%",
            maxWidth: 1200,
            gap: isMobile ? 20 : 40,
            alignItems: "center",
            justifyContent: "space-between",
            padding: isMobile ? "16px 0" : 0,
          }}
        >
          <Box
            style={{
              display: "flex",
              gap: 16,
              flexDirection: "column",
              alignItems: isMobile ? "center" : "flex-start",
              justifyContent: "center",
              width: isMobile ? "100%" : "50%",
              flexWrap: "nowrap",
              textAlign: "center",
              minWidth: isMobile ? "auto" : 300,
              maxWidth: isMobile ? "100%" : 400,
            }}
          >
            <div style={cardStyle(isMobile)}>
              <h2 style={{ fontSize: "1.2rem", marginBottom: 8, marginTop: 0 }}>
                Contact Address
              </h2>
              <Divider mb={12} />
              <div style={{ color: "#000" }}>Ms.V Priyadarshini</div>
              <div style={{ color: "#000" }}>
                Krishnagiri, Tamil Nadu, India
              </div>
            </div>
            <div style={cardStyle(isMobile)}>
              <h2 style={{ fontSize: "1.2rem", marginBottom: 8, marginTop: 0 }}>
                Email ID
              </h2>
              <Divider mb={12} />
              <div>
                <a
                  href="https://mail.google.com/mail/?view=cm&to=priyashalini1225@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "black",
                    textDecoration: "none",
                  }}
                >
                  priyashalini1225@gmail.com
                </a>
              </div>
            </div>
            <div style={cardStyle(isMobile)}>
              <h2 style={{ fontSize: "1.2rem", marginBottom: 8, marginTop: 0 }}>
                Phone Number
              </h2>
              <Divider mb={12} />
              <div>
                <a
                  href="tel:+916380228902"
                  style={{ color: "black", textDecoration: "none" }}
                >
                  +91 6380228902
                </a>
              </div>
            </div>
            <div style={cardStyle(isMobile)}>
              <h2 style={{ fontSize: "1.2rem", marginBottom: 8, marginTop: 0 }}>
                Social Media
              </h2>
              <Divider mb={12} />
              <ul style={{ paddingLeft: 2, margin: 0, listStyle: "none" }}>
                <li
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    justifyContent: "center",
                    width: "100%",
                  }}
                >
                  <IconBrandLinkedin size={24} color="#0A66C2" />
                  <a
                    href="https://www.linkedin.com/in/priyadarshini-venkatesan1225?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "black", textDecoration: "none" }}
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </Box>
          <Box
            style={{
              background: "#fff",
              borderRadius: 16,
              boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
              padding: isMobile ? 16 : 32,
              marginTop: "16px",
              minWidth: isMobile ? "auto" : 520,
              maxWidth: isMobile ? "100%" : 600,
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: 16,
            }}
          >
            <h2
              style={{
                color: "#800080",
                marginBottom: 8,
                marginTop: 0,
                textAlign: "center",
              }}
            >
              Let's Get in Touch!!!
            </h2>
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: 12 }}>
                <label
                  style={{
                    display: "block",
                    marginBottom: 4,
                    color: "black",
                    fontWeight: 700,
                  }}
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  style={{
                    width: "100%",
                    padding: "8px",
                    borderRadius: 4,
                    border: "1px solid #ccc",
                  }}
                  required
                />
              </div>
              <div style={{ marginBottom: 12 }}>
                <label
                  style={{
                    display: "block",
                    marginBottom: 4,
                    color: "black",
                    fontWeight: 700,
                  }}
                >
                  Email ID
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  style={{
                    width: "100%",
                    padding: "8px",
                    borderRadius: 4,
                    border: "1px solid #ccc",
                  }}
                  required
                />
              </div>
              <div style={{ marginBottom: 16 }}>
                <label
                  style={{
                    display: "block",
                    marginBottom: 4,
                    color: "black",
                    fontWeight: 700,
                  }}
                >
                  Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  style={{
                    width: "100%",
                    padding: "8px",
                    borderRadius: 4,
                    border: "1px solid #ccc",
                  }}
                  required
                />
              </div>
              <button
                type="submit"
                style={{
                  background: "#800080",
                  color: "#fff",
                  border: "none",
                  borderRadius: 4,
                  padding: "10px 24px",
                  fontWeight: 600,
                  alignItems: "center",
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                  fontSize: "1rem",
                  cursor: "pointer",
                }}
              >
                Submit
              </button>
            </form>
          </Box>
        </div>
      </Box>
    </>
  );
};

export default Contact;
