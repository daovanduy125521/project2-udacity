import { OrderStore } from '../order';
import { OrderProductStore } from '../order_product';
import { ProductsStore } from '../product';
import { UsersStore } from '../user';

const store = new OrderProductStore();
const usersStore = new UsersStore();
const productsStore = new ProductsStore();
const orderStore = new OrderStore();

describe('OrderProduct Model', () => {
    it('should have an index method', () => {
        expect(store.index).toBeDefined();
    });

    it('should have a show method', () => {
        expect(store.find).toBeDefined();
    });

    it('index method should return a list of order_products', async () => {
        const result = await store.index();
        expect(result).not.toBeNull();
    });

    it('show method should return the correct product', async () => {
        const result = await store.find('1');
        expect(result).not.toBeNull();
    });
});
