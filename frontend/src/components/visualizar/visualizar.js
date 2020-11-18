import React, { useEffect, useState } from "react";
import { api } from '../../services/api';

const Visualizar = () => {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    const http = api();
    http.get('/visualizar').then(response => {
      setProdutos(response.data.Produtos);
    });
  }, []);

  return (
    <div className="container cool-btn-container">
        <div className="row">
          <div className="container">
            <fieldset>
              <legend>
                Listar Produtos
              </legend>
              <table className="table table-bordered table-dark">
                <tr>
                  <th>ID</th>
                  <th>Nome</th>
                  <th>Quantidade</th>
                  <th>Preço</th>
                  <th>Código</th>
                  <th>Deletar</th>
                  <th>Atualizar</th>
                </tr>
                {produtos.length !== 0 && produtos.map(r => (
            <tr>
            <td key={r.id}>{r.id} </td>
              <td key={r.id}>{r.nome} </td>
              <td key={r.id}>{r.quantidade} </td>
              <td key={r.id}>{r.preco} </td>
              <td key={r.id}>{r.codigo_barras} </td>
              <td key={r.id}> <form method='post'>
			<input  type='hidden' name='id' value={r.id}/>
			  <button className='btn btn-danger'><span className='glyphicon glyphicon-trash'></span> remover</button></form>
			  </td>
              <td key={r.id}> <form method='post'>
					   <input type='hidden' name='id' value={r.id}/>
				<button className='btn btn-success'><span className='glyphicon glyphicon-pencil'></span> atualizar</button></form>
				</td>

            </tr>  
              
            ))}
              </table>
            </fieldset>
          </div>
        </div>
      </div>
  );
} 

export default Visualizar;