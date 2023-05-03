 CREATE TABLE order_product_table (
    id SERIAL PRIMARY KEY, 
    quantity integer, 
    order_id bigint REFERENCES order_table(id), 
    product_id bigint REFERENCES products_table(id)
);