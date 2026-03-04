import { useState } from "react";
import { Menu, X } from "lucide-react";
import styles from "./NavBar.module.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = () => setIsOpen(false);

  return (
    <header>
      <nav>
        <a href="#">{`>felipe.dev_`}</a>
        <ul className={isOpen ? styles.menuOpen : styles.menu}>
          <li>
            <a href="#sobre" onClick={handleNavClick}>
              Sobre mim
            </a>
          </li>
          <li>
            <a href="#projetos" onClick={handleNavClick}>
              Projetos
            </a>
          </li>
          <li>
            <a href="#habilidades" onClick={handleNavClick}>
              Habilidades
            </a>
          </li>
          <li>
            <a href="#contato" onClick={handleNavClick}>
              Contato
            </a>
          </li>
        </ul>
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </nav>
    </header>
  );
}
