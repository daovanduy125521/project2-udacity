import client from '../database'

export type OrderProduct = {
    id?: string | number;
    quantity: number;
    order_id: string;
    product_id: string;
};
export class OrderProductStore {

    async index(): Promise<OrderProduct[]> {
        try {
            const conn = await client.connect();
            const sql = "SELECT * FROM order_product_table";
            const result = await conn.query(sql);
            conn.release();
            console.log("result");
            return result.rows;
        } catch (error) {
            throw new Error(`Cannot get all order_products. Error: ${error}`);
        }
    }

    async find(id: string): Promise<OrderProduct> {
        try {
            const sql = 'SELECT * FROM order_product_table WHERE id=($1);';
            const conn = await client.connect();
            const result = await conn.query(sql, [id]);
            conn.release();
            return result.rows[0];
        } catch (error) {
            throw new Error(`Could not find order ${id}. Error: ${error}`);
        }
    }
}