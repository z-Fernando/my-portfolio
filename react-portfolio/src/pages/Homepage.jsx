import React from "react";
// import '../stylesheets/homepage.css';
import '../stylesheets/index.css'
import { Link } from "react-router-dom";

class Homepage extends React.Component {
  render() {
    return ( 
      <section className="home-body">
        <header>
          <h1>Fernando Ferreira</h1>
        </header>
        <main>
          <section className="picture">
            <img 
              src="https://avatars.githubusercontent.com/u/112187309?v=4" 
              alt="Foto do criador do site" />
          </section>
          <section className="page-anchors">
            <Link to={'/about-me'}>
              <p>Sobre mim</p>
            </Link>
            <Link to={'/techs'}>
              <p>Tecnologias</p>
            </Link>
            <Link to={'/projects'}>
              <p>Projetos</p>
            </Link>
            <Link to={'/contact'}>
              <p>Contato</p>
            </Link>
          </section>  
        </main>
       
        <footer>
          <p>Boas vindas ao meu site!</p>
        </footer>
      </section>
    )
  }
};

export default Homepage;