import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import ClipboardJS from 'clipboard';
import '../stylesheets/index.css'
import '../stylesheets/contact.css'
import linkedinIcon from '../img/linkedin-icon.png'
import githubIcon from '../img/github-icon.png'
import instaIcon from '../img/insta-icon.png'
import whatsIcon from '../img/whatsapp-icon.png'
import mailIcon from '../img/email-icon.png'

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMessage: false,
    };
  }

  componentDidMount() {    
    this.clipboard = new ClipboardJS('.copy-button', {
      text: () => 'prog.lffp@gmail.com',
    });

    this.clipboard.on('success', (e) => {
      this.setState({ showMessage: true });

      setTimeout(() => {
        this.setState({ showMessage: false });
      }, 2000);
    });
  }
  componentWillUnmount() {
    this.clipboard.destroy();
  }

  render() {
    const { showMessage } = this.state;
    return(
      <section className="contact-body">
        <Header />
        <main>
          <section>
            <a
              target="_blank" 
              href="https://www.linkedin.com/in/fernando-ferreira-dev/" 
              rel="noreferrer"
            >
              <h4>
                LINKEDIN
              </h4>
              <img src={ linkedinIcon } alt="Logo do Linkedin" />
            </a>
          </section>
          <section>
            <a
              target="_blank" 
              href="https://github.com/z-Fernando" 
              rel="noreferrer"
            >
              <h4>
                GITHUB
              </h4>
              <img src={ githubIcon } alt="Logo do GitHub" />
            </a>
          </section>
          <section>
            <a
              target="_blank" 
              href="https://www.instagram.com/fernando.lffp/" 
              rel="noreferrer"
            >
              <h4>
                INSTAGRAM
              </h4>
              <img src={ instaIcon } alt="Logo do Instagram" />
            </a>
          </section>
          <section>
            <a
              target="_blank" 
              href="https://api.whatsapp.com/send?phone=5541999386008" 
              rel="noreferrer"
            >
              <h4>
                WHATSAPP
              </h4>
              <img src={ whatsIcon } alt="Logo do Whatsapp" />
            </a>
          </section>
        </main>
        <section className="email-contact">
          <img src={ mailIcon } alt="Símbolo representando o email" />
          <button className="copy-button" title="Clique para copiar">
              prog.lffp@gmail.com
          </button>
          {showMessage && <span>E-mail copiado!</span>}
        </section>
        <footer>
          <Link to="/">
            <div>Início</div>
          </Link>
        </footer>
      </section>
    )
  }
}

export default Contact;