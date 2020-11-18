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
    }
}
    