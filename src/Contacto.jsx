import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

function Contacto() {
  return (
    <>
      <div className="header-contacto">
        <Link to="/" className="boton-volver-inicio">Volver al Portfolio</Link>
      </div>

      <div className="contacto">
        <h2>Contactame</h2>
        <p style={{ marginTop: "-15px", marginBottom: "25px", color: "#7c5048" }}>
          Estoy abierta a nuevas oportunidades y colaboraciones 
        </p>

        <form
          action="https://formspree.io/f/mnnvvpgl"
          method="POST"
        >
          <input type="text" name="nombre" placeholder="Tu nombre" required />
          <input type="email" name="email" placeholder="Tu email" required />
          <textarea name="mensaje" placeholder="Tu mensaje" required></textarea>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </>
  );
}

export default Contacto;
