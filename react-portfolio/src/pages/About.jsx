import React from "react";
// import '../stylesheets/index.css';
import '../stylesheets/about.css';
import euJogando from '../img/me-cs.jpeg'
import Header from "../components/Header";
// import { Link } from "react-router-dom";

class About extends React.Component {
  render() {
    return (
      <section className="about-body">
        <Header />
        <main>
          <section>
            <img src={ euJogando } alt="Autor do site em frente ao computador" />
            <h1>Um pouco sobre a minha pessoa...</h1>
          </section>
          <section>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </section>
        </main>
      </section>
    )
  }
};

export default About;