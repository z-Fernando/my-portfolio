import React from "react";
// import '../stylesheets/index.css';
import '../stylesheets/about.css';
import euJogando from '../img/me-cs.jpeg'
import Header from "../components/Header";
import FooterNav from "../components/FooterNav";

class About extends React.Component {
  render() {
    return (
      <section className="about-body">
        <Header />
        <main>
          <section>
            <h1>Por trás das telas</h1>
            <p>
            Nasci e cresci no Paraná! Fui criado num bairro vizinho a Curitiba, capital onde moro hoje. Tenho muito interesse em conhecer melhor o Brasil, mas também tenho treinado meu inglês para poder conhecer o mundo a fora também. Tenho 24 anos e apesar de jovem, conduzo meu trabalho com responsabilidade.
            </p>
            <p>
              Levo a vida com leveza ao lado da minha esposa e meus pets. Gosto de praticar esportes eletrônicos e também os tradicionais... ultimamente tenho curtido assistir desenhos e acompanhar as mudanças que o mundo digital está trazendo para essa nova era.  
            </p>
          </section>
          <section>
            <img src={ euJogando } alt="Autor do site em frente ao computador" />
          </section>
        </main>
        <FooterNav />
      </section>
    )
  }
};

export default About;