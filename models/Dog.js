import pool from '../utils/pool';

export default class Dog {
  id;
  name;
  age;

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.age = row.age;
  }

  static async create({ name, age }) {
    const { rows } = await pool.query(
      'INSERT INTO dogs (name, age) VALUES ($1, $2) RETURNING *',
      [name, age]
    );

    return new Dog(rows[0]);
  }

  static async find() {
    const { rows } = await pool.query(
      'SELECT * FROM dogs'
    );

    return rows.map(row => new Dog(row));
  }
}