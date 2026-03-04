import { FolderCode, Download, Linkedin, Github, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero">
      <div>
        <div>
          <span>// Olá, eu sou</span>
          <h1>Felipe Augusto</h1>
          <span>Desenvolvedor Front-end</span>
          <p>
            Construindo experiências digitais modernas com React, Next.js e
            TypeScript.
          </p>
        </div>
        <div>
          <a href="#projetos">
            <FolderCode /> Ver Projetos
          </a>
          <a href="/cv-felipe-augusto.pdf" download>
            <Download /> Baixar CV
          </a>
        </div>
        <div>
          <a
            href="https://www.linkedin.com/in/felipesilva90"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin />
          </a>
          <a
            href="https://github.com/felipedev90"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <Github />
          </a>
          <a href="mailto:augusto.felipedev@gmail.com" aria-label="Email">
            <Mail />
          </a>
        </div>
        <div>
          <img src="/foto-felipe.webp" alt="Foto de perfil de Felipe Augusto" />
        </div>
      </div>
    </section>
  );
}
