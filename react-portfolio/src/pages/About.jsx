import React from "react";
// import '../stylesheets/index.css';
import '../stylesheets/about.css';
import euJogando from '../img/me-cs.jpeg'
import Header from "../components/Header";
import { Link } from "react-router-dom";

class About extends React.Component {
  render() {
    return (
      <section className="about-body">
        <Header />
        <main>
          <section>
            <img src={ euJogando } alt="Autor do site em frente ao computador" />
          </section>
          <section>
            <h1>Um pouco sobre a minha pessoa...</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </section>
          <section>
            <h1>Um pouco sobre a minha pessoa...</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </section>
          <section>
            <img src={ euJogando } alt="Autor do site em frente ao computador" />
          </section>
        </main>
        <footer>
          <Link to="/">
            <div>Início</div>
          </Link>
          <Link to="/contact">
            <div>Contato</div>
          </Link>
        </footer>
      </section>
    )
  }
};

export default About;