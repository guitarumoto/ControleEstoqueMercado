import React, {useState} from "react";
import { api } from '../../services/api';

const Cadastrar = () => {
    const [nome, setNome] = useState('');
    const [quantidade, setQuantidade] = useState('');
    const [preco, setPreco] = useState('');
    const [codigo, setCodigo] = useState('');
    
    const enviaFormulario = (e) => {
        e.preventDefault();

        const http = api();
        try{
            http.post('/cadastrar', {
                nome_produto: nome,
                quantidade,
                preco,
                codigo,
            });

            alert('Produto cadastrado com sucesso');
        }catch(err){
            console.log(err);
        }
       
    }
    return (
        <form onSubmit={enviaFormulario}>
        <h5>Cadastro do produto</h5>
        <br />
        <div>
            <label for="nome">Nome:</label>
            <input type="text" id="nome" name="nome_produto" onChange={(e) => setNome(e.target.value)}/>
        </div>
        <br />
        <div>
            <label for="quantidade">Quantidade:</label>
            <input type="number" id="quantidade" name="quantidade" onChange={(e) => setQuantidade(e.target.value)}/>
        </div>
        <br />
        <div>
            <label for="preco">Preço:</label>
            <input type="number" id="preco" name="preco" onChange={(e) => setPreco(e.target.value)} />    
        </div>
        <br />
        <div>
            <label for="codigo">Código de Barras:</label>
            <input type="text" id="codigo" name="codigo" onChange={(e) => setCodigo(e.target.value)} />    
        </div>
        <br />
        <div className="button">
        <button type="submit">Cadastrar</button>
        </div>
    </form>
    )
}

export default Cadastrar;