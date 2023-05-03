import { User, UsersStore } from "../models/user";
import express from 'express';
import jwt from 'jsonwebtoken';
import verifyAuthToken from "../middleware/verifyAuthToken";

const store = new UsersStore();

const index = async (req: any, res: any) => {
    const users = await store.index();
    res.json({ users })
}

const find = async (req: any, res: any) => {
    const user = await store.find(req.params.id);
    res.json({ user });
};

const create = async (req: any, res: any) => {
    const user: User = {
        name: req.body.name,
        password: req.body.password,
    };
    try {
        const newUser = await store.create(user);
        var token = jwt.sign({ user: newUser }, process.env.JWT_TOKEN_SECRET as string);
        console.log("token", token);
        res.json(token);
    } catch (err) {
        res.status(400);
        res.json(err);
    }
};

const authenticate = async (req: any, res: any) => {
    const user: User = {
        name: req.body.name,
        password: req.body.password,
    };
    try {
        const userAuthen = await store.authenticate(user);
        console.log("user", userAuthen);
        if (userAuthen) {
            var token = jwt.sign({ user: userAuthen }, process.env.JWT_TOKEN_SECRET as string);
            res.json(token);
        } else {
            res.status(400);
            res.json({ error: 'User name or password is incorrect.' })
        }

    } catch (error) {
        res.status(400);
        res.json({ error });
    }
};
const users_routers = (app: express.Application) => {
    app.get('/users', verifyAuthToken, index);
    app.get('/users/:id', verifyAuthToken, find);
    app.post('/users', create);
    app.post('/users/login', authenticate);
}

export default users_routers;