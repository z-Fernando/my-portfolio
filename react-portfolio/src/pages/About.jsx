import React from "react";
import '../stylesheets/index.css';
import '../stylesheets/about.css';
import euJogando from '../img/me-cs.jpeg'
// import { Link } from "react-router-dom";

class About extends React.Component {
  render() {
    return <section className="about-body">
      <main>
        <img src={ euJogando } alt="Autor do site em frente ao computador" />
      <h1>Um pouco sobre a minha pessoa...</h1>

      </main>
    </section>
  }
};

export default About;