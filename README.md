# Storefront Backend Project
## Summary

This repo contains a basic Node and Express app to get you started in constructing an API. To get started, clone this repo and run `npm i` in your terminal at the project root.

## Required Technologies
Node.js
Express
Typescript
Jasmine
PostgreSQL

## Steps to Completion

### 1. Plan to Meet Requirements

In this repo there is a REQUIREMENTS.md document which outlines what this API needs to supply for the frontend, as well as the agreed upon data shapes to be passed between front and backend. This is much like a document you might come across in real life when building or extending an API.
Your first task is to read the requirements and update the document with the following:

#### Determine the RESTful route for each endpoint listed. Add the RESTful route and HTTP verb to the document so that the frontend developer can begin to build their fetch requests.    
- A INDEX route: 'users' [GET]
- A FIND route: 'users/:id' [GET]
- A CREATE route: 'users' [POST]
- A AUTHENTICATE route: 'users/login' [POST]
- A INDEX route: 'products' [GET]
- A FIND route: 'products/:id' [GET]
- A CREATE route: 'products' [POST]
- A INDEX route: 'orders' [GET]
- A FIND route: 'orders/:id' [GET]
- A CREATE route: 'orders' [POST]
- A INDEX route: 'order-products' [GET]
- A FIND route: 'order-products/:id' [GET]

#### Design the Postgres database tables based off the data shape requirements. Add to the requirements document the database tables and columns being sure to mark foreign keys.   
- Table: users_table (id SERIAL PRIMARY KEY, name VARCHAR(50),  password VARCHAR(250))
- Table: products_table ( id SERIAL PRIMARY KEY, name VARCHAR(50), price integer)
- Table: order_table (id SERIAL PRIMARY KEY, name VARCHAR(50), user_id bigint REFERENCES users_table(id))
- Table: order-product_table ( id SERIAL PRIMARY KEY, quantity integer, order_id bigint REFERENCES orders_table(id), product_id bigint REFERENCES products_table(id))

**NOTE** It is important to remember that there might not be a one to one ratio between data shapes and database tables. Data shapes only outline the structure of objects being passed between frontend and API, the database may need multiple tables to store a single shape. 

### 2.  DB Creation and Migrations

Now that you have the structure of the databse outlined, it is time to create the database and migrations. Add the npm packages dotenv and db-migrate that we used in the course and setup your Postgres database. If you get stuck, you can always revisit the database lesson for a reminder. 

You must also ensure that any sensitive information is hashed with bcrypt. If any passwords are found in plain text in your application it will not pass.
#### DB Creation:
- file .env: 
    POSTGRES_HOST=127.0.0.1
    POSTGRES_DB=shopping
    POSTGRES_TEST_DB=shopping_test
    POSTGRES_USER=postgres
    POSTGRES_PASSWORD=duy120021
    ENV=dev
    BCRYPT_PASSWORD=duydv14
    SALT_ROUNDS=7
    JWT_TOKEN_SECRET=123qweaA@
#### Migrations
- db-migrate create users-table --sql-file
- db-migrate create products-table --sql-file
- db-migrate create orders-table --sql-file
- db-migrate create order-product-table --sql-file
- db-migrate up
### 3. Models

Create the models for each database table. The methods in each model should map to the endpoints in `REQUIREMENTS.md`. Remember that these models should all have test suites and mocks.

### 4. Express Handlers

Set up the Express handlers to route incoming requests to the correct model method. Make sure that the endpoints you create match up with the enpoints listed in `REQUIREMENTS.md`. Endpoints must have tests and be CORS enabled. 

### 5. JWTs

Add JWT functionality as shown in the course. Make sure that JWTs are required for the routes listed in `REQUIUREMENTS.md`.

### 6. QA and `README.md`

Before submitting, make sure that your project is complete with a `README.md`. Your `README.md` must include instructions for setting up and running your project including how you setup, run, and connect to your database. 

Before submitting your project, spin it up and test each endpoint. If each one responds with data that matches the data shapes from the `REQUIREMENTS.md`, it is ready for submission!
