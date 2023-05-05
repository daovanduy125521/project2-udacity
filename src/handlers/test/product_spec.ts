import request from 'supertest';
import app from '../../server';

describe('Product routes', () => {
    it('creates a new product', async () => {
        const user = {
            name: 'duy',
            password: '123qweaA@',
        };
        const responseToken = await request(app)
            .post('/users/login')
            .send(user);
        const token = responseToken.body;
        const product = {
            name: 'apple',
            price: 10,
        };
        const response = await request(app)
            .post('/products')
            .send(product)
            .set('Authorization', `Bearer ${token}`);
        expect(response.status).toBe(200);
    });

    it('get list products', async () => {
        const response = await request(app).get('/products');
        expect(response.status).toBe(200);
    });

    it('get a find product', async () => {
        const response = await request(app).get('/products/1');
        expect(response.status).toBe(200);
    });
});