import "./App.css";
import '@mantine/core/styles.css';
import Home from "./features/home/Home";
import HomePage from "./features/home/HomePage";
import About from "./features/about/About";
import Service from "./features/service/Service";
import { MantineProvider } from "@mantine/core";
import { Routes, Route, Outlet } from "react-router-dom";
import Skills from "./features/skills/Skills";
import Contact from "./features/contact/Contact";
import Experience from "./features/experience/Experience";
import Project from "./features/project/Project";

function Layout() {
  return (
    <>
      <Home />
      <div style={{ marginTop: 16 }}>
        <Outlet />
      </div>
    </>
  );
}

function App() {
  return (
    <MantineProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="home" element={<HomePage />} />
          <Route path="about" element={<About />} />
          <Route path="service" element={<Service />} />
          <Route path="skill" element={<Skills />} />
          <Route path="contact" element={<Contact />} />
          <Route path="experience" element={<Experience />} />
          <Route path="project" element={<Project />} />
        </Route>
      </Routes>
    </MantineProvider>
  );
}

export default App;
