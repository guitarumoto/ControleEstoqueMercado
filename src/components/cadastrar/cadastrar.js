import React from "react";
import { Row, Col, Card, Input, Button } from 'react-materialize';

const cadastrar = () => (
<form action="/pagina-cadastro" method="post">
    <h5>Cadastro do produto</h5>
    <br />
    <div>
        <label for="nome">Nome:</label>
        <input type="text" id="nome" name="nome_produto" />
    </div>
    <br />
    <div>
        <label for="quantidade">Quantidade:</label>
        <input type="number" id="quantidade" name="quantidade" />
    </div>
    <br />
    <div>
        <label for="preco">Preço:</label>
        <input type="number" id="preco" name="preco" />    
    </div>
    <br />
    <div>
        <label for="codigo">Código de Barras:</label>
        <input type="text" id="codigo" name="codigo" />    
    </div>
    <br />
    <div class="button">
        <button type="submit">Cadastrar</button>
    </div>
</form>
);

export default cadastrar;