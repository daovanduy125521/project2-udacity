import client from '../database'
import bcrypt from 'bcrypt';

export type User = {
    id?: string | number;
    name: string;
    password: string;
};

const pepper = process.env.BCRYPT_PASSWORD;
const saltRounds = process.env.SALT_ROUNDS;
export class UsersStore {

    async index(): Promise<User[]> {
        try {
            const conn = await client.connect();
            const sql = "SELECT * FROM users_table";
            const result = await conn.query(sql);
            conn.release();
            console.log("result");
            return result.rows;
        } catch (error) {
            throw new Error(`Cannot get all users. Error: ${error}`);
        }

    }

    async find(id: string): Promise<User> {
        try {
            const sql = 'SELECT * FROM users_table WHERE id=($1);';
            const conn = await client.connect();
            const result = await conn.query(sql, [id]);
            conn.release();
            return result.rows[0];
        } catch (error) {
            throw new Error(`Could not find user ${id}. Error: ${error}`);
        }
    }

    async create(body: User): Promise<User> {
        try {
            const sql = 'INSERT INTO users_table (name, password) VALUES($1, $2) RETURNING *;';
            const conn = await client.connect();
            const hash = bcrypt.hashSync(
                body.password + pepper,
                parseInt(saltRounds as string)
            );
            const result = await conn.query(sql, [body.name, hash]);
            console.log(result, "result");
            const user = result.rows[0];
            conn.release();
            return user;
        } catch (error) {
            throw new Error(
                `Could not add new user ${body.name}. Error: ${error}`
            );
        }
    }

    async authenticate(body: User): Promise<User | null> {
        try {
            const conn = await client.connect();
            const sql = 'SELECT password FROM users_table WHERE name = ($1);';
            const result = await conn.query(sql, [body.name]);
            console.log(body.password + pepper);
            if (result.rows.length) {
                const user = result.rows[0];
                if (bcrypt.compareSync(body.password + pepper, user.password)) {
                    return user;
                }
            }
            return null;
        } catch (error) {
            throw new Error(
                `Could not login. Error: ${error}`
            );
        }

    }
}