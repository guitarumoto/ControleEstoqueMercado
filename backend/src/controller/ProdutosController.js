var db = require("../database/database")

module.exports ={
    index(req, res){
            let query = "SELECT * FROM produtos"
            var params = []
            db.all(query, params , (err, rows) => {
                if(err){
                    console.log(err)
                    return;
                }else{
                    let result = rows
                    res.json({
                        "Produtos" : result
                    })
                }
            })
    },
    store(req, res){
        const {nome_produto, quantidade, preco, codigo } = req.body;
        let insertdata = db.prepare(`INSERT INTO produtos VALUES(NULL, ?,?,?,?)`)
        insertdata.run(nome_produto, quantidade, preco, codigo)
    },
    update(req, res){
        const {nome_produto, quantidade, preco, id} = req.body;
        let query = `UPDATE produtos SET nome = ${nome}, preco = ${preco}, quantidade = ${quantidade} WHERE id = ${req.params}`;
        var params = []
            db.all(query, params , (err, rows) => {
                if(err){
                    console.log(err)
                    return;
                }else{
                    let result = rows
                    res.json({
                        "Produto" : result
                    });
                }
            })
    },
    delete(req, res){
        let query = `DELETE FROM produtos WHERE id = ${req.params.id}`;
        var params = []
            db.all(query, params , (err, rows) => {
                if(err){
                    console.log(err)
                    return;
                }else{
                    let result = rows
                    res.json({
                        "Mensagem" : "Produto excluído"
                    });
                }
            })
    }
}
    