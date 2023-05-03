import verifyAuthToken from "../middleware/verifyAuthToken";
import { Product, ProductsStore } from "../models/product";
import express from 'express';

const store = new ProductsStore();

const index = async (req: any, res: any) => {
    const products = await store.index();
    res.json({ products })
}

const find = async (req: any, res: any) => {
    const product = await store.find(req.params.id);
    res.json({ product });
};

const create = async (req: any, res: any) => {
    const product: Product = {
        name: req.body.name,
        price: req.body.price,
    };
    try {
        const newProduct = await store.create(product);
        res.json({ newProduct });
    } catch (err) {
        res.status(400);
        res.json(err);
    }
};

const product_routers = (app: express.Application) => {
    app.get('/products', index);
    app.get('/products/:id', find);
    app.post('/products', verifyAuthToken, create);
}

export default product_routers;