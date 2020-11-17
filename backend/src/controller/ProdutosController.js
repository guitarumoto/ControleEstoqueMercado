var db = require("../database/database")

module.exports ={
    index(req, res){
            var sql = "select * from produtos"
            var params = []
            const result = db.all(sql, params, (err, rows) => {
                if (err) {
                  res.status(400).json({"error":err.message});
                  return;
                }
            return rows;
        });
    },
    store(req, res){
        const {nome_produto, quantidade, preco, codigo } = req.body;
        var sql = `INSERT INTO produtos (nome, quantidade, preco, codigo_barras) VALUES (${nome_produto},${quantidade},${preco},${codigo})`
        var params = []
        const result = db.all(sql, params, (err, rows) => {
            if (err) {
              res.status(400).json({"error":err.message});
              return;
            }
            return rows;
        });
    }
}
