var sqlite = require('sqlite3').verbose()

let db = new sqlite.Database('./banco.db', sqlite.OPEN_READWRITE | sqlite.OPEN_CREATE)
db.run (`CREATE TABLE IF NOT EXISTS produtos(id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT UNIQUE,
    quantidade INTEGER,
    preco DOUBLE,
    codigo_barras TEXT UNIQUE)`)

module.exports = db 