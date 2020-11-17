import React from "react";
import Home from "./components/home/home";
import Cadastrar from "./components/cadastrar/cadastrar"
import { Container } from 'react-materialize';
import {Switch, Route} from 'react-router-dom'

const Main = () => (
  <main>
    <Container>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/cadastrar" component={Cadastrar}/>
      </Switch>
    </Container>
  </main>  
);

export default Main;