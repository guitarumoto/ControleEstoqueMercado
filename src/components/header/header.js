// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Navbar, NavItem, Row} from 'react-materialize';

const Header = () => (
  <Row>  
    <Navbar className="grey darken-2">
      <NavItem href='/'>Cadastrar</NavItem>
      <NavItem href='/contact'>Visualizar</NavItem>
    </Navbar>
  </Row>
);

export default Header;