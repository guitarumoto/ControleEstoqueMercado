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
            <p>"Para cadastrar um novo produto, entre na aba 'Cadastrar', insira os dados e em seguida, clique no botão cadastrar. Um alerta será enviado de que o produto foi cadastrado corretamente'"</p>
            <br/>
            <p><b>Visualizar produtos</b></p>
            <p>"Para visualizar um produto, entre na aba 'Visualizar', a lista de produtos em estoque no sistema se encontra lá."</p>
            <br/>
            <p><b>Deletar produtos</b></p>
            <p>"Para deletar um produto, entre na aba 'Visualizar', escolha o produto a ser deletado e clique no botão deletar ao lado."</p>
          </div>
        </Card>
    </Col>
  </Row>
);

export default Home;