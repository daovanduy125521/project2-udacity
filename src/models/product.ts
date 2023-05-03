import client from '../database'

export type Product = {
    id?: string | number;
    name: string;
    price: number;
};

export class ProductsStore {

    async index(): Promise<Product[]> {
        try {
            const conn = await client.connect();
            const sql = "SELECT * FROM products_table";
            const result = await conn.query(sql);
            conn.release();
            console.log("result");
            return result.rows;
        } catch (error) {
            throw new Error(`Cannot get all products. Error: ${error}`);
        }
    }

    async find(id: string): Promise<Product[]> {
        try {
            const sql = 'SELECT * FROM products_table WHERE id=($1);';
            const conn = await client.connect();
            const result = await conn.query(sql, [id]);
            conn.release();
            return result.rows[0];
        } catch (error) {
            throw new Error(`Could not find product ${id}. Error: ${error}`);
        }
    }

    async create(body: Product): Promise<Product> {
        try {
            const conn = await client.connect();
            const sql = 'INSERT INTO products_table (name, price) VALUES($1, $2) RETURNING *;';
            const result = await conn.query(sql, [body.name, body.price]);
            conn.release();
            return result.rows[0];
        } catch (err) {
            throw new Error(`Could not add new product ${body.name}. Error: ${err}`);
        }
    }
}