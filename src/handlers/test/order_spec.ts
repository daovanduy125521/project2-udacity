import request from 'supertest';
import app from '../../server';

describe('Orders routes', () => {
    it('creates a new order', async () => {
        const user = {
            name: 'duy',
            password: '123qweaA@',
        };
        await request(app).post('/users').send(user);
        const order = {
            name: 'don 1',
            user_id: '1',
        };
        const response = await request(app).post('/orders').send(order);
        expect(response.status).toBe(200);
    });

    it('get list orders', async () => {
        const response = await request(app).get('/orders');
        expect(response.status).toBe(200);
    });

    it('get a correct order', async () => {
        const response = await request(app).get('/orders/1');
        expect(response.status).toBe(200);
    });
});
