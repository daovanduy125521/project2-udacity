CREATE TABLE order_table (
    id SERIAL PRIMARY KEY, 
    name VARCHAR(50), 
    user_id bigint REFERENCES users_table(id)
);