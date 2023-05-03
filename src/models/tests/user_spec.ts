import { UsersStore } from "../user";

const store = new UsersStore();

describe('User Model', () => {
    it('should have an index method', () => {
        expect(store.index).toBeDefined();
    });

    it('should have a show method', () => {
        expect(store.find).toBeDefined();
    });

    it('should have a create method', () => {
        expect(store.create).toBeDefined();
    });

    it('create method should add a user', async () => {
        const result = await store.create({
            name: 'duy',
            password: '123qweaA@',
        });
        expect(result.name).toEqual('duy');
    });

    it('index method should return a list all of users', async () => {
        const result = await store.index();
        expect(result[0].name).toEqual('duy');
    });

    it('show method should return find user', async () => {
        const result = await store.find('1');
        expect(result.name).toEqual('duy');
    });
});
