import { OrderProductStore } from "../models/order_product";
import express from 'express';

const store = new OrderProductStore();

const index = async (req: any, res: any) => {
    try {
        const orderProduct = await store.index();
        res.json({ orderProduct })
    } catch (error) {
        res.status(400);
        res.json(error);
    }

}

const find = async (req: any, res: any) => {
    try {
        const order = await store.find(req.params.id);
        res.json({ order });
    } catch (error) {
        res.status(400);
        res.json(error);
    }

};

const orderProduct_routers = (app: express.Application) => {
    app.get('/order-products', index);
    app.get('/order-products/:id', find);
}

export default orderProduct_routers;