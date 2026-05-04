const mysql = require('mysql2');

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'supermarkett'
}).promise();

const Item = {
    all: async () => {
        const [res] = await db.query('SELECT * FROM products');
        return res;
    },
    find: async (id) => {
        const [res] = await db.query('SELECT * FROM products WHERE id = ?', [id]);
        return res[0];
    },
    create: async (p) => {
        await db.query('INSERT INTO products (name, category, price, stock, image) VALUES (?,?,?,?,?)', 
        [p.name, p.cat, p.price, p.stock, p.img]);
    },
    edit: async (id, p) => {
        await db.query('UPDATE products SET name=?, category=?, price=?, stock=?, image=? WHERE id=?', 
        [p.name, p.cat, p.price, p.stock, p.img, id]);
    },
    del: async (id) => {
        await db.query('DELETE FROM products WHERE id = ?', [id]);
    }
};

module.exports = Item;
