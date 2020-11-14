// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Row, Col, Card } from 'react-materialize';

const Home = () => (
  <Row>
    <Col m={3} s={12}>
      {/* <UserProfile /> */}
    </Col>
    <Col m={8} s={12}>
        <h5 className="subtitle">Bem Vindo</h5>
        <Card>
          <div>
            <p><b>Cadastro de produto</b></p>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laborevoluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
            <br/>
            <p><b>Visualizar produtos</b></p>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laborevoluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
          </div>
        </Card>
    </Col>
  </Row>
);

export default Home;