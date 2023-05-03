import { ProductsStore } from "../product";


const store = new ProductsStore();

describe('Product Model', () => {
    it('should have an index method', () => {
        expect(store.index).toBeDefined();
    });

    it('should have a find method', () => {
        expect(store.find).toBeDefined();
    });

    it('should have a create method', () => {
        expect(store.create).toBeDefined();
    });

    it('create method should add a product', async () => {
        const result = await store.create({
            name: 'apple',
            price: 10,
        });
        expect(result).toEqual({
            id: 1,
            name: 'apple',
            price: 10
        });
    });

    it('index method should return a list all of products', async () => {
        const result = await store.index();
        expect(result[0]).toEqual({
            id: 1,
            name: 'apple',
            price: 10
        });
    });

});
