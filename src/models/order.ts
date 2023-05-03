import client from '../database'

export type Order = {
    id?: string | number;
    name: string;
    user_id: string;
};
export class OrderStore {

    async index(): Promise<Order[]> {
        try {
            const conn = await client.connect();
            const sql = "SELECT * FROM order_table";
            const result = await conn.query(sql);
            conn.release();
            console.log("result", result.rows)
            return result.rows;
        } catch (error) {
            throw new Error(`Cannot get all orders. Error: ${error}`);
        }

    }

    async find(id: string): Promise<Order> {
        try {
            const sql = 'SELECT * FROM order_table WHERE id=($1);';
            const conn = await client.connect();
            const result = await conn.query(sql, [id]);
            conn.release();
            return result.rows[0];
        } catch (error) {
            throw new Error(`Could not find order ${id}. Error: ${error}`);
        }
    }

    async create(body: Order): Promise<Order> {
        try {
            const conn = await client.connect();
            const sql = 'INSERT INTO order_table (name, user_id) VALUES($1, $2) RETURNING *;';
            const result = await conn.query(sql, [body.name, body.user_id]);
            conn.release();
            return result.rows[0];
        } catch (err) {
            throw new Error(`Could not add new order ${body.name}. Error: ${err}`);
        }
    }
}