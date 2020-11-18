import React from "react";
import {Row} from 'react-materialize';
import logo from '../../images/logo.jpg';

const Header = () => (
  <Row>
    <nav className="color-nav" variant="light">
      <div className="nav-wrapper">
        <a href="/" className="brand-logo"><img src={logo} width="80" height="63" className="logonavbar" /></a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="/cadastrar">Cadastrar</a></li>
        <li><a href="/visualizar">Visualizar</a></li>
        </ul>
      </div>
    </nav>

  </Row>
);

export default Header;
