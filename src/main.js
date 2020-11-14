// Importando o React
import React from "react";
// Importando o component Home
import Home from "./components/home/home";
// Importando os components necessários da lib react-materialize
import { Container } from 'react-materialize';

const Main = () => (
  <main>
    <Container>
      <Home />
    </Container>
  </main>  
);

export default Main;