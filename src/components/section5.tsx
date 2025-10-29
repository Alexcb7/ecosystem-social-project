import React from 'react';
import '../section5.css';
import { Globe2 } from 'lucide-react'; // icono de la tierra

export default function Section5() {
  return (
    <section className="section5">
      <div className="container-section5">
        <Globe2 className="section5-icon" />
        <h2 className="titulo_section5">
          ¡Cambiemos esta estadística!
        </h2>
        <p className="descripcion_section5">
          Únete a la causa por la prevención y conservación de los ecosistemas.
          Cada acción cuenta. Juntos podemos frenar la pérdida de biodiversidad y proteger nuestro planeta.
        </p>
        <button className="cta-section5">
          Súmate a la causa
        </button>
      </div>
    </section>
  );
}