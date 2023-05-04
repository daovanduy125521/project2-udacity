import verifyAuthToken from "../middleware/verifyAuthToken";
import { Order, OrderStore } from "../models/order";
import express from 'express';

const store = new OrderStore();

const index = async (req: any, res: any) => {
    try {
        const orders = await store.index();
        res.json({ orders })
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

const create = async (req: any, res: any) => {
    const order: Order = {
        name: req.body.name,
        user_id: req.body.user_id,
    };
    try {
        const newOrder = await store.create(order);
        res.json({ newOrder });
    } catch (err) {
        res.status(400);
        res.json(err);
    }
};

const order_routers = (app: express.Application) => {
    app.get('/orders', verifyAuthToken, index);
    app.get('/orders/:id', verifyAuthToken, find);
    app.post('/orders', verifyAuthToken, create);
}

export default order_routers;