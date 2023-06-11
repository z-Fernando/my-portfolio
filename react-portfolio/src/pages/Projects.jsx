import React from "react";
import FooterNav from '../components/FooterNav'
import Header from "../components/Header";
import githubIcon from "../img/github-icon.png";
import '../stylesheets/index.css'
import '../stylesheets/projects.css'

class Projects extends React.Component {
  render() {
    return (
      <section className="projects-body">
        <Header />
        <main>
          <section>
            <a
              target="_blank" 
              href="https://github.com/z-Fernando/starwars-planets-table" 
              rel="noreferrer"
            >
              <img src={ githubIcon } alt="Ícone do GitHub" />
            </a>
            <h4>Starwars Planets</h4>
            <a
              target="_blank" 
              href="http://starwars-planets-table.surge.sh/" 
              rel="noreferrer"
              className="project-button"
            >
              Abrir projeto
            </a>
          </section>
        </main>
        <FooterNav />
      </section>
    )
  }
}

export default Projects;