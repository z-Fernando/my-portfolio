import React from "react";
import { Link } from "react-router-dom";

class FooterNav extends React.Component {
  render() {
    return (
      <footer>
        <Link to="/">
          <div>Início</div>
        </Link>
        <Link to="/contact">
          <div>Contato</div>
        </Link>
      </footer>
    )
  }
}

export default FooterNav;