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

});
