import React from "react";
import FooterNav from "../components/FooterNav";
import Header from "../components/Header";
import '../stylesheets/header.css'
import '../stylesheets/index.css'
import '../stylesheets/techs.css'
import reactIcon from '../img/react-icon.png'
import reduxIcon from '../img/redux-icon.png'
import figmaIcon from '../img/figma-icon.png'
import cssIcon from '../img/css-icon.png'
import htmlIcon from '../img/html-icon.png'

class Techs extends React.Component {
  render() {
    return (
      <section className="tech-body">
      <Header />
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
      </main>
      <FooterNav />
      </section>
    )
  }
}

export default Techs;