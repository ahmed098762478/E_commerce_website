const pool = require('../config/db');

class Product {
  static async findAll() {
    const [rows] = await pool.execute('SELECT * FROM products');
    return rows;
  }

  static async findById(id) {
    const [rows] = await pool.execute('SELECT * FROM products WHERE id = ?', [id]);
    return rows[0];
  }

  static async create(productData) {
    const { name, price, description } = productData;
    const [result] = await pool.execute('INSERT INTO products (name, price, description) VALUES (?, ?, ?)', [name, price, description]);
    return result.insertId;
  }
}

module.exports = Product;