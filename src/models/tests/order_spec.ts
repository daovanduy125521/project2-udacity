import { OrderStore } from '../order';
import { UsersStore } from '../user';
const userStore = new UsersStore();
describe('Order Model', () => {
    const store = new OrderStore();

    it('should have an index method', () => {
        expect(store.index).toBeDefined();
    });

    it('should have a find method', () => {
        expect(store.find).toBeDefined();
    });

    it('should have a create method', () => {
        expect(store.create).toBeDefined();
    });

    it('create method should add a order', async () => {
        await userStore.create({
            name: 'duy',
            password: '123qweaA@',
        });
        const result = await store.create({
            name: 'don1',
            user_id: '1',
        });
        expect(result).toEqual({
            id: 1,
            name: 'don1',
            user_id: '1',
        });
    });

    it('index method should return a list all of orders', async () => {
        const result = await store.index();
        expect(result[0]).toEqual({
            id: 1,
            name: 'don1',
            user_id: '1',
        });
    });

    it('show method should the orders of a user', async () => {
        const result = await store.find('1');
        expect(result).toEqual({
            id: 1,
            name: 'don1',
            user_id: '1',
        });
    });
});