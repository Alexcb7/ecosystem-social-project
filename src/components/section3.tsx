import React from "react";
import "../section3.css";

import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from "../components/ui/hover-card";

import { TreeDeciduous, Factory, Sun, Droplet, Flame, Skull } from "lucide-react";

const HoverItem: React.FC<{
  title: string;
  children: React.ReactNode;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
}> = ({ title, children, Icon }) => {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <button className="hover-item" aria-label={title}>
          <div className="hover-item-left">
            <Icon className="hover-icon" />
            <span className="hover-title">{title}</span>
          </div>
          <span className="hover-cta">Más</span>
        </button>
      </HoverCardTrigger>
      <HoverCardContent
        className="hover-content"
        side="bottom"
        align="center"
        sideOffset={10}
      >
        <h4 className="hover-content-title">{title}</h4>
        <div className="hover-content-body">{children}</div>
      </HoverCardContent>
    </HoverCard>
  );
};

export default function Section3() {
  return (
    <section className="section3">
      <h2 className="titulo_section3">Amenazas a los Ecosistemas</h2>

      <div className="hover-container">
        {/* Fila superior */}
        <div className="hover-row top-row">
          <HoverItem title="Deforestación" Icon={TreeDeciduous}>
            La tala indiscriminada reduce la cobertura forestal, destruye hábitats y altera el ciclo del agua.
          </HoverItem>

          <HoverItem title="Contaminación" Icon={Factory}>
            Residuos industriales, químicos y plásticos envenenan suelos y océanos, afectando flora y fauna.
          </HoverItem>

          <HoverItem title="Cambio Climático" Icon={Sun}>
            Las variaciones de temperatura y los fenómenos extremos provocan pérdida de especies y hábitats.
          </HoverItem>
        </div>

        {/* Fila inferior */}
        <div className="hover-row bottom-row">
          <HoverItem title="Acidificación de océanos" Icon={Droplet}>
            El exceso de CO₂ en el agua reduce el pH y afecta la vida marina, especialmente corales y moluscos.
          </HoverItem>

          <HoverItem title="Incendios forestales" Icon={Flame}>
            Los incendios cada vez más frecuentes destruyen bosques, fauna y contribuyen al cambio climático.
          </HoverItem>

          <HoverItem title="Pérdida de biodiversidad" Icon={Skull}>
            La extinción de especies altera ecosistemas completos y reduce su resiliencia ante cambios ambientales.
          </HoverItem>
        </div>
      </div>
    </section>
  );
}
