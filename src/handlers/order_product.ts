import { OrderProductStore } from "../models/order_product";
import express from 'express';

const store = new OrderProductStore();

const index = async (req: any, res: any) => {
    const orderProduct = await store.index();
    res.json({ orderProduct })
}

const find = async (req: any, res: any) => {
    const order = await store.find(req.params.id);
    res.json({ order });
};

const orderProduct_routers = (app: express.Application) => {
    app.get('/order-products', index);
    app.get('/order-products/:id', find);
}

export default orderProduct_routers;