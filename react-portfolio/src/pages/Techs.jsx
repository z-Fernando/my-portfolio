import React from "react";
import FooterNav from "../components/FooterNav";
import '../stylesheets/header.css'
import '../stylesheets/index.css'
import '../stylesheets/techs.css'
import reactIcon from '../img/react-icon.png'
import reduxIcon from '../img/redux-icon.png'
import figmaIcon from '../img/figma-icon.png'
import cssIcon from '../img/css-icon.png'
import htmlIcon from '../img/html-icon.png'
import gitIcon from '../img/git-icon.png'

class Techs extends React.Component {
  render() {
    return (
      <section className="tech-body">
      <header>
        <h1>Tecnologias</h1>
      </header>
      <main>
        <section>
          <h4>
            REACT
          </h4>
          <img src={ reactIcon } alt="Logo do React" />
        </section>
        <section>
          <h4>
            REDUX
          </h4>
          <img src={ reduxIcon } alt="Logo do Redux" />
        </section>
        <section>
          <h4>
            FIGMA
          </h4>
          <img src={ figmaIcon } alt="Logo do Figma" />
        </section>
        <section>
          <h4>
            CSS 3
          </h4>
          <img src={ cssIcon } alt="Logo do CSS 3" />
        </section>
        <section>
          <h4>
            HTML 5
          </h4>
          <img src={ htmlIcon } alt="Logo do HTML 5" />
        </section>
        <section>
          <h4>
            GIT
          </h4>
          <img src={ gitIcon } alt="Logo do Git" />
        </section>
      </main>
      <FooterNav />
      </section>
    )
  }
}

export default Techs;