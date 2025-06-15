import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import "./App.css";
import fotoCV from "./assets/AbrilMaciFotoCV.jpg";

const projects = [
  {
    nombre: "Blog DDW UADE",
    descripcion: "Mi blog personal para Diseño y Desarrollo Web",
    link: "https://amaci003.github.io/blog-ddw-uade/#/",
  },
  {
    nombre: "Juego Interactivo de TATETI",
    descripcion: "Un juego de tatetí simple hecho con React",
    link: "https://amaci003.github.io/DDW-tateti/",
  },
  {
    nombre: "Proyecto 3",
    descripcion: "Pendiente de publicar en GitHub Pages",
    link: "#",
  },
];

function App() {
  return (
    <div className="app-container">
      <header className="header">
        <img src={fotoCV} alt="Abril Maci" className="foto-cv" />
        <h1>Abril Maci</h1>
        <p className="descripcion">
          Soy estudiante de Gestión de Personas en Organizaciones de Tecnología
          de la Información, y trabajo como Full Stack Developer.
        </p>

        <div className="botones">
          <a
            href="/abril-maci-cv.pdf"
            download
            className="cv-button"
            target="_blank"
            rel="noreferrer"
          >
            Descargar CV
          </a>
          <a href="/contacto" className="contact-button">
            Contactame
          </a>
        </div>

        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/abril-maci-663179254/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Abril Maci"
          >
            <LinkedInIcon fontSize="large" />
          </a>
          <a
            href="https://www.instagram.com/abrilmaci/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram Abril Maci"
          >
            <InstagramIcon fontSize="large" />
          </a>
        </div>
      </header>

      <main className="projects-container">
        <h2>Mis Proyectos</h2>
        <div className="project-list">
          {projects.map((p, i) => (
            <div key={i} className="project-card">
              <h3>{p.nombre}</h3>
              <p>{p.descripcion}</p>
              {p.link !== "#" ? (
                <a href={p.link} target="_blank" rel="noopener noreferrer">
                  Ver proyecto
                </a>
              ) : (
                <span className="coming-soon">Próximamente</span>
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
