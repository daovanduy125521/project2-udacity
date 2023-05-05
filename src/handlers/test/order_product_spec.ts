import request from 'supertest';
import app from '../../server';

describe('Order_products routes', () => {

    it('get list orders_products', async () => {
        const response = await request(app).get('/order-products');
        expect(response.status).toBe(200);
    });

    it('get a correct order_products', async () => {
        const response = await request(app).get('/order-products/1');
        expect(response.status).toBe(200);
    });
});
