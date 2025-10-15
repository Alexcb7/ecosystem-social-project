import '../App.css'
import { useState, useEffect } from "react";
import { Button } from "../components/ui/button";
import { Switch } from "../components/ui/switch";

export default function Header() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <header className="header">
      <video autoPlay loop muted>
        <source src="/videos/header.mp4" type="video/mp4" />
        Tu navegador no soporta la etiqueta de video.
      </video>

      <div className="header-content">
        <h1 className="header-title"> Protected the Ecosystem</h1>

        <nav className="nav-links">
          <a href="#problema">Problema</a>
          <a href="#causas">Causas</a>
          <a href="#soluciones">Soluciones</a>

          <Switch checked={darkMode} onCheckedChange={setDarkMode} />
          <Button className="cta-button">Únete al cambio</Button>
        </nav>
      </div>
    </header>
  );
}
