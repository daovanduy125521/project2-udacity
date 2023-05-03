# API Requirements
The company stakeholders want to create an online storefront to showcase their great product ideas. Users need to be able to browse an index of all products, see the specifics of a single product, and add products to an order that they can view in a cart page. You have been tasked with building the API that will support this application, and your coworker is building the frontend.

These are the notes from a meeting with the frontend developer that describe what endpoints the API needs to supply, as well as data shapes the frontend and backend have agreed meet the requirements of the application. 

## API Endpoints
#### Products
- Index 
- FIND
- Create [token required]

#### Users
- Index [token required]
- FIND [token required]
- Create N[token required]

#### Order
- Index 
- FIND 
- Create N[token required]

#### OrderProduct
- Index 
- FIND 

## Data Shapes
#### Product
-  id
- name
- price

#### User
- id
- name
- password

#### Order
- id
- name
- user_id

#### OrderProduct
- id of each product 
- id of each order
- id
- quantity

## Database schema
- Table: users_table (id SERIAL PRIMARY KEY, name VARCHAR(50),  password VARCHAR(250))
- Table: products_table ( id SERIAL PRIMARY KEY, name VARCHAR(50), price integer)
- Table: order_table (id SERIAL PRIMARY KEY, name VARCHAR(50), user_id bigint REFERENCES users_table(id))
- Table: order-product_table ( id SERIAL PRIMARY KEY, quantity integer, order_id bigint REFERENCES orders_table(id), product_id bigint REFERENCES products_table(id))