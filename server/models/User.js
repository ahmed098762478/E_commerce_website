const pool = require('../config/db');

class User {
  static async findAll() {
    const [rows] = await pool.execute('SELECT * FROM users');
    return rows;
  }

  static async findById(id) {
    const [rows] = await pool.execute('SELECT * FROM users WHERE id = ?', [id]);
    return rows[0];
  }

  static async create(userData) {
    const { name, email, password } = userData;
    const [result] = await pool.execute('INSERT INTO users (name, email, password) VALUES (?, ?, ?)', [name, email, password]);
    return result.insertId;
  }
}

module.exports = User;