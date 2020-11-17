var sqlite3 = require('sqlite3').verbose()

const DBSOURCE = "db.sqlite"

let db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
      // Não foi possível abrir o banco de dados
      console.error(err.message)
      throw err
    }else{
        console.log('Connected to the SQLite database.')
        db.run(`CREATE TABLE produtos (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome text UNIQUE NOT NULL,
            quantidade INTEGER NOT NULL,
            preco DOUBLE NOT NULL,
            codigo_barras text UNIQUE NOT NULL,
            )`,
        (err) => {
            if (err) {
                // Tabela já criada
            }
        });  
    }
});


module.exports = db