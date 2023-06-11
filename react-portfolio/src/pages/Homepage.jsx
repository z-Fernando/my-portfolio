import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import developer from "../img/developing.png"

class Homepage extends React.Component {
  render() {
    return ( 
      <section className="home-body">
        <Header />
        <main>
          <section className="picture">
            <img 
              src={ developer } 
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